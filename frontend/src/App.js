import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Landing from "./Pages/landing";




function App() {
  return (
    <div className="App">
      <Route path="/l" component={Homepage} exact/>
      <Route path="/" component={Landing} />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
