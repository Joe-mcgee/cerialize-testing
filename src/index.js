import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import indexRoutes from './routes/index';
import './assets/scss/material-dashboard-pro-react.css';
 
const history = createHistory()

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {indexRoutes.map(
        (prop, key) => <Route path={prop.path} component={prop.component} key={key} />
      )}
    </Switch>
  </Router>,
  document.getElementById('root'),
);
