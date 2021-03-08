import React from 'react';
import './App.css';
// import NavBar from './components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  HashRouter,
} from 'react-router-dom';

// import Home from './pages'
// import Navbar from './components/Navbar';

import Home from './pages';
import PageNotFound from './pages/404';
import Design from './pages/design';

function App() {
  return (
    <HashRouter>
      {/* <NavBar /> */}
      <Switch>
        {/* <Route path="/">
          <Redirect to="/me" />
        </Route> */}
        <Route path="/me" component={Home} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </HashRouter>
  );
}

export default App;
