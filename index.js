import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import axios from 'axios';

import '!style!css!sass!./styles/global.scss';

import IndexPage from './pages/index';
import ProjectPage from './pages/project';
import NotFoundPage from './pages/not-found';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={IndexPage}>
      <Route path="/projects/:type/:id" getComponent={async (nextState) => {
        const projects = await axios.get('projects.json');
        const matchedProjects = projects.data.filter(project =>
          project.id === nextState.params.id &&
          project.type === nextState.params.type);
        
        if (matchedProjects.length > 0) {
          return ProjectPage;
        } else {
          return NotFoundPage;
        }
      }} />

      <Route path="*" component={NotFoundPage}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);