(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28579,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={assign:function(){return l},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return u}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});function n(e){let t={};for(let[r,i]of e.entries()){let e=t[r];void 0===e?t[r]=i:Array.isArray(e)?e.push(i):t[r]=[e,i]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function u(e){let t=new URLSearchParams;for(let[r,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(r,a(e));else t.set(r,a(i));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,i]of r.entries())e.append(t,i)}return e}},80326,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return u},formatWithValidation:function(){return s},urlObjectKeys:function(){return l}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let n=e.r(2678)._(e.r(28579)),a=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,i=e.protocol||"",o=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||a.test(i))&&!1!==s?(s="//"+(s||""),o&&"/"!==o[0]&&(o="/"+o)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${i}${s}${o}${c}${u}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return u(e)}},81749,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return E},MissingStaticPage:function(){return T},NormalizeError:function(){return g},PageNotFoundError:function(){return y},SP:function(){return v},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return s},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return b}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...i)=>(r||(r=!0,t=e(...i)),t)}let u=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>u.test(e);function s(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=s();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(r&&d(r))return i;if(!i)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return i}let v="undefined"!=typeof performance,p=v&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class g extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class T extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class E extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},41456,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let i=e.r(81749),o=e.r(68498);function n(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},22258,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},81157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return x},useLinkStatus:function(){return y}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let n=e.r(2678),a=e.r(79208),u=n._(e.r(96899)),l=e.r(80326),s=e.r(14448),c=e.r(1131),f=e.r(81749),d=e.r(86221);e.r(65003);let m=e.r(44343),h=e.r(41456),v=e.r(57925);function p(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function x(t){var r;let i,o,n,[l,x]=(0,u.useOptimistic)(m.IDLE_LINK_STATUS),y=(0,u.useRef)(null),{href:T,as:E,children:b,prefetch:R=null,passHref:S,replace:w,shallow:_,scroll:D,onClick:A,onMouseEnter:N,onTouchStart:P,legacyBehavior:L=!1,onNavigate:F,ref:U,unstable_dynamicOnHover:C,...j}=t;i=b,L&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let I=u.default.useContext(s.AppRouterContext),O=!1!==R,B=!1!==R?null===(r=R)||"auto"===r?v.FetchStrategy.PPR:v.FetchStrategy.Full:v.FetchStrategy.PPR,{href:M,as:z}=u.default.useMemo(()=>{let e=p(T);return{href:e,as:E?p(E):e}},[T,E]);if(L){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=u.default.Children.only(i)}let k=L?o&&"object"==typeof o&&o.ref:U,X=u.default.useCallback(e=>(null!==I&&(y.current=(0,m.mountLinkInstance)(e,M,I,B,O,x)),()=>{y.current&&((0,m.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,m.unmountPrefetchableInstance)(e)}),[O,M,I,B,x]),G={ref:(0,c.useMergedRef)(X,k),onClick(t){L||"function"!=typeof A||A(t),L&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!I||t.defaultPrevented||function(t,r,i,o,n,a,l){if("undefined"!=typeof window){let s,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(65432);u.default.startTransition(()=>{f(i||r,n?"replace":"push",a??!0,o.current)})}}(t,M,z,y,w,D,F)},onMouseEnter(e){L||"function"!=typeof N||N(e),L&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&O&&(0,m.onNavigationIntent)(e.currentTarget,!0===C)},onTouchStart:function(e){L||"function"!=typeof P||P(e),L&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&O&&(0,m.onNavigationIntent)(e.currentTarget,!0===C)}};return(0,f.isAbsoluteUrl)(z)?G.href=z:L&&!S&&("a"!==o.type||"href"in o.props)||(G.href=(0,d.addBasePath)(z)),n=L?u.default.cloneElement(o,G):(0,a.jsx)("a",{...j,...G,children:i}),(0,a.jsx)(g.Provider,{value:l,children:n})}e.r(22258);let g=(0,u.createContext)(m.IDLE_LINK_STATUS),y=()=>(0,u.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},61703,e=>{"use strict";var t=e.i(79208),r=e.i(96899),i=e.i(36783),o=e.i(67893),n=e.i(83241);let a=(0,n.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);var u=e.i(383);let l=(0,n.default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]),s=(0,n.default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),c=(0,n.default)("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);var f=e.i(11392),d=e.i(20291);let m=(0,n.default)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),h=(0,n.default)("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);var v=e.i(81157);function p(){let[e,n]=(0,r.useState)(!1),[p,x]=(0,r.useState)(!1),[g,y]=(0,r.useState)("home"),[T,E]=(0,r.useState)(!0),b=[{name:"Home",href:"#home",icon:(0,t.jsx)(l,{className:"w-4 h-4"})},{name:"About",href:"#about",icon:(0,t.jsx)(s,{className:"w-4 h-4"})},{name:"Skills",href:"#skills",icon:(0,t.jsx)(f.Code,{className:"w-4 h-4"})},{name:"Projects",href:"#projects",icon:(0,t.jsx)(c,{className:"w-4 h-4"})},{name:"Contact",href:"#contact",icon:(0,t.jsx)(d.Mail,{className:"w-4 h-4"})}];(0,r.useEffect)(()=>{let e=()=>{for(let e of(x(window.scrollY>20),b.map(e=>e.href.substring(1)))){let t=document.getElementById(e);if(t){let r=t.getBoundingClientRect();if(r.top<=150&&r.bottom>=150){y(e);break}}}};return window.addEventListener("scroll",e),e(),()=>window.removeEventListener("scroll",e)},[]);let R=e=>{let t=document.querySelector(e);t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),n(!1))};return(0,r.useEffect)(()=>{let e=()=>{window.innerWidth>=768&&n(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.motion.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.5,ease:"easeOut"},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${p?"bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-purple-500/5 ":"bg-transparent"}`,children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"flex items-center justify-between h-16 md:h-20",children:[(0,t.jsx)(i.motion.div,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex-shrink-0",children:(0,t.jsx)(v.default,{href:"/",className:"text-xl md:text-3xl font-bold text-white",children:"Portfolio"})}),(0,t.jsx)("div",{className:"hidden md:flex items-center space-x-1 lg:space-x-2",children:b.map((e,r)=>(0,t.jsxs)(i.motion.button,{onClick:()=>R(e.href),initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*r,duration:.3},whileHover:{y:-2},className:`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${g===e.href.substring(1)?"text-purple-400":"text-gray-300 hover:text-white cursor-pointer"}`,children:[e.name,g===e.href.substring(1)&&(0,t.jsx)(i.motion.div,{layoutId:"activeIndicator",className:"absolute inset-0 bg-purple-500/10 rounded-lg border border-purple-500/20",transition:{type:"spring",stiffness:380,damping:30}}),(0,t.jsx)(i.motion.div,{className:"absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300",whileHover:{background:"linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))"}})]},e.name))}),(0,t.jsxs)("div",{className:"hidden md:flex items-center gap-4",children:[(0,t.jsx)(i.motion.button,{whileHover:{scale:1.1,rotate:180},whileTap:{scale:.9},onClick:()=>E(!T),className:"p-2 text-gray-400 hover:text-purple-400 transition-colors rounded-lg hover:bg-gray-800/50","aria-label":"Toggle theme",children:T?(0,t.jsx)(m,{className:"w-5 h-5"}):(0,t.jsx)(h,{className:"w-5 h-5"})}),(0,t.jsxs)(i.motion.button,{onClick:()=>R("#contact"),whileHover:{scale:1.05},whileTap:{scale:.95},className:"relative px-6 py-2.5 cursor-pointer border-1 text-white text-sm font-semibold rounded-full overflow-hidden group hover:bg-purple-600 hover:border-none ",children:[(0,t.jsx)("span",{className:"relative z-10",children:"Hire Me"}),(0,t.jsx)(i.motion.div,{className:"absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600",initial:{x:"100%"},whileHover:{x:0},transition:{duration:.3}})]})]}),(0,t.jsx)(i.motion.button,{whileTap:{scale:.9},onClick:()=>n(!e),className:"md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50","aria-label":"Toggle menu",children:(0,t.jsx)(o.AnimatePresence,{mode:"wait",children:e?(0,t.jsx)(i.motion.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:(0,t.jsx)(u.X,{className:"w-6 h-6"})},"close"):(0,t.jsx)(i.motion.div,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.2},children:(0,t.jsx)(a,{className:"w-6 h-6"})},"menu")})})]})})}),(0,t.jsx)(o.AnimatePresence,{children:e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:()=>n(!1),className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"}),(0,t.jsx)(i.motion.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-gray-900/98 backdrop-blur-xl border-l border-gray-800/50 shadow-2xl z-50 md:hidden overflow-y-auto",children:(0,t.jsxs)("div",{className:"flex flex-col h-full",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between p-6 border-b border-gray-800/50",children:[(0,t.jsx)("span",{className:"text-xl text-white font-stretch-extra-condensed",children:"Menu"}),(0,t.jsx)(i.motion.button,{whileTap:{scale:.9},onClick:()=>n(!1),className:"p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50",children:(0,t.jsx)(u.X,{className:"w-5 h-5"})})]}),(0,t.jsxs)("div",{className:"flex-1 px-6 py-8",children:[(0,t.jsx)("div",{className:"space-y-2",children:b.map((e,r)=>(0,t.jsxs)(i.motion.button,{onClick:()=>R(e.href),initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.1*r,duration:.3},whileTap:{scale:.95},className:`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${g===e.href.substring(1)?"bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 border border-purple-500/30":"text-gray-300 hover:bg-gray-800/50 hover:text-white"}`,children:[(0,t.jsx)("span",{className:g===e.href.substring(1)?"text-purple-400":"text-gray-500",children:e.icon}),(0,t.jsx)("span",{className:"font-medium",children:e.name}),g===e.href.substring(1)&&(0,t.jsx)(i.motion.div,{layoutId:"mobileActive",className:"ml-auto w-2 h-2 bg-purple-400 rounded-full"})]},e.name))}),(0,t.jsx)(i.motion.button,{onClick:()=>R("#contact"),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},whileTap:{scale:.95},className:"w-full mt-8 px-6 py-2 text-white font-semibold rounded-xl shadow-lg cursor-pointer",children:"Hire Me"}),(0,t.jsxs)(i.motion.button,{onClick:()=>E(!T),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},whileTap:{scale:.95},className:"w-full mt-4 flex items-center justify-center gap-3 px-6 py-2 bg-gray-800/50 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors",children:[T?(0,t.jsx)(m,{className:"w-5 h-5"}):(0,t.jsx)(h,{className:"w-5 h-5"}),(0,t.jsx)("span",{children:T?"Light Mode":"Dark Mode"})]})]}),(0,t.jsx)("div",{className:"p-6 border-t border-gray-800/50",children:(0,t.jsx)("p",{className:"text-sm text-gray-500 text-center",children:"© 2025 Esha. All rights reserved."})})]})})]})})]})}e.s(["default",()=>p],61703)},96377,e=>{"use strict";var t=e.i(79208),r=e.i(96899);function i(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t,r,i,o,n,a,u,l,s=e.current;if(!s)return;let c=[{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}],f={SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10},{gl:d,ext:m}=function(e){let t,r,i,o={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},n=e.getContext("webgl2",o);if(n||(n=e.getContext("webgl",o)||e.getContext("experimental-webgl",o)),!n)throw Error("Unable to initialize WebGL.");let a="drawBuffers"in n,u=!1,l=null;a?(n.getExtension("EXT_color_buffer_float"),u=!!n.getExtension("OES_texture_float_linear")):(l=n.getExtension("OES_texture_half_float"),u=!!n.getExtension("OES_texture_half_float_linear")),n.clearColor(0,0,0,1);let s=a?n.HALF_FLOAT:l&&l.HALF_FLOAT_OES||0;return a?(t=h(n,n.RGBA16F,n.RGBA,s),r=h(n,n.RG16F,n.RG,s),i=h(n,n.R16F,n.RED,s)):(t=h(n,n.RGBA,n.RGBA,s),r=h(n,n.RGBA,n.RGBA,s),i=h(n,n.RGBA,n.RGBA,s)),{gl:n,ext:{formatRGBA:t,formatRG:r,formatR:i,halfFloatTexType:s,supportLinearFiltering:u}}}(s);if(!d||!m)return;function h(e,t,r,i){if(!function(e,t,r,i){let o=e.createTexture();if(!o)return!1;e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,r,i,null);let n=e.createFramebuffer();return!!n&&(e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE)}(e,t,r,i)){if("drawBuffers"in e)switch(t){case e.R16F:return h(e,e.RG16F,e.RG,i);case e.RG16F:return h(e,e.RGBA16F,e.RGBA,i)}return null}return{internalFormat:t,format:r}}function v(e,t,r=null){let i=function(e,t){if(!t)return e;let r="";for(let e of t)r+=`#define ${e}
`;return r+e}(t,r),o=d.createShader(e);return o?(d.shaderSource(o,i),d.compileShader(o),d.getShaderParameter(o,d.COMPILE_STATUS)||console.trace(d.getShaderInfoLog(o)),o):null}function p(e,t){if(!e||!t)return null;let r=d.createProgram();return r?(d.attachShader(r,e),d.attachShader(r,t),d.linkProgram(r),d.getProgramParameter(r,d.LINK_STATUS)||console.trace(d.getProgramInfoLog(r)),r):null}function x(e){let t={},r=d.getProgramParameter(e,d.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let r=d.getActiveUniform(e,i);r&&(t[r.name]=d.getUniformLocation(e,r.name))}return t}m.supportLinearFiltering||(f.DYE_RESOLUTION=256,f.SHADING=!1);class g{program;uniforms;constructor(e,t){this.program=p(e,t),this.uniforms=this.program?x(this.program):{}}bind(){this.program&&d.useProgram(this.program)}}let y=v(d.VERTEX_SHADER,`
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `),T=v(d.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),E=v(d.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),b=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform vec2 texelSize;

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,R=v(d.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `),S=v(d.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `,m.supportLinearFiltering?null:["MANUAL_FILTERING"]),w=v(d.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `),_=v(d.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `),D=v(d.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),A=v(d.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `),N=v(d.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),P=(a=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,a),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),d.STATIC_DRAW),u=d.createBuffer(),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,u),d.bufferData(d.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),d.STATIC_DRAW),d.vertexAttribPointer(0,2,d.FLOAT,!1,0,0),d.enableVertexAttribArray(0),(e,t=!1)=>{d&&(e?(d.viewport(0,0,e.width,e.height),d.bindFramebuffer(d.FRAMEBUFFER,e.fbo)):(d.viewport(0,0,d.drawingBufferWidth,d.drawingBufferHeight),d.bindFramebuffer(d.FRAMEBUFFER,null)),t&&(d.clearColor(0,0,0,1),d.clear(d.COLOR_BUFFER_BIT)),d.drawElements(d.TRIANGLES,6,d.UNSIGNED_SHORT,0))}),L=new g(y,T),F=new g(y,E),U=new g(y,R),C=new g(y,S),j=new g(y,w),I=new g(y,_),O=new g(y,D),B=new g(y,A),M=new g(y,N),z=new class{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(e){let t=0;for(let r of e)t+=function(e){if(!e.length)return 0;let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(r);let r=this.programs[t];if(null==r){let i=v(d.FRAGMENT_SHADER,this.fragmentShaderSource,e);r=p(this.vertexShader,i),this.programs[t]=r}r!==this.activeProgram&&(r&&(this.uniforms=x(r)),this.activeProgram=r)}bind(){this.activeProgram&&d.useProgram(this.activeProgram)}}(y,b);function k(e,t,r,i,o,n){d.activeTexture(d.TEXTURE0);let a=d.createTexture();d.bindTexture(d.TEXTURE_2D,a),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,n),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,n),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,r,e,t,0,i,o,null);let u=d.createFramebuffer();d.bindFramebuffer(d.FRAMEBUFFER,u),d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.TEXTURE_2D,a,0),d.viewport(0,0,e,t),d.clear(d.COLOR_BUFFER_BIT);let l=1/e,s=1/t;return{texture:a,fbo:u,width:e,height:t,texelSizeX:l,texelSizeY:s,attach:e=>(d.activeTexture(d.TEXTURE0+e),d.bindTexture(d.TEXTURE_2D,a),e)}}function X(e,t,r,i,o,n){let a=k(e,t,r,i,o,n),u=k(e,t,r,i,o,n);return{width:e,height:t,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,read:a,write:u,swap(){let e=this.read;this.read=this.write,this.write=e}}}function G(e,t,r,i,o,n,a){var u;let l;return e.width===t&&e.height===r?e:(u=e.read,l=k(t,r,i,o,n,a),L.bind(),L.uniforms.uTexture&&d.uniform1i(L.uniforms.uTexture,u.attach(0)),P(l,!1),e.read=l,e.write=k(t,r,i,o,n,a),e.width=t,e.height=r,e.texelSizeX=1/t,e.texelSizeY=1/r,e)}function V(){let e=Y(f.SIM_RESOLUTION),a=Y(f.DYE_RESOLUTION),u=m.halfFloatTexType,l=m.formatRGBA,s=m.formatRG,c=m.formatR,h=m.supportLinearFiltering?d.LINEAR:d.NEAREST;d.disable(d.BLEND),t=t?G(t,a.width,a.height,l.internalFormat,l.format,u,h):X(a.width,a.height,l.internalFormat,l.format,u,h),r=r?G(r,e.width,e.height,s.internalFormat,s.format,u,h):X(e.width,e.height,s.internalFormat,s.format,u,h),i=k(e.width,e.height,c.internalFormat,c.format,u,d.NEAREST),o=k(e.width,e.height,c.internalFormat,c.format,u,d.NEAREST),n=X(e.width,e.height,c.internalFormat,c.format,u,d.NEAREST)}function Y(e){let t=d.drawingBufferWidth,r=d.drawingBufferHeight,i=t/r,o=Math.round(e),n=Math.round(e*(i<1?1/i:i));return t>r?{width:n,height:o}:{width:o,height:n}}function H(e){return Math.floor(e*(window.devicePixelRatio||1))}l=[],f.SHADING&&l.push("SHADING"),z.setKeywords(l),V();let $=Date.now(),W=0;function K(){var e,a;let u,l,h,v,p,x,g,y=(l=Math.min(l=((u=Date.now())-$)/1e3,.016666),$=u,l);h=H(s.clientWidth),v=H(s.clientHeight),(s.width!==h||s.height!==v)&&(s.width=h,s.height=v,1)&&V(),(W+=y*f.COLOR_UPDATE_SPEED)>=1&&(e=W,W=0==(p=1)?0:(e-0)%p+0,c.forEach(e=>{e.color=Q()})),function(){for(let e of c)e.moved&&(e.moved=!1,function(e){var i,o,n,a,u;let l=e.deltaX*f.SPLAT_FORCE,c=e.deltaY*f.SPLAT_FORCE;i=e.texcoordX,o=e.texcoordY,n=l,a=c,u=e.color,U.bind(),U.uniforms.uTarget&&d.uniform1i(U.uniforms.uTarget,r.read.attach(0)),U.uniforms.aspectRatio&&d.uniform1f(U.uniforms.aspectRatio,s.width/s.height),U.uniforms.point&&d.uniform2f(U.uniforms.point,i,o),U.uniforms.color&&d.uniform3f(U.uniforms.color,n,a,0),U.uniforms.radius&&d.uniform1f(U.uniforms.radius,function(e){let t=s.width/s.height;return t>1&&(e*=t),e}(f.SPLAT_RADIUS/100)),P(r.write),r.swap(),U.uniforms.uTarget&&d.uniform1i(U.uniforms.uTarget,t.read.attach(0)),U.uniforms.color&&d.uniform3f(U.uniforms.color,u.r,u.g,u.b),P(t.write),t.swap()}(e))}(),function(e){d.disable(d.BLEND),I.bind(),I.uniforms.texelSize&&d.uniform2f(I.uniforms.texelSize,r.texelSizeX,r.texelSizeY),I.uniforms.uVelocity&&d.uniform1i(I.uniforms.uVelocity,r.read.attach(0)),P(o),O.bind(),O.uniforms.texelSize&&d.uniform2f(O.uniforms.texelSize,r.texelSizeX,r.texelSizeY),O.uniforms.uVelocity&&d.uniform1i(O.uniforms.uVelocity,r.read.attach(0)),O.uniforms.uCurl&&d.uniform1i(O.uniforms.uCurl,o.attach(1)),O.uniforms.curl&&d.uniform1f(O.uniforms.curl,f.CURL),O.uniforms.dt&&d.uniform1f(O.uniforms.dt,e),P(r.write),r.swap(),j.bind(),j.uniforms.texelSize&&d.uniform2f(j.uniforms.texelSize,r.texelSizeX,r.texelSizeY),j.uniforms.uVelocity&&d.uniform1i(j.uniforms.uVelocity,r.read.attach(0)),P(i),F.bind(),F.uniforms.uTexture&&d.uniform1i(F.uniforms.uTexture,n.read.attach(0)),F.uniforms.value&&d.uniform1f(F.uniforms.value,f.PRESSURE),P(n.write),n.swap(),B.bind(),B.uniforms.texelSize&&d.uniform2f(B.uniforms.texelSize,r.texelSizeX,r.texelSizeY),B.uniforms.uDivergence&&d.uniform1i(B.uniforms.uDivergence,i.attach(0));for(let e=0;e<f.PRESSURE_ITERATIONS;e++)B.uniforms.uPressure&&d.uniform1i(B.uniforms.uPressure,n.read.attach(1)),P(n.write),n.swap();M.bind(),M.uniforms.texelSize&&d.uniform2f(M.uniforms.texelSize,r.texelSizeX,r.texelSizeY),M.uniforms.uPressure&&d.uniform1i(M.uniforms.uPressure,n.read.attach(0)),M.uniforms.uVelocity&&d.uniform1i(M.uniforms.uVelocity,r.read.attach(1)),P(r.write),r.swap(),C.bind(),C.uniforms.texelSize&&d.uniform2f(C.uniforms.texelSize,r.texelSizeX,r.texelSizeY),!m.supportLinearFiltering&&C.uniforms.dyeTexelSize&&d.uniform2f(C.uniforms.dyeTexelSize,r.texelSizeX,r.texelSizeY);let a=r.read.attach(0);C.uniforms.uVelocity&&d.uniform1i(C.uniforms.uVelocity,a),C.uniforms.uSource&&d.uniform1i(C.uniforms.uSource,a),C.uniforms.dt&&d.uniform1f(C.uniforms.dt,e),C.uniforms.dissipation&&d.uniform1f(C.uniforms.dissipation,f.VELOCITY_DISSIPATION),P(r.write),r.swap(),!m.supportLinearFiltering&&C.uniforms.dyeTexelSize&&d.uniform2f(C.uniforms.dyeTexelSize,t.texelSizeX,t.texelSizeY),C.uniforms.uVelocity&&d.uniform1i(C.uniforms.uVelocity,r.read.attach(0)),C.uniforms.uSource&&d.uniform1i(C.uniforms.uSource,t.read.attach(1)),C.uniforms.dissipation&&d.uniform1f(C.uniforms.dissipation,f.DENSITY_DISSIPATION),P(t.write),t.swap()}(y),d.blendFunc(d.ONE,d.ONE_MINUS_SRC_ALPHA),d.enable(d.BLEND),x=(a=null,d.drawingBufferWidth),g=a?a.height:d.drawingBufferHeight,z.bind(),f.SHADING&&z.uniforms.texelSize&&d.uniform2f(z.uniforms.texelSize,1/x,1/g),z.uniforms.uTexture&&d.uniform1i(z.uniforms.uTexture,t.read.attach(0)),P(a,!1),requestAnimationFrame(K)}function q(e,t,r,i){var o,n;let a,u;e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=t/s.width,e.texcoordY=1-r/s.height,o=e.texcoordX-e.prevTexcoordX,(a=s.width/s.height)<1&&(o*=a),e.deltaX=o,n=e.texcoordY-e.prevTexcoordY,(u=s.width/s.height)>1&&(n/=u),e.deltaY=n,e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=i}function Q(){let e=function(e,t,r){let i=0,o=0,n=0,a=Math.floor(6*e),u=6*e-a,l=0,s=+(1-u),c=+(1-(1-u)*1);switch(a%6){case 0:i=1,o=c,n=l;break;case 1:i=s,o=1,n=l;break;case 2:i=l,o=1,n=c;break;case 3:i=l,o=s,n=1;break;case 4:i=c,o=l,n=1;break;case 5:i=1,o=l,n=s}return{r:i,g:o,b:n}}(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function J(e){let t=c[0],r=H(e.clientX),i=H(e.clientY),o=Q();K(),q(t,r,i,o),document.body.removeEventListener("mousemove",J)}function Z(e){let t=e.targetTouches,r=c[0];for(let e=0;e<t.length;e++){let i=H(t[e].clientX),o=H(t[e].clientY);K(),q(r,i,o,Q())}document.body.removeEventListener("touchstart",Z)}return document.body.addEventListener("mousemove",J),window.addEventListener("mousemove",e=>{let t=c[0],r=H(e.clientX),i=H(e.clientY),o=t.color;q(t,r,i,o)}),document.body.addEventListener("touchstart",Z),window.addEventListener("touchmove",e=>{let t=e.targetTouches,r=c[0];for(let e=0;e<t.length;e++)q(r,H(t[e].clientX),H(t[e].clientY),r.color)},!1),()=>{window.removeEventListener("mousemove",J),document.body.removeEventListener("touchstart",Z)}},[]),(0,t.jsx)("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:(0,t.jsx)("canvas",{ref:e,style:{width:"100vw",height:"100vh",display:"block"}})})}e.s(["default",()=>i])}]);