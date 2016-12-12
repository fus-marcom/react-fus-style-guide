import React, { Component } from 'react';
import SideNav from './SideNav';
class Nav extends Component {

  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="page-title">Style Guide</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="icon-navicon"></i></a>
          </div>
        </div>
        <SideNav sections={this.props.sections} />
      </nav>
    );
  }
}

export default Nav;
