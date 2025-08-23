import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function POST(req: Request) {
  const { text } = await req.json();
  const prompt = `Summarize the following PDF content:\n\n${text}`;

  const result = await model.generateContent(prompt);
  const summary = result.response.text();

  return NextResponse.json({ summary });
}
