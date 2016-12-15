import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import '!style!css!sass!./styles/global.scss';

import projects from './public/projects.json';
import MainPage from './pages/main';
import IndexPage from './pages/index';
import ProjectPage from './pages/project';
import NotFoundPage from './pages/not-found';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainPage}>
      <IndexRoute component={IndexPage} />
      <Route path="/projects/:type/:id" getComponent={async (nextState) => {
        const matchedProjects = projects.filter(project =>
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