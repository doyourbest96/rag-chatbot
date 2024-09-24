// src/components/Chatbot.tsx

import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState<{ user: string; bot: string }[]>(
    []
  );

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Simulate sending message to backend (replace with actual API call)
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponses((prev) => [...prev, { user: message, bot: data.response }]);
    setMessage("");
  };

  // Function to handle key events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage(); // Call sendMessage when Enter is pressed
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-semibold mb-2 shadow-md">Chatbot</h2>
      <div className="max-h-60 overflow-y-auto mb-4 space-y-2">
        {responses.map((r, index) => (
          <div key={index} className="space-y-2">
            <strong>You:</strong> {r.user}
            <br />
            <strong>Bot:</strong> {r.bot}
            <hr />
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown} // Add onKeyDown event handler
          placeholder="Type your message..."
          className="border rounded p-2 w-full"
        />
        <button
          onClick={sendMessage}
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
