import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';

import '!style!css!sass!./styles/global.scss';

import projects from './public/projects.json';
import MainPage from './pages/main';
import IndexPage from './pages/index';
import AboutMePage from './pages/about-me';
import AboutPortfolioPage from './pages/about-portfolio';
import ProjectListingPage from './pages/project-listing';
import ProjectPage from './pages/project';
import NotFoundPage from './pages/not-found';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainPage}>
      <IndexRoute component={IndexPage} />
      <Redirect from="about" to="about/me" />
      <Route path="about/me" component={AboutMePage} />
      <Route path="about/portfolio" component={AboutPortfolioPage} />
      <Route path="projects/:type" component={ProjectListingPage} />
      <Route path="projects/:type/:id" getComponent={async (nextState) => {
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