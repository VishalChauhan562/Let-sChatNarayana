import './App.css';
import { ChatBox } from './components/ChatBox';
import { UserBox } from './components/UserBox';

function App() {
  return (
    <div className="App">
     <div className="mainContainer">
       <UserBox/>
       <ChatBox/>
     </div>
    </div>
  );
}

export default App;
