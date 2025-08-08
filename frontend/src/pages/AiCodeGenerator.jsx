import React, { useState } from "react";
import axios from "axios";

const AiCodeGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCode = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(
        "https://api-inference.huggingface.co/models/codellama/CodeLlama-7b-Instruct-hf",
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
          },
        }
      );
      setResponse(res.data[0]?.generated_text || "No code generated.");
    } catch (error) {
      console.error(error);
      setResponse("Error generating code.");
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
      {response && (
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
