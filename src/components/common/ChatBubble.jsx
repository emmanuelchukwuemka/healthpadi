import React from "react";

const ChatBubble = ({
  message,
  sender = "user",
  timestamp,
  className = "",
  ...props
}) => {
  const baseClasses =
    "max-w-[80%] p-3 rounded-xl mb-3 relative word-wrap break-words";
  const senderClasses =
    sender === "user"
      ? "bg-primary text-white self-end ml-auto rounded-tr-none"
      : "bg-gray-100 text-gray-800 self-start mr-auto rounded-tl-none";

  const classNames = [baseClasses, senderClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      <div className="text-sm leading-relaxed">{message}</div>
      {timestamp && (
        <div
          className={`text-[10px] mt-1 text-right ${
            sender === "user" ? "text-white/70" : "text-gray-400"
          }`}
        >
          {timestamp}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
