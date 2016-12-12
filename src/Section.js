import React, { Component } from 'react';
import Code from './Code';

class Section extends Component {

  renderCode() {
    if (this.props.code !== ``) {
      return (
        <Code code={this.props.code} />
      )
    }
  }

  render() {
    return (
      <div className="section scrollspy" id={this.props.id}>
        <h2 className="header">{this.props.header}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.content }} />
        {this.renderCode()}
      </div>
    );
  }
}

export default Section;
