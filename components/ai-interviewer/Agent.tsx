"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import { interviewer } from "@/constants";
import type { AgentProps } from "@/types";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

const Agent = ({
  userName,
  userId,
  interviewId,
  feedbackId,
  type,
  questions,
}: AgentProps) => {
  const router = useRouter();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>("");

  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
    };

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
    };

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => {
      console.log("speech start");
      setIsSpeaking(true);
    };

    const onSpeechEnd = () => {
      console.log("speech end");
      setIsSpeaking(false);
    };

    const onError = (error: Error) => {
      console.log("Error:", error);
    };

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  // Helper to extract interview details from messages
  function extractInterviewDetails(messages: { role: string; content: string }[]) {
    let type, role, level, techstack, amount, questions: string[] = [];

    for (let i = 0; i < messages.length; i++) {
      if (messages[i].role === "assistant" && messages[i].content.toLowerCase().includes("type of interview")) {
        type = messages[i + 1]?.content;
      }
      if (messages[i].role === "assistant" && messages[i].content.toLowerCase().includes("desired role")) {
        role = messages[i + 1]?.content;
      }
      if (messages[i].role === "assistant" && messages[i].content.toLowerCase().includes("experience level")) {
        level = messages[i + 1]?.content;
      }
      if (messages[i].role === "assistant" && messages[i].content.toLowerCase().includes("tech stack")) {
        techstack = messages[i + 1]?.content;
      }
      if (messages[i].role === "assistant" && messages[i].content.toLowerCase().includes("many questions")) {
        amount = parseInt(messages[i + 1]?.content, 10);
      }
      if (messages[i].role === "assistant" && messages[i].content.includes("Here are your questions:")) {
        const match = messages[i].content.match(/\[(.*?)\]/);
        if (match) {
          questions = JSON.parse(match[0]);
        }
      }
    }

    return { type, role, level, techstack, amount, questions };
  }

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    const handleGenerateFeedback = async (messages: SavedMessage[]) => {
      console.log("handleGenerateFeedback");

      const res = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "feedback",
          interviewId: interviewId!,
          userId: userId!,
          transcript: messages,
          feedbackId,
        }),
      });
      const data = await res.json();
      const id = data.feedback?.id;
      const success = data.success;

      if (success && id) {
        router.push(`/phases/interview-prep/generate-interview/${interviewId}/feedback`);
      } else {
        console.log("Error saving feedback");
        router.push("/phases/interview-prep");
      }
    };

    // --- New logic for AI-driven interview creation using /api/vapi/generate ---
    if (callStatus === CallStatus.FINISHED && type === "generate") {
      const { type: extractedType, role, level, techstack, amount } = extractInterviewDetails(messages);
      if (role && level && techstack && amount) {
        // Create the interview in the DB via /api/vapi/generate
        fetch("/api/vapi/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: extractedType,
            role,
            level,
            techstack,
            amount,
            userid: userId,
          }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              // Optionally redirect or show a success message
              router.push("/phases/interview-prep");
            }
          });
      }
    }

    if (callStatus === CallStatus.FINISHED) {
      if (type === "generate") {
        // router.push("/"); // Optionally remove this redirect
      } else {
        handleGenerateFeedback(messages);
      }
    }
  }, [messages, callStatus, feedbackId, interviewId, router, type, userId]);

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);

    if (type === "generate") {
      // 1. Start the AI process and get the generated questions
      const aiResponse = await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
        variableValues: {
          username: userName,
          userid: userId,
        },
      });

      // 2. Log the full AI response to determine the correct property for questions
      console.log("AI response:", aiResponse);
      // TODO: Update this extraction based on the actual structure of aiResponse
      const generatedQuestions: string[] = [];
      // Example: const generatedQuestions = aiResponse.text ? JSON.parse(aiResponse.text) : [];

      // 3. Create the interview in your DB
      const res = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "interview",
          role: "AI Generated", // Replace with actual role if available
          level: "AI Generated", // Replace with actual level if available
          techstack: [], // Replace with actual techstack if available
          questions: generatedQuestions,
          userId,
          finalized: true,
        }),
      });

      await res.json();
    } else {
      let formattedQuestions = "";
      if (questions) {
        formattedQuestions = questions
          .map((question) => `- ${question}`)
          .join("\n");
      }

      await vapi.start(interviewer, {
        variableValues: {
          questions: formattedQuestions,
        },
      });
    }
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  return (
    <>
      <div className="call-view">
        {/* AI Interviewer Card */}
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="profile-image"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        {/* User Profile Card */}
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="profile-image"
              width={539}
              height={539}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call" onClick={() => handleCall()}>
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect" onClick={() => handleDisconnect()}>
            End
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;