import React from 'react';
import './App.css';
// import NavBar from './components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// import Home from './pages'
// import Navbar from './components/Navbar';

import Home from './pages';
import PageNotFound from './pages/404';
import Design from './pages/design';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          <Redirect to={`${process.env.PUBLIC_URL}/me`} />
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/404`}
          component={PageNotFound}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/design`}
          component={Design}
        />
        <Redirect to={`${process.env.PUBLIC_URL}/404`} />

        {/* <Route component={TheInside} /> */}
      </Switch>
    </Router>
  );
}

export default App;
