import { useState, useEffect } from "react";
import Messages from "./components/Messages";
import { ChatBot } from "./components/ChatbotInput";
import { Chatbot } from "supersimpledev";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
  );
  useEffect(() => {
    const responses = {
      hey: "hello",
      farewell: "goodbye",
    };
    Chatbot.addResponses(responses);
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="app-container">
      {/*ChatBot()*/}
      {/*by useing curly braces we can save any type of value inside a prop
              ,lifting state up : share state between components by passing them as props in a parent component,
              naming conventions is using the same name for component and prop and its value*/}

      <Messages messages={messages} />
      <ChatBot messages={messages} setMessages={setMessages} />
    </div>
  );
}
export default App;
