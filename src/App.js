import React, { Component } from 'react';
import Section from './Section';
import './App.css';

const sections = [
  {
    header: "Colors",
    content: `
    <p class="flow-text">
      The primary colors, Green and Gold, should be the main colors used for headers and footers. The other colors in the can be used as accent colors for floating action buttons, call to action buttons, call to action banners, or content that you want to emphasize. Keep in mind that overuse of accent colors will diminish their ability to draw attention to a specific area of the page.
    </p>
     `,
    code: `
      $fus-yellow:     #ffc658;
      $fus-light-blue: #8e9fbc;
      $fus-dark-blue:  #1f2a44;
      $fus-green:      #21412a;
      $fus-gold:       #998643;
      `
  },
  {
    header: "Header 2",
    content: "<h1>h1</h1>",
    code: `
      $fus-yellow:     #ffc658;

      $fus-gold:       #998643;
      `
  },
  {
    header: "Header 3",
    content: "Content 3",
    code: `
      $fus-yellow:     #ffc658;
      $fus-light-blue: #8e9fbc;
      $fus-dark-blue:  #1f2a44;
      $fus-green:      #21412a;
      $fus-gold:       #998643;
      `
  }
];

class App extends Component {
  getInitialState() {

  }

  // componentDidMount() {
  //   $.ajax({
  //       url: `https://franciscan.university/HfjGnJUHz77wyWm5S8/wp-json/wp/v2/posts?`,
  //       dataType: 'json',
  //       cache: false,
  //       success: function(data) {
  //           this.setState({data: data});
  //       }.bind(this),
  //           error: function(xhr, status, err) {
  //           console.error(this.props.url, status, err.toString());
  //       }.bind(this)
  //   });
  // }


  render() {
    return (
      <div className="row">
        <div className="col s12 m9 l10">
          {sections.map(function(section, i){
            return <Section header={section.header} content={section.content} key={i} code={section.code}/>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
