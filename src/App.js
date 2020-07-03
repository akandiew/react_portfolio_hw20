import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About"
import Nav from "./components/Nav";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={["/", "about"]} />
/            <About></About>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
