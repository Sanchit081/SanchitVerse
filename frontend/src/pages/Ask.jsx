// src/pages/Ask.jsx
import React, { useState } from "react";
import axios from "axios";

const Ask = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/codellama/CodeLlama-7b-Instruct-hf",
        { inputs: question },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setAnswer(response.data[0]?.generated_text || "No answer found.");
    } catch (err) {
      setAnswer("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ask CodeLlama</h2>
      <textarea
        rows="4"
        placeholder="Ask a coding question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>
      {answer && (
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>{answer}</pre>
      )}
    </div>
  );
};

export default Ask;
