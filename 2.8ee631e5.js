/*! For license information please see 2.8ee631e5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{182:function(e,t,a){"use strict";var n=a(0),r=a(186);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},183:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(175),i=a(178),s=a(177),u=a(179),d=a(174);function m(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,f=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),b=Object(s.a)(c),v=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:f?p:l}:Object.assign({isNavLink:!0,activeClassName:m,to:b},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(v)}}:null),h),u)}function f(e){var t=e.items,a=e.position,i=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(c.useRef)(null),d=Object(c.useRef)(null),f=Object(c.useState)(!1),h=f[0],b=f[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var v=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":h})},o.a.createElement(m,Object(n.a)({className:v(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!h))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:a},o.a.createElement(m,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:v(c,!0)},l)))})))):o.a.createElement(m,Object(n.a)({className:v(i)},s))}function h(e){var t,a,i=e.items,s=e.className,f=(e.position,Object(r.a)(e,["items","className","position"])),h=Object(c.useRef)(null),b=Object(u.useLocation)().pathname,v=Object(c.useState)((function(){var e;return null===(e=!(null!=i&&i.some((function(e){return Object(d.isSamePath)(e.to,b)}))))||void 0===e||e})),p=v[0],g=v[1],O=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(m,Object(n.a)({className:O(s)},f)));var E=null!==(t=h.current)&&void 0!==t&&t.scrollHeight?(null===(a=h.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":p})},o.a.createElement(m,Object(n.a)({role:"button",className:O(s,!0)},f,{onClick:function(){g((function(e){return!e}))}}),f.label),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:p?void 0:E}},i.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(m,Object(n.a)({activeClassName:"menu__link--active",className:O(a)},c,{onClick:f.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]),c=a?h:f;return o.a.createElement(c,n)}},184:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(175),o=a(56),l=a.n(o);var i=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=a(174),u=a(196),d=a(57),m=a.n(d);var f=function(){var e,t=Object(u.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var l=o.content,i=o.backgroundColor,d=o.textColor,f=o.isCloseable;return!l||f&&a?null:r.a.createElement("div",{className:m.a.announcementBar,style:{backgroundColor:i,color:d},role:"banner"},r.a.createElement("div",{className:Object(c.a)(m.a.announcementBarContent,(e={},e[m.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:l}}),f?r.a.createElement("button",{type:"button",className:m.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=a(3),b=a(25),v=a(22),p=a(179),g=a(177),O=a(178),E=a(23),k=a(198);function j(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var y=a(199);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function N(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var S="Ctrl";var T=r.a.forwardRef((function(e,t){var a=e.translations,c=void 0===a?{}:a,o=N(e,["translations"]),l=c.buttonText,i=void 0===l?"Search":l,s=c.buttonAriaLabel,u=void 0===s?"Search":s,d=w(Object(n.useState)(null),2),m=d[0],f=d[1];return Object(n.useEffect)((function(){"undefined"!=typeof navigator&&f(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":S)}),[]),r.a.createElement("button",C({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},o,{ref:t}),r.a.createElement("span",{className:"DocSearch-Button-Container"},r.a.createElement(y.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},i)),null!==m&&r.a.createElement("span",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},m===S?r.a.createElement(j,null):m),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),L=a(176);function I(){const{locale:e,tags:t}=function(){const{i18n:e}=Object(v.default)(),t=Object(L.useAllDocsData)(),a=Object(L.useActivePluginAndVersion)(),n=Object(s.useDocsPreferredVersionByPluginId)(),r=[s.DEFAULT_SEARCH_TAG,...Object.keys(t).map((function(e){var r,c;const o=(null==a||null===(r=a.activePlugin)||void 0===r?void 0:r.pluginId)===e?a.activeVersion:void 0,l=n[e],i=t[e].versions.find((e=>e.isLast)),u=null!==(c=null!=o?o:l)&&void 0!==c?c:i;return Object(s.docVersionSearchTag)(e,u.name)}))];return{locale:e.currentLocale,tags:r}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}let P=null;function D({hit:e,children:t}){return r.a.createElement(O.a,{to:e.url},t)}function B({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(k.a)();return r.a.createElement(O.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function x({contextualSearch:e,...t}){var c,o;const{siteMetadata:l}=Object(v.default)(),i=I(),s=null!==(c=null===(o=t.searchParameters)||void 0===o?void 0:o.facetFilters)&&void 0!==c?c:[],u=e?[...i,...s]:s,d={...t.searchParameters,facetFilters:u},{withBaseUrl:m}=Object(g.b)(),f=Object(p.useHistory)(),O=Object(n.useRef)(null),[k,j]=Object(n.useState)(!1),[y,C]=Object(n.useState)(null),w=Object(n.useCallback)((()=>P?Promise.resolve():Promise.all([a.e(102).then(a.bind(null,293)),Promise.all([a.e(0),a.e(103)]).then(a.bind(null,292)),a.e(0).then(a.t.bind(null,172,7))]).then((([{DocSearchModal:e}])=>{P=e}))),[]),_=Object(n.useCallback)((()=>{w().then((()=>{j(!0)}))}),[w,j]),N=Object(n.useCallback)((()=>{j(!1)}),[j]),S=Object(n.useCallback)((e=>{w().then((()=>{j(!0),C(e.key)}))}),[w,j,C]),L=Object(n.useRef)({navigate({itemUrl:e}){f.push(e)}}).current,x=Object(n.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:m(`${t.pathname}${t.hash}`)}})))).current,A=Object(n.useMemo)((()=>e=>r.a.createElement(B,Object(h.a)({},e,{onClose:N}))),[N]),M=Object(n.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",l.docusaurusVersion),e)),[l.docusaurusVersion]);return function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,a=t.tagName;return t.isContentEditable||"INPUT"===a||"SELECT"===a||"TEXTAREA"===a}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?n():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||a()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,c,o])}({isOpen:k,onOpen:_,onClose:N,onInput:S,searchButtonRef:O}),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.a.createElement(T,{onTouchStart:w,onFocus:w,onMouseOver:w,onClick:_,ref:O}),k&&Object(b.createPortal)(r.a.createElement(P,Object(h.a)({onClose:N,initialScrollY:window.scrollY,initialQuery:y,navigator:L,transformItems:x,hitComponent:D,resultsFooterComponent:A,transformSearchClient:M},t,{searchParameters:d})),document.body))}var A=function(){const{siteConfig:e}=Object(v.default)();return r.a.createElement(x,e.themeConfig.algolia)},M=a(222),V=a.n(M),R=a(58),U=a.n(R),F=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(U.a.toggle,U.a.dark),style:a},t)},H=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(U.a.toggle,U.a.light),style:a},t)},X=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(v.default)().isClient;return r.a.createElement(V.a,Object(h.a)({disabled:!l,icons:{checked:r.a.createElement(F,{icon:a,style:n}),unchecked:r.a.createElement(H,{icon:c,style:o})}},e))},K=a(182),G=a(200),$=function(e){var t=Object(p.useLocation)(),a=Object(n.useState)(!e),r=a[0],c=a[1],o=Object(n.useRef)(!1),l=Object(n.useState)(0),i=l[0],s=l[1],u=Object(n.useState)(0),d=u[0],m=u[1],f=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return Object(G.a)((function(t){var a=t.scrollY;if(e&&!(a<d)){if(o.current)return o.current=!1,c(!1),void s(a);i&&0===a&&c(!0);var n=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&a>=i?c(!1):a+r<n&&c(!0),s(a)}}),[i,d,o]),Object(n.useEffect)((function(){e&&i&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:f,isNavbarVisible:r}},q=a(201),Y=a(202),W=a(7),z=a(183);function J(e){var t=e.mobile,a=Object(W.a)(e,["mobile"]),n=Object(v.default)(),c=n.siteConfig.baseUrl,o=n.i18n,l=o.defaultLocale,i=o.currentLocale,s=o.locales,u=o.localeConfigs,d=Object(p.useLocation)().pathname;function m(e){return u[e].label}var f=i===l?c:c.replace("/"+i+"/","/"),b=d.replace(c,"");var g=s.map((function(e){var t=""+function(e){return e===l?""+f:""+f+e+"/"}(e)+b;return{isNavLink:!0,label:m(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":""}})),O=t?"Languages":m(i);return r.a.createElement(z.a,Object(h.a)({},a,{mobile:t,label:O,items:g}))}var Q={default:function(){return z.a},localeDropdown:function(){return J},docsVersion:function(){return a(227).default},docsVersionDropdown:function(){return a(228).default},doc:function(){return a(229).default}};function Z(e){var t=e.type,a=Object(W.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=Q[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var ee=a(212),te=a(203),ae=a(60),ne=a.n(ae),re="right";var ce=function(){var e,t,a=Object(s.useThemeConfig)(),o=a.navbar,l=o.items,i=o.hideOnScroll,u=o.style,d=a.colorMode.disableSwitch,m=Object(n.useState)(!1),f=m[0],b=m[1],v=Object(n.useState)(!1),p=v[0],g=v[1],O=Object(K.a)(),E=O.isDarkTheme,k=O.setLightTheme,j=O.setDarkTheme,y=$(i),C=y.navbarRef,w=y.isNavbarVisible;Object(q.a)(f);var _=Object(n.useCallback)((function(){b(!0)}),[b]),N=Object(n.useCallback)((function(){b(!1)}),[b]),S=Object(n.useCallback)((function(e){return e.target.checked?j():k()}),[k,j]),T=Object(Y.a)();Object(n.useEffect)((function(){T===Y.b.desktop&&b(!1)}),[T]);var L=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:re)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:re)}))}}(l),I=L.leftItems,P=L.rightItems;return r.a.createElement("nav",{ref:C,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":f},e[ne.a.navbarHideable]=i,e[ne.a.navbarHidden]=!w,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:_,onKeyDown:_},r.a.createElement(te.a,null)),r.a.createElement(ee.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[ne.a.hideLogoText]=p,t))}),I.map((function(e,t){return r.a.createElement(Z,Object(h.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},P.map((function(e,t){return r.a.createElement(Z,Object(h.a)({},e,{key:t}))})),!d&&r.a.createElement(X,{className:ne.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:E,onChange:S}),r.a.createElement(A,{handleSearchBarToggle:g,isSearchBarExpanded:p}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:N}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(ee.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:N}),!d&&f&&r.a.createElement(X,{"aria-label":"Dark mode toggle in sidebar",checked:E,onChange:S})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.a.createElement(Z,Object(h.a)({mobile:!0},e,{onClick:N,key:t}))})))))))},oe=a(61),le=a.n(oe);function ie(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(W.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(g.a)(t),i=Object(g.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(O.a,Object(h.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:l},o),n)}var se=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var ue=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,u=Object(g.a)(i.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(ie,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:le.a.footerLogoLink},r.a.createElement(se,{alt:i.alt,url:u})):r.a.createElement(se,{alt:i.alt,url:u})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},de=a(10),me="light",fe="dark",he=function(e){return e===fe?fe:me},be=function(){return de.a.canUseDOM?he(document.documentElement.getAttribute("data-theme")):me},ve=function(e){try{localStorage.setItem("theme",he(e))}catch(t){console.error(t)}},pe=function(){var e=Object(s.useThemeConfig)().colorMode,t=e.disableSwitch,a=e.respectPrefersColorScheme,r=Object(n.useState)(be),c=r[0],o=r[1],l=Object(n.useCallback)((function(){o(me),ve(me)}),[]),i=Object(n.useCallback)((function(){o(fe),ve(fe)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",he(c))}),[c]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(he(e))}catch(a){console.error(a)}}),[o]),Object(n.useEffect)((function(){t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?fe:me)}))}),[]),{isDarkTheme:c===fe,setLightTheme:l,setDarkTheme:i}},ge=a(186);var Oe=function(e){var t=pe(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(ge.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},Ee="docusaurus.tab.",ke=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(Ee))e[n.substring(Ee.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},je="docusaurus.announcement.dismiss",ye="docusaurus.announcement.id",Ce=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(je,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(ye);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(ye,t),n&&localStorage.setItem(je,"false"),(n||"false"===localStorage.getItem(je))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},we=a(197);var _e=function(e){var t=ke(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=Ce(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(we.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function Ne(e){var t=e.children;return r.a.createElement(Oe,null,r.a.createElement(_e,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}function Se({locale:e,version:t,tag:a}){const n=e;return r.a.createElement(E.a,null,n&&r.a.createElement("meta",{name:"docsearch:language",content:n}),t&&r.a.createElement("meta",{name:"docsearch:version",content:t}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}function Te(e){var t=Object(v.default)(),a=t.siteConfig,n=t.i18n.currentLocale,c=a.favicon,o=a.themeConfig,l=o.image,i=o.metadatas,u=a.url,d=e.title,m=e.description,f=e.image,b=e.keywords,p=e.permalink,O=e.searchMetadatas,k=Object(s.useTitleFormatter)(d),j=f||l,y=Object(g.a)(j,{absolute:!0}),C=Object(g.a)(c),w=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("html",{lang:w}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),c&&r.a.createElement("link",{rel:"shortcut icon",href:C}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:y}),j&&r.a.createElement("meta",{name:"twitter:image",content:y}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),p&&r.a.createElement("meta",{property:"og:url",content:u+p}),p&&r.a.createElement("link",{rel:"canonical",href:u+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(Se,Object(h.a)({tag:s.DEFAULT_SEARCH_TAG,locale:n},O)),r.a.createElement(E.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(h.a)({key:"metadata_"+t},e))}))))}a(62);var Le=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(63);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return Le(),r.a.createElement(Ne,null,r.a.createElement(Te,e),r.a.createElement(i,null),r.a.createElement(f,null),r.a.createElement(ce,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(ue,null))}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},196:function(e,t,a){"use strict";var n=a(0),r=a(197);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},197:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},198:function(e,t,a){"use strict";var n=a(179),r=a(10),c=a(22);t.a=function(){const e=Object(n.useHistory)(),t=Object(n.useLocation)(),{siteConfig:{baseUrl:a}={}}=Object(c.default)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}}},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},200:function(e,t,a){"use strict";var n=a(0),r=a(10),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},201:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},202:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},203:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c);t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:i,width:a,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},212:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(178),i=a(175),s=a(22),u=a(182),d=a(59),m=a.n(d),f=function(e){var t=Object(s.default)().isClient,a=Object(u.a)().isDarkTheme,c=e.sources,l=e.className,d=e.alt,f=void 0===d?"":d,h=Object(r.a)(e,["sources","className","alt"]),b=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,b.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:f,className:Object(i.a)(m.a.themedImage,m.a["themedImage--"+e],l)},h))})))},h=a(177),b=a(174),v=a(181);t.a=function(e){var t=Object(s.default)().isClient,a=Object(b.useThemeConfig)().navbar,c=a.title,i=a.logo,u=void 0===i?{src:""}:i,d=e.imageClassName,m=e.titleClassName,p=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(h.a)(u.href||"/"),O=u.target?{target:u.target}:Object(v.a)(g)?{}:{rel:"noopener noreferrer",target:"_blank"},E={light:Object(h.a)(u.src),dark:Object(h.a)(u.srcDark||u.src)};return o.a.createElement(l.a,Object(n.a)({to:g},p,O),u.src&&o.a.createElement(f,{key:t,className:d,sources:E,alt:u.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:m},c))}},222:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(223)),i=m(a(1)),s=m(a(224)),u=m(a(225)),d=a(226);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},223:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},224:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},225:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},226:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},227:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(183),i=a(176),s=a(174);function u(e){var t,a=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),m=Object(i.useActiveVersion)(u),f=Object(s.useDocsPreferredVersion)(u).preferredVersion,h=Object(i.useLatestVersion)(u),b=null!==(t=null!=m?m:f)&&void 0!==t?t:h,v=null!=a?a:b.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.a.createElement(l.a,Object(n.a)({},d,{label:v,to:p}))}},228:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(183),i=a(176),s=a(174),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,c=e.mobile,d=e.docsPluginId,m=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,h=e.dropdownItemsAfter,b=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),v=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),O=Object(s.useDocsPreferredVersion)(d),E=O.preferredVersion,k=O.savePreferredVersionName;var j=null!==(t=null!==(a=v.activeVersion)&&void 0!==a?a:E)&&void 0!==t?t:g,y=c?"Versions":j.label,C=c?void 0:u(j).path;return o.a.createElement(l.a,Object(n.a)({},b,{mobile:c,label:y,to:C,items:function(){var e=p.map((function(e){var t=(null==v?void 0:v.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==v?void 0:v.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(f,e,h);if(!(t.length<=1))return t}(),isActive:m?function(){return!1}:void 0}))}},229:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(183),i=a(176),s=a(175),u=a(174);function d(e){var t,a,c=e.docId,d=e.activeSidebarClassName,m=e.label,f=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),b=Object(i.useActiveDocContext)(f),v=b.activeVersion,p=b.activeDoc,g=Object(u.useDocsPreferredVersion)(f).preferredVersion,O=Object(i.useLatestVersion)(f),E=null!==(t=null!=v?v:g)&&void 0!==t?t:O,k=E.docs.find((function(e){return e.id===c}));if(!k)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+E.name+".\nAvailable docIds=\n- "+E.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},h,{className:Object(s.a)(h.className,(a={},a[d]=p&&p.sidebar===k.sidebar,a)),label:null!=m?m:k.id,to:k.path}))}}}]);