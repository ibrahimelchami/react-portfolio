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
import RisePeople from './pages/projects/risepeople';
import TheInside from './pages/projects/theinside';
import Vanmates from './pages/projects/vanmates';
import PageNotFound from './pages/404';
import Design from './pages/design';

function App() {
  return (
    <HashRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rise-people" component={RisePeople} />
        <Route exact path="/the-inside" component={TheInside} />
        <Route exact path="/vanmates" component={Vanmates} />
        <Route exact path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </HashRouter>
  );
}

export default App;
