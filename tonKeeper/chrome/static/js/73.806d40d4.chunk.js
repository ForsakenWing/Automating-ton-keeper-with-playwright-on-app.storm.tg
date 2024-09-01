"use strict";(self.webpackChunk_tonkeeper_extension=self.webpackChunk_tonkeeper_extension||[]).push([[73],{15073:(e,n,t)=>{t.r(n),t.d(n,{default:()=>se});var r=t(80184),i=t(29305),c=t(57689),s=t(75594),o=t(99326),l=t(30168),a=t(72791),d=t(11087),u=t(65867),h=t(5784),p=t(26503),x=t(47712),m=t(14756),f=t(87594),g=t(33975);var j=t(33455),v=t(23098);function b(e,n,t,r){const i=(0,a.useRef)(n);(0,a.useLayoutEffect)((()=>{i.current=n}),[n]),(0,a.useEffect)((()=>{var n;const c=null!==(n=null===t||void 0===t?void 0:t.current)&&void 0!==n?n:window;if(!c||!c.addEventListener)return;const s=e=>i.current(e);return c.addEventListener(e,s,r),()=>{c.removeEventListener(e,s,r)}}),[e,t,r])}function w(e,n,t){const r=(0,v._H)(),i=(0,j.y9)(),c=(0,a.useCallback)((()=>{i(e,n),r.openPage(((e,n,t)=>{const r=new Date,i=g.Z.stringify({utm_source:"tonkeeper",utm_campaign:"recommendation"===n?"recom":"feat-".concat(r.getMonth()+1,"-").concat(r.getFullYear()),utm_medium:t}),c=e.includes("?")?"&":"?";return"".concat(e).concat(c).concat(i)})(e,n,t))}),[e,r,i]);return function(e){let{callback:n,precisionXPx:t,precisionYPx:r}=e;const i=(0,a.useRef)({clientX:0,clientY:0}),c=(0,a.useRef)(null),s=(0,a.useCallback)((e=>{i.current={clientY:e.clientY,clientX:e.clientX}}),[]),o=(0,a.useCallback)((e=>{const c=Math.abs(e.clientX-i.current.clientX)<(null!==t&&void 0!==t?t:10),s=Math.abs(e.clientY-i.current.clientY)<(null!==r&&void 0!==r?r:10);c&&s&&n()}),[n,t,r]);return b("mousedown",s,c),b("mouseup",o,c),c}({callback:c})}const Z={width:void 0,height:void 0};function k(e){const{ref:n,box:t="content-box"}=e,[{width:r,height:i},c]=(0,a.useState)(Z),s=function(){const e=(0,a.useRef)(!1);return(0,a.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),(0,a.useCallback)((()=>e.current),[])}(),o=(0,a.useRef)({...Z}),l=(0,a.useRef)(void 0);return l.current=e.onResize,(0,a.useEffect)((()=>{if(!n.current)return;if("undefined"===typeof window||!("ResizeObserver"in window))return;const e=new ResizeObserver((e=>{let[n]=e;const r="border-box"===t?"borderBoxSize":"device-pixel-content-box"===t?"devicePixelContentBoxSize":"contentBoxSize",i=y(n,r,"inlineSize"),a=y(n,r,"blockSize");if(o.current.width!==i||o.current.height!==a){const e={width:i,height:a};o.current.width=i,o.current.height=a,l.current?l.current(e):s()&&c(e)}}));return e.observe(n.current,{box:t}),()=>{e.disconnect()}}),[t,n,s]),{width:r,height:i}}function y(e,n,t){return e[n]?Array.isArray(e[n])?e[n][0][t]:e[n][t]:"contentBoxSize"===n?e.contentRect["inlineSize"===t?"width":"height"]:void 0}var P,R,S,z,C,E,_=t(14911);const A=u.ZP.div(P||(P=(0,l.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 14px 1rem;\n    gap: 1rem;\n"]))),F=u.ZP.button(R||(R=(0,l.Z)(["\n    border: none;\n    background: transparent;\n    height: fit-content;\n    width: fit-content;\n    color: ",";\n    cursor: pointer;\n    padding: 4px 8px;\n"])),(e=>e.theme.textAccent)),H=u.ZP.div(S||(S=(0,l.Z)(["\n    padding-left: 1rem;\n    padding-right: 1rem;\n"]))),L=(0,u.ZP)(p.L8)(z||(z=(0,l.Z)(["\n    width: "," !important;\n    margin-left: "," !important;\n    margin-bottom: 0;\n"])),(e=>e.width),(e=>e.marginLeft)),X=u.ZP.div(C||(C=(0,l.Z)(["\n    margin-left: auto;\n    margin-right: 1rem;\n    color: ",";\n    transition: transform 0.15s ease;\n"])),(e=>e.theme.iconTertiary)),T=(0,u.ZP)(p.HC)(E||(E=(0,l.Z)(["\n    padding-left: 1rem;\n\n    &:hover "," {\n        transform: translateX(2px);\n    }\n"])),X),Y=e=>{let{item:n}=e;const{tonendpoint:t}=(0,f.bp)(),i=w(n.url,"recommendation",t.getTrack());return(0,r.jsx)(T,{ref:i,children:(0,r.jsxs)(_.iT,{children:[(0,r.jsx)(_.E1,{src:n.icon}),(0,r.jsxs)(_.i2,{children:[(0,r.jsx)(x.fA,{children:n.name}),(0,r.jsx)(x.De,{children:n.description})]}),(0,r.jsx)(X,{children:(0,r.jsx)(h.XC,{})})]})},n.url)};var W=t(41235),M=t(97957),N=t(14322);function B(){const{tonendpoint:e}=(0,f.bp)(),n=(0,N.Nq)().data||"en";return(0,W.useQuery)([M.S8.featuredRecommendations,n],(async()=>{const t=await e.getAppsPopular(n);return t.categories=t.categories.filter((e=>"featured"!==e.id)),t}))}var D=t(79436);const O=()=>{const{id:e}=(0,c.UO)(),{data:n}=B(),t=null===n||void 0===n?void 0:n.categories.find((n=>n.id===e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.bU,{title:null===t||void 0===t?void 0:t.title}),(0,r.jsx)(o.HV,{children:t?(0,r.jsx)(p.L8,{children:t.apps.map((e=>(0,r.jsx)(Y,{item:e},e.url)))}):(0,r.jsxs)(p.L8,{children:[(0,r.jsx)(D.F,{}),(0,r.jsx)(D.F,{}),(0,r.jsx)(D.F,{}),(0,r.jsx)(D.F,{}),(0,r.jsx)(D.F,{})]})})]})};var U,V,q=t(96491);const Q=u.ZP.div(U||(U=(0,l.Z)(["\n    width: 100%;\n    aspect-ratio: 2 / 1;\n\n    background-image: ",";\n    background-size: cover;\n    border-radius: ",";\n\n    display: inline-flex !important;\n    align-items: flex-end;\n    justify-content: flex-start;\n    cursor: pointer;\n"])),(e=>"url(".concat(e.img,")")),(e=>e.theme.cornerSmall)),G=(0,u.ZP)(_.iT)(V||(V=(0,l.Z)(["\n    margin-left: 1rem;\n"]))),I=e=>{let{item:n}=e;const{tonendpoint:t}=(0,f.bp)(),i=w(n.url,"featured",t.getTrack());return(0,r.jsx)(Q,{img:n.poster,ref:i,children:(0,r.jsxs)(G,{children:[(0,r.jsx)(_.E1,{src:n.icon}),(0,r.jsxs)(_.i2,{color:n.textColor,children:[(0,r.jsx)(x.fA,{children:n.name}),(0,r.jsx)(x.De,{children:n.description})]})]})})};var J,K,$,ee;const ne=(0,u.ZP)(o.HV)(J||(J=(0,l.Z)(["\n    padding: 0;\n"]))),te=(0,u.ZP)((e=>{let{apps:n,className:t,...i}=e;const{config:c}=(0,f.bp)(),s=c.featured_play_interval||1e4;return(0,r.jsx)(m.l,{className:t,gap:"8px",autoplay:!0,centerPadding:"16px",autoplaySpeed:s,...i,children:n.map((e=>(0,r.jsx)(I,{item:e},e.url)))})}))(K||(K=(0,l.Z)(["\n    margin-bottom: 1rem;\n"]))),re=(0,u.ZP)((e=>{let{category:n,className:t}=e;const[c,{width:s}]=function(){const e=(0,a.useRef)(null),[n,t]=(0,a.useState)({width:0,height:0,scrollWidth:0,scrollHeight:0}),r=(0,a.useCallback)((()=>{var n,r,i,c;t({width:(null===(n=e.current)||void 0===n?void 0:n.offsetWidth)||0,height:(null===(r=e.current)||void 0===r?void 0:r.offsetHeight)||0,scrollWidth:(null===(i=e.current)||void 0===i?void 0:i.scrollWidth)||0,scrollHeight:(null===(c=e.current)||void 0===c?void 0:c.scrollHeight)||0})}),[]);return k({ref:e,onResize:r}),[e,n]}(),o=s-36,l=(0,a.useMemo)((()=>n.apps.reduce(((e,n,t)=>(t%3===0?e.push([n]):e[e.length-1].push(n),e)),[])),[n.apps]),u=(0,a.useMemo)((()=>l.map((e=>e.map((e=>e.url)).join("")))),[l]),h=l.length>1;return(0,r.jsxs)("div",{className:t,ref:c,children:[(0,r.jsxs)(A,{children:[(0,r.jsx)(x.H3,{children:n.title}),h&&(0,r.jsx)(d.rU,{to:"."+i.T3.category+"/"+n.id,children:(0,r.jsx)(F,{children:(0,r.jsx)(x.RV,{children:"All"})})})]}),h?(0,r.jsx)(m.l,{gap:"8px",infinite:!1,children:l.map(((e,n)=>(0,r.jsx)(L,{width:0===n||n===l.length-1?(o-28).toString()+"px":"unset",marginLeft:0===n?"-34px":"0",children:e.map((e=>(0,r.jsx)(Y,{item:e},e.url)))},u[n])))}):l.map(((e,n)=>(0,r.jsx)(H,{children:(0,r.jsx)(L,{width:"100%",children:e.map((e=>(0,r.jsx)(Y,{item:e},e.url)))},u[n])},u[n])))]})}))($||($=(0,l.Z)(["\n    margin-bottom: 1rem;\n"]))),ie=u.ZP.div(ee||(ee=(0,l.Z)(["\n    padding: 0 1rem;\n"]))),ce=()=>{const{data:e}=B(),n=(0,j.vR)();return(0,a.useEffect)((()=>{e&&n()}),[n,e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q.Z1,{}),(0,r.jsx)(ne,{children:e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(te,{apps:e.apps}),e.categories.map((e=>(0,r.jsx)(re,{category:e},e.id)))]}):(0,r.jsx)(ie,{children:(0,r.jsx)(D.l,{})})})]})},se=()=>(0,r.jsxs)(c.Z5,{children:[(0,r.jsx)(c.AW,{path:i.T3.category+"/:id",element:(0,r.jsx)(O,{})}),(0,r.jsx)(c.AW,{path:"*",element:(0,r.jsx)(ce,{})})]})}}]);
//# sourceMappingURL=73.806d40d4.chunk.js.map