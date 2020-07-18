import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About"
import Nav from "./components/Nav";
// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
      <div className="container">
      <Router>

        <Nav></Nav>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/About"><About /></Route>
        </Switch>
      </Router>
      </div>

  );
}

export default App;
