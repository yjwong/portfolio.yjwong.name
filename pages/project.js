import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import ReactMarkdown from 'react-markdown';
import Lightbox from 'react-images';
import classNames from 'classnames';
import axios from 'axios';

import projects from '../public/projects.json';
import styles from '../styles/project.scss';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      lightbox: {
        currentImage: 0,
        isOpen: false
      }
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
    const response = await axios.get(`assets/projects/${props.params.type}/${props.params.id}/description.md`);
    project.description = response.data;

    // Set the project information.
    this.setState({ ...this.state, project });
  }

  onAdditionalImageClicked(idx, e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      lightbox: {
        ...this.state.lightbox,
        currentImage: idx,
        isOpen: true
      }
    });
  }

  onLightboxClickPrev() {
    this.setState({
      ...this.state,
      lightbox: {
        ...this.state.lightbox,
        currentImage: this.state.lightbox.currentImage - 1
      }
    });
  }

  onLightboxClickNext() {
    this.setState({
      ...this.state,
      lightbox: {
        ...this.state.lightbox,
        currentImage: this.state.lightbox.currentImage + 1
      }
    });
  }

  onLightboxClose() {
    this.setState({
      ...this.state,
      lightbox: {
        ...this.state.lightbox,
        isOpen: false
      }
    });
  }

  render() {
    if (!this.state.project) {
      return null;
    } else {
      return (
        <div styleName="container">
          <div className={classNames(styles.masthead, { [styles.withImage]: this.state.project.image })}>
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
            <If condition={this.state.project.additionalImages}>
              <h1>Additional Images</h1>
              <For each="item" index="idx" of={this.state.project.additionalImages}>
                <a onClick={this.onAdditionalImageClicked.bind(this, idx)}
                  href={item.src} target="_blank">
                  <img key={item.src} styleName="additionalImage"
                    src={item.src} alt={item.caption} />
                </a>
              </For>
              <Lightbox
                images={this.state.project.additionalImages}
                isOpen={this.state.lightbox.isOpen}
                currentImage={this.state.lightbox.currentImage}
                onClickPrev={this.onLightboxClickPrev.bind(this)}
                onClickNext={this.onLightboxClickNext.bind(this)}
                onClose={this.onLightboxClose.bind(this)} />
            </If>
          </div>
        </div>
      );
    }
  }
}

export default CSSModules(ProjectPage, styles);