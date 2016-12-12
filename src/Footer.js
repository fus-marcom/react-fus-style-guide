import React, { Component } from 'react';
class Footer extends Component {

  currentYear() {
    let dateToday = new Date();
    let currentYear = dateToday.getFullYear();
    return currentYear;
  }

  render() {
    return (
      <footer className="page-footer">
       <div className="footer-copyright">
         <div className="container">
         © <span id="copyright-date">{this.currentYear()}</span> Franciscan University of Steubenville
         </div>
       </div>
      </footer>
    );
  }
}

export default Footer;
