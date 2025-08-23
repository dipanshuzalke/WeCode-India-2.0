"use client";
import FlashcardSection from "@/components/FlashCardSection";
import PdfSummarizerSection from "@/components/pdfSummarization";
import QuizGeneratorSection from "@/components/QuizGenerator";
import { useState } from "react"; // Removed 'act'

type SectionKey = "summarizer" | "quiz" | "flashcards";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("summarizer");

  const tabBtn = (key: SectionKey, label: string) => (
    <button
      key={key}
      onClick={() => setActiveSection(key)}
      className={`px-4 py-2 rounded ${
        activeSection === key ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex gap-3 text-black">
        {tabBtn("summarizer", "PDF Summarizer")}
        {tabBtn("quiz", "Smart Quiz")}
        {tabBtn("flashcards", "Flashcards")}
        {/* {tabBtn("other", "Other Feature")} */}
      </div>

      {activeSection === "summarizer" && <PdfSummarizerSection />}
      {activeSection === "quiz" && <QuizGeneratorSection />}
      {activeSection === "flashcards" && <FlashcardSection />}
      {/* {activeSection === "other" && (
        <div className="p-4 border rounded">
          <h2 className="font-bold mb-2">Other Feature</h2>
          <p>Coming soon…</p>
        </div>
      )} */}
    </div>
  );
}