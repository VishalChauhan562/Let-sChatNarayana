import { useState } from "react";
import { useSelector } from "react-redux";
import { ChatBox } from "../ChatBox";
import { UserBox } from "../UserBox";
import { UserModelWindow } from "../UserModelWindow";
import styles from "./appStart.module.css";
export const AppStarter = () => {
  const modelActive = useSelector((state) => state.userData.modelActive);

  const [activeBlock,setActiveBlock] = useState(true)

  
  
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
