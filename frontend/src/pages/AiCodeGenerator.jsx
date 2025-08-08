import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const AiCodeGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState(""); // Typing effect state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000"
      : "https://sanchitverse.onrender.com";

  const generateCode = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");
    setDisplayedResponse("");
    setError("");

    try {
      const res = await axios.post(`${API_BASE}/api/generate-code`, { prompt });

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

  // Typing effect logic
  useEffect(() => {
    if (!response) return;

    let i = 0;
    setDisplayedResponse("");
    const interval = setInterval(() => {
      setDisplayedResponse((prev) => prev + response.charAt(i));
      i++;
      if (i >= response.length) clearInterval(interval);
    }, 10); // speed in ms per character

    return () => clearInterval(interval);
  }, [response]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        💻 AI Code Generator
      </motion.h1>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6"
      >
        {/* Input */}
        <textarea
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 resize-none"
          rows="4"
          placeholder="Describe the code you want to generate..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={generateCode}
          disabled={loading}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
        >
          {loading ? "Generating..." : "Generate Code"}
          {!loading && <FiSend />}
        </button>

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-500 font-medium text-center"
          >
            {error}
          </motion.div>
        )}

        {/* Response with typing animation */}
        {displayedResponse && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto text-sm font-mono whitespace-pre-wrap"
          >
            {displayedResponse}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default AiCodeGenerator;
