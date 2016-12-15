import React, { Component } from 'react';
import Header from '../components/header';

class MainPage extends Component {
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

export default MainPage;