import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import projects from '../public/projects.json';
import styles from '../styles/project.scss';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = { project: null };
  }

  async componentWillMount() {
    const project = projects.find(project =>
      project.id === this.props.params.id &&
      project.type === this.props.params.type
    );

    // Get project description.
    const response = await axios.get(`projects/${this.props.params.type}/${this.props.params.id}.md`);
    project.description = response.data;

    // Set the project information.
    this.setState(Object.assign({}, this.state, {
      project: project
    }));
  }

  render() {
    if (!this.state.project) {
      return null;
    } else {
      return (
        <div styleName="container">
          <div styleName="masthead">
            <h1>{this.state.project.title}</h1>
            <h3 styleName="subtitle">{this.state.project.synopsis}</h3>
          </div>
          <ReactMarkdown source={this.state.project.description} />
        </div>
      );
    }
  }
}

export default CSSModules(ProjectPage, styles);