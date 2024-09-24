// src/App.tsx

import React from "react";
import Chatbot from "./components/Chatbot";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <h1>Welcome to My Chatbot App!</h1>
      <Chatbot />
    </div>
  );
};

export default App;
