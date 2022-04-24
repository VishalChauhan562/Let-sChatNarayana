import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ChatBox } from '../ChatBox'
import { UserBox } from '../UserBox'
import styles from './appStart.module.css'
export const AppStarter = () => {
  const params = useParams()
  const {logedinUserContent} =  useSelector((state)=>state.userData)
  
  return (
    <div className={styles.mainContainer}>
       <UserBox userContent={logedinUserContent} />
       <ChatBox userContent={logedinUserContent} />
     </div>
  )
}
