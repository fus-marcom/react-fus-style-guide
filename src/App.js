import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="col s12 m9 l10">
        <div id="variables" className="section scrollspy">
        <h2 className="header">Colors</h2>
        <p className="flow-text">
        The primary colors, Green and Gold, should be the main colors used for headers and footers. The other colors in the can be used as accent colors for floating action buttons, call to action buttons, call to action banners, or content that you want to emphasize. Keep in mind that overuse of accent colors will diminish their ability to draw attention to a specific area of the page.
        </p>

        <h5>SCSS Color Variables</h5>
        <pre className=" language-scss"><code className=" language-scss">
          $fus-yellow:     #ffc658;
          $fus-light-blue: #8e9fbc;
          $fus-dark-blue:  #1f2a44;
          $fus-green:      #21412a;
          $fus-gold:       #998643;
        </code></pre>
      </div>
        <div id="variables" className="section scrollspy">
        <h2 className="header">Variables</h2>
        <p className="caption">
        When using Sass, you can change the color scheme of your site extremely quickly. Below is a very small sample of what you can change through sass in <code className=" language-scss">_variables.scss</code>.
        </p>
        <pre className=" language-scss"><code className=" language-scss">
.table-of-contents {
  a.active {
    border-left: 2px solid $fus-yellow;
  }
  a:hover {
    border-left: 1px solid $fus-yellow;
  }
}
        </code></pre>
      </div>

        <div id="structure" className="section scrollspy">
          <p>Content </p>
        </div>

        <div id="initialization" className="section scrollspy">
          <p>Content </p>
        </div>
      </div>
    );
  }
}

export default App;
