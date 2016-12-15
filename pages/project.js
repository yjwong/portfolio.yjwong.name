import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import projects from '../public/projects.json';
import styles from '../styles/project.scss';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }

  componentWillMount() {
    this.invalidateProject(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.invalidateProject(nextProps);
  }

  async invalidateProject(props) {
    this.setState({ ...this.state, project: null });

    const project = projects.find(project =>
      project.id === props.params.id &&
      project.type === props.params.type
    );

    // Get project description.
    const response = await axios.get(`projects/${props.params.type}/${props.params.id}.md`);
    project.description = response.data;

    // Set the project information.
    this.setState({ ...this.state, project });
  }

  render() {
    if (!this.state.project) {
      return null;
    } else {
      return (
        <div styleName="container">
          <div styleName="masthead">
            <div className="container">
              <If condition={this.state.project.image}>
                <a href={this.state.project.image} target="_blank">
                  <img src={this.state.project.image} alt={`${this.state.project.title} screenshot`} />
                </a>
              </If>
            </div>
            <div styleName="titleAndSubtitle">
              <h1>{this.state.project.title}</h1>
              <h3 styleName="subtitle">{this.state.project.synopsis}</h3>
            </div>
            <If condition={this.state.project.type === 'code' && this.state.project.github}>
              <a styleName="callToAction" className="btn btn-my-default-inverted"
                href={`https://github.com/${this.state.project.github}`}
                target="_blank">
                View on GitHub
              </a>
            </If>
          </div>
          <div className="container" styleName="description">
            <ReactMarkdown source={this.state.project.description} />
          </div>
        </div>
      );
    }
  }
}

export default CSSModules(ProjectPage, styles);