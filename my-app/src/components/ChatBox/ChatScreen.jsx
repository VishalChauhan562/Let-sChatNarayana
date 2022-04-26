import React, { useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import styles from "./chatbox.module.css";
import {v4} from 'uuid'
import { useSelector } from "react-redux";


export const ChatScreen = () => {

  // state of chat of active contact (with whom user talking)
  // its an array which is maped in messageScreen for messages---> check line-27
  const {activeChat} = useSelector(state=>state.userData)

  // varibale to store an empty div which will refercence to the bottom of the chatScreen
  const scrollToDownRef = useRef()

  // Logic for scroll down on every new message
  useEffect(() => {
    scrollToDownRef.current?.scrollIntoView() 
  }, [activeChat])
  

  return (
    <>
      {" "}
      <div className={styles.messageScreen}>
        {(activeChat||[]).map((message) => {
          if (message.messageReciever) {
            return (
              <div key={v4()} className={styles.messageReciever}>
                <FaUserCircle
                  style={{ color: "midnightblue", fontSize: "40px" }}
                />{" "}
                <span>{message.messageReciever}</span>
              </div>
            );
          } else {
            return (
              <div key={v4()} className={styles.messageSender}>
                <FaUserCircle style={{ color: "red", fontSize: "40px" }} />{" "}
                <span>{message.messageSender}</span>
              </div>
            );
          }
        })}
        <div ref={scrollToDownRef} ></div>
      </div>
    </>
  );
};
