import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {Route, Switch} from "react-router-dom";
import Landscape from "./pages/Landscape";
import Standards from "./pages/Standards";
import About from "./pages/About";
import StandardDetails from "./pages/StandardDetail";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />

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
          <Route path={"/standard/:standardId"}>
              <StandardDetails/>
          </Route>
      </Switch>

      <Footer/>
    </>
  );
}

export default App;
