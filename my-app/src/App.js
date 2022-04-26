import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { fetchAppData } from "./appState/userFetchMiddleware";
import { AppStarter } from "./components/AppStarter";


// Main component is  <AppStarter/> 
//which is further divided into childs <UserBox/> and <ChatBox/>
// Paradigm used---> Functional based components + Hooks only
// module.css is used to style all the components.

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(fetchAppData()) 
  },[dispatch])
  


  return (
    <div className="App">
     <AppStarter/>
    </div>
  );
}

export default App;


