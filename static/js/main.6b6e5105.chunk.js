(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(n,e,t){n.exports=t(47)},23:function(n,e,t){},24:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(12),i=t.n(a),l=(t(23),t(17)),c=(t(24),t(13)),u=t.n(c),s=t(1),d=t(2);function m(){var n=Object(s.a)(["\n  width: 100%;\n  padding: 10px 0 10px 0;\n\n  background-color: ",";\n  color: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: bold;\n  font-size: 22px;\n"]);return m=function(){return n},n}var p=d.a.div(m(),(function(n){return n.invert?"#0f4c75":"#bbe1fa"}),(function(n){return n.invert?"#bbe1fa":"#0f4c75"}));function f(){var n=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  min-height: ",";\n  padding: ",";\n  background: ",";\n\n  text-align: ",";\n\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n  justify-content: ",";\n\n  font-size: 16px;\n\n  a {\n    position: relative;\n    bottom: -30px;\n\n    color: #e41b4d;\n    font-size: 18px;\n  }\n\n  span {\n    color: #4286f4;\n  }\n"]);return f=function(){return n},n}var h=d.a.div(f(),(function(n){return n.minHeight||""}),(function(n){return n.padding||""}),(function(n){return n.backgroundColor||""}),(function(n){return n.textAlign||"center"}),(function(n){return n.flexRow?"row":"column"}),(function(n){return n.justifyContent||"center"}));function g(){var n=Object(s.a)(["\n  width: ",";\n\n  border: none;\n  color: white;\n\n  display: inline-block;\n\n  /* if disabled, change cursor/fontcolor */\n  cursor: ",";\n  color: ",";\n\n  margin: ",";\n  padding: 12px 18px;\n  border-radius: 6px;\n  background-color: #016e9f; /* default/fallback */\n\n  /* Theme based colors */\n  background-color: ",";\n  background-color: ",";\n  background-color: ",";\n  background-color: ",";\n\n  background-color: ",";\n\n  color: ",";\n  color: ",";\n  color: ",";\n\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  transition: all 0.3s ease;\n\n  > i {\n    margin-right: 0.5rem;\n  }\n\n  :hover {\n    /* no hover effect for disabled button */\n    /* different brightness for secondary (weaker) */\n\n    filter: ",";\n  }\n"]);return g=function(){return n},n}var b=d.a.button(g(),(function(n){return n.width||""}),(function(n){return"disabled"===n.type?"default":"pointer"}),(function(n){return"disabled"===n.type?"rgb(220,220,220)":"white"}),(function(n){return n.margin}),(function(n){return"primary"===n.type?n.theme.colorPrimary:""}),(function(n){return"secondary"===n.type?n.theme.colorSecondary:""}),(function(n){return"warning"===n.type?n.theme.colorWarning:""}),(function(n){return"disabled"===n.type?n.theme.colorDisabled:""}),(function(n){return n.backgroundColor}),(function(n){return"primary"===n.type?n.theme.buttonFontColorPrimary:""}),(function(n){return"secondary"===n.type?n.theme.buttonFontColorSecondary:""}),(function(n){return"warning"===n.type?n.theme.buttonFontColorWarning:""}),(function(n){return"disabled"===n.type?"":"brightness(120%)"}));function x(){var n=Object(s.a)(["\n  width: ",";\n  min-height: ",";\n  cursor: ",";\n\n  padding: ",";\n  margin: ",";\n\n  background-color: ",";\n  color: ",";\n  border-radius: 6px;\n\n  box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.2);\n\n  overflow: hidden;\n\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n\n  :hover {\n    /*Show hover effects if clickable / cursor=pointer*/\n    filter: ",";\n\n    box-shadow: ",";\n  }\n"]);return x=function(){return n},n}var w=d.a.div(x(),(function(n){return n.width||"200px"}),(function(n){return n.height||"250px"}),(function(n){return n.cursorStyle||"default"}),(function(n){return n.padding||"0.4rem 0 0 1rem"}),(function(n){return n.margin||"0.0rem 1rem 1rem 0"}),(function(n){return n.backgroundColor||"white"}),(function(n){return n.fontColor||"rgb(33, 33, 33)"}),(function(n){return"pointer"===n.cursorStyle?"brightness(98%)":""}),(function(n){return"pointer"===n.cursorStyle?"0 6px 12px rgba(0, 0, 0, 0.25)":""}));w.defaultProps={cursorStyle:"default"};var v=w;function E(){var n=Object(s.a)(["\n  width: ",";\n  height: ",";\n  background-color: ",";\n  color: ",";\n\n  padding: ",";\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  align-items: ",";\n  justify-content: ",";\n\n  flex-wrap: nowrap;\n\n  text-align: ",";\n\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  > div {\n    flex: 0 0 auto;\n    /* shorthand for \n    flex-grow 0 \n    flex-shrink 0\n    flex-basis auto */\n  }\n"]);return E=function(){return n},n}var y=d.a.div(E(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.backgroundColor}),(function(n){return n.fontColor}),(function(n){return n.padding||""}),(function(n){return n.alignItems||""}),(function(n){return n.justifyContent||""}),(function(n){return n.textAlign||""}));function k(){var n=Object(s.a)(["\n  width: ",";\n  height: ",";\n  min-height: min-content;\n  background-color: ",";\n  color: ",";\n\n  padding: ",";\n  margin: ",";\n\n  position: ",";\n  bottom: ",";\n\n  display: flex;\n  flex-wrap: nowrap;\n  flex: 1, 1, 0;\n\n  align-items: ",";\n  justify-content: ",';\n\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  /* All children keep their size */\n  > * {\n    flex: 0 0 auto;\n    /* shorthand for \n    flex-grow 0 \n    flex-shrink 0\n    flex-basis auto */\n  }\n\n  /* Needed to keep padding on X overflow, right-side */\n  > div:last-child::after {\n    content: "";\n    position: absolute;\n    height: 100%;\n    width: 2rem;\n    display: inline-block;\n    margin-left: 2rem;\n  }\n']);return k=function(){return n},n}var C=d.a.div(k(),(function(n){return n.width||"100%"}),(function(n){return n.height||""}),(function(n){return n.backgroundColor||""}),(function(n){return n.fontColor||"black"}),(function(n){return n.padding||""}),(function(n){return n.margin||""}),(function(n){return n.position||"relative"}),(function(n){return n.bottom||""}),(function(n){return n.alignItems||""}),(function(n){return n.justifyContent||""}));function j(){var n=Object(s.a)(["\n  background-color: transparent;\n  border: 2px solid #6a2c70;\n  color: #6a2c70;\n\n  :hover {\n    filter: brightness(140%);\n  }\n"]);return j=function(){return n},n}function R(){var n=Object(s.a)(["\n  padding: 0 0.5rem 0.5rem 0.5rem;\n  text-align: left;\n  h4 {\n    font-size: 24px;\n  }\n  p {\n    margin-bottom: 1rem;\n    height: 80px;\n  }\n"]);return R=function(){return n},n}function O(){var n=Object(s.a)(["\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  padding: 4px 8px 4px 8px;\n\n  background-color: #b83b5e;\n  color: white;\n  border-radius: 50vh;\n  font-size: 12px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return O=function(){return n},n}function S(){var n=Object(s.a)(["\n  width: 100%;\n  height: 270px;\n\n  background-color: #016e9f; /* fall back */\n  background: linear-gradient(to right, #26afed, #016e9f);\n\n  position: relative;\n  top: 0;\n  left: 0;\n\n  img {\n    width: 100%;\n    height: 100%;\n\n    /* Fit and position it */\n    object-fit: cover;\n    object-position: 60% 0px;\n  }\n"]);return S=function(){return n},n}var z=d.a.div(S()),F=d.a.div(O()),L=Object(d.a)(y)(R()),P=Object(d.a)(b)(j());function M(n){var e=n.title,t=n.description,r=n.tags,a=n.imageURL;function i(n){n.length>=1?window.open(n,"_blank"):console.log("URL to open has a length of 0.")}return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{width:"320px",height:"520px",fontColor:"#016e9f",padding:"0 0 0 0"},o.a.createElement(z,null,o.a.createElement("img",{src:"/portfolio"+a,alt:"screenshot"})),o.a.createElement(L,null,o.a.createElement("h4",null,e),o.a.createElement(C,null,void 0!==r?r.map((function(n){return o.a.createElement(F,{key:n},n)})):""),o.a.createElement("p",{style:{display:"flex",flex:"1,1,0"}},t)),o.a.createElement(C,{bottom:"-20px",justifyContent:"space-evenly"},o.a.createElement(b,{type:"primary",onClick:function(){void 0!==n.demoURL?i(n.demoURL):console.log("Demo URL is undefined")}},"Demo"),o.a.createElement(P,{onClick:function(){void 0!==n.githubURL?i(n.githubURL):console.log("View On Github URL is undefined")}},"View On Github"))))}function N(){var n=Object(s.a)(["\n  width: 30%;\n  background-color: #016e9f;\n  color: white;\n\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 30%;\n  }\n"]);return N=function(){return n},n}function U(){var n=Object(s.a)(["\n  width: 70%;\n  height: 100%;\n\n  text-align: left;\n  padding: 2rem;\n\n  .topdetails {\n    width: 100%;\n    padding-left: 2rem;\n    color: #4b4b4b;\n\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n    overflow-wrap: break-word;\n\n    a {\n      padding: 0 1rem 0 0;\n      margin: 0;\n      bottom: 0;\n    }\n  }\n  .logo {\n    width: 100px;\n    height: 100px;\n  }\n\n  .screenshots {\n    display: flex;\n    flex: row;\n\n    overflow-x: auto;\n\n    img {\n      padding-right: 2rem;\n      padding-bottom: 1rem;\n      width: 480px;\n      height: 320px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 1rem 0 1rem 0;\n\n    .topdetails {\n      padding: 0;\n      flex-direction: column;\n      text-align: center;\n    }\n  }\n"]);return U=function(){return n},n}function I(){var n=Object(s.a)(["\n  width: 90%;\n  background-color: white;\n\n  border-radius: 6px;\n  box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.2);\n\n  display: flex;\n  flex-direction: row;\n\n  @media (max-width: 768px) {\n    width: 99%;\n    flex-direction: column;\n  }\n"]);return I=function(){return n},n}var A=d.a.div(I()),D=d.a.div(U()),B=d.a.div(N());function G(n){var e=n.appIcon,t=n.title,r=n.facebookLink,a=n.twitterLink,i=n.wikiLink,l=n.youtubeLink;return o.a.createElement(o.a.Fragment,null,o.a.createElement(A,null,o.a.createElement(D,null,o.a.createElement(y,{width:"100%"},o.a.createElement("div",{className:"topdetails"},o.a.createElement("img",{className:"logo",src:"/portfolio"+e,alt:"app-icon"}),o.a.createElement(y,{padding:"0px 1rem 0px 1rem"},o.a.createElement("h2",null,t),o.a.createElement("p",{style:{paddingBottom:"1rem"}},"A 2D RPG for iOS, Android.",o.a.createElement("br",null)," Capture monsters, battle others, and go on an amazing adventure.",o.a.createElement("br",null),"A great single player story to experience and robust online features, ",o.a.createElement("br",null),"known as the CP Garden, allowing you to interact with a huge community of players",o.a.createElement("br",null)," and participate in online trades, battles, and events."),o.a.createElement("p",null,o.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"Twitter"),o.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Youtube"),o.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"Facebook"),o.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Wiki")),o.a.createElement("p",{style:{color:"#FF7700",padding:"1rem 0 1rem 0"}},"Note: Game was removed from sale in May 2020."))),o.a.createElement("p",{style:{color:"#26afed",textAlign:"center",fontSize:"0.8rem"}},o.a.createElement("i",null,"Scroll to view screenshots")),o.a.createElement("div",{className:"screenshots"},o.a.createElement("img",{src:"/portfolio/zpscreen4.gif",alt:"volcano-battle"}),o.a.createElement("img",{src:"/portfolio/zpscreen2.png",alt:"talking-to-abel"}),o.a.createElement("img",{src:"/portfolio/zpscreen3.png",alt:"picking-your-starter"}),o.a.createElement("img",{src:"/portfolio/zpscreen1.png",alt:"2-v-1"}),o.a.createElement("img",{src:"/portfolio/zpscreen5.png",alt:"online-mode"})))),o.a.createElement(B,null,o.a.createElement("h3",{style:{color:"#BBE1FA",padding:"0.6rem 0 0.2rem 0"}},"Facts"),o.a.createElement("p",null,"First release: September 2012",o.a.createElement("br",null),"Updates and support: For 4 years+"),o.a.createElement("h3",{style:{color:"#BBE1FA",padding:"0.6rem 0 0.2rem 0"}},"Tech Used"),o.a.createElement("p",null,"Objective-C",o.a.createElement("br",null),"PHP + MySQL for online backend service",o.a.createElement("br",null),"Xcode",o.a.createElement("br",null),"Photoshop"))))}function W(){var n=Object(s.a)(["\n  width: 100vw;\n  height: 60px;\n  z-index: 1000; /*Layered on top of everything */\n\n  background-color: #016e9f; /* fall back */\n  background: linear-gradient(to right, #26afed, #016e9f);\n\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  /* flex-end without name in Navbar, space-between if name is in navbar */\n  justify-content: flex-end;\n\n  /* My Name */\n  > h4 {\n    padding-left: 0.5rem;\n    color: #bbe1fa;\n    font-weight: bold;\n    font-size: 24px;\n  }\n\n  #nav {\n    list-style: none;\n\n    display: flex;\n    flex-flow: row nowrap;\n\n    align-items: center;\n\n    font-weight: bold;\n    font-size: 16px;\n    color: white;\n\n    transition: transform 0.2s;\n\n    li {\n      padding: 0.3rem;\n      margin-right: 1.7rem;\n      cursor: pointer;\n      transition: all 0.2s;\n\n      :hover {\n        color: #e41b4d;\n        text-shadow: 0px 4px 4px rgba(15, 76, 117, 0.4);\n      }\n    }\n\n    /* fake button */\n    #contactme-button {\n      padding: 0.6rem 1.5rem 0.6rem 1.5rem;\n      background-color: #e41b4d;\n      /*\n      border: 2px solid #e41b4d;\n      */\n      border-radius: 6px;\n      cursor: pointer;\n      transition: all 0.2s;\n\n      :hover {\n        color: white;\n        filter: brightness(120%);\n\n        /*\n        background-color: white;\n        border: 2px solid #e41b4d;\n        color: #e41b4d;\n        */\n      }\n    }\n\n    @media (max-width: 768px) {\n      flex-flow: column nowrap;\n\n      background: #016e9f;\n\n      position: fixed;\n      top: 0;\n      right: 0;\n      width: 300px;\n      height: 100vh;\n\n      padding-top: 3rem;\n\n      transform: ",";\n\n      li {\n        margin: 1.5rem 1.5rem 1.5rem 0;\n        font-size: 1.5rem;\n      }\n    }\n  }\n"]);return W=function(){return n},n}var _=d.a.div(W(),(function(n){return n.open?"translateX(0%)":"translateX(100%)"}));function T(n){var e=n.homeRef,t=n.aboutMeRef,r=n.webProjectsRef,a=n.gamesRef,i=n.contactMeRef,l=n.closeNav;function c(n){var e={top:n.current.offsetTop,behavior:"smooth"};window.scroll(e),l()}return o.a.createElement("ul",{id:"nav"},o.a.createElement("li",{onClick:c.bind(this,e)},"Home"),o.a.createElement("li",{onClick:c.bind(this,t)},"About Me"),o.a.createElement("li",{onClick:c.bind(this,r)},"Web Projects"),o.a.createElement("li",{onClick:c.bind(this,a)},"Games"),o.a.createElement("li",{id:"contactme-button",onClick:c.bind(this,i)},"Contact Me"))}function X(){var n=Object(s.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 14px;\n  right: 20px;\n\n  display: flex;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: white;\n    border-radius: 50vh; /* perfectly round corners */\n\n    box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.6);\n\n    /*animation */\n    transform-origin: 1px;\n    transition: transform 0.2s;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n\n    @media (min-width: 768px) {\n      display: none;\n    }\n  }\n"]);return X=function(){return n},n}var H=d.a.div(X(),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"}));function V(n){return o.a.createElement(H,{open:n.open,onClick:n.onClick},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}function J(){var n=Object(s.a)(["\n  position: relative;\n\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: #42c3ff;\n  color: #bbe1fa;\n  font-size: 40px;\n\n  z-index: 10;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n\n  left: 886px;\n  top: 154px;\n\n  transition: all 0.2s;\n\n  :hover {\n    transform: scale(1.1);\n    filter: brightness(140%);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);\n  }\n\n  /* Strip the a tag of it's default styling (pass it's color from parent) */\n  a {\n    color: inherit;\n  }\n\n  /* Position of buttons */\n\n  @media (max-width: 768px) {\n    left: 54%;\n    top: 50px;\n  }\n\n  &.social-linkedin {\n    left: 820px;\n    top: 160px;\n\n    @media (max-width: 768px) {\n      left: 44%;\n      top: 50px;\n    }\n  }\n\n  &.social-twitter {\n    left: 786px;\n    top: 190px;\n\n    @media (max-width: 768px) {\n      left: 38%;\n      top: 70px;\n    }\n  }\n"]);return J=function(){return n},n}function Z(){var n=Object(s.a)(["\n  position: absolute;\n  height: 50%;\n\n  left: 150px;\n  top: 190px;\n\n  color: white;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  span {\n    font-size: 48px;\n    font-weight: bold;\n    color: #bbe1fa;\n  }\n\n  p {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n\n    font-size: 36px;\n    line-height: 60px;\n\n    text-shadow: 0px 4px 4px rgba(15, 76, 117, 0.4);\n  }\n\n  @media (max-width: 768px) {\n    left: 20px;\n    top: 50%;\n    justify-content: flex-start;\n    align-items: flex-start;\n    p {\n      font-size: 30px;\n      padding-top: 0.1rem;\n      padding-bottom: 0.1rem;\n    }\n  }\n"]);return Z=function(){return n},n}function q(){var n=Object(s.a)(["\n  position: absolute;\n  width: 460px;\n  height: 460px;\n  left: 815px;\n  top: 50%;\n  transform: translateY(-50%);\n\n  border-radius: 50%;\n\n  overflow: hidden;\n\n  /* Reposition on mobile */\n  @media (max-width: 768px) {\n    left: 45%;\n    top: 32%;\n  }\n\n  img {\n    width: 100%;\n    height: 800px;\n\n    /* Fit and position it */\n    object-fit: cover;\n    object-position: 60% -80px;\n\n    @media (max-width: 768px) {\n      object-position: 70% 0;\n    }\n  }\n"]);return q=function(){return n},n}function Y(){var n=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  height: 740px;\n  left: 0px;\n  top: 0px;\n\n  background: #016e9f; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to right,\n    #26afed,\n    #016e9f\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to right,\n    #26afed,\n    #016e9f\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n  @media (max-width: 768px) {\n    overflow-x: hidden;\n  }\n"]);return Y=function(){return n},n}var Q=d.a.div(Y()),$=d.a.div(q()),K=d.a.div(Z()),nn=d.a.div(J());function en(){return o.a.createElement(Q,null,o.a.createElement($,null,o.a.createElement("img",{src:"/portfolio/Me2.jpg",alt:"profile-pic"})),o.a.createElement(nn,null,o.a.createElement("a",{href:"https://github.com/NeoDragonCP",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-github"}))),o.a.createElement(nn,{className:"social-linkedin"},o.a.createElement("a",{href:"https://www.linkedin.com/in/stephen-mcvicker-739362180/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-linkedin-in"}))),o.a.createElement(nn,{className:"social-twitter"},o.a.createElement("a",{href:"https://twitter.com/stephenmcvicker",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-twitter"}))),o.a.createElement(K,null,o.a.createElement("span",null,"Stephen McVicker."),o.a.createElement("p",null,"UI Developer",o.a.createElement("br",null),"Game Designer",o.a.createElement("br",null),"Software Engineer")))}var tn=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],a=e[1],i=Object(r.useRef)(null),c=Object(r.useRef)(null),s=Object(r.useRef)(null),d=Object(r.useRef)(null),m=Object(r.useRef)(null);return o.a.createElement("div",{className:"App",ref:i},o.a.createElement(_,{open:t},o.a.createElement("div",null,o.a.createElement(T,{open:t,homeRef:i,aboutMeRef:c,webProjectsRef:s,gamesRef:d,contactMeRef:m,closeNav:function(){return a(!1)}}),o.a.createElement(V,{open:t,onClick:function(){return a(!t)}}))),o.a.createElement(en,null),o.a.createElement(p,{ref:c},"About Me"),o.a.createElement(h,{padding:"2rem 1rem 2rem 1rem",backgroundColor:"white",textAlign:"left"},o.a.createElement(y,{width:"100%",padding:"1rem",alignItems:"center",justifyContent:"center",textAlign:"center"},o.a.createElement("img",{src:"/portfolio/CPMaskLogo2.png",alt:"Calis Projects Logo",width:"420px",height:"260px"}),o.a.createElement("p",{style:{fontSize:"1.1rem",paddingBottom:"4rem"}},"Creative software developer with 8 years of expertise across mobile and web games and applications.",o.a.createElement("br",null)," 3+ years experience as a UI/UX Developer with modern React and JavaScript.",o.a.createElement("br",null),"Excellent focus, communication, and ability to learn rapidly.",o.a.createElement("br",null),o.a.createElement("span",null,"Born and raised in Dublin, Ireland."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{fontWeight:"bold",color:"#4B4B4B"}},"Calis Projects (logo pictured above)"),o.a.createElement("br",null),"In 2012 I started my own business upon the release of my first mobile game.",o.a.createElement("br",null),"Aside from the development work, I maintained social media channels, personal websites,",o.a.createElement("br",null)," and worked remotely with excellent people from around the world.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{fontWeight:"bold",color:"#4B4B4B"}},"Actively looking for work in Front End development"),o.a.createElement("br",null),"My love for visual design, combined with my desire to constantly learn and improve has led me to want to work with a passionate team in web development. I really enjoy using React library and strive to make simple, reusable components, and not pass props all over the place. \ud83d\ude06",o.a.createElement("br",null),o.a.createElement("span",null,"Full Resume available upon request")))),o.a.createElement(p,{invert:!0,ref:s},"Web Projects"),o.a.createElement(h,{padding:"5rem 0 5rem 0",backgroundColor:"#E3F4FF"},o.a.createElement(C,{padding:"0.5rem 2rem 0.5rem 2rem",justifyContent:"space-between",alignItems:"center"},o.a.createElement(M,{title:"Password Generator",description:"Using styled-components, along with the ability to select custom themes, I wanted to create a React version of a tutorial by Florin Poppin.",tags:["#React","#Themes"],imageURL:"/PasswordGeneratorDesktop.png",demoURL:"https://neodragoncp.github.io/password-generator/",githubURL:"https://github.com/NeoDragonCP/password-generator"}),o.a.createElement(M,{title:"Currency Convertor",description:"External API for fetching price. Uses ES6 Map and Set to store the currency symbols. Dark theme included.",tags:["#React","#Fetch"],imageURL:"/CurrencyConverterScreenshot.png",demoURL:"https://neodragoncp.github.io/currency-converter/",githubURL:"https://github.com/NeoDragonCP/currency-converter"}),o.a.createElement(M,{title:"This website.",description:"Custom made, reusable, styled-components. Easily change styles and expand elements using props.",tags:["#React","#Components"],imageURL:"/WebsiteCodeScreenshot.png",demoURL:"https://neodragoncp.github.io/portfolio/index.html",githubURL:"https://github.com/NeoDragonCP/portfolio"})),o.a.createElement("a",{href:"https://github.com/NeoDragonCP",target:"_blank",rel:"noopener noreferrer"},"Check Out My Github For More")),o.a.createElement(p,{ref:d},"Games"),o.a.createElement(h,null,o.a.createElement(y,{width:"100%",padding:"2rem",alignItems:"center",justifyContent:"center"},o.a.createElement(u.a,{url:"https://www.youtube.com/watch?v=XxNpuetG8qI"}),"ZENFORMS: Protectors launch trailer.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(G,{appIcon:"/zenformsappicon.png",title:"ZENFORMS: Protectors",facebookLink:"https://www.facebook.com/zenforms/",twitterLink:"https://twitter.com/zenforms",wikiLink:"https://zenforms.fandom.com/wiki/ZENFORMS:_Protectors_Wiki",youtubeLink:"https://www.youtube.com/user/CalisProjectsOffical"}))),o.a.createElement(h,{ref:m,backgroundColor:"#016e9f",minHeight:"300px"},o.a.createElement(y,{width:"400px",height:"300px",justifyContent:"space-evenly",padding:"1rem",fontColor:"white"},o.a.createElement("h3",null,"Contact Me"),o.a.createElement("p",null,"Section still under construction. Email me instead: mcvickerstephen@gmail.com"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Full Name"}),o.a.createElement("input",{type:"text",placeholder:"Email"}),o.a.createElement("input",{type:"text",placeholder:"Message"})),o.a.createElement(b,{backgroundColor:"#e41b4d"},"Contact Me"),o.a.createElement(y,{width:"100%",justifyContent:"center",alignItems:"center",fontColor:"white",padding:"2rem"},o.a.createElement("p",null,"Handcrafted by me, Stephen McVicker.",o.a.createElement("br",null)," Original design in Figma.",o.a.createElement("br",null)," Created with React, my own custom styled-components, and love \u2764\ufe0f. View source on"," ",o.a.createElement("span",{style:{textDecoration:"underline",color:"#e41b4d",cursor:"pointer"}},"Github"),"."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(tn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.6b6e5105.chunk.js.map