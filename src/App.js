import React, { Component } from 'react';
import Section from './Section';
import './App.css';

// let sections = [
//   {
//     header: "Colors",
//     content: `
//     <p class="flow-text">
//       The primary colors, Green and Gold, should be the main colors used for headers and footers. The other colors in the can be used as accent colors for floating action buttons, call to action buttons, call to action banners, or content that you want to emphasize. Keep in mind that overuse of accent colors will diminish their ability to draw attention to a specific area of the page.
//     </p>
//      `,
//     code: `
//       $fus-yellow:     #ffc658;
//       $fus-light-blue: #8e9fbc;
//       $fus-dark-blue:  #1f2a44;
//       $fus-green:      #21412a;
//       $fus-gold:       #998643;
//       `
//   },
//   {
//     header: "Header 2",
//     content: "<h1>h1</h1>",
//     code: `
//       $fus-yellow:     #ffc658;
//
//       $fus-gold:       #998643;
//       `
//   },
//   {
//     header: "Header 3",
//     content: "Content 3",
//     code: `
//       $fus-yellow:     #ffc658;
//       $fus-light-blue: #8e9fbc;
//       $fus-dark-blue:  #1f2a44;
//       $fus-green:      #21412a;
//       $fus-gold:       #998643;
//       `
//   }
// ];
class App extends Component {

  constructor(props) {
		super(props);
		this.state = {sections: [
      {
        title: {
          rendered: "Intro"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            The Franciscan University of Steubenville Style Guide is a resource for web design and development. The framework and code samples allow developers to quickly construct a site that will maintain branding standards and fit in well with current University websites.
          </p>
          <p class="flow-text">
            This is a living style guide. It will be continually updated to fix bugs and keep our online brand in line with current design standards.
          </p>
           `
         },
        code: ``
      },
      {
        title: {
          rendered: "Getting Started"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            Our online branding follows <a href="https://material.google.com/#" title="Materal Design">Material Design principles</a>. Please refer to these principles when developing University sites.
          </p>
          <p class="flow-text">
            We utilize the <a href="http://materializecss.com/" title="Materialize">Materialze</a> framework with some customizations for our new website. Any of the components available in Materialize can be used in University sites.
          </p>
          <p class="promo-caption">CDN</p>
          <p class="flow-text">
            The CSS and JavaScript files needed to build a University site are available by adding these two lines of code to your HTML.
          </p>
          <pre class="language-html">
            <code class="language-html">
  &lt;!-- Compiled and minified CSS -->
  &lt;link rel="stylesheet" href="https://franciscan.university/cdn/css/fus-materialize.min.css">

  &lt;!-- Compiled and minified JavaScript -->
  &lt;script src="https://franciscan.university/cdn/js/fus-materialize.min.js">&lt;/script>
            </code>
          </pre>
          <p class="promo-caption">Downloads</p>
          <p class="flow-text">
            You can also download the source files along with a starter theme.
            <a id="download-source" class="btn waves-effect waves-light" style="font-size: 16px;
  font-weight: 400;" href="">FUS-Materialize<i class="material-icons right">file_download</i></a>
          </p>
           `
         },
        code: `
          $fus-yellow:     #ffc658;
          $fus-light-blue: #8e9fbc;
          $fus-dark-blue:  #1f2a44;
          $fus-green:      #21412a;
          $fus-gold:       #998643;
          `
      },
      {
        title: {
          rendered: "Colors"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            The primary colors, Green and Gold, should be the main colors used for headers and footers. The remaining colors can be used as accent colors for floating action buttons, call to action buttons, call to action banners, or content that you want to emphasize. Keep in mind that overuse of accent colors will diminish their ability to draw attention to a specific area of the page.
          </p>
          <p class="flow-text">
            It is acceptable make these colors slightly transparent in some situations, such as in a fixed (sticky) header.
          </p>

          <div>
            <div style="background-color:#21412a;">Green</div>
            <div style="background-color:#998643;">Gold</div>
            <div style="background-color:#21412a;">Green</div>
            <div style="background-color:#21412a;">Green</div>
            <div style="background-color:#21412a;">Green</div>
          </div>

          <p class="promo-caption">SCSS Color Variables</p>
           `
         },
        code: `
          $fus-yellow:     #ffc658;
          $fus-light-blue: #8e9fbc;
          $fus-dark-blue:  #1f2a44;
          $fus-green:      #21412a;
          $fus-gold:       #998643;
          `
      },
    ]};
	}

// This get data from an api
  // componentDidMount() {
  //
  //   let myInit = {
  //     method: "GET"
  //   };
  // Url of the api endpoint
  // let url = "";
  //
  //   fetch(url, myInit).then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     this.state.sections = data;
  //     this.setState(this.state);
  //   });
  // }


  render() {
    return (
      <div className="row">
        <div className="col s12 m9 l10">
          {this.state.sections.map(function(section, i){
            return <Section header={section.title.rendered} content={section.content.rendered} key={i} code={section.code}/>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
