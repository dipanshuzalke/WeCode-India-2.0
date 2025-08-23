"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Flashcard {
  front: string;
  back: string;
}

export default function FlashcardSection() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(false);

  const extractPdfText = async (arrayBuffer: ArrayBuffer) => {
    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();

    const typedArray = new Uint8Array(arrayBuffer);
    const pdf = await pdfjsLib.getDocument(typedArray).promise;

    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      type TextItem = { str: string };
      fullText += (content.items as TextItem[]).map((item) => item.str).join(" ") + "\n";
    }
    return fullText;
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    setLoading(true);
    const arrayBuffer = await acceptedFiles[0].arrayBuffer();
    const text = await extractPdfText(arrayBuffer);

    const res = await fetch("/api/flashcards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setFlashcards(data.flashcards || []);
    setLoading(false);
  }, []); // Removed 'process' from dependencies

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
  });

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded p-8 text-center cursor-pointer transition ${
          isDragActive ? "bg-blue-50 border-blue-400" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop your PDF here…</p>
        ) : (
          <p>Drag & drop a PDF here, or click to select</p>
        )}
      </div>

      {loading && <p>Generating flashcards…</p>}

      {flashcards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashcards.map((card, idx) => (
            <div key={idx} className="border p-4 rounded shadow">
              <p className="font-bold">Q: {card.front}</p>
              <p className="mt-2 text-gray-700">A: {card.back}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}