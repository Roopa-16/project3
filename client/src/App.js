import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Views/About";
import Closet from "./Views/Closet";
import Home from "./Views/Home";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import Outfit from "./Views/Outfit";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NoMatch from "./Views/NoMatch";
import ClothingDetail from "./Views/ClothingDetail";
import "./normalize.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Closet" component={Closet} />
          <Route exact path="/ClothingDetail" component={ClothingDetail} />
          <Route exact path="/Outfit" component={Outfit} />
          <Route
            path="/ClothingDetail/:clothingType"
            component={ClothingDetail}
          />
          <Route path="/Closet/:id" component={Closet} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
