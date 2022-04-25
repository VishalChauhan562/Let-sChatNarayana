import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import styles from "./userbox.module.css";
import {v4} from 'uuid'
import { userActions } from '../../appState/userDataSlice';
import { FaPlusCircle } from "react-icons/fa";

export const UserBox= () => {

  const dispatch = useDispatch()
  const {logedinUserContent} =  useSelector(state=>state.userData)



  return (
    <div className={styles.userBoxContainer}>
      <div className={styles.userHead}><span>Users</span><span onClick={()=>{dispatch(userActions.setModelActive())}} ><FaPlusCircle style={{fontSize:"30px",color:"midnightBlue", cursor:"pointer"}} /></span>  </div>
      <div className={styles.userListContainer}>  
      <ul>
      
      {(logedinUserContent.contacts || []).map((contact)=>{
        return <li key={v4()} onClick={()=>{
          dispatch(userActions.setActiveContact(contact.contactUserName))
        }} > <FaUserCircle style={{color:"midnightblue",fontSize:"40px"}} /> <span>{contact.contactName}</span>  </li>
      })}
      
      </ul>
      </div>
    </div>
  )
}
