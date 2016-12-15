import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from '../styles/project-listing.scss';
import projects from '../public/projects.json';

class ProjectListingPage extends Component {
  render() {
    return (
      <div>
        <div styleName="masthead">
          <div className="container">
            <h1>
              {this.props.params.type.charAt(0).toUpperCase() + this.props.params.type.substring(1)}
            </h1>
          </div>
        </div>

        <div className="container">
          <ul styleName="projectList">
            <For each="item" of={projects.filter(project => project.type === this.props.params.type)}>
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

export default CSSModules(ProjectListingPage, styles);