import React, { Component } from 'react';
class SideNav extends Component {

  render() {
    return (
      <ul className="side-nav fixed table-of-contents" id="mobile-demo">
        <li className="logo">
          <a id="logo-container" href="home" className="brand-logo">
            <img src="img/side-nav-logo.jpg" alt="logo" role="presentation"/>
          </a>
        </li>
        {this.props.sections.map(function(section, i){
          return <li key={i} ><a href={'#' + section.id}>{section.title.rendered}</a></li>;
        })}
      </ul>
    );
  }
}

export default SideNav;
