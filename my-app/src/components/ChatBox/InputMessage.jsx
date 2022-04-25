import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userActions } from "../../appState/userDataSlice";
import styles from "./chatbox.module.css";

export const InputMessage = () => {

  const [message,setMessage] = useState("")
  const dispatch = useDispatch()

  const onChangeHandler = (e)=>{
    setMessage(e.target.value)
  }

  const sendMessageHandler = ()=>{
    dispatch(userActions.sendMessage(message))
    setMessage("")
  }

  return (
    <div className={styles.inputBlock}>
      <input type="text" value={message} placeholder="Type something..." onChange={onChangeHandler} />
      <button onClick={sendMessageHandler} >
        SEND <FaPaperPlane />{" "}
      </button>
    </div>
  );
};
