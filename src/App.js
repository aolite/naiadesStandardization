import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {Route, Switch} from "react-router-dom";
import Landscape from "./pages/Landscape";
import Standards from "./pages/Standards";
import About from "./pages/About";


function App() {
  return (
    <>
      <Navbar />
      <h1>Water Standardization Landscape</h1>

      <Switch>
          <Route exact path="/">
              <Landscape/>
          </Route>
          <Route path="/standards">
              <Standards/>
          </Route>
          <Route path="/about">
              <About/>
          </Route>
      </Switch>
    </>
  );
}

export default App;
