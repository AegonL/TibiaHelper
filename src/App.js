import Header from "./components/Header";
import React from "react";
import CharDetails from "./components/CharDetails";
import Vendor from "./vendorcomponents/Vendor";
import Calculator from "./components/Calculator";
import Highscores from "./components/Highscores";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LevelingGuide from "./components/LevelingComponents/LevelingGuide";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div>
          <Header className="header" />
          <Switch>
            <Route path="/Highscores" exact component={Highscores} />
            <Route path="/Calculator" exact component={Calculator} />
            <Route path="/CharDetails" exact component={CharDetails} />
            <Route path="/Vendor" exact component={Vendor} />
            <Route path="/LevelingGuide" exact component={LevelingGuide} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
