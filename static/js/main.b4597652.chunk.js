(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(n,e,t){n.exports=t(47)},23:function(n,e,t){},24:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(13),i=t.n(a),l=(t(23),t(17)),c=t(2),u=(t(24),t(1)),d=t(6),s=t.n(d);function m(){var n=Object(c.a)(["\n  width: 100%;\n  padding: 10px 0 10px 0;\n\n  background-color: ",";\n  color: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: bold;\n  font-size: 22px;\n"]);return m=function(){return n},n}var p=u.b.div(m(),(function(n){return n.backgroundColor||"#0f4c75"}),(function(n){return n.color||"#bbe1fa"}));function f(){var n=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  min-height: ",";\n  padding: ",";\n  background: ",";\n\n  color: ",";\n\n  text-align: ",";\n\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n  justify-content: ",";\n\n  font-size: 16px;\n\n  a {\n    position: relative;\n    bottom: -30px;\n\n    color: #e41b4d;\n    font-size: 18px;\n  }\n\n  span {\n    color: #4286f4;\n  }\n"]);return f=function(){return n},n}var h=u.b.div(f(),(function(n){return n.minHeight||""}),(function(n){return n.padding||""}),(function(n){return n.backgroundColor||""}),(function(n){return n.color}),(function(n){return n.textAlign||"center"}),(function(n){return n.flexRow?"row":"column"}),(function(n){return n.justifyContent||"center"}));function g(){var n=Object(c.a)(["\n  width: ",";\n\n  border: none;\n  color: white;\n\n  display: inline-block;\n\n  /* if disabled, change cursor/fontcolor */\n  cursor: ",";\n  color: ",";\n\n  margin: ",";\n  padding: 12px 18px;\n  border-radius: 6px;\n  background-color: #016e9f; /* default/fallback */\n\n  /* Theme based colors */\n  background-color: ",";\n  background-color: ",";\n  background-color: ",";\n  background-color: ",";\n\n  background-color: ",";\n\n  color: ",";\n  color: ",";\n  color: ",";\n\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  transition: all 0.3s ease;\n\n  > i {\n    margin-right: 0.5rem;\n  }\n\n  :hover {\n    /* no hover effect for disabled button */\n    /* different brightness for secondary (weaker) */\n\n    filter: ",";\n  }\n"]);return g=function(){return n},n}var b=u.b.button(g(),(function(n){return n.width||""}),(function(n){return"disabled"===n.type?"default":"pointer"}),(function(n){return"disabled"===n.type?"rgb(220,220,220)":"white"}),(function(n){return n.margin}),(function(n){return"primary"===n.type?n.theme.colorPrimary:""}),(function(n){return"secondary"===n.type?n.theme.colorSecondary:""}),(function(n){return"warning"===n.type?n.theme.colorWarning:""}),(function(n){return"disabled"===n.type?n.theme.colorDisabled:""}),(function(n){return n.backgroundColor}),(function(n){return"primary"===n.type?n.theme.buttonFontColorPrimary:""}),(function(n){return"secondary"===n.type?n.theme.buttonFontColorSecondary:""}),(function(n){return"warning"===n.type?n.theme.buttonFontColorWarning:""}),(function(n){return"disabled"===n.type?"":"brightness(120%)"}));function x(){var n=Object(c.a)(["\n  width: ",";\n  min-height: ",";\n  cursor: ",";\n\n  padding: ",";\n  margin: ",";\n\n  background-color: ",";\n  color: ",";\n  border-radius: 6px;\n\n  box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.2);\n\n  overflow: hidden;\n\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n\n  :hover {\n    /*Show hover effects if clickable / cursor=pointer*/\n    filter: ",";\n\n    box-shadow: ",";\n  }\n"]);return x=function(){return n},n}var w=u.b.div(x(),(function(n){return n.width||"200px"}),(function(n){return n.height||"250px"}),(function(n){return n.cursorStyle||"default"}),(function(n){return n.padding||"0.4rem 0 0 1rem"}),(function(n){return n.margin||"0.0rem 1rem 1rem 0"}),(function(n){return n.backgroundColor||"white"}),(function(n){return n.fontColor||"rgb(33, 33, 33)"}),(function(n){return"pointer"===n.cursorStyle?"brightness(98%)":""}),(function(n){return"pointer"===n.cursorStyle?"0 6px 12px rgba(0, 0, 0, 0.25)":""}));w.defaultProps={cursorStyle:"default"};var E=w;function v(){var n=Object(c.a)(["\n  width: ",";\n  height: ",";\n  background-color: ",";\n  color: ",";\n\n  padding: ",";\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  align-items: ",";\n  justify-content: ",";\n\n  flex-wrap: nowrap;\n\n  text-align: ",";\n\n  overflow-x: ",";\n  overflow-y: ",";\n\n  > div {\n    flex: 0 0 auto;\n    /* shorthand for \n    flex-grow 0 \n    flex-shrink 0\n    flex-basis auto */\n  }\n"]);return v=function(){return n},n}var y=u.b.div(v(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.backgroundColor}),(function(n){return n.fontColor}),(function(n){return n.padding||""}),(function(n){return n.alignItems||""}),(function(n){return n.justifyContent||""}),(function(n){return n.textAlign||""}),(function(n){return n.overflowX||"hidden"}),(function(n){return n.overflowY||"auto"}));function k(){var n=Object(c.a)(["\n  width: ",";\n  height: ",";\n  min-height: min-content;\n  background-color: ",";\n  color: ",";\n\n  padding: ",";\n  margin: ",";\n\n  position: ",";\n  bottom: ",";\n\n  display: flex;\n  flex-wrap: nowrap;\n  flex: 1, 1, 0;\n\n  align-items: ",";\n  justify-content: ",";\n\n  overflow-x: ",";\n  overflow-y: ",';\n\n  /* All children keep their size */\n  > * {\n    flex: 0 0 auto;\n    /* shorthand for \n    flex-grow 0 \n    flex-shrink 0\n    flex-basis auto */\n  }\n\n  /* Needed to keep padding on X overflow, right-side */\n  > div:last-child::after {\n    content: "";\n    position: absolute;\n    height: 100%;\n    width: 2rem;\n    display: inline-block;\n    margin-left: 2rem;\n  }\n']);return k=function(){return n},n}var C=u.b.div(k(),(function(n){return n.width||"100%"}),(function(n){return n.height||""}),(function(n){return n.backgroundColor||""}),(function(n){return n.fontColor||"black"}),(function(n){return n.padding||""}),(function(n){return n.margin||""}),(function(n){return n.position||"relative"}),(function(n){return n.bottom||""}),(function(n){return n.alignItems||""}),(function(n){return n.justifyContent||""}),(function(n){return n.overflowX||"auto"}),(function(n){return n.overflowY||"hidden"}));function j(){var n=Object(c.a)(["\n  background-color: transparent;\n  border: 2px solid #6a2c70;\n  color: #6a2c70;\n\n  :hover {\n    filter: brightness(140%);\n  }\n"]);return j=function(){return n},n}function F(){var n=Object(c.a)(["\n  padding: 0 0.5rem 0.5rem 0.5rem;\n  text-align: left;\n  h4 {\n    font-size: 24px;\n  }\n  p {\n    margin-bottom: 1rem;\n    height: 80px;\n  }\n"]);return F=function(){return n},n}function L(){var n=Object(c.a)(["\n  margin: 0.2rem 0.2rem 0.2rem 0;\n  padding: 4px 8px 4px 8px;\n\n  background-color: #b83b5e;\n  color: white;\n  border-radius: 50vh;\n  font-size: 12px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return L=function(){return n},n}function R(){var n=Object(c.a)(["\n  width: 100%;\n  height: 270px;\n\n  background-color: #016e9f; /* fall back */\n  background: linear-gradient(to right, #26afed, #016e9f);\n\n  position: relative;\n  top: 0;\n  left: 0;\n\n  img {\n    width: 100%;\n    height: 100%;\n\n    /* Fit and position it */\n    object-fit: cover;\n    object-position: 60% 0px;\n  }\n"]);return R=function(){return n},n}var O=u.b.div(R()),S=u.b.div(L()),D=Object(u.b)(y)(F()),P=Object(u.b)(b)(j());function z(n){var e=n.title,t=n.description,r=n.tags,a=n.imageURL;function i(n){n.length>=1?window.open(n,"_blank"):console.log("URL to open has a length of 0.")}return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{width:"320px",height:"520px",fontColor:"#016e9f",padding:"0 0 0 0"},o.a.createElement(O,null,o.a.createElement("img",{src:"/portfolio"+a,alt:"screenshot"})),o.a.createElement(D,null,o.a.createElement("h4",null,e),o.a.createElement(C,null,void 0!==r?r.map((function(n){return o.a.createElement(S,{key:n},n)})):""),o.a.createElement("p",{style:{display:"flex",flex:"1,1,0"}},t)),o.a.createElement(C,{bottom:"-20px",justifyContent:"space-evenly"},o.a.createElement(b,{type:"primary",onClick:function(){void 0!==n.demoURL?i(n.demoURL):console.log("Demo URL is undefined")}},"Demo"),o.a.createElement(P,{onClick:function(){void 0!==n.githubURL?i(n.githubURL):console.log("View On Github URL is undefined")}},"View On Github"))))}function B(){var n=Object(c.a)(["\n  width: 30%;\n  padding: 2rem;\n\n  background: ","; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to right,\n    ",",\n    ","\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to right,\n    ",",\n    ","\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n  color: white;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  text-align: left;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 30%;\n  }\n"]);return B=function(){return n},n}function G(){var n=Object(c.a)(["\n  width: 70%;\n  height: 100%;\n\n  text-align: left;\n  padding: 2rem;\n\n  .topdetails {\n    width: 100%;\n    padding-left: 2rem;\n    color: #4b4b4b;\n\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n    overflow-wrap: break-word;\n\n    a {\n      padding: 0 1rem 0 0;\n      margin: 0;\n      bottom: 0;\n    }\n  }\n  .logo {\n    width: 100px;\n    height: 100px;\n    border-radius: 10px;\n  }\n\n  .screenshots {\n    display: flex;\n    flex: row;\n\n    overflow-x: auto;\n\n    img {\n      padding-right: 2rem;\n      padding-bottom: 1rem;\n      width: 480px;\n      height: 320px;\n    }\n  }\n\n  hr.solid {\n    border-top: 2px solid #016e9f;\n    margin-bottom: 1rem;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 1rem 0 1rem 0;\n\n    .topdetails {\n      padding: 0;\n      flex-direction: column;\n      text-align: center;\n    }\n  }\n"]);return G=function(){return n},n}function M(){var n=Object(c.a)(["\n  width: 90%;\n  background-color: white;\n\n  margin: 1rem 0 3rem 0;\n\n  border-radius: 6px;\n  box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.2);\n\n  display: flex;\n  flex-direction: row;\n\n  @media (max-width: 768px) {\n    width: 99%;\n    flex-direction: column;\n  }\n"]);return M=function(){return n},n}var U=u.b.div(M()),I=u.b.div(G()),N=u.b.div(B(),(function(n){return n.theme.headerGradientLight||"#26afed"}),(function(n){return n.theme.headerGradientLight}),(function(n){return n.theme.headerGradientDark}),(function(n){return n.theme.headerGradientLight}),(function(n){return n.theme.headerGradientDark}));function A(n){var e=n.appIcon,t=n.title,r=n.description,a=n.facebookLink,i=n.twitterLink,l=n.wikiLink,c=n.youtubeLink,u=n.facts,d=n.tech,s=n.screenshots;return o.a.createElement(o.a.Fragment,null,o.a.createElement(U,null,o.a.createElement(I,null,o.a.createElement(y,{width:"100%"},o.a.createElement("div",{className:"topdetails"},o.a.createElement("img",{className:"logo",src:"/portfolio"+e,alt:"app-icon"}),o.a.createElement(y,{padding:"0px 1.2rem 0px 1.2rem"},o.a.createElement("h2",null,t),o.a.createElement("hr",{className:"solid"}),o.a.createElement("p",{style:{paddingTop:"1rem",paddingBottom:"1rem"}},r),o.a.createElement("p",null,void 0!==i&&o.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Twitter"),void 0!==c&&o.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"Youtube"),void 0!==a&&o.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"Facebook"),void 0!==l&&o.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Wiki")),o.a.createElement("p",{style:{color:"#FF7700",padding:"3rem 0 2rem 0"}},"Note: Game was removed from sale in May 2020."))),void 0!==s&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{style:{color:"#26afed",textAlign:"center",fontSize:"0.8rem"}},o.a.createElement("i",null,"Scroll to view screenshots")),o.a.createElement("div",{className:"screenshots"},void 0!==s?s.map((function(n){return o.a.createElement("img",{key:n.alt,src:"/portfolio"+n.url,alt:n.alt})})):"")))),o.a.createElement(N,null,o.a.createElement("h3",{style:{color:"#BBE1FA",padding:"0.6rem 0 0.2rem 0"}},"Facts"),o.a.createElement("ul",null,void 0!==u?u.map((function(n){return o.a.createElement("li",{key:n},n)})):""),o.a.createElement("h3",{style:{color:"#BBE1FA",padding:"4.6rem 0 0.2rem 0"}},"Tech Used"),o.a.createElement("ul",null,void 0!==d?d.map((function(n){return o.a.createElement("li",{key:n},n)})):""))))}function W(){var n=Object(c.a)(["\n  width: 100vw;\n  height: 60px;\n  z-index: 1000; /*Layered on top of everything */\n\n  background: ","; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to right,\n    ",",\n    ","\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to right,\n    ",",\n    ","\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  /* flex-end without name in Navbar, space-between if name is in navbar */\n  justify-content: flex-end;\n\n  /* My Name */\n  > h4 {\n    padding-left: 0.5rem;\n    color: #bbe1fa;\n    font-weight: bold;\n    font-size: 24px;\n  }\n\n  #nav {\n    list-style: none;\n\n    display: flex;\n    flex-flow: row nowrap;\n\n    align-items: center;\n\n    font-weight: bold;\n    font-size: 16px;\n    color: white;\n\n    transition: transform 0.2s;\n\n    li {\n      padding: 0.3rem;\n      margin-right: 1.7rem;\n      cursor: pointer;\n      transition: all 0.2s;\n\n      :hover {\n        color: #e41b4d;\n        text-shadow: 0px 4px 4px rgba(15, 76, 117, 0.4);\n      }\n    }\n\n    /* fake button */\n    #contactme-button {\n      padding: 0.6rem 1.5rem 0.6rem 1.5rem;\n      background-color: #e41b4d;\n      /*\n      border: 2px solid #e41b4d;\n      */\n      border-radius: 6px;\n      cursor: pointer;\n      transition: all 0.2s;\n\n      :hover {\n        color: white;\n        filter: brightness(120%);\n\n        /*\n        background-color: white;\n        border: 2px solid #e41b4d;\n        color: #e41b4d;\n        */\n      }\n    }\n\n    @media (max-width: 768px) {\n      flex-flow: column nowrap;\n\n      background: ",";\n\n      position: fixed;\n      top: 0;\n      right: 0;\n      width: 300px;\n      height: 110%;\n\n      padding-top: 3rem;\n\n      transform: ",";\n\n      li {\n        margin: 1.5rem 1.5rem 1.5rem 0;\n        font-size: 1.5rem;\n      }\n    }\n  }\n"]);return W=function(){return n},n}var _=u.b.div(W(),(function(n){return n.theme.headerGradientLight||"#26afed"}),(function(n){return n.theme.headerGradientLight}),(function(n){return n.theme.headerGradientDark}),(function(n){return n.theme.headerGradientLight}),(function(n){return n.theme.headerGradientDark}),(function(n){return n.theme.headerGradientDark||"#26afed"}),(function(n){return n.open?"translateX(0%)":"translateX(100%)"}));function T(n){var e=n.homeRef,t=n.aboutMeRef,r=n.webProjectsRef,a=n.gamesRef,i=n.contactMeRef,l=n.closeNav;function c(n){var e={top:n.current.offsetTop,behavior:"smooth"};window.scroll(e),l()}return o.a.createElement("ul",{id:"nav"},o.a.createElement("li",{onClick:c.bind(this,e)},"Home"),o.a.createElement("li",{onClick:c.bind(this,t)},"About Me"),o.a.createElement("li",{onClick:c.bind(this,r)},"Web Projects"),o.a.createElement("li",{onClick:c.bind(this,a)},"Games"),o.a.createElement("li",{id:"contactme-button",onClick:c.bind(this,i)},"Contact Me"))}function q(){var n=Object(c.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 14px;\n  right: 20px;\n\n  display: flex;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: white;\n    border-radius: 50vh; /* perfectly round corners */\n\n    box-shadow: 0px 4px 4px rgba(48, 48, 48, 0.6);\n\n    /*animation */\n    transform-origin: 1px;\n    transition: transform 0.2s;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n\n    @media (min-width: 768px) {\n      display: none;\n    }\n  }\n"]);return q=function(){return n},n}var X=u.b.div(q(),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"}));function H(n){return o.a.createElement(X,{open:n.open,onClick:n.onClick},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}function V(){var n=Object(c.a)(["\n  position: relative;\n\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: #42c3ff;\n  color: #bbe1fa;\n  font-size: 40px;\n\n  z-index: 10;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n\n  left: 886px;\n  top: 154px;\n\n  transition: all 0.2s;\n\n  :hover {\n    transform: scale(1.1);\n    filter: brightness(140%);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);\n  }\n\n  /* Strip the a tag of it's default styling (pass it's color from parent) */\n  a {\n    color: inherit;\n  }\n\n  /* Position of buttons */\n\n  @media (max-width: 768px) {\n    left: 54%;\n    top: 50px;\n  }\n\n  &.social-linkedin {\n    left: 820px;\n    top: 160px;\n\n    @media (max-width: 768px) {\n      left: 44%;\n      top: 50px;\n    }\n  }\n\n  &.social-twitter {\n    left: 786px;\n    top: 190px;\n\n    @media (max-width: 768px) {\n      left: 38%;\n      top: 70px;\n    }\n  }\n"]);return V=function(){return n},n}function Y(){var n=Object(c.a)(["\n  position: absolute;\n  height: 50%;\n\n  left: 150px;\n  top: 190px;\n\n  color: white;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  span {\n    font-size: 48px;\n    font-weight: bold;\n    color: #bbe1fa;\n  }\n\n  p {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n\n    font-size: 36px;\n    line-height: 60px;\n\n    text-shadow: 0px 4px 4px rgba(15, 76, 117, 0.4);\n  }\n\n  @media (max-width: 768px) {\n    left: 20px;\n    top: 50%;\n    justify-content: flex-start;\n    align-items: flex-start;\n    p {\n      font-size: 30px;\n      padding-top: 0.1rem;\n      padding-bottom: 0.1rem;\n    }\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(c.a)(["\n  position: absolute;\n  width: 460px;\n  height: 460px;\n  left: 815px;\n  top: 50%;\n  transform: translateY(-50%);\n\n  border-radius: 50%;\n\n  overflow: hidden;\n\n  /* Reposition on mobile */\n  @media (max-width: 768px) {\n    left: 45%;\n    top: 32%;\n  }\n\n  img {\n    width: 100%;\n    height: 800px;\n\n    /* Fit and position it */\n    object-fit: cover;\n    object-position: 60% -80px;\n\n    @media (max-width: 768px) {\n      object-position: 70% 0;\n    }\n  }\n"]);return Z=function(){return n},n}function J(){var n=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  height: 740px;\n  left: 0px;\n  top: 0px;\n\n  background: ","; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to right,\n    ",",\n    ","\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to right,\n    ",",\n    ","\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n  @media (max-width: 768px) {\n    overflow-x: hidden;\n  }\n"]);return J=function(){return n},n}var Q=u.b.div(J(),(function(n){return n.theme.headerGradientLight||"#26afed"}),(function(n){return n.theme.headerGradientLight}),(function(n){return n.theme.headerGradientDark}),(function(n){return n.theme.headerGradientLight}),(function(n){return n.theme.headerGradientDark})),$=u.b.div(Z()),K=u.b.div(Y()),nn=u.b.div(V());function en(){return o.a.createElement(Q,null,o.a.createElement($,null,o.a.createElement("img",{src:"/portfolio/Me2.jpg",alt:"profile-pic"})),o.a.createElement(nn,null,o.a.createElement("a",{href:"https://github.com/NeoDragonCP",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-github"}))),o.a.createElement(nn,{className:"social-linkedin"},o.a.createElement("a",{href:"https://www.linkedin.com/in/stephen-mcvicker-739362180/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-linkedin-in"}))),o.a.createElement(nn,{className:"social-twitter"},o.a.createElement("a",{href:"https://twitter.com/stephenmcvicker",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-twitter"}))),o.a.createElement(K,null,o.a.createElement("span",null,"Stephen McVicker"),o.a.createElement("p",null,"UI Developer",o.a.createElement("br",null),"Game Designer",o.a.createElement("br",null),"Software Engineer")))}function tn(){var n=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  margin-top: 1rem;\n\n  input,\n  textarea {\n    width: 100%;\n    padding: 0.5rem 0 0.5rem 0.3rem;\n    margin: 1rem 0;\n    border: none;\n    border-bottom: 2px solid ",";\n    outline: none;\n    resize: none;\n\n    font-size: 1.2rem;\n    color: #4b4b4b;\n  }\n\n  span {\n    position: absolute;\n    left: 0;\n    padding: 0.5rem 0;\n    margin: 1rem 0 0 0.2rem;\n    pointer-events: none;\n    transition: all 0.3s;\n\n    color: ",";\n  }\n\n  input:focus ~ span,\n  input:valid ~ span,\n  textarea:focus ~ span,\n  textarea:valid ~ span {\n    color: white;\n    font-size: 0.8rem;\n    transform: translateY(-2rem);\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n\n  margin: 4rem 1rem 4rem 1rem;\n\n  color: white;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    justify-content: center;\n\n    margin: 4rem 1rem 0rem 1rem;\n  }\n\n  form {\n    width: 50%;\n    padding: 1rem;\n    background-color: #88a2ac;\n\n    @media (max-width: 768px) {\n      width: 98%;\n    }\n  }\n"]);return rn=function(){return n},n}var on=u.b.div(rn()),an=u.b.div(tn(),(function(n){return n.colorBlue||"yellow"}),(function(n){return n.colorBlue}));function ln(){return o.a.createElement(on,null,o.a.createElement("p",{style:{color:"#bbe1fa",marginBottom:"1rem"}},"I'm currently open to job offers so get in touch!",o.a.createElement("br",null),"Email: mcvickerstephen@gmail.com"),o.a.createElement("form",null,o.a.createElement(an,{colorBlue:"#016e9f",colorRed:"#FC1E56"},o.a.createElement("input",{type:"text",required:"required"}),o.a.createElement("span",null,"Full Name")),o.a.createElement(an,{colorBlue:"#016e9f",colorRed:"#FC1E56"},o.a.createElement("input",{type:"text",required:"required"}),o.a.createElement("span",null,"Email")),o.a.createElement(an,{colorBlue:"#016e9f",colorRed:"#FC1E56"},o.a.createElement("textarea",{required:"required"}),o.a.createElement("span",null,"Type your message....")),o.a.createElement(b,{backgroundColor:"#FC1E56"},"Contact Me")))}function cn(){var n=Object(c.a)(["\n  width: 100%;\n  padding: 1rem;\n\n  display: flex;\n  flex-direction: row;\n\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return cn=function(){return n},n}var un=u.b.div(cn()),dn={blueSuperLight:"#E3F4FF",blueLight:"#BBE1FA",blueMedium:"#26AFED",blueDark:"#016E9F",blueDark2:"#002837",blueDark3:"#01161E",redLight:"#E41B4D",redDark:"#B83B5E",purple:"#6A2C70",orange:"#FF7700",white:"#FFFFFF",gray:"#F2F2F2",black:"#4B4B4B",bgLight:"white",bgMedium:"#F2F2F2",fontPrimary:"#4B4B4B",headerGradientLight:"#26AFED",headerGradientDark:"#016E9F"};var sn=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],a=e[1],i=Object(r.useRef)(null),c=Object(r.useRef)(null),d=Object(r.useRef)(null),m=Object(r.useRef)(null),f=Object(r.useRef)(null),g=dn;return o.a.createElement(u.a,{theme:g},o.a.createElement("div",{className:"App",ref:i},o.a.createElement(_,{open:t},o.a.createElement("div",null,o.a.createElement(T,{open:t,homeRef:i,aboutMeRef:c,webProjectsRef:d,gamesRef:m,contactMeRef:f,closeNav:function(){return a(!1)}}),o.a.createElement(H,{open:t,onClick:function(){return a(!t)}}))),o.a.createElement(en,null),o.a.createElement(p,{ref:c,backgroundColor:g.blueLight,color:g.blueDark},"About Me"),o.a.createElement(h,{padding:"2rem 1rem 2rem 1rem",backgroundColor:g.bgMedium,color:g.fontPrimary,textAlign:"left"},o.a.createElement(un,null,o.a.createElement("img",{src:"/portfolio/CPMaskLogo2.png",alt:"Calis Projects Logo",width:"420px",height:"260px"}),o.a.createElement(y,{width:"100%",alignItems:"center",justifyContent:"center"},o.a.createElement("p",{style:{fontSize:"1.1rem",paddingBottom:"4rem"}},"Creative software developer with 8 years of expertise across mobile and web games and applications.",o.a.createElement("br",null)," 3+ years experience as a UI/UX Developer with modern React and JavaScript.",o.a.createElement("br",null),"Excellent focus, communication, and ability to learn rapidly.",o.a.createElement("br",null),o.a.createElement("span",null,"Born and raised in Dublin, Ireland."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{fontWeight:"bold",color:"#4B4B4B"}},"Calis Projects (logo pictured)"),o.a.createElement("br",null),"In 2012 I started my own business upon the release of my first mobile game.",o.a.createElement("br",null),"Aside from the development work, I maintained social media channels, personal websites,",o.a.createElement("br",null)," and worked remotely with excellent people from around the world.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{fontWeight:"bold",color:"#4B4B4B"}},"Actively looking for work in Front End development"),o.a.createElement("br",null),"My love for visual design, combined with my desire to constantly learn and improve has led me to want to work with a passionate team in web development. I really enjoy using React library and strive to make simple, reusable components, and not pass props all over the place. \ud83d\ude06",o.a.createElement("br",null),o.a.createElement("span",null,"Full Resume available upon request")),o.a.createElement(C,{alignItems:"center",justifyContent:"flex-start"},o.a.createElement("img",{src:"/portfolio/logoreact.png",alt:"react-logo",width:"80px",height:"80px"}),o.a.createElement("img",{src:"/portfolio/logojs.png",alt:"javascript-logo",width:"80px",height:"80px"}),o.a.createElement("img",{src:"/portfolio/logocss.png",alt:"css-logo",width:"80px",height:"80px"}),o.a.createElement("img",{src:"/portfolio/logounity.png",alt:"unity-game-engine-logo",width:"80px",height:"80px"}))))),o.a.createElement(p,{invert:!0,ref:d},"Web Projects"),o.a.createElement(h,{padding:"5rem 0 5rem 0",backgroundColor:g.blueSuperLight},o.a.createElement(C,{padding:"0.5rem 2rem 0.5rem 2rem",justifyContent:"space-between",alignItems:"center"},o.a.createElement(z,{title:"Password Generator",description:"Using styled-components, along with the ability to select custom themes, I wanted to create a React version of a tutorial by Florin Poppin.",tags:["#React","#Themes"],imageURL:"/PasswordGeneratorDesktop.png",demoURL:"https://neodragoncp.github.io/password-generator/",githubURL:"https://github.com/NeoDragonCP/password-generator"}),o.a.createElement(z,{title:"Currency Convertor",description:"External API for fetching price. Uses ES6 Map and Set to store the currency symbols. Dark theme included.",tags:["#React","#Fetch"],imageURL:"/CurrencyConverterScreenshot.png",demoURL:"https://neodragoncp.github.io/currency-converter/",githubURL:"https://github.com/NeoDragonCP/currency-converter"}),o.a.createElement(z,{title:"This website.",description:"Custom made, reusable, styled-components. Easily change styles and expand elements using props.",tags:["#React","#Components"],imageURL:"/WebsiteCodeScreenshot.png",demoURL:"https://neodragoncp.github.io/portfolio/index.html",githubURL:"https://github.com/NeoDragonCP/portfolio"})),o.a.createElement("a",{href:"https://github.com/NeoDragonCP",target:"_blank",rel:"noopener noreferrer"},"Check Out My Github For More")),o.a.createElement(p,{ref:m},"Games"),o.a.createElement(h,null,o.a.createElement(y,{width:"100%",padding:"2rem",alignItems:"center",justifyContent:"center"},o.a.createElement(s.a,{url:"https://www.youtube.com/watch?v=XxNpuetG8qI",style:{margin:"4rem 0 0 0"}}),"ZENFORMS: Protectors launch trailer.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(A,{appIcon:"/zenformsappicon.png",title:"ZENFORMS: Protectors",description:"A 2D RPG for iOS, Android.\nCapture monsters, battle others, and go on an amazing adventure.\nA great single player story to experience and robust online features,\nknown as the CP Garden, allowing you to interact with a huge community of players\nand participate in online trades, battles, and events.",facebookLink:"https://www.facebook.com/zenforms/",twitterLink:"https://twitter.com/zenforms",wikiLink:"https://zenforms.fandom.com/wiki/ZENFORMS:_Protectors_Wiki",youtubeLink:"https://www.youtube.com/user/CalisProjectsOffical",facts:["First release: September 2012","Updates and support: For 4 years+","Dedicated online community","Over 250,000 players during it's lifetime"],tech:["Objective-C","PHP + MySQL for online backend service","Cocos2D","Xcode","Photoshop","Various handcrafted tools by me such as a particle effect editor and attack creator"],screenshots:[{url:"/zpscreen6.gif",alt:"rain-battle"},{url:"/zpscreen2.png",alt:"talking-to-abel"},{url:"/zpscreen3.png",alt:"picking-your-starter"},{url:"/zpscreen1.png",alt:"2-v-1"},{url:"/zpscreen5.png",alt:"online-mode"},{url:"/zpscreen4.gif",alt:"volcano-battle"}]}),o.a.createElement(s.a,{url:"https://www.youtube.com/watch?v=xZjCAs_0-I8",style:{margin:"4rem 0 0 0"}}),"ShapeShip launch trailer.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(A,{appIcon:"/shapeshipappicon.png",title:"ShapeShip",description:"Shape Ship is easy to learn but difficult to master.\nIt's also a ton of fun! How far can you guide your ship through the endless void that is space?\nBe careful not to crash or you'll have to start again. Collect Stars and spend them on boosts and shields to help you go further.",facebookLink:"https://www.facebook.com/CalisProjects",twitterLink:"https://twitter.com/CalisProjects",youtubeLink:"https://www.youtube.com/channel/UCdTFAAia9DLfMuH2cCdoL0Q",facts:["My first project created in Unity game engine","The goal was to learn Unity and implement mobile features such as ad viewing and in-app purchases","Created and completed in just 1 month"],tech:["C#","Unity","In-App Purchases","Unity Ads"]}))),o.a.createElement(h,{ref:f,backgroundColor:"#016e9f",minHeight:"300px",color:"#E3F4FF",padding:"2rem 1rem 1rem 1rem"},o.a.createElement("h2",null,"Contact Me"),o.a.createElement(ln,null),o.a.createElement(y,{width:"100%",justifyContent:"center",alignItems:"center",fontColor:"white",padding:"6rem 1rem 0rem 1rem"},o.a.createElement("p",null,"Handcrafted by me, Stephen McVicker.",o.a.createElement("br",null)," Original design in Figma.",o.a.createElement("br",null)," Created with React, my own custom styled-components, and love \u2764\ufe0f. View source on"," ",o.a.createElement("span",{style:{textDecoration:"underline",color:"#FC1E56",cursor:"pointer"}},"Github"),".")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(sn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b4597652.chunk.js.map