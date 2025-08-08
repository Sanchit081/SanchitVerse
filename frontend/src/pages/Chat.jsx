// src/pages/Chat.jsx
import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const conversation = newMessages
        .map((msg) => `${msg.role === "user" ? "User" : "AI"}: ${msg.content}`)
        .join("\n");

      const response = await axios.post(
        "https://api-inference.huggingface.co/models/codellama/CodeLlama-7b-Instruct-hf",
        { inputs: conversation },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse =
        response.data[0]?.generated_text.split("AI:").pop().trim() ||
        "No reply";

      setMessages([...newMessages, { role: "ai", content: aiResponse }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "ai", content: "Error: " + err.message },
      ]);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CodeLlama Chat</h2>
      <div
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, i) => (
          <p key={i} style={{ color: msg.role === "user" ? "blue" : "green" }}>
            <b>{msg.role === "user" ? "You" : "AI"}:</b> {msg.content}
          </p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "Thinking..." : "Send"}
      </button>
    </div>
  );
};

export default Chat;
