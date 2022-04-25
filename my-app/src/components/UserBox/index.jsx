import React from 'react';
import { FaUserCircle } from "react-icons/fa";

import styles from "./userbox.module.css";
import {v4} from 'uuid'


export const UserBox= ({userContent,activeContact,setActiveContact}) => {


  console.log(userContent);
  const activeContactHandler = (contact)=>{
    setActiveContact(contact)
  }

  return (
    <div className={styles.userBoxContainer}>
      <div className={styles.userHead}><span>Users</span></div>
      <div className={styles.userListContainer}>  
      <ul>
      
      {(userContent.contacts || []).map((contact)=>{
        return <li key={v4()} onClick={()=>{activeContactHandler(contact.contactUserName || "")}} > <FaUserCircle style={{color:"midnightblue",fontSize:"40px"}} /> <span>{contact.contactName}</span>  </li>
      })}
      
      </ul>
      </div>
    </div>
  )
}
