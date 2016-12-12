import React, { Component } from 'react';
import Nav from './Nav';


class Header extends Component {

  render() {
    return (
      <header>
        <Nav sections={this.props.sections} />
      </header>
    );
  }
}

export default Header;
