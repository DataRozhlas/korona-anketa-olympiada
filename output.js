!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){if("Microsoft Internet Explorer"===navigator.appName||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/)){var n=document.createElement("div");n.innerHTML='Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx">není bezpečné</a>, zvažte přechod na <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.mozilla.org/cs/firefox/new/">jiný prohlížeč</a>.',n.style.cssText="text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;",document.body.appendChild(n)}},function(e,t,n){"use strict";n.r(t);n(0);var o,r,l,i,_,u,a={},s=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var o,r=arguments,l={};for(o in t)"key"!==o&&"ref"!==o&&(l[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===l[o]&&(l[o]=e.defaultProps[o]);return h(e,l,t&&t.key,t&&t.ref)}function h(e,t,n,r){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return o.vnode&&o.vnode(l),l}function v(e){return e.children}function y(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function k(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!l++||_!==o.debounceRendering)&&((_=o.debounceRendering)||i)(b)}function b(){for(var e;l=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,o,r,l,i;e.__d&&(l=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],o=E(i,r,p({},r),t.__n,void 0!==i.ownerSVGElement,null,n,null==l?m(r):l),T(n,r),o!=l&&g(r)))}))}function w(e,t,n,o,r,l,i,_,u){var c,p,d,h,v,y,g,k=n&&n.__k||s,b=k.length;if(_==a&&(_=null!=l?l[0]:b?m(n,0):null),c=0,t.__k=x(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=k[c])||d&&n.key==d.key&&n.type===d.type)k[c]=void 0;else for(p=0;p<b;p++){if((d=k[p])&&n.key==d.key&&n.type===d.type){k[p]=void 0;break}d=null}if(h=E(e,n,d=d||a,o,r,l,i,_,u),(p=n.ref)&&d.ref!=p&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(p,n.__c||h,n)),null!=h){var s;if(null==y&&(y=h),void 0!==n.__d)s=n.__d,n.__d=void 0;else if(l==d||h!=_||null==h.parentNode){e:if(null==_||_.parentNode!==e)e.appendChild(h),s=null;else{for(v=_,p=0;(v=v.nextSibling)&&p<b;p+=2)if(v==h)break e;e.insertBefore(h,_),s=_}"option"==t.type&&(e.value="")}_=void 0!==s?s:h.nextSibling,"function"==typeof t.type&&(t.__d=_)}else _&&d.__e==_&&_.parentNode!=e&&(_=m(d))}return c++,n})),t.__e=y,null!=l&&"function"!=typeof t.type)for(c=l.length;c--;)null!=l[c]&&f(l[c]);for(c=b;c--;)null!=k[c]&&M(k[c],k[c]);if(g)for(c=0;c<g.length;c++)C(g[c],g[++c],g[++c])}function x(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)x(e[o],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?h(null,e,null,null):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null):e):e);return n}function N(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===c.test(t)?n+"px":null==n?"":n}function S(e,t,n,o,r){var l,i,_,u,a;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof o&&(l.cssText="",o=null),o)for(i in o)n&&i in n||N(l,i,"");if(n)for(_ in n)o&&n[_]===o[_]||N(l,_,n[_])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(o||e.addEventListener(t,P,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,P,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function P(e){this.l[e.type](o.event?o.event(e):e)}function E(e,t,n,r,l,i,_,u,a){var s,c,f,d,h,m,g,k,b,x,N=t.type;if(void 0!==t.constructor)return null;(s=o.__b)&&s(t);try{e:if("function"==typeof N){if(k=t.props,b=(s=N.contextType)&&r[s.__c],x=s?b?b.props.value:s.__:r,n.__c?g=(c=t.__c=n.__c).__=c.__E:("prototype"in N&&N.prototype.render?t.__c=c=new N(k,x):(t.__c=c=new y(k,x),c.constructor=N,c.render=j),b&&b.sub(c),c.props=k,c.state||(c.state={}),c.context=x,c.__n=r,f=c.__d=!0,c.__h=[]),null==c.__s&&(c.__s=c.state),null!=N.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=p({},c.__s)),p(c.__s,N.getDerivedStateFromProps(k,c.__s))),d=c.props,h=c.state,f)null==N.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==N.getDerivedStateFromProps&&k!==d&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(k,x),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(k,c.__s,x)){for(c.props=k,c.state=c.__s,c.__d=!1,c.__v=t,t.__e=n.__e,t.__k=n.__k,c.__h.length&&_.push(c),s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__=t);break e}null!=c.componentWillUpdate&&c.componentWillUpdate(k,c.__s,x),null!=c.componentDidUpdate&&c.__h.push((function(){c.componentDidUpdate(d,h,m)}))}c.context=x,c.props=k,c.state=c.__s,(s=o.__r)&&s(t),c.__d=!1,c.__v=t,c.__P=e,s=c.render(c.props,c.state,c.context),t.__k=null!=s&&s.type==v&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=c.getChildContext&&(r=p(p({},r),c.getChildContext())),f||null==c.getSnapshotBeforeUpdate||(m=c.getSnapshotBeforeUpdate(d,h)),w(e,t,n,r,l,i,_,u,a),c.base=t.__e,c.__h.length&&_.push(c),g&&(c.__E=c.__=null),c.__e=!1}else t.__e=z(n.__e,t,n,r,l,i,_,a);(s=o.diffed)&&s(t)}catch(e){o.__e(e,t,n)}return t.__e}function T(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function z(e,t,n,o,r,l,i,_){var u,c,p,f,d,h=n.props,v=t.props;if(r="svg"===t.type||r,null!=l)for(u=0;u<l.length;u++)if(null!=(c=l[u])&&((null===t.type?3===c.nodeType:c.localName===t.type)||e==c)){e=c,l[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),l=null}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else if(t!==n){if(null!=l&&(l=s.slice.call(e.childNodes)),p=(h=n.props||a).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!_){if(h===a)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(f||p)&&(f&&p&&f.__html==p.__html||(e.innerHTML=f&&f.__html||""))}(function(e,t,n,o,r){var l;for(l in n)l in t||S(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"value"===l||"checked"===l||n[l]===t[l]||S(e,l,t[l],n[l],o)})(e,v,h,r,_),t.__k=t.props.children,f||w(e,t,n,o,"foreignObject"!==t.type&&r,l,i,a,_),_||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function M(e,t,n){var r,l,i;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||C(r,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&M(r[i],t,n);null!=l&&f(l)}function j(e,t,n){return this.constructor(e,n)}function A(e,t,n){var r,l,i;o.__&&o.__(e,t),l=(r=n===u)?null:n&&n.__k||t.__k,e=d(v,null,[e]),i=[],E(t,(r?t:n||t).__k=e,l||a,a,void 0!==t.ownerSVGElement,n&&!r?[n]:l?null:s.slice.call(t.childNodes),i,n||a,r),T(i,e)}o={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return k(n.__E=n)}catch(t){e=t}throw e}},y.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),k(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},y.prototype.render=v,r=[],l=0,i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=a;var D="https://data.irozhlas.cz/korona-anketa-olympiada";"localhost"===window.location.hostname&&(D="http://localhost/korona-anketa-olympiada");var L=new XMLHttpRequest;L.addEventListener("load",(function(e){A(d("div",{id:"anketa"},JSON.parse(e.target.response).map((function(e){return d("div",{className:"respondent"},d("img",{className:"portret",src:D+"/foto/"+e.f,alt:e.p}),d("div",{className:"NE"==e.o&&"NE"==e.o0?"bio cervene":"ANO"==e.o&&"ANO"==e.o0?"bio zelene":"bio"},d("div",{className:"jmeno"},"".concat(e.j," ").concat(e.p)),d("div",{className:"vek"},e.s.length>0?e.s:"")),d("div",{className:"odpoved"},e.o?e.o:"bez odpovědi"))}))),document.getElementById("anketa-wrapper"))})),L.open("GET",D+"/data/data.json"),L.send()}]);