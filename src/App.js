import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import weekly from "./Components/Weekly";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (
    <>
      <Switch>
        <Route path="/signin" component={SignIn} exact />
        <Route path="/weekly" component={weekly} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </>
  );
}

export default App;
