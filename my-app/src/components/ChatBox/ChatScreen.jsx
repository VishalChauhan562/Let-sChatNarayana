import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styles from "./chatbox.module.css";
import {v4} from 'uuid'


export const ChatScreen = ({ activeChat }) => {
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
      </div>
    </>
  );
};
