import React, { Component } from 'react';


class Code extends Component {
  render() {
    return (
        <pre className=" language-scss">
          <code className=" language-scss">
            {this.props.code}

          </code>
        </pre>

    );
  }
}

export default Code;
