import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/Home";
import weekly from "./Pages/Weekly/Weekly";
import Invite from "./Pages/Invite/Invite";
import SignIn from "./Pages/SignIn/SignIn";
import Connection from "./Pages/Connections/Connection";
import Messenger from "./Pages/ChatRoom/Messenger";
import Hello from "./Pages/Registration/Hello";
import Objectives from "./Pages/Registration/Objectives";
import Verify from "./Pages/Registration/Verify";
import Login from "./Pages/Login/Login";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
function App() { 
  return (
    <>
      <Switch>
        <Route path="/weekly" component={weekly} exact />
        <Route path="/Invite" component={Invite} exact />
        <Route path="/Messenger" component={Messenger} exact />
        <Route path="/Connection" component={Connection} exact />
        <Route path="/Verify" component={Verify} exact />
        <Route path="/Objectives" component={Objectives} exact />
        <Route path="/Hello" component={Hello} exact />
        <Route path="/Home" component={Home} exact /> 
        <Route path="/Login" component={Login} exact />
        <Route path="/" component={SignIn} exact /> 
        <Route component={SignIn} />
      </Switch>
    </>
  );
}

export default App;
