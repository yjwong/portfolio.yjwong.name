import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/header.scss';

import Menu from './menu';

class Header extends Component {
  render() {
    return (
      <div styleName="header">
        <h1 styleName="title">
          Yong Jie's <strong>Portfolio</strong>
        </h1>
        <Menu></Menu>
      </div>
    );
  }
}

export default CSSModules(Header, styles);