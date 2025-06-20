import React, { useState, useEffect } from "react";
import { MessageSquare, Send } from "lucide-react";

const Chat = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState(() =>
    JSON.parse(localStorage.getItem("chatMessages")) || [
      { sender: "bot", text: "Hi! I'm here to help you." },
    ]
  );
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = newMessage;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setNewMessage("");
    setLoading(true);

    try {
        const response = await fetch(
            "https://phishing-url-detection-api-with-enhanced.onrender.com/chat",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ message: userMessage }),
            }
          );
          
          if (!response.ok) throw new Error("Bot response failed");
          
          const data = await response.json();
          console.log("API says:", data);  // 👈 Use this to inspect
          
          const botMessage = data?.response || "I'm not sure how to respond."; // 👈 Adjust key name here
          

      setMessages((prev) => [...prev, { sender: "bot", text: botMessage }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button with Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <div className="relative inline-block">
          <button
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
            onClick={() => setChatOpen(!chatOpen)}
            aria-label="Open chat"
          >
            <MessageSquare />
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
            Chat with us
          </div>
        </div>
      </div>

      {/* Chat Box */}
      {chatOpen && (
        <div className="fixed bottom-20 right-6 bg-white rounded-lg shadow-lg w-80 z-50 flex flex-col border border-gray-200">
          <div className="p-3 font-semibold bg-blue-600 text-white rounded-t-lg">
            Chat Support
          </div>
          <div className="p-3 space-y-2 overflow-y-auto max-h-60 bg-blue-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-200 text-right ml-auto"
                    : "bg-white text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="p-2 bg-white text-left text-sm rounded-lg animate-pulse">
                Bot is typing...
              </div>
            )}
          </div>
          <div className="p-2 flex items-center gap-2 border-t">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              className="flex-1 px-3 py-1 border rounded-full focus:outline-none text-sm"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="text-blue-600">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
