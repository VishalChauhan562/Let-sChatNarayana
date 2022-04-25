import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userActions } from '../../appState/userDataSlice'
import styles from './appStart.module.css'

// function to add new user to the initial state--> addUser
// function to check if user exist--> UserExist
// action that can contain these functions is---->userActions
export const LandingPage = () => {
  
  const [userInput, setUserInput] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {isLogin} =  useSelector((state)=>(state.userData))

  const loginHandler = ()=>{
   dispatch(userActions.userExist(userInput))
  }

  useEffect(()=>{

    if(isLogin){
      dispatch(userActions.updateUserContent(userInput))
      navigate("/chat")
    }else{
      navigate("/")
    }
  
  },[isLogin])

  const onChangeHandler =(e)=>{
    setUserInput(e.target.value)
  }

  
  return (
    <div className={styles.landingPage} >
      <div className={styles.loginBox}>
        <h2>Let's Chat</h2>
        <input type="text" value={userInput} onChange={onChangeHandler} placeholder='Enter the registered user name' />
        <button onClick={loginHandler} >LogIn</button>
      </div>
    </div>
  )
}
