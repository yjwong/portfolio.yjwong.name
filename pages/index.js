import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from '../styles/index.scss';

class IndexPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" styleName="container">
          <div className="col-md-6">
            <blockquote styleName="blockquote">
              I'm have an inclination towards <strong>all things technology related</strong>. As an
              aspiring <strong>software engineer</strong> with <strong>specific focus on UX</strong>, I have completed
              an extensive portfolio of projects related to design and technology.
              I also have an interest in <strong>open source projects</strong>.
            </blockquote>
            <div styleName="centered">
              <Link className="btn btn-my-default" to="/about/me">More About Me</Link>
            </div>
          </div>
          
          <div styleName="work">
            <Link to="/projects/code" styleName="category">Code</Link>
            <Link to="/projects/design" styleName="category">Design</Link>
            <Link to="/projects/game" styleName="category">Games</Link>
            <Link to="/projects/film" styleName="category">Film</Link>
            <Link to="/projects/other" styleName="category">Others</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(IndexPage, styles);