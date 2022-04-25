import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './modalWindow.module.css'
import {v4} from 'uuid'
import { userActions } from '../../appState/userDataSlice'


export const UserModelWindow = () => {
  const {users} = useSelector((state)=>state.userData)

  const dispatch = useDispatch()
  
  return (
    <div  className={styles.ModelContainer} onClick={()=>{
      dispatch(userActions.setModelActive())
    }}>
      <h3>Users</h3>
      <div className={styles.userScreen}>
        {users.map((contact)=>{
          return <h4 key={v4()} style={{cursor:"pointer"}} onClick={()=>{
            dispatch(userActions.addContact(contact))
            dispatch(userActions.setModelActive())
          }} >{contact.contactName}</h4>
        })}
      </div>
    </div>
  )
}
