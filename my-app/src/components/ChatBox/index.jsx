import React from "react";
import { InputMessage } from "./InputMessage";
import styles from "./chatbox.module.css";
import { ChatScreen } from "./ChatScreen";
import { FaArrowLeft } from "react-icons/fa";


export const ChatBox = ({activeBlock,setActiveBlock}) => {
  
  
  return (
    <div className={`${styles.chatBoxContainer} ${activeBlock ? styles.hide : ""}`}>
      <div className={styles.chatBoxHeader}>
    
        <FaArrowLeft onClick={()=>{setActiveBlock((prev)=>!prev)}}  className={styles.iconHide} />
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
