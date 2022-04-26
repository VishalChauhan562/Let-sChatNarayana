import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userActions } from "../../appState/userDataSlice";
import styles from "./chatbox.module.css";

// function to dispatch action to add new message send by user to a particular contact
//  is---->   userActions.sendMessage(message)




// this block handeling the chat message input by the user 
export const InputMessageBlock = () => {

  // sate to handle the onChange event for input message box
  const [message,setMessage] = useState("")
  const dispatch = useDispatch()

  const onChangeHandler = (e)=>{
    setMessage(e.target.value)
  }

  const sendMessageHandler = ()=>{
    if(message!=="") dispatch(userActions.sendMessage(message))
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
