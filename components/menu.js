import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import projects from '../public/projects.json';
import styles from '../styles/menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

  onMenuButtonClicked() {
    this.setState(Object.assign({}, this.state, {
      opened: !this.state.opened
    }));
  }

  onMenuItemClicked() {
    this.setState(Object.assign({}, this.state, {
      opened: false
    }));
  }

  getListForProjectType(type) {
    return (
      <ul>
        <For each="item" of={projects.filter(project => project.type === type)}>
          <li key={item.id}>
            <Link to={`/projects/${item.type}/${item.id}`} onClick={this.onMenuItemClicked.bind(this)} title={item.synopsis}>
              {item.title}
            </Link>
          </li>
        </For>
      </ul>
    );
  }

  getMenu() {
    if (this.state.opened) {
      return (
        <div styleName="menu" key="menu">
          <div className="container">
            <div styleName="header">
              <h1 styleName="title">
                Yong Jie's <strong>Portfolio</strong>
              </h1>
              <button styleName="closeButton" onClick={this.onMenuButtonClicked.bind(this)}>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </div>

            <div styleName="menuItems">
              <ReactCSSTransitionGroup
                transitionName={{
                  appear: styles.menuItemAppear
                }}
                transitionEnter={false}
                transitionLeave={false}
                transitionAppear={true}
                transitionAppearTimeout={500}>
                <h3 key="about"><Link to="/about" onClick={this.onMenuItemClicked.bind(this)}>About</Link></h3>
                <ul>
                  <li><Link to="/about/me" onClick={this.onMenuItemClicked.bind(this)}>Me</Link></li>
                  <li><Link to="/about/portfolio" onClick={this.onMenuItemClicked.bind(this)}>This Portfolio</Link></li>
                </ul>
                <h3 key="code"><Link to="/code" onClick={this.onMenuItemClicked.bind(this)}>Code</Link></h3>
                {this.getListForProjectType('code')}
                <h3 key="design"><Link to="/design" onClick={this.onMenuItemClicked.bind(this)}>Design</Link></h3>
                {this.getListForProjectType('design')}
                <h3 key="games"><Link to="/games" onClick={this.onMenuItemClicked.bind(this)}>Games</Link></h3>
                {this.getListForProjectType('game')}
                <h3 key="film"><Link to="/film" onClick={this.onMenuItemClicked.bind(this)}>Film</Link></h3>
                {this.getListForProjectType('film')}
                <h3 key="others"><Link to="/others" onClick={this.onMenuItemClicked.bind(this)}>Others</Link></h3>
                {this.getListForProjectType('other')}
                <h3 key="contact"><Link to="/contact" onClick={this.onMenuItemClicked.bind(this)}>Contact</Link></h3>
                <ul>
                  <li><a href="https://yjwong.name/misc/Resume.pdf" target="_blank">Resume</a></li>
                </ul>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div styleName="container">
        <button styleName="openButton" onClick={this.onMenuButtonClicked.bind(this)}>
          <span className="glyphicon glyphicon-menu-hamburger"></span>
        </button>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.menuEnter,
            leave: styles.menuLeave
          }}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.getMenu()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Menu.defaultProps = { opened: false };

Menu.propTypes = {
  opened: React.PropTypes.bool
};

export default CSSModules(Menu, styles);