import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from '../styles/header.scss';

import Menu from './menu';

class Header extends Component {
  render() {
    return (
      <div styleName="header">
        <h1 styleName="title">
          <Link to="/">Yong Jie's <strong>Portfolio</strong></Link>
        </h1>
        <a href="https://yjwong.name" styleName="contactButton" className="btn btn-my-default btn-sm">
          Contact Me
        </a>
        <Menu></Menu>
      </div>
    );
  }
}

export default CSSModules(Header, styles);