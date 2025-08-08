import React, { useState } from "react";
import axios from "axios";

const AiCodeGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateCode = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");
    setError("");

    try {
      // Call backend instead of Hugging Face directly
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
      <h1>💻 AI Code Generator</h1>
      <textarea
        rows="4"
        style={{ width: "100%", padding: "10px" }}
        placeholder="Enter your coding request..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generateCode}
        style={{ marginTop: "10px", padding: "10px 20px" }}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
      )}

      {response && !error && (
        <pre
          style={{
            background: "#f4f4f4",
            padding: "1rem",
            marginTop: "20px",
            overflowX: "auto",
          }}
        >
          {response}
        </pre>
      )}
    </div>
  );
};

export default AiCodeGenerator;
