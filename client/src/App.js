import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Views/About";
import Closet from "./Views/Closet";
import Home from "./Views/Home";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import Outfit from "./Views/OutFit";
import Nav from "./Components/Nav";
import NoMatch from "./Views/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Closet" component={Closet} />
          <Route exact path="/Outfit" component={Outfit} />
          <Route exact path="/Closet/:id" component={Closet} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
