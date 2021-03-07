import React from 'react';
import './App.css';
import NavBar from './components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

// import Home from './pages'
// import Navbar from './components/Navbar';

import Home from './pages';
import PageNotFound from './pages/404';
import TheInside from './pages/theinside';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/404" component={PageNotFound} />
        <Route exact path="/the-inside" component={TheInside} />
        <Redirect to="/404" />
        {/* <Route component={TheInside} /> */}
      </Switch>
    </Router>
  );
}

export default App;
