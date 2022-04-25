import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChatBox } from "../ChatBox";
import { UserBox } from "../UserBox";
import { UserModelWindow } from "../UserModelWindow";
import styles from "./appStart.module.css";
export const AppStarter = () => {
  const modelActive = useSelector((state) => state.userData.modelActive);

  const [mediaDisplay,setMediaDisplay] = useState({user:{},chatBox:{}})

  useEffect(() => {
    if(window.innerWidth < "700px"){
      setMediaDisplay({user:{display:"block"},chatBox:{display:"none"}})
    }else{
      setMediaDisplay({user:{},chatBox:{}})
    }
  }, [])
  
  return (
    <div className={styles.mainContainer}>
      {modelActive ? (
        <UserModelWindow />
      ) : (
        <>
          <UserBox mediaDisplay={mediaDisplay} setMediaisplay={setMediaDisplay} />
          <ChatBox mediaDisplay={mediaDisplay} setMediaDisplay={setMediaDisplay} />
        </>
      )}
    </div>
  );
};
