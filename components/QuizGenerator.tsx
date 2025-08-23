"use client";

import { useState } from "react";

interface MCQQuestion {
  id: string;
  type: "mcq";
  question: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
}

interface TrueFalseQuestion {
  id: string;
  type: "true_false";
  question: string;
  correct: boolean;
  explanation?: string;
}

type Question = MCQQuestion | TrueFalseQuestion;

export default function Quiz() {
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState<"topic" | "source">("topic");
  const [source, setSource] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "medium"
  );
  const [quizType, setQuizType] = useState<"mcq" | "true_false" | "mix">("mix");
  const [includeExplanations, setIncludeExplanations] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(true);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadQuiz() {
    setLoading(true);
    setQuestions([]);

    const res = await fetch("/api/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode,
        topic,
        source,
        numQuestions,
        difficulty,
        quizType,
        includeExplanations,
        shuffleOptions,
      }),
    });

    const data = await res.json();
    setQuestions(data.questions || []);
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "1rem" }}>
      <h2>Custom Quiz Generator</h2>

      {/* Mode */}
      <label>
        Mode:
        <select value={mode} onChange={(e) => setMode(e.target.value as "topic" | "source")}>
          <option value="topic">Topic</option>
          <option value="source">Source Text</option>
        </select>
      </label>

      {/* Topic or Source */}
      {mode === "topic" ? (
        <label style={{ display: "block", marginTop: "0.5rem" }}>
          Topic:
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Basics of Photosynthesis"
            style={{ width: "100%" }}
          />
        </label>
      ) : (
        <label style={{ display: "block", marginTop: "0.5rem" }}>
          Source Text:
          <textarea
            value={source}
            onChange={(e) => setSource(e.target.value)}
            style={{ width: "100%", height: "100px" }}
          />
        </label>
      )}

      {/* Number of Questions */}
      <label style={{ display: "block", marginTop: "0.5rem" }}>
        Number of Questions:
        <input
          type="number"
          min={1}
          max={20}
          value={numQuestions}
          onChange={(e) => setNumQuestions(Number(e.target.value))}
        />
      </label>

      {/* Difficulty */}
      <label style={{ display: "block", marginTop: "0.5rem" }}>
        Difficulty:
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as "easy" | "medium" | "hard")}
        >
          <option value="easy" className="text-black">Easy</option>
          <option value="medium" className="text-black">Medium</option>
          <option value="hard" className="text-black">Hard</option>
        </select>
      </label>

      {/* Quiz Type */}
      <label style={{ display: "block", marginTop: "0.5rem" }}>
        Quiz Type:
        <select
          value={quizType}
          onChange={(e) => setQuizType(e.target.value as "mcq" | "true_false" | "mix")}
        >
          <option value="mcq" className="text-black">MCQ Only</option>
          <option value="true_false" className="text-black">True/False Only</option>
          <option value="mix" className="text-black">Mix</option>
        </select>
      </label>

      {/* Include Explanations */}
      <label style={{ display: "block", marginTop: "0.5rem" }}>
        <input
          type="checkbox"
          checked={includeExplanations}
          onChange={(e) => setIncludeExplanations(e.target.checked)}
        />{" "}
        Include Explanations
      </label>

      {/* Shuffle Options */}
      <label style={{ display: "block", marginTop: "0.5rem" }}>
        <input
          type="checkbox"
          checked={shuffleOptions}
          onChange={(e) => setShuffleOptions(e.target.checked)}
        />{" "}
        Shuffle MCQ Options
      </label>

      {/* Load Button */}
      <button
        onClick={loadQuiz}
        disabled={loading}
        className="mt-4 px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

      {/* Quiz Output */}
      <div style={{ marginTop: "2rem" }}>
        {questions.map((q) => (
          <div
            key={q.id}
            style={{
              marginBottom: "1rem",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <p>
              <strong>{q.question}</strong>
            </p>

            {q.type === "mcq" &&
              q.options.map((opt, i) => (
                <label key={i} style={{ display: "block" }}>
                  <input type="checkbox" /> {opt}
                </label>
              ))}

            {q.type === "true_false" && (
              <>
                <label style={{ display: "block" }}>
                  <input type="radio" name={q.id} /> True
                </label>
                <label style={{ display: "block" }}>
                  <input type="radio" name={q.id} /> False
                </label>
              </>
            )}

            {q.explanation && includeExplanations && (
              <p style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
                💡 {q.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
