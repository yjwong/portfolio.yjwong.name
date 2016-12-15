import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/index.scss';

import Header from '../components/header';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header></Header>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(IndexPage, styles);