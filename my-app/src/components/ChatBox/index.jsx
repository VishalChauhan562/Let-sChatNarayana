import React from "react";
import { InputMessageBlock } from "./InputMessage";
import styles from "./chatbox.module.css";
import { ChatScreen } from "./ChatScreen";
import { FaArrowLeft } from "react-icons/fa";



// Chat Box is divided as ChatBoxHeader <ChatScreen/> and <InputMessageBlock />
export const ChatBox = ({activeBlock,setActiveBlock}) => {
  
  // here activeBlock state is used to display back arrow icon (<FaArrowLeft/>) when chatBox is active 
  // for window width < 700px
  
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
        <InputMessageBlock />
      </div>
    </div>
  );
};
