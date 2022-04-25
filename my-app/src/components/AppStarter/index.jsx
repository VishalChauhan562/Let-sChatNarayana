import { useSelector } from "react-redux";
import { ChatBox } from "../ChatBox";
import { UserBox } from "../UserBox";
import { UserModelWindow } from "../UserModelWindow";
import styles from "./appStart.module.css";
export const AppStarter = () => {
  const modelActive = useSelector((state) => state.userData.modelActive);

  

  
  
  return (
    <div className={styles.mainContainer}>
      {modelActive ? (
        <UserModelWindow />
      ) : (
        <>
          <UserBox />
          <ChatBox />
        </>
      )}
    </div>
  );
};
