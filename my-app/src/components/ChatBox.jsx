import React from "react";

export const ChatBox = () => {
  return (
    <div className="chatBoxContainer">
      <div className="chatBoxHeader">
        <span>Chat Messages</span>
      </div>
      <div className="messageScreen"></div>
      <div className="messageInput"></div>
    </div>
  );
};
