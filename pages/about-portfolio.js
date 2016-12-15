import React, { Component } from 'react';

class AboutPortfolioPage extends Component {
  render() {
    return (
      <div className="container">
        <p>
          This portfolio includes work that I have done from 2007 to 2016.
        </p>

        <h3>Technical Details</h3>

        <p>
          This website was made with <a href="https://facebook.github.io/react/" target="_blank">React</a>.
          The source code for this website is <a href="https://github.com/yjwong/portfolio.yjwong.name">available on GitHub</a>.
        </p>
      </div>
    )
  }
}

export default AboutPortfolioPage;