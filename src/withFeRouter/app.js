import React from 'react';
import injectStyles from 'react-jss';
import styles from './app.style';

import Home from './components/home';
import About from './components/About';
import Topics from './components/Topics';
import NotFound from './components/NotFound';
import RedirectWithStatus from './components/RedirectWithStatus';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const App = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <RedirectWithStatus from="/redirect" to="/topics" status={302} />
      <Route component={NotFound} />
    </Switch>
  </div>
)



export default injectStyles(styles)(App)
