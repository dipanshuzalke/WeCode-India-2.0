"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

type TextItem = { str: string };

export default function PdfSummarizerSection() {
  const [summary, setSummary] = useState("");
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
      fullText += (content.items as TextItem[]).map((item) => item.str).join(" ") + "\n";
    }
    return fullText;
  };

  const processPdf = async (arrayBuffer: ArrayBuffer) => {
    setLoading(true);
    const fullText = await extractPdfText(arrayBuffer);

    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: fullText }),
    });

    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      acceptedFiles[0].arrayBuffer().then(processPdf);
    }
  }, [processPdf]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
  });

  return (
    <div className="space-y-4">
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

      {loading && <p>Summarizing…</p>}

      {summary && (
        <div className="p-4 border rounded">
          <h2 className="font-bold mb-2">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}