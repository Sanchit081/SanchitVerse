import React, { useState, useEffect } from "react";
import axios from "axios";

const AiCodeGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Typing animation effect
  useEffect(() => {
    if (!response) return;

    let index = 0;
    setDisplayedResponse("");
    const interval = setInterval(() => {
      setDisplayedResponse((prev) => prev + response.charAt(index));
      index++;
      if (index >= response.length) clearInterval(interval);
    }, 20); // speed of typing in ms

    return () => clearInterval(interval);
  }, [response]);

  const generateCode = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");
    setDisplayedResponse("");
    setError("");

    try {
      const res = await axios.post("/api/generate-code", { prompt });

      if (res.data.code) {
        setResponse(res.data.code);
      } else if (res.data.error) {
        setError(res.data.error);
      } else {
        setResponse("No code generated.");
      }
    } catch (err) {
      console.error(err);
      setError("Error generating code. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>💻 AI Code Generator</h1>
      <textarea
        rows="4"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          fontSize: "1rem",
        }}
        placeholder="Enter your coding request..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generateCode}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          borderRadius: "6px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
      )}

      {displayedResponse && !error && (
        <pre
          style={{
            background: "#1e1e1e",
            color: "#00ff9d",
            padding: "1rem",
            marginTop: "20px",
            overflowX: "auto",
            borderRadius: "8px",
            fontSize: "0.95rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {displayedResponse}
        </pre>
      )}
    </div>
  );
};

export default AiCodeGenerator;
