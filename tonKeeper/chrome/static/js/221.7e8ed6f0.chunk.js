"use strict";(self.webpackChunk_tonkeeper_extension=self.webpackChunk_tonkeeper_extension||[]).push([[221],{40197:(n,e,t)=>{t.d(e,{X:()=>Z,Y:()=>f});var r,i,o,s,l,c,d,a,h=t(30168),u=t(80184),x=t(65867),p=t(5784),g=t(47712);const m=x.ZP.div(r||(r=(0,h.Z)(["\n    display: inline-flex;\n    gap: 15px;\n    align-items: center;\n\n    cursor: pointer;\n"]))),b=x.ZP.div(i||(i=(0,h.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    border-width: 2px;\n    border-style: solid;\n    box-sizing: border-box;\n\n    ","\n\n    ","\n"])),(n=>n.disabled?(0,x.iv)(o||(o=(0,h.Z)(["\n                  opacity: 0.48;\n              "]))):void 0),(n=>n.checked?(0,x.iv)(s||(s=(0,h.Z)(["\n                  color: ",";\n                  background: ",";\n                  border-color: ",";\n              "])),n.theme.buttonPrimaryForeground,n.theme.buttonPrimaryBackground,n.theme.buttonPrimaryBackground):(0,x.iv)(l||(l=(0,h.Z)(["\n                  color: transparent;\n                  background: transparent;\n                  border-color: ",";\n              "])),n.theme.backgroundContentTint))),y=(0,x.ZP)(b)(c||(c=(0,h.Z)(["\n    width: 22px;\n    height: 22px;\n\n    border-radius: 6px;\n"]))),j=(0,x.ZP)(b)(d||(d=(0,h.Z)(["\n    width: 24px;\n    height: 24px;\n\n    border-radius: ",";\n"])),(n=>n.theme.cornerFull)),k=(0,x.ZP)(g.mI)(a||(a=(0,h.Z)(["\n    color: ",";\n"])),(n=>n.light?n.theme.textPrimary:n.theme.textSecondary)),Z=n=>{let{checked:e,onChange:t,disabled:r,children:i,light:o,className:s}=n;return(0,u.jsxs)(m,{onClick:()=>t(!e),className:s,children:[(0,u.jsx)(y,{checked:e,disabled:r,children:e?(0,u.jsx)(p.PD,{}):void 0}),i&&(0,u.jsx)(k,{light:o,children:i})]})},f=n=>{let{checked:e,onChange:t,disabled:r,children:i}=n;return(0,u.jsxs)(m,{onClick:n=>{n.stopPropagation(),n.preventDefault(),t(!e)},children:[(0,u.jsx)(j,{checked:e,disabled:r,children:e?(0,u.jsx)(p.PD,{}):void 0}),i&&(0,u.jsx)(k,{children:i})]})}},94221:(n,e,t)=>{t.d(e,{Jh:()=>I,Tt:()=>H});var r,i,o,s,l=t(30168),c=t(80184),d=t(72791),a=t(57689),h=t(11087),u=t(65867),x=t(87594),p=t(23098),g=t(61945),m=t(29305),b=t(14322),y=t(49373),j=t(26503),k=t(47578),Z=t(47712),f=t(68827),v=t(2346),w=t(95379),P=t(56445);const _=n=>{let{items:e,kind:t}=n;return(0,c.jsx)(j.L8,{margin:!1,children:e.filter((n=>!n.disabled)).map((n=>(0,c.jsx)(w.H,{item:n,kind:t},n.title)))})},C=u.ZP.div(r||(r=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n"]))),U=n=>{let{item:e,kind:t,handleClose:r}=n;const i=(0,a.s0)(),o=(0,p._H)(),{data:s}=(0,b.Nq)(),{t:l}=(0,g.$)(),{config:d}=(0,x.bp)();return(0,c.jsxs)(C,{children:[(0,c.jsx)(k.JE,{children:(0,c.jsx)(k.O$,{children:(0,c.jsxs)(k.hy,{children:[(0,c.jsx)(f.$d,{country:s,onClick:()=>i(m.FR.settings+m.aF.country)}),(0,c.jsx)(Z.H3,{children:e.title}),(0,c.jsx)(k.Ho,{handleClose:r})]})})}),(0,c.jsx)(_,{items:e.items,kind:t}),(0,c.jsx)(M,{children:(0,c.jsx)(S,{onClick:()=>d.exchangePostUrl&&o.openPage(d.exchangePostUrl),children:l("buy"===t?"exchange_modal_other_ways_to_buy":"exchange_other_ways")})})]})},M=u.ZP.div(i||(i=(0,l.Z)(["\n    text-align: center;\n\n    ","\n"])),(n=>"full-width"===n.theme.displayType&&(0,u.iv)(o||(o=(0,l.Z)(["\n            padding-bottom: 1rem;\n        "]))))),S=(0,u.ZP)(Z.fA)(s||(s=(0,l.Z)(["\n    cursor: pointer;\n    padding: 7.5px 1rem 8.5px;\n    background-color: ",";\n    transition: background-color 0.1s ease;\n    border-radius: ",";\n    display: inline-block;\n\n    &:hover {\n        background-color: ",";\n    }\n"])),(n=>n.theme.backgroundContent),(n=>n.theme.cornerMedium),(n=>n.theme.backgroundHighlighted)),H=n=>{let{buy:e,open:t,handleClose:r}=n;const i=(0,d.useCallback)((()=>{if(t&&e)return(0,c.jsx)(U,{item:e,kind:"buy",handleClose:r})}),[t,e]);return(0,c.jsx)(k.P_,{isOpen:t&&null!=e,handleClose:r,hideButton:!0,children:i})},I=()=>{const{data:n}=(0,y.MF)(),e=(0,a.TH)(),[t,r]=(0,h.lr)(),i=(0,d.useMemo)((()=>"open"===new URLSearchParams(t).get("buy")),[t,e]),o=(0,d.useCallback)((()=>{t.has("buy")?t.delete("buy"):t.append("buy","open"),r(t,{replace:!0})}),[t,r]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v.a,{icon:(0,c.jsx)(P.Vw,{}),title:"wallet_buy",action:o}),(0,c.jsx)(H,{buy:n,open:i,handleClose:o})]})}},95379:(n,e,t)=>{t.d(e,{H:()=>rn,p:()=>q});var r,i,o,s,l,c,d,a,h,u,x,p,g,m,b,y,j,k=t(30168),Z=t(80184),f=t(41235),v=t(1500),w=t(20220),P=t(72791),_=t(65867),C=t(4864),U=t(33455),M=t(87594),S=t(23098),H=t(57869),I=t(61945),T=t(5784),D=t(26503),L=t(47578),O=t(47712),R=t(88754),V=t(40197),N=t(49373),B=t(80259);const F=_.ZP.img(r||(r=(0,k.Z)(["\n    pointer-events: none;\n\n    ","\n"])),(n=>n.large?(0,_.iv)(i||(i=(0,k.Z)(["\n                  width: 72px;\n                  height: 72px;\n                  margin-bottom: 20px;\n                  border-radius: ",";\n              "])),(n=>n.theme.cornerSmall)):(0,_.iv)(o||(o=(0,k.Z)(["\n                  width: 44px;\n                  height: 44px;\n                  border-radius: ",";\n              "])),(n=>n.theme.cornerExtraSmall)))),E=_.ZP.div(s||(s=(0,k.Z)(["\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n"]))),X=_.ZP.div(l||(l=(0,k.Z)(["\n    display: flex;\n    flex-direction: column;\n\n    user-select: none;\n"]))),z=(0,_.ZP)(O.mI)(c||(c=(0,k.Z)(["\n    color: ",";\n"])),(n=>n.theme.textSecondary)),A=_.ZP.div(d||(d=(0,k.Z)(["\n    display: flex;\n    color: ",";\n"])),(n=>n.theme.iconTertiary)),$=(0,_.ZP)(D.me)(a||(a=(0,k.Z)(["\n    transition: color 0.1s ease;\n\n    &:hover "," {\n        color: ",";\n    }\n"])),A,(n=>n.theme.iconPrimary)),W=_.ZP.div(h||(h=(0,k.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Q=_.ZP.div(u||(u=(0,k.Z)(["\n    text-align: center;\n"]))),J=_.ZP.span(x||(x=(0,k.Z)(["\n    margin: 28px 0 0;\n    display: flex;\n"]))),q=_.ZP.div(p||(p=(0,k.Z)(["\n    margin: 2rem 0;\n    padding: 18px 18px;\n    box-sizing: border-box;\n    display: flex;\n    gap: 0.5rem;\n    flex-direction: column;\n    width: 100%;\n\n    background: ",";\n    border-radius: ",";\n"])),(n=>n.theme.backgroundContent),(n=>n.theme.cornerSmall)),Y=(0,_.ZP)(O.mI)(g||(g=(0,k.Z)(["\n    display: block;\n"]))),G=(0,_.ZP)(O.mI)(m||(m=(0,k.Z)(["\n    cursor: pointer;\n    color: ",";\n    margin-right: 0.75rem;\n    transition: color 0.1s ease;\n\n    &:hover {\n        color: ",";\n    }\n"])),(n=>n.theme.textSecondary),(n=>n.theme.textPrimary)),K=n=>{let{buttons:e}=n;const{t:t}=(0,I.$)(),r=(0,S._H)();return(0,Z.jsxs)(q,{children:[(0,Z.jsx)(Y,{children:t("exchange_method_open_warning")}),e&&e.length>0&&(0,Z.jsx)("div",{children:e.map(((n,e)=>(0,Z.jsx)(G,{onClick:()=>r.openPage(n.url),children:n.title},e)))})]})},nn=(0,_.ZP)(O.RV)(b||(b=(0,k.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 6px;\n"]))),en=(0,_.ZP)(O.H3)(y||(y=(0,k.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 6px;\n"]))),tn=_.ZP.div(j||(j=(0,k.Z)(["\n    color: ",";\n    background-color: ",";\n    border-radius: 3px;\n    padding: 2px 4px;\n    font-size: 8.5px;\n    font-style: normal;\n    font-weight: 510;\n    line-height: 12px;\n"])),(n=>n.theme.accentBlue),(n=>(0,B.E)(n.theme.accentBlue,.26))),rn=n=>{let{item:e,kind:t}=n;const r=(0,U.xg)(),i=(0,S._H)(),o=(0,M.tN)(),{config:s,fiat:l}=(0,M.bp)(),{t:c}=(0,I.$)(),[d,a]=(0,P.useState)(!1),{data:h}=((n,e)=>{const t=(0,H.y)();return(0,f.useQuery)([n,e],(async()=>{const r=await t.get("".concat(e,"_").concat(n));return null!==r&&r}))})(e.title,t),{mutate:u}=((n,e)=>{const t=(0,H.y)(),r=(0,f.useQueryClient)();return(0,f.useMutation)((async i=>{await t.set("".concat(e,"_").concat(n),i),await r.invalidateQueries([n,e])}))})(e.title,t),{mutateAsync:x}=(0,N.X1)(),p=async()=>{r(e.action_button.url);let n=e.action_button.url;"mercuryo_pro"===e.id&&(n=await x(e.action_button.url)),i.openPage(((n,e,t,r,i)=>{const[o,s]="buy"===i?[r,"TON"]:["TON",r],l=(0,w.Tg)(t.active.rawAddress,t.network);if((n=n.replace("{ADDRESS}",l).replace("{CUR_FROM}",o).replace("{CUR_TO}",s)).includes("TX_ID")){var c;const t="mercuryo_"+(0,C.Z)();n=(n=n.replace(/\{TX_ID\}/g,t)).replace(/\=TON\&/gi,"=TONCOIN&"),n+="&signature=".concat((0,v.sha512_sync)("".concat(l).concat(null!==(c=e.mercuryoSecret)&&void 0!==c?c:"")).toString("hex"))}return n})(n,s,o,l,t)),a(!1)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(D.HC,{onClick:()=>{h?p():a(!0)},children:(0,Z.jsxs)($,{children:[(0,Z.jsxs)(E,{children:[(0,Z.jsx)(F,{src:e.icon_url}),(0,Z.jsxs)(X,{children:[(0,Z.jsxs)(nn,{children:[e.title,e.badge&&(0,Z.jsx)(tn,{children:e.badge})]}),(0,Z.jsx)(z,{children:e.description})]})]}),(0,Z.jsx)(A,{children:(0,Z.jsx)(T.XC,{})})]})},e.title),(0,Z.jsx)(L.P_,{isOpen:d,handleClose:()=>a(!1),children:()=>(0,Z.jsxs)(W,{children:[(0,Z.jsx)(F,{large:!0,src:e.icon_url}),(0,Z.jsxs)(en,{children:[e.title,e.badge&&(0,Z.jsx)(tn,{children:e.badge})]}),(0,Z.jsx)(Q,{children:(0,Z.jsx)(z,{children:e.description})}),(0,Z.jsx)(K,{buttons:e.info_buttons}),(0,Z.jsx)(R.zx,{size:"large",fullWidth:!0,primary:!0,onClick:p,children:e.action_button.title}),(0,Z.jsx)(J,{children:(0,Z.jsx)(V.X,{checked:!!h,onChange:u,children:c("exchange_method_dont_show_again")})})]})})]})}},56445:(n,e,t)=>{t.d(e,{Iy:()=>s,Vw:()=>i,jE:()=>o});var r=t(80184);const i=()=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:(0,r.jsx)("path",{d:"M14 21.5V14M14 14V6.5M14 14H21.5M14 14H6.5",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),o=()=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:(0,r.jsx)("path",{d:"M14 6.5V21.5M14 6.5L7.5 13M14 6.5L20.5 13",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),s=()=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:(0,r.jsx)("path",{d:"M14 21.5V6.5M14 21.5L7.5 15M14 21.5L20.5 15",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})})},4864:(n,e,t)=>{t.d(e,{Z:()=>d});const r={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let i;const o=new Uint8Array(16);function s(){if(!i&&(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(o)}const l=[];for(let a=0;a<256;++a)l.push((a+256).toString(16).slice(1));function c(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return l[n[e+0]]+l[n[e+1]]+l[n[e+2]]+l[n[e+3]]+"-"+l[n[e+4]]+l[n[e+5]]+"-"+l[n[e+6]]+l[n[e+7]]+"-"+l[n[e+8]]+l[n[e+9]]+"-"+l[n[e+10]]+l[n[e+11]]+l[n[e+12]]+l[n[e+13]]+l[n[e+14]]+l[n[e+15]]}const d=function(n,e,t){if(r.randomUUID&&!e&&!n)return r.randomUUID();const i=(n=n||{}).random||(n.rng||s)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){t=t||0;for(let n=0;n<16;++n)e[t+n]=i[n];return e}return c(i)}}}]);
//# sourceMappingURL=221.7e8ed6f0.chunk.js.map