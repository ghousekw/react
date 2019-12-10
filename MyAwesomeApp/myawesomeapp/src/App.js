import React from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import Development from './Development';
import Hosting from './Hosting';
import Backup from './Backup';

function App() {
  return (
    <Router>
      <div>
        <h1>Your Internet Headquaters!</h1>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/dev'}>Development</Link></li>
          <li><Link to={'/host'}>Hosting</Link></li>
          <li><Link to={'/bkp'}>Backup</Link></li>
        </ul>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dev' component={Development} />
            <Route path='/host' component={Hosting} />
            <Route path='/bkp' component={Backup} />
            {/* <Route path='/stuff' component={Stuff} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
