import { NextRequest, NextResponse } from "next/server";
import { shuffle } from "../../../lib/utils";

const MODEL = "gemini-2.0-flash";

type ParsedQuizResponse = {
  questions?: unknown[];
};

export async function POST(req: NextRequest) {
  try {
    const {
      mode,
      topic,
      source,
      numQuestions = 8,
      difficulty = "medium",
      quizType = "mix",
      includeExplanations = true,
      shuffleOptions = true,
    } = await req.json();

    const contentBasis =
      mode === "topic"
        ? `Topic:\n${topic?.trim() || ""}`
        : `Source text:\n${(source as string)?.slice(0, 12000) || ""}`;

    const schema = `
type Question =
  | { id: string; type: "mcq"; question: string; options: string[]; answerIndex: number; explanation?: string }
  | { id: string; type: "true_false"; question: string; correct: boolean; explanation?: string };

type QuizResponse = { questions: Question[] };
`;

    const guidelines = `
Generate ${numQuestions} ${
      quizType === "mix" ? "mixed MCQ and True/False" : quizType
    } questions at ${difficulty} difficulty.
- MCQ: 4 plausible options; exactly one correct; provide answerIndex (0-based).
- True/False: "correct" must be true or false.
- ${
      includeExplanations
        ? "Include concise explanations."
        : "Do not include explanations."
    }
- Avoid trick wording; be fair and unambiguous.
- Use the provided ${
      mode === "topic" ? "topic" : "source text"
    } ONLY. If insufficient, return {"questions": []}.
- IDs must be unique strings.
`;

    const prompt = [
      "You are a strict quiz generator.",
      guidelines,
      schema,
      "Output JSON only, no prose, no Markdown fences.",
      "",
      contentBasis,
    ].join("\n");

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
        }),
      }
    );

    if (!resp.ok) {
      const errText = await resp.text();
      return NextResponse.json({ error: errText }, { status: 500 });
    }

    const data = await resp.json();
    const raw =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      data?.candidates?.[0]?.content?.parts?.[0]?.stringValue ??
      "";

    function extractJson(s: string) {
      const fenced = s.replace(/```json|```/g, "").trim();
      const start = fenced.indexOf("{");
      const end = fenced.lastIndexOf("}");
      if (start >= 0 && end >= start) return fenced.slice(start, end + 1);
      return fenced;
    }

    const cleaned = extractJson(raw);
    let parsed: ParsedQuizResponse;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      const repaired = cleaned.replace(/,\s*([}\]])/g, "$1");
      parsed = JSON.parse(repaired);
    }

    let questions = Array.isArray(parsed?.questions) ? parsed.questions : [];

    // ✅ Shuffle MCQ options once here
    questions = questions
      .slice(0, numQuestions)
      .map((q: unknown, idx: number) => {
        function isMcq(
          obj: unknown
        ): obj is {
          id?: string;
          type: string;
          question?: string;
          options?: string[];
          answerIndex?: number;
          explanation?: string;
        } {
          return (
            typeof obj === "object" &&
            obj !== null &&
            (obj as { type?: string }).type === "mcq"
          );
        }
        function isTf(
          obj: unknown
        ): obj is {
          id?: string;
          type: string;
          question?: string;
          correct?: boolean;
          explanation?: string;
        } {
          return (
            typeof obj === "object" &&
            obj !== null &&
            (obj as { type?: string }).type === "true_false"
          );
        }

        const id =
          (q as { id?: string }).id ||
          `q_${idx}_${Math.random().toString(36).slice(2, 8)}`;

        if (isMcq(q)) {
          let options = Array.isArray(q.options) ? q.options.slice(0, 8) : [];
          let answerIndex =
            typeof q.answerIndex === "number" ? q.answerIndex : 0;

          if (shuffleOptions && options.length > 1) {
            const correct = options[answerIndex];
            options = shuffle(options);
            answerIndex = options.indexOf(correct);
          }

          return {
            id,
            type: "mcq",
            question: String(q.question || ""),
            options,
            answerIndex,
            explanation: q.explanation ? String(q.explanation) : undefined,
          };
        }

        if (isTf(q)) {
          return {
            id,
            type: "true_false",
            question: String(q.question || ""),
            correct: Boolean(q.correct),
            explanation: q.explanation ? String(q.explanation) : undefined,
          };
        }

        // fallback for unknown type
        return {
          id,
          type: "unknown",
          question: "",
          options: [],
          answerIndex: 0,
        };
      });

    return NextResponse.json({ questions });
  } catch (e: unknown) {
    const message =
      typeof e === "object" && e !== null && "message" in e
        ? String((e as { message: unknown }).message)
        : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
