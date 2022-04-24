import "./App.css";
import { LandingPage } from "./components/AppStarter/LandingPage";
import { Route, Routes } from "react-router-dom";
import { AppStarter } from "./components/AppStarter";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state)=>state.userData.isLogin)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={isLogin ? "chat/:userName" : "/"} element={<AppStarter />} />
        <Route path="*" element={<h1 style={{color:"yellow",width:"fitContent",margin:"auto"}} >You are Log Out or may be not signup so... signup/LogIn First</h1>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
