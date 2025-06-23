"use client";

import { useSession } from "next-auth/react";
import { useChatSocket } from "@/hooks/useChatSocket";
import { useEffect, useState, useRef } from "react";
import { Globe } from "lucide-react";

type ChatMessage = {
  content: string;
  user: {
    name: string;
  };
};

export default function ChatPage() {
  const { data: session, status } = useSession();

  // Call hooks early, unconditionally
  const { messages: liveMessages, sendMessage } = useChatSocket({
    name: session?.user?.name ?? "",
    email: session?.user?.email ?? "",
    id: session?.user?.id ?? "",
  });

  const [text, setText] = useState("");
  const [initialMessages, setInitialMessages] = useState<ChatMessage[]>([]);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/chat")
      .then((res) => res.json())
      .then(setInitialMessages);
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [initialMessages, liveMessages]);

  if (status === "loading") return <p>Loading session...</p>;
  if (!session) return <p>Login to join chat</p>;

  const allMessages = [
    ...initialMessages,
    ...liveMessages.map((msg) => JSON.parse(msg)),
  ];

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text.trim());
      setText("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <span className="flex items-center gap-2">
        <Globe />
        <h2 className="text-2xl font-bold ">Global Chat</h2>
      </span>

      <div
        ref={chatBoxRef}
        className="h-[30rem] overflow-y-auto border rounded-lg p-4  shadow-sm"
      >
        {allMessages.map((msg, i) => (
          <div
            key={i}
            className="mb-3 flex flex-col gap-1 bg-neutral-900 px-3 py-1 w-fit min-w-24"
          >
            <strong className="text-xl">{msg.user.name}:</strong>{" "}
            <span className="font-light">{msg.content}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
