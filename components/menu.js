import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
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
                <h2 key="about">About</h2>
                <h2 key="code">Code</h2>
                <h2 key="design">Design</h2>
                <h2 key="games">Games</h2>
                <h2 key="film">Film</h2>
                <h2 key="others">Others</h2>
                <h2 key="contact">Contact</h2>
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