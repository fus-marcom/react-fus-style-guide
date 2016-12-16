import React, { Component } from 'react';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
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
        id: "intro",
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
        id: "getting-started",
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
        id: "colors",
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
        id: "typography",
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
        id: "icons",
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
            Social media icons are added with the following tags. (Icons by Andreas Larsen: <a href="https://github.com/larsenwork/web.svg.min" title="web.svg.min GitHub Repo" target="_blank">https://github.com/larsenwork/web.svg.min</a>)
          </p>
          <div class="social">
  <a class="facebook">
    <svg viewBox="0 0 800 800">
      <path d="M445 643h-90V419h-75v-87h75v-64q0-55 32-86 30-29 80-29 28 0 67 3v78h-47q-42 0-42 38v60h86l-11 87h-75v224z" />
    </svg>
  </a>
  <a class="twitter">
    <svg viewBox="0 0 800 800">
      <path d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z"/>
    </svg>
  </a>
  <a class="google-plus">
    <svg viewBox="0 0 800 800">
      <path d="M487 370c21 129-62 237-195 237-114 0-207-93-207-207s93-207 207-207c89 0 138 54 138 54l-56 54s-29-32-82-32c-71 0-128 59-128 131 0 73 57 131 128 131 81 0 113-58 117-90H292v-71h195zm189-59v59h59v60h-59v59h-59v-59h-59v-60h59v-59h59z" />
    </svg>
  </a>
  <a class="linkedin">
    <svg viewBox="0 0 800 800">
      <path d="M268 629h-97V319h97zm157 0h-97V319h93v42h1q31-50 93-50 114 0 114 133v185h-96V466q0-70-49-70-59 0-59 69z" />
      <circle cx="219" cy="220" r="56"/>
    </svg>
  </a>
  <a class="instagram">
    <svg viewBox="0 0 800 800">
      <path d="M150 400c0-119 0-166 42-208s88-42 208-42 166 0 208 42 42 89 42 208 0 166-42 208-88 42-208 42-166 0-208-42-42-89-42-208zm455 0c0-114 0-148-29-176-29-29-62-29-176-29s-148 0-176 29c-29 29-29 62-29 176s0 148 29 176c29 29 62 29 176 29s148 0 176-29c29-29 29-62 29-176zM400 272a128 128 0 1 1 0 256 128 128 0 0 1 0-256zm0 211c46 0 83-37 83-83s-37-83-83-83-83 37-83 83 37 83 83 83zm163-216c0 16-13 30-30 30-16 0-30-14-30-30 0-17 14-30 30-30 17 0 30 13 30 30z"/>
    </svg>
  </a>
  <a class="pinterest">
    <svg viewBox="0 0 800 800">
      <path d="M287 681c-9-3-15-77-6-115l38-163s-9-20-9-49c0-46 26-80 59-80 28 0 42 21 42 46 0 28-19 71-28 110-8 33 17 59 49 59 58 0 104-61 104-150 0-79-57-134-138-134-94 0-148 69-148 142 0 28 9.7 57.4 23 74 4 5 5 6 2 17l-8 31s-2 9.5-14 3c-41-22.3-63-78-63-126 0-104 75-199 217-199 114 0 203 81 203 190 0 113-72 205-171 205-55 0-75-38-75-38l-21 78c-11 41-47 102-56 99z" />
    </svg>
  </a>
  <a class="flickr">
     <svg viewBox="0 0 800 800">
       <circle cx="234" cy="400" r="136" class="flickr-blue"/>
       <circle cx="566" cy="400" r="136" class="flickr-pink"/>
     </svg>
   </a>
   <a class="snapchat">
     <svg viewBox="0 0 800 800">
       <path d="M400 152c-23 0-98 6-133 83-14 30-7 82-5 122-14 14-38-3-48-3-20 0-39 21 1 36 21 8 55 16 39 49-2 3-36 79-112 94-10 2-9 25 63 34 8 1 6 35 17 35s23-5 42-5c65 0 68 50 136 50s71-50 136-50c19 0 31 5 42 5s9-34 17-35c72-9 73-32 63-34-76-15-110-91-112-94-16-33 18-41 39-49 40-15 21-36 1-36-10 0-34 17-48 3 2-40 9-92-5-122-35-77-110-83-133-83z"/>
     </svg>
   </a>
   <a class="youtube">
     <svg viewBox="0 0 800 800">
       <path d="M400 224c144 0 201 2 224 25 17 17 26 52.125 26 151s-9 134-26 151c-23 23-80 25-224 25s-201-2-224-25c-17-17-26-52.125-26-151s9-134 26-151c23-23 80-25 224-25zm-52 100v141l135-70z" />
     </svg>
  </a>
</div>
          <pre class="language-html">
            <code class="language-html">
&lt;div class="social">
  &lt;a class="facebook">
    &lt;svg viewBox="0 0 800 800">
      &lt;path d="M445 643h-90V419h-75v-87h75v-64q0-55 32-86 30-29 80-29 28 0 67 3v78h-47q-42 0-42 38v60h86l-11 87h-75v224z" />
    &lt;/svg>
  &lt;/a>
  &lt;a class="twitter">
    &lt;svg viewBox="0 0 800 800">
      &lt;path d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z"/>
    &lt;/svg>
  &lt;/a>
  &lt;a class="google-plus">
    &lt;svg viewBox="0 0 800 800">
      &lt;path d="M487 370c21 129-62 237-195 237-114 0-207-93-207-207s93-207 207-207c89 0 138 54 138 54l-56 54s-29-32-82-32c-71 0-128 59-128 131 0 73 57 131 128 131 81 0 113-58 117-90H292v-71h195zm189-59v59h59v60h-59v59h-59v-59h-59v-60h59v-59h59z" />
    &lt;/svg>
  &lt;/a>
  &lt;a class="linkedin">
    &lt;svg viewBox="0 0 800 800">
      &lt;path d="M268 629h-97V319h97zm157 0h-97V319h93v42h1q31-50 93-50 114 0 114 133v185h-96V466q0-70-49-70-59 0-59 69z" />
      &lt;circle cx="219" cy="220" r="56"/>
    &lt;/svg>
  &lt;/a>
  &lt;a class="instagram">
    &lt;svg viewBox="0 0 800 800">
      &lt;path d="M150 400c0-119 0-166 42-208s88-42 208-42 166 0 208 42 42 89 42 208 0 166-42 208-88 42-208 42-166 0-208-42-42-89-42-208zm455 0c0-114 0-148-29-176-29-29-62-29-176-29s-148 0-176 29c-29 29-29 62-29 176s0 148 29 176c29 29 62 29 176 29s148 0 176-29c29-29 29-62 29-176zM400 272a128 128 0 1 1 0 256 128 128 0 0 1 0-256zm0 211c46 0 83-37 83-83s-37-83-83-83-83 37-83 83 37 83 83 83zm163-216c0 16-13 30-30 30-16 0-30-14-30-30 0-17 14-30 30-30 17 0 30 13 30 30z"/>
    &lt;/svg>
  &lt;/a>
  &lt;a class="pinterest">
    &lt;svg viewBox="0 0 800 800">
      &lt;path d="M287 681c-9-3-15-77-6-115l38-163s-9-20-9-49c0-46 26-80 59-80 28 0 42 21 42 46 0 28-19 71-28 110-8 33 17 59 49 59 58 0 104-61 104-150 0-79-57-134-138-134-94 0-148 69-148 142 0 28 9.7 57.4 23 74 4 5 5 6 2 17l-8 31s-2 9.5-14 3c-41-22.3-63-78-63-126 0-104 75-199 217-199 114 0 203 81 203 190 0 113-72 205-171 205-55 0-75-38-75-38l-21 78c-11 41-47 102-56 99z" />
    &lt;/svg>
  &lt;/a>
  &lt;a class="flickr">
     &lt;svg viewBox="0 0 800 800">
       &lt;circle cx="234" cy="400" r="136" class="flickr-blue"/>
       &lt;circle cx="566" cy="400" r="136" class="flickr-pink"/>
     &lt;/svg>
   &lt;/a>
   &lt;a class="snapchat">
     &lt;svg viewBox="0 0 800 800">
       &lt;path d="M400 152c-23 0-98 6-133 83-14 30-7 82-5 122-14 14-38-3-48-3-20 0-39 21 1 36 21 8 55 16 39 49-2 3-36 79-112 94-10 2-9 25 63 34 8 1 6 35 17 35s23-5 42-5c65 0 68 50 136 50s71-50 136-50c19 0 31 5 42 5s9-34 17-35c72-9 73-32 63-34-76-15-110-91-112-94-16-33 18-41 39-49 40-15 21-36 1-36-10 0-34 17-48 3 2-40 9-92-5-122-35-77-110-83-133-83z"/>
     &lt;/svg>
   &lt;/a>
   &lt;a class="youtube">
     &lt;svg viewBox="0 0 800 800">
       &lt;path d="M400 224c144 0 201 2 224 25 17 17 26 52.125 26 151s-9 134-26 151c-23 23-80 25-224 25s-201-2-224-25c-17-17-26-52.125-26-151s9-134 26-151c23-23 80-25 224-25zm-52 100v141l135-70z" />
     &lt;/svg>
  &lt;/a>
&lt;/div>
&lt;!--
Copyright (c) 2016 by Andreas Larsen (http://codepen.io/larsenwork/pen/admEZM)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

            </code>
          </pre>

          <pre class="language-scss">
            <code class="language-scss">
  .social {
    a {
      svg {
        // SVG Icon Color
        fill: #fff;
        // SVG Icon Size
        width: 48px;
      }
    }
  }
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
        id: "logos",
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
        id: "header",
        content:  {

          rendered:
          `
          <p class="promo-caption">Header Size</p>
          <p class="flow-text">
            Headers should be as thin as possible to avoid taking up too much screen space, especially on small screens. If a side-nav is in use (with a logo at the top) the header could be as short as 64px tall. In general, the header should by just tall enough for the logo text to be readable with at least 8px of padding at the top and bottom of the logo.
          </p>
          <p class="promo-caption">Header Color</p>
          <p class="flow-text">
            The prefered header color is fus-green. It can be accompanied by a maximum 5px tall fus-gold border on the bottom. If a full screen video hero section is in use, the header can be transparent or have semi-transparent black background, <code>rgba(0, 0, 0, 0.37)</code>, for readability. The green header background can also be slightly transparent, <code>rgba(33,65,42,.68)</code>.
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
        id: "footer",
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
        id: "sidenav",
        content:  {

          rendered:
          `
          <p class="flow-text">
            The SideNav allows for easy access to menu options and saves screen space on small screens. It allows for more items to be displayed than in a typical header menu. It can keep the user interface from becoming cluttered and show a site's hierarchy at a glance. The side nav should be used on all sites that have multiple pages, or in page anchor links, at least for small screens. For some sites, like this one, it makes more sense to have the SideNav visible on larger screens.
          </p>
          <p class="flow-text">
            For information on variations and options available for the SideNav, please visit the <a href="http://materializecss.com/side-nav.html" title="Materialize SideNav Docs" target="_blank">Materialize SideNav Documentation</a>
          </p>
          <p class="promo-caption">SideNav Initialization</p>
          <p class="flow-text">
            Any type of SideNav will need to be initialized in your javascript file.
          </p>
          <pre class="language-javascript">
            <code class="language-javascript">
  // Initialize collapse button
  $(".button-collapse").sideNav();
            </code>
          </pre>
          <p class="promo-caption">SideNav Visible on Large Screens</p>
          <p class="flow-text">
            To use a sidebar like the one featured on this site, add the html markup included below. The rest of you content will need to be offset by the width of your sidebar to make room for it. The sidebar used on this site is 240px. The CSS included below will offset the content on large screens, and remove the offset on smaller screens. Make sure your sidebar is narrow enough for use on mobile devices.
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
          <pre class="language-css">
            <code class="language-css">
  header, main, footer {
    padding-left: 240px;
  }

  @media only screen and (max-width : 992px) {
    header, main, footer {
      padding-left: 0;
    }
  }
            </code>
          </pre>
          <p class="promo-caption">Small Screen Only SideNav</p>
          <p class="flow-text">
            Use this SideNav when you only have a few menu items that can be displayed in the header on large screens, but wouldn't fit on smaller screens. The <a href="https://franciscansquare.com/" title="Franciscan Square" target="_blank">Franciscan Square</a> website is an example of this.
          </p>
          <pre class="language-html">
            <code class="language-html">
&lt;ul class="side-nav" id="mobile-demo">
  &lt;li class="logo">
    &lt;a id="logo-container" href="/">
      &lt;img class="responsive-img"src="img/FrSqLogoH.jpg" title="Franciscan Square Logo">
    &lt;/a>
  &lt;/li>
  &lt;li>&lt;a href="/hotel">Hotel&lt;/a>&lt;/li>
  &lt;li>&lt;a href="/about">About&lt;/a>&lt;/li>
  &lt;li>&lt;a href="/local">Local&lt;/a>&lt;/li>
&lt;/ul>
            </code>
          </pre>
           `
         },
        code: ``
      },
      {
        title: {
          rendered: "Hero Section"
        },
        id: "hero-section",
        content:  {

          rendered:
          `
          <p class="flow-text">
            The Hero Section is a design element that can grab a user's attention as soon as the page loads. The Hero Section can feature a large high quality image or video. It usually features some text and a call to action. Do not add too many options in the Hero Section. One call to action in the Hero Section is ideal, but two can be used if necessary. The Hero Section is not well suited for strictly informational sites like this one, or the University Bulletin site, but is best utilized in marketing sites such as those geared toward prospective students or donors.
          </p>
          <p class="promo-caption">Hero Image</p>
          <p class="flow-text">
            The hero image will be the largest and most prominent image on your site. It should be high quality. A variety of sizes of the image should be make to fit different screen sizes. An image may look great in a landscape orientation, but not in portrait. In this case use a different image or a different cropping of the same image for portrait orientation.
          </p>
          <pre class="language-html">
            <code class="language-html">
&lt;div class="hero-section">
  &lt;div class="hero-overlay">&lt;/div>
  &lt;div class="hero-banner">
    &lt;h1 class="center light">Franciscan Square&lt;/h1>
    &lt;h4 class="center light">A bright tomorrow starts with a great today.&lt;/h4>
  &lt;/div>
&lt;/div>
            </code>
          </pre>
          <pre class="language-scss">
            <code class="language-scss">
  .hero-section {
    background-image: url("../img/hotel-exterior.jpg"); //Add image path here
    background-size: cover;
    background-attachment: fixed;
    height:calc(90vh - 64px); //Adjust image height here. Use 100vh to cover screen.
  }
            </code>
          </pre>
          <p class="promo-caption">Hero Video</p>
          <p class="flow-text">
            Using a video for the background of the hero section can be eye catching if done right, or can induce motion sickness and annoyance if poorly implemented. When using a hero video, a backup image should also be used in case the video takes a long time to load, or the user is on a mobile device. In the case of a mobile device, the video should be completely replaced with an image out of respect for the data plans of our users and to decrease load times on cellular networks.
          </p>
          <p class="flow-text">
            Ideally the video should be less than 60 seconds and make sense without sound. Users should be given the option to stop the video. Depending on the screen size and dimensions, certain parts of the video may not be visible. Any important action in the video should take place in the center to insure visibility.
          </p>
          <p class="flow-text">
            Included below is the HTML and SCSS for the hero video section on the <a href="https://franciscan.university/ma-theology/" target="_blank" title="MA Theology">MA Theology microsite</a>. All of the files for this site are available at the <a href="https://github.com/JesseRWeigel/ma-theology" target="_blank" title="MA Theology GitHub Repo">MA Theology GitHub Repo</a>.
          </p>
          <pre class="language-html">
            <code class="language-html">
&lt;div class="section valign-wrapper txt-shadow z-depth-1" id="home" name="#home">
  &lt;div class="parallax">
    &lt;video poster="img/hero-placeholder-min.jpg" loop id="bgvid" preload="none">
      &lt;source src="video/ma-theology-720p.mp4" type="video/mp4">
    &lt;/video>
  &lt;/div>
  &lt;div class="parallax vid-shade">
    &lt;i class="material-icons" id="replay">play_arrow&lt;/i>
    &lt;i class="material-icons" id="pause">pause&lt;/i>
  &lt;/div>
  &lt;div class="valign container">
    &lt;div class="row">
      &lt;h3 class="center header light">Evangelize the World&lt;/h3>
      &lt;h5 class="center">Graduate Theology from the heart of the Church since 1980&lt;/h5>
    &lt;/div>
    &lt;div class="row">
      &lt;p class="flow-text center">
        Our internationally respected faculty joyfully live out their mission to educate the most competent and dedicated Catholic leaders and teachers. We offer graduate programs in theology, catechetics, and evangelization that are accessible, comprehensive, and ecclesial.
      &lt;/p>
    &lt;/div>
    &lt;div class="row center">
      &lt;a href="#quote-banner" class="btn-large waves-effect waves-light btn-inverse slow-nav">Why Franciscan?&lt;/a>
    &lt;/div>
    &lt;div class="row center">
      &lt;a href="#pick-your-program" class="btn-large waves-effect waves-light btn-inverse slow-nav">Find Your Program&lt;/a>
    &lt;/div>
  &lt;/div>
&lt;/div>
            </code>
          </pre>
          <pre class="language-scss">
            <code class="language-scss">
#home {
 min-height: 100vh; //Set height of hero section
 padding-top: 0;
 background-color: rgba(0, 0, 0, 0.4);
 padding: 0px;

  .btn-large {
    font-size: 20px;
    text-shadow: none;
    min-width: 270px;
  }

  @media screen and (max-height: 578px) {
    padding-top: 76px; // Prevents text overlap with logo on mobile.

    .container p.flow-text {
      display: none; // Remove hero text on mobile.
    }
  }

  .parallax {
    z-index: 1;
    overflow: hidden;
    left: -250px;
    min-height: 100vh;
  }

  // Darkens video to increase readability.
  .vid-shade {
    background-color: rgba(0, 0, 0, 0.31);
    left: 0;
  }

  .valign.container {
    z-index: 2;
  }

  .flow-text {
    font-size: 120%;
    line-height: 1.5;
  }

  @media screen and (min-width: 800px) {
    background: none;
  }

  #replay, #pause {
    display: none;

    @media screen and (min-width: 800px) {
      display: block;
      position: fixed;
      bottom: 16px;
      right: 16px;
      cursor: pointer;
      opacity: .5;
      font-size: 48px;
    }
  }

  #replay.scroll, #pause.scroll {
    @media screen and (min-width: 800px) {
      position: absolute;
    }
  }
}

// Display a background image instead of a video on small screens
#home:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  background-image: url('../img/holy-door-500w-min.jpg');
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  top: 0;
}

.short-screen {
  display: none;

  @media screen and (max-height: 578px) {
    display: block;
  }
}

#bgvid {
  min-width: 100%;
  min-height: 100%;

  @media screen and (max-width: 800px) {
    display: none;
  }
}

#down-icon {
  position: relative;
  margin: (-90px) auto 0;
  display: block;
  width: 90px;
  opacity: 0.2;
  cursor: pointer;
  transition: all 0.3s;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
}
            </code>
          </pre>
           `
         },
        code: ``
      },
      {
        title: {
          rendered: "Example Sites"
        },
        id: "example-sites",
        content:  {

          rendered:
          `
          <div class="row">
            <div class="col s12 m6">
              <h5>Style Guide</h5>
              <p class="flow-text">
                This site was made using ReactJS.
              </p>
              <ul>
                <li class=""><strong style="font-weight: 600;">Features:</strong></li>
                <li class="">Fixed, Open on Wide Screen SideNav</li>
                <li class="">Slim Footer</li>
                <li class="">ScrollSpy</li>
              </ul>
              <ul>
                <li class="flow-text"><a href="#" target="_blank" title="FUS Style Guide GitHub Repo">GitHub Repo</a></li>
              </ul>

            </div>
            <div class="col s12 m6">
              <h5>Franciscan Square</h5>
              <p class="flow-text">
                A multipage static HTML site for the Franciscan Square development.
                <ul>
                  <li class=""><strong style="font-weight: 600;">Features:</strong></li>
                  <li class="">Mobile Only SideNav</li>
                  <li class="">Sticky Subheader</li>
                  <li class="">Custom Map</li>
                  <li class="">Tall Footer</li>
                </ul>
                <ul>
                  <li class="flow-text"><a href="https://franciscansquare.com" target="_blank" title="Franciscan Square">Site Link</a></li>
                  <li class="flow-text"><a href="https://github.com/JesseRWeigel/franciscan-square" target="_blank" title="Franciscan Square GitHub Repo">GitHub Repo</a></li>
                </ul>
              </p>
            </div>
            <div class="col s12 m6">
              <h5>MA Theology</h5>
              <p class="flow-text">
                One page static HTML site for prospective MA Theology students.
                <ul>
                  <li class=""><strong style="font-weight: 600;">Features:</strong></li>
                  <li class="">Transparent Header</li>
                  <li class="">Appear on Scroll-up Sticky Header</li>
                  <li class="">Hero Video</li>
                  <li class="">Hero Image (mobile)</li>
                  <li class="">Bottom Sheet Modal</li>
                </ul>
                <ul>
                  <li class="flow-text"><a href="https://franciscan.university/ma-theology" target="_blank" title="MA Theology Site">Site Link</a></li>
                  <li class="flow-text"><a href="https://github.com/JesseRWeigel/ma-theology" target="_blank" title="MA Theology GitHub Repo">GitHub Repo</a></li>
                </ul>
              </p>
            </div>
            <div class="col s12 m6">
              <h5>franciscan.university</h5>
              <p class="flow-text">
                One page static HTML site for prospective undergrad students.
                <ul>
                  <li class=""><strong style="font-weight: 600;">Features:</strong></li>
                  <li class="">Transparent Header</li>
                  <li class="">Appear on Scroll-up Sticky Header</li>
                  <li class="">Hero Video</li>
                  <li class="">Hero Image (mobile)</li>
                  <li class="">Full Screen Image Carousel</li>
                  <li class="">Prominent Alternate Colors</li>
                  <li class="">Slim Footer</li>
                </ul>
                <ul>
                  <li class="flow-text"><a href="https://franciscan.university" target="_blank" title="franciscan.university">Site Link</a></li>
                  <li class="flow-text"><a href="https://github.com/JesseRWeigel/franciscan.university" target="_blank" title="franciscan.university GitHub Repo">GitHub Repo</a></li>
                </ul>
              </p>
            </div>
          </div>
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
    // Pass this.state.sections as props to Header and then on to SideNav to create links
    //<Header sections={this.state.sections} />
    return (
      <div>
        <Header sections={this.state.sections} />
        <main>
          <div className="container">
            <div className="row">
                {this.state.sections.map(function(section, i){
                  return <Section id={section.id} header={section.title.rendered} content={section.content.rendered} key={i} code={section.code}/>;
                })}
            </div>
          </div>
        </main>
        <Footer />
      </div>

    );
  }
}

export default App;
