import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import '!style!css!sass!./styles/global.scss';

import IndexPage from './pages/index';
import NotFoundPage from './pages/not-found';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={IndexPage}></Route>
    <Route path="*" component={NotFoundPage}></Route>
  </Router>,
  document.getElementById('root')
);