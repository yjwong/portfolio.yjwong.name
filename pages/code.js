import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from '../styles/code.scss';
import projects from '../public/projects.json';

class CodePage extends Component {
  render() {
    return (
      <div>
        <div styleName="masthead">
          <div className="container">
            <h1>Code</h1>
          </div>
        </div>

        <div className="container">
          <ul styleName="projectList">
            <For each="item" of={projects.filter(project => project.type === 'code')}>
              <li key={item.id}>
                <Link to={`projects/code/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            </For>
          </ul>
        </div>
      </div>
    )
  }
}

export default CSSModules(CodePage, styles);