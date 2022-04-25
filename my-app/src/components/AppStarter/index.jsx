import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ChatBox } from '../ChatBox'
import { UserBox } from '../UserBox'
import styles from './appStart.module.css'
export const AppStarter = () => {
  const {logedinUserContent} =  useSelector((state)=>state.userData)
  
  const [activeContact,setActiveContact] = useState("")
  const [activeChat,setActiveChat] = useState([])

  useEffect(() => {
    logedinUserContent.contacts.forEach((contact)=>{
      if(contact.contactUserName===activeContact){
        setActiveChat(contact.chatStream)
      }
    })
  }, [activeContact,activeChat])
  

  return (
    <div className={styles.mainContainer}>
       <UserBox activeContact={activeContact} setActiveContact={setActiveContact} userContent={logedinUserContent} />
       <ChatBox activeChat ={activeChat} setActiveChat={setActiveChat}   userContent={logedinUserContent} />
     </div>
  )
}
