import React from "react";
import { InputMessage } from "./InputMessage";
import styles from "./chatbox.module.css";
import { ChatScreen } from "./ChatScreen";



export const ChatBox = ({mediaDisplay,setMediaDispaly}) => {
  
  
  return (
    <div style={mediaDisplay.chatBox} className={styles.chatBoxContainer}>
      <div className={styles.chatBoxHeader}>
        <span >Chat Messages</span>
      </div>
      <ChatScreen/>
      <div className={styles.messageInput}>
        <div className={styles.inputTitle}>
          {" "}
          <span>New Message</span> <div></div>{" "}
        </div>
        <InputMessage />
      </div>
    </div>
  );
};
