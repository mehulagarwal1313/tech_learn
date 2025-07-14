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
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

import LandingPage from "./Pages/LandingPage";
import RegisterPage from "./Pages/RegisterPage"; // ✅ Import it

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route path="/l" component={Homepage} exact />
          <Route path="/chats" component={Chatpage} />
          <Route path="/register" component={RegisterPage} /> 
          <Route path="/" component={LandingPage} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
