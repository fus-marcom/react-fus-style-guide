import React, { Component } from 'react';
import Code from './Code';

class Section extends Component {
  render() {
    return (
        <div id="variables" className="section scrollspy">
        <h2 className="header">{this.props.header}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.content }} />
        <Code code={this.props.code} />
      </div>
    );
  }
}

export default Section;
