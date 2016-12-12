import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = { project: null };
  }

  async componentWillMount() {
    const project = await axios.get(`projects/${this.props.params.type}/${this.props.params.id}.md`);
    this.setState(Object.assign({}, this.state, {
      project: project.data
    }));
  }

  render() {
    if (!this.state.project) {
      return null;
    } else {
      return <ReactMarkdown source={this.state.project} />
    }
  }
}

export default ProjectPage;