import { NextRequest, NextResponse } from "next/server";

const MODEL = "gemini-2.0-flash";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const prompt = `
Generate flashcards from the following text. Each flashcard should have a 'front' (question or term) and a 'back' (answer or explanation). Return JSON like:

{ "flashcards": [ { "front": "...", "back": "..." }, ... ] }

Text:
${text.slice(0, 12000)}
`;

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

    const data = await resp.json();
    const raw =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      data?.candidates?.[0]?.content?.parts?.[0]?.stringValue ??
      "";

    const cleaned = raw.replace(/json|/g, "").trim();
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    const json = cleaned.slice(start, end + 1);
    const parsed = JSON.parse(json);

    return NextResponse.json({ flashcards: parsed.flashcards || [] });
  } catch (e: unknown) {
    const message =
      typeof e === "object" && e !== null && "message" in e
        ? String((e as { message: unknown }).message)
        : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
