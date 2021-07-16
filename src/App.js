import logo from './logo.svg';
import './App.css';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/home';
import HeaderNav from './components/HeaderNav';
import About from './pages/about';
import FooterNav from './components/FooterNav';

function App() {
  return (
    <Router>
    <div className="App">
      <HeaderNav />
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
