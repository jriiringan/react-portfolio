
import React, { useState, useEffect } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/home';
import HeaderNav from './components/HeaderNav';
import About from './pages/about';
import FooterNav from './components/FooterNav';
import PreLoaded from './components/PreLoaded';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <PreLoaded load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <HeaderNav />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
        <FooterNav/>
      </div>
  </Router>
  );
}

export default App;
