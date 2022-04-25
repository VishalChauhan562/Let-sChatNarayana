import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import styles from "./chatbox.module.css";

export const InputMessage = () => {
  return (
    <div className={styles.inputBlock}>
      <input type="text" placeholder="Type something..." />
      <button>
        SEND <FaPaperPlane />{" "}
      </button>
    </div>
  );
};
