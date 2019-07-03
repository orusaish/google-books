import React from "react";
import Header from "./components/header";
import Nav from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
