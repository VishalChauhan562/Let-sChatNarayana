import React from 'react';
import { FaUserCircle } from "react-icons/fa";

import styles from "./userbox.module.css";

export const UserBox= ({userContent}) => {
  return (
    <div className={styles.userBoxContainer}>
      <div className={styles.userHead}><span>Users</span></div>
      <div className={styles.userListContainer}>  
      <ul>
      <div>
      {userContent.contacts.map((contact)=>{
        return <li> <FaUserCircle style={{color:"midnightblue",fontSize:"40px"}} /> <span>{contact.contactName}</span>  </li>
      })}
      </div>
      </ul>
      </div>
    </div>
  )
}
