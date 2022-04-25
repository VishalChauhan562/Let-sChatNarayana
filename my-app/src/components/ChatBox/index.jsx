import React from "react";
import { InputMessage } from "./InputMessage";
import styles from "./chatbox.module.css";
import { ChatScreen } from "./ChatScreen";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../appState/userDataSlice";

export const ChatBox = ({activeChat}) => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = ()=>{
    dispatch(userActions.logOutUser()) ; 
    navigate("/")
  }

  return (
    <div className={styles.chatBoxContainer}>
      <div className={styles.chatBoxHeader}>
        <span >Chat Messages</span>
        <button onClick={logoutHandler}  >Log Out</button>
      </div>
      <ChatScreen activeChat={activeChat} />
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
