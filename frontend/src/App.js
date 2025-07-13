// import "./App.css";
// import Homepage from "./Pages/Homepage";
// import { Route } from "react-router-dom";
// import Chatpage from "./Pages/Chatpage";
// import Landing from "./Pages/landing";




// function App() {
//   return (
//     <div className="App">
//       <Route path="/homepage" component={Homepage} exact />
//       <Route path="/" component={Landing} />
//       <Route path="/chats" component={Chatpage} />
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import Landing from "./Pages/landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Landing} exact />
        <Route path="/l" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
