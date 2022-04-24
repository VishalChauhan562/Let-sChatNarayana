import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import styles from "./chatbox.module.css";

export const ChatScreen = () => {
  return (
    <> <div className={styles.messageScreen}>
    <div className={styles.messageReciever}>
      <FaUserCircle style={{ color: "midnightblue", fontSize: "40px" }} />{" "}
      <span>Hello Vishal how are you</span>
    </div>
    <div className={styles.messageSender}>
      <FaUserCircle style={{ color: "red", fontSize: "40px" }} />{" "}
      <span>I am good</span>
    </div>
  </div></>
  )
}
