import React from "react";
import "@/App.css";

const ChatBubble = ({
  message,
  sender = "user",
  timestamp,
  className = "",
  ...props
}) => {
  const baseClasses = "chat-bubble";
  const senderClasses = `chat-bubble-${sender}`;

  const classNames = [baseClasses, senderClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      <div className="chat-bubble-content">{message}</div>
      {timestamp && <div className="chat-bubble-timestamp">{timestamp}</div>}
    </div>
  );
};

export default ChatBubble;
