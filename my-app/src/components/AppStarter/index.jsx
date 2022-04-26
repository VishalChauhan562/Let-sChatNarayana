import { useState } from "react";
import { useSelector } from "react-redux";
import { ChatBox } from "../ChatBox";
import { UserBox } from "../UserBox";
import { UserModelWindow } from "../UserModelWindow";
import styles from "./appStart.module.css";
export const AppStarter = () => {
   
  // <UserModelWindow /> component is used to display number of users available to add
  // who are using the chat app.



   // state to display or hide model window of available users.  
  const modelActive = useSelector((state) => state.userData.modelActive);

  // state to apply media queries for viewPort width < 700
  // only this state is used by useState hook and passed to both the childs via props.
  const [activeBlock, setActiveBlock] = useState(true);  

  return (
    <div className={styles.mainContainer}>
      {modelActive ? (
        <UserModelWindow />
      ) : (
        <>
          <UserBox activeBlock={activeBlock} setActiveBlock={setActiveBlock} />
          <ChatBox activeBlock={activeBlock} setActiveBlock={setActiveBlock} />
        </>
      )}
    </div>
  );
};
