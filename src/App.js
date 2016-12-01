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
            Our online branding follows <a href="https://material.google.com/#" title="Material Design">Material Design principles</a>. Please refer to these principles when developing University sites.
          </p>
          <p class="flow-text">
            We utilize the <a href="http://materializecss.com/" title="Materialize">Materialze</a> framework with some customizations for our new websites. Any of the components available in Materialize can be used in University sites.
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
            <div class="color-div" style="background-color:#21412a;">Green #21412a</div>
            <div class="color-div" style="background-color:#998643;">Gold #998643</div>
            <div class="color-div" style="background-color:#1f2a44;">Dark Blue #1f2a44</div>
            <div class="color-div" style="background-color:#8e9fbc;">Light Blue #8e9fbc</div>
            <div class="color-div" style="background-color:#ffc658;">Yellow #ffc658</div>
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
      {
        title: {
          rendered: "Typography"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            Roboto is the font of choice for the Univerity's sites. It offers good readability on a variety of devices. Default font weight, size, and color are already included in the FUS-Materialize theme. More options and a deeper explaination are available in the <a href="https://material.google.com/style/typography.html#typography-styles" title="Material Design Typography">Material Design Typography Guidelines</a> and <a href="http://materializecss.com/typography.html">Materialize Typography</a>.
          </p>
           `
         },
        code: ``
      },
      {
        title: {
          rendered: "Icons"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            Material Design has its own set of font icons (<a href="https://material.io/icons/" title="Material Design Icons">Material Design Icons</a> ). To use the official Material Design fonts add the following tag in the head of your site (already included in the sample template).
          </p>
          <pre class="language-html">
            <code class="language-html">
  &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            </code>
          </pre>
          <p class="flow-text">
            To add an icon to your site use the following tag and replace "chat_bubble" with the name of the icon you want to display.
          </p>
          <pre class="language-html">
            <code class="language-html">
  &lt;i class="material-icons">chat_bubble&lt;/i>

            </code>
          </pre>
          <p class="promo-caption">Social Icons</p>
          <p class="flow-text">
            Social media icons are added with the following tags.
          </p>
          <pre class="language-html">
            <code class="language-html">
  &lt;i class="material-icons">add code for all social media icons here with comments labeling each&lt;/i>

            </code>
          </pre>
          <p class="promo-caption">Icon Size</p>
          <p class="flow-text">
            Icons should be at least 24px. The clickable area should be a minimum of 48px including the size of the icon.
          </p>
           `
         },
        code: ``
      },
      {
        title: {
          rendered: "Logos"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            To protect our brand integrity, the Franciscan University Logo cannot be altered in any way without approval from Marketing and Communications. Unless otherwise stated the <a href="https://myfranciscan.franciscan.edu/ICS/clientconfig/customcontent/marcom/MarComTab/LogoManual2.pdf" title="Brand Manual PDF" >guidelines for using logos in print material</a>  also apply to websites and apps.
          </p>

          <p class="flow-text">
            Primary locations for logos are in the upper left corner of the header, top of the side-nav, or in the footer.
          </p>

          <p class="flow-text">
            [Add examples of using logos on different color backgrounds and at different sizes. Mention the minimum size for readability.]
          </p>
          <p class="flow-text">
            The most commonly used logos are included in the sample theme.
          </p>
           `
         },
        code: ``
      },
      {
        title: {
          rendered: "Header"
        },
        content:  {

          rendered:
          `
          <p class="promo-caption">Header Size</p>
          <p class="flow-text">
            Headers should be as thin as possible to avoid taking up too much screen space, especially on small screens. If a side-nav is in use (with a logo at the top) the header could be as short as 64px tall. In general, the header should by just tall enough for the logo text to be readable with at least 8px of padding at the top and bottom of the logo.
          </p>
          <p class="promo-caption">Header Color</p>
          <p class="flow-text">
            The prefered header color is fus-green. It can be accompanied by a maximum 5px tall fus-gold border on the bottom. If a full screen video hero section is in use, the header can be transparent or have semi-transparent black background, <code>rgba(0, 0, 0, 0.37)</code>, for readablility. The green header background can also be slightly transparent, <code>rgba(33,65,42,.68)</code>.
          </p>
          <p class="promo-caption">Header Position without Side-Nav</p>
          <p class="flow-text">
            If a fixed side-nav is not in use, the header should be "sticky". The header should disappear when scrolling down and reappear when scrolling up. (<a href="https://franciscan.university/ma-theology/" title="Sticky Disappearing Header" target="_blank">Example</a>) This provides a better user experience on small screens. Include the headroom.js code (included in the theme) in your project, either linked directly or bundled in your minified javascript and use the following code.
          </p>
          <pre class="language-html">
            <code class="language-html">
&lt;div class="navbar-fixed">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#home" class="brand-logo">&lt;img src="img/logoTxt.png"/>&lt;/a>
      &lt;a href="#" data-activates="mobile-demo" class="button-collapse">&lt;i class="icon-navicon">&lt;/i>&lt;/a>
      &lt;ul class="right hide-on-med-and-down">
        &lt;li>&lt;a href="#">About&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Blog&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Contact&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
&lt;/div>
            </code>
          </pre>
          <pre class="language-javascript">
            <code class="language-javascript">
  //Headroom.js init
  // grab an element
  var myElement = document.querySelector('nav');
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // init
  headroom.init();

            </code>
          </pre>
          <p class="promo-caption">Header Position with Side-Nav</p>
          <p class="flow-text">
            If a fixed side-nav is in use, a "sticky" header is not necessary, because the navigation remains visible in the side-nav as the user scrolls. If the header is not sticky, a scroll-to-top button [link to scroll to top button code] should be included.
          </p>
          <pre class="language-html">
            <code class="language-html">
&lt;header>
  &lt;nav>
    &lt;div class="container">
      &lt;div class="nav-wrapper">
        &lt;a href="#home" class="page-title">Style Guide&lt;/a>
        &lt;a href="#" data-activates="mobile-demo" class="button-collapse">&lt;i class="icon-navicon">&lt;/i>&lt;/a>
      &lt;/div>
    &lt;/div>
  &lt;/nav>

  &lt;ul class="side-nav fixed table-of-contents" id="mobile-demo">
    &lt;li class="logo">
      &lt;a id="logo-container" href="home" class="brand-logo">
        &lt;img src="img/side-nav-logo.jpg">
      &lt;/a>
    &lt;/li>
    &lt;li>&lt;a href="#introduction">First Sidebar Link&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#structure">Second Sidebar Link&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#initialization">Section Three&lt;/a>&lt;/li>

  &lt;/ul>
&lt;/header>
            </code>
          </pre>
          <p class="promo-caption">Shrinking Header</p>
          <p class="flow-text">
            On large screens, a "sticky" header can be taller at first, and shrink on scroll. (<a href="https://material.google.com/#" title="Shrinking Header" target="_blank">Example</a>)
          </p>
          <pre class="language-html">
            <code class="language-html">
  &lt;i class="material-icons">add code for headers&lt;/i>

            </code>
          </pre>
           `
         },
        code: ``
      },
      {
        title: {
          rendered: "Footer"
        },
        content:  {

          rendered:
          `
          <p class="promo-caption">Footer Size</p>
          <p class="flow-text">
            There is no maximum footer height, but it shouldn't take up more than 80% of the vertical height of the average desktop screen. Minimum footer height is 50px. This allows for one line of text with a 15px font size and adequate padding.
          </p>
          <p class="promo-caption">Footer Color</p>
          <p class="flow-text">
            The prefered footer color is fus-green. It can be accompanied by a maximum 5px tall fus-gold border on the top. The lower section of the footer is always a slightly darker shade of the main footer color. If the main footer color is fus-green then the lower part will be <code>#1e3a26</code>. (<a href="https://franciscansquare.com/" title="Full Footer" target="_blank">Example</a>: scroll to bottom)
          </p>
          <p class="promo-caption">Tall Footer</p>
          <pre class="language-html">
            <code class="language-html">
&lt;footer class="page-footer">
  &lt;div class="container">
    &lt;div class="row">
      &lt;div class="col s12 m6 center">
        &lt;a href="http://www.franciscan.edu/" title="Franciscan University of Steubenville" target="_blank">&lt;img class="responsive-img" src="img/franciscan-logo.png" />&lt;/a>
      &lt;/div>
      &lt;div class="col s12 m6">
        &lt;h5 class="white-text light">Franciscan Square&lt;/h5>
        &lt;address>
          &lt;p class="white-text" translate="no" typeof="schema:PostalAddress">
            &lt;span property="schema:name">Franciscan Square&lt;/span>&lt;br>
            &lt;span property="schema:streetAddress">200 Franciscan Square&lt;/span>&lt;br>
            &lt;span property="schema:addressLocality">Steubenville&lt;/span>, &lt;abbr title="Ohio" property="schema:addressRegion">OH&lt;/abbr> &lt;span property="schema:postalCode">43952&lt;/span> &lt;abbr property="schema:addressCountry">USA&lt;/abbr>&lt;br />
            &lt;a href="tel:+17402820901" property="telephone" class="white-text">740.282.0901&lt;/a>&lt;br />
          &lt;/p>
        &lt;/address>
        &lt;div class="social">
          &lt;a href="https://www.facebook.com/franciscansquare/" target="_blank">
            &lt;i class="icon-facebook white-text">&lt;/i>
          &lt;/a>
          &lt;a href="https://twitter.com/franciscansqr" target="_blank">
            &lt;i class="icon-twitter white-text">&lt;/i>
          &lt;/a>
        &lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>
 &lt;div class="footer-copyright">
   &lt;div class="container">
   &#169; &lt;span id="copyright-date">2016&lt;/span> Franciscan University of Steubenville
   &lt;/div>
 &lt;/div>
&lt;/footer>
            </code>
          </pre>

          <p class="promo-caption">Slim Footer</p>
          <p class="flow-text">
            Some sites, particularly internal sites, may not need a tall footer. The slim footer contains only the copyright portion of the footer. The standard color is the same as in the tall footer <code>#1e3a26</code>. Scroll to the bottom of this page to see an example.
          </p>

          <pre class="language-html">
            <code class="language-html">
&lt;footer class="page-footer">
 &lt;div class="footer-copyright">
   &lt;div class="container">
   © &lt;span id="copyright-date">2016&lt;/span> Franciscan University of Steubenville
   &lt;/div>
 &lt;/div>
&lt;/footer>
            </code>
          </pre>
           `
         },
        code: ``
      },
      {
        title: {
          rendered: "SideNav"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            The SideNav allows for easy access to menu options and saves screen space on small screens. It allows for more items to be displayed than in a typical header menu. It can keep the user interface from becoming cluttered and show a site's hierarchy at a glance. The side nav should be used on all sites that have multiple pages, or in page anchor links, at least for small screens. For some sites, like this one, it makes more sense to have the SideNav visible on larger screens.
          </p>
          <p class="promo-caption">Header Color</p>
          <p class="flow-text">
            The prefered header color is fus-green. It can be accompanied by a maximum 5px tall fus-gold border on the bottom. If a full screen video hero section is in use, the header can be transparent or have semi-transparent black background, <code>rgba(0, 0, 0, 0.37)</code>, for readablility. The green header background can also be slightly transparent, <code>rgba(33,65,42,.68)</code>.
          </p>
          <p class="promo-caption">Header Position without Side-Nav</p>
          <p class="flow-text">
            If a fixed side-nav is not in use, the header should be "sticky". The header should disappear when scrolling down and reappear when scrolling up. (<a href="https://franciscan.university/ma-theology/" title="Sticky Disappearing Header" target="_blank">Example</a>) This provides a better user experience on small screens. Include the headroom.js code (included in the theme) in your project, either linked directly or bundled in your minified javascript and use the following code.
          </p>
          <pre class="language-html">
            <code class="language-html">
&lt;div class="navbar-fixed">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#home" class="brand-logo">&lt;img src="img/logoTxt.png"/>&lt;/a>
      &lt;a href="#" data-activates="mobile-demo" class="button-collapse">&lt;i class="icon-navicon">&lt;/i>&lt;/a>
      &lt;ul class="right hide-on-med-and-down">
        &lt;li>&lt;a href="#">About&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Blog&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Contact&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
&lt;/div>
            </code>
          </pre>
          <pre class="language-javascript">
            <code class="language-javascript">
  //Headroom.js init
  // grab an element
  var myElement = document.querySelector('nav');
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // init
  headroom.init();

            </code>
          </pre>
          <p class="promo-caption">Header Position with Side-Nav</p>
          <p class="flow-text">
            If a fixed side-nav is in use, a "sticky" header is not necessary, because the navigation remains visible in the side-nav as the user scrolls. If the header is not sticky, a scroll-to-top button [link to scroll to top button code] should be included.
          </p>
          <pre class="language-html">
            <code class="language-html">
&lt;header>
  &lt;nav>
    &lt;div class="container">
      &lt;div class="nav-wrapper">
        &lt;a href="#home" class="page-title">Style Guide&lt;/a>
        &lt;a href="#" data-activates="mobile-demo" class="button-collapse">&lt;i class="icon-navicon">&lt;/i>&lt;/a>
      &lt;/div>
    &lt;/div>
  &lt;/nav>

  &lt;ul class="side-nav fixed table-of-contents" id="mobile-demo">
    &lt;li class="logo">
      &lt;a id="logo-container" href="home" class="brand-logo">
        &lt;img src="img/side-nav-logo.jpg">
      &lt;/a>
    &lt;/li>
    &lt;li>&lt;a href="#introduction">First Sidebar Link&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#structure">Second Sidebar Link&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#initialization">Section Three&lt;/a>&lt;/li>

  &lt;/ul>
&lt;/header>
            </code>
          </pre>
          <p class="promo-caption">Shrinking Header</p>
          <p class="flow-text">
            On large screens, a "sticky" header can be taller at first, and shrink on scroll. (<a href="https://material.google.com/#" title="Shrinking Header" target="_blank">Example</a>)
          </p>
          <pre class="language-html">
            <code class="language-html">
  &lt;i class="material-icons">add code for headers&lt;/i>

            </code>
          </pre>
           `
         },
        code: ``
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
