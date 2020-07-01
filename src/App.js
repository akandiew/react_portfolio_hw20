import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={["/", "/books"]}>
            {/* <Books /> */}
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route>
            {/* <NoMatch /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
