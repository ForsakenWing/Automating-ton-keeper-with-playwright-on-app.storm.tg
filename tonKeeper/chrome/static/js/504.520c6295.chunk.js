"use strict";(self.webpackChunk_tonkeeper_extension=self.webpackChunk_tonkeeper_extension||[]).push([[504],{89221:(e,n,t)=>{t.r(n),t.d(n,{default:()=>O});var r=t(80184),i=t(14182),s=t(18203),o=t(72791),a=t(4959),c=t(73485),l=t(87594),d=t(23098),u=t(61945),h=t(47578),p=t(38705),f=t(86749),x=t(98502),m=t(20220),v=t(5784),j=t(26503),y=t(47712),w=t(68827);const k=e=>{let{onBack:n,onClose:t}=e;return(0,r.jsxs)(h.hy,{children:[(0,r.jsx)(w.z,{onClick:n,children:(0,r.jsx)(v.wy,{})}),(0,r.jsx)(h.Ho,{handleClose:t})]})},C=e=>{let{nftItem:n}=e;const{t:t}=(0,u.$)(),i=(0,d._H)(),s=(0,l.tN)();return(0,r.jsxs)(j.L8,{fullWidth:!0,children:[n.collection&&(0,r.jsx)(j.HC,{onClick:()=>i.copyToClipboard((0,m.Tg)(n.collection.address,s.network,!0)),children:(0,r.jsxs)(j.me,{children:[(0,r.jsx)(x.__,{children:t("NFT_collection_id")}),(0,r.jsx)(y.RV,{children:(0,m.FN)((0,m.Tg)(n.collection.address,s.network,!0))})]})}),(0,r.jsx)(j.HC,{onClick:()=>i.copyToClipboard((0,m.Tg)(n.address,s.network,!0)),children:(0,r.jsxs)(j.me,{children:[(0,r.jsx)(x.__,{children:t("NFT_item_id")}),(0,r.jsx)(y.RV,{children:(0,m.FN)((0,m.Tg)(n.address,s.network,!0))})]})})]})};var b=t(41235),E=t(45928),_=t(73643),g=t(76978),B=t(1849),A=t(33455),S=t(97957),T=t(86871),H=t(8676),N=t(37460);const R=new g.n({asset:B.Ct,weiAmount:0}),M=e=>{var n,t,i;let{recipient:s,onClose:a,nftItem:c,HeaderBlock:f,MainButton:m}=e;const{standalone:v}=(0,l.bp)(),[y,w]=(0,o.useState)(!1),{t:k}=(0,u.$)(),M=((e,n)=>{const{t:t}=(0,u.$)(),r=(0,d._H)(),{api:i}=(0,l.bp)(),s=(0,l.tN)(),o=(0,b.useQueryClient)();return(0,b.useQuery)([S.S8.estimate,null===n||void 0===n?void 0:n.address],(async()=>{try{const t=await(0,E.uc)(i,s,n,e);return{fee:new g.n({asset:B.Ct,weiAmount:-1*t.event.extra}),payload:t}}catch(a){throw await(0,x.cB)(o,r,t,a),a}}),{enabled:null!=n})})(c,s),{mutateAsync:V,isLoading:F,error:I,reset:O}=((e,n,t)=>{const{t:r}=(0,u.$)(),i=(0,d._H)(),{api:s}=(0,l.bp)(),o=(0,l.tN)(),a=(0,b.useQueryClient)(),c=(0,A.BJ)(),{mutateAsync:h}=(0,H.Ug)();return(0,b.useMutation)((async()=>{if(!t)return!1;const l=await(0,T.TC)(i,o.publicKey,h).catch((()=>null));if(null===l)return!1;c("send-nft");try{await(0,E.Nq)(s,o,e,n,t,l)}catch(d){await(0,x.cB)(a,i,r,d)}return await a.invalidateQueries([o.active.rawAddress]),await a.invalidateQueries(),!0}))})(s,c,null===(n=M.data)||void 0===n?void 0:n.payload),Z=null===(t=c.previews)||void 0===t?void 0:t.find((e=>"100x100"===e.resolution)),L=async()=>{if(F)return!1;try{O();const e=await V();return e&&(w(!0),setTimeout(a,2e3)),e}catch(e){return console.error(e),!1}};return(0,r.jsx)(p.vD.Provider,{value:{recipient:s,assetAmount:R,estimation:M,formState:{done:y,isLoading:F,error:I},onClose:()=>a(),onBack:()=>{},handleSubmit:L},children:(0,r.jsxs)(h.r4,{onSubmit:async e=>{e.stopPropagation(),e.preventDefault(),L()},standalone:v,children:[(0,r.jsx)(f,{}),(0,r.jsxs)(N.kI,{children:[Z?(0,r.jsx)(N.Ee,{src:Z.url}):(0,r.jsx)(N.Ao,{}),(0,r.jsx)(N.DG,{children:null!==(i=c.dns)&&void 0!==i?i:c.metadata.name}),(0,r.jsx)(N.Dx,{children:k("txActions_signRaw_types_nftItemTransfer")})]}),(0,r.jsxs)(j.L8,{margin:!1,fullWidth:!0,children:[(0,r.jsx)(p.n_,{}),(0,r.jsx)(p.RB,{}),(0,r.jsx)(p.f1,{})]}),(0,r.jsx)(C,{nftItem:c}),(0,r.jsx)(_.Zv,{}),(0,r.jsx)(m,{})]})})};var V=t(77827),F=t(97284);const I=e=>{let{nftItem:n,onClose:t}=e;const h=(0,d._H)(),{t:m}=(0,u.$)(),{standalone:v,extension:j}=(0,l.bp)(),y=(0,o.useRef)(null),w=(0,o.useRef)(null),[C,E]=(0,o.useState)(!0),[_,g]=(0,o.useState)(),{mutateAsync:B}=(0,f.gW)(),{mutateAsync:A,isLoading:S}=(()=>{const e=(0,d._H)(),{api:n}=(0,l.bp)(),t=(0,l.tN)(),{t:r}=(0,u.$)(),i=(0,b.useQueryClient)();return(0,b.useMutation)((async()=>{const s=await new F.HOX(n.tonApiV2).getAccount({accountId:t.active.rawAddress});try{(0,V.$2)(s)}catch(o){await(0,x.cB)(i,e,r,o)}}))})(),T=(0,o.useCallback)((()=>{E(!1),g((e=>e?{...e,done:!1}:void 0))}),[g]),[H,N]=_&&_.done?["confirm",w]:["recipient",y],R=(0,o.useCallback)((async e=>{let{address:n}=e;const t={address:n},r=await B(t);g({address:{...t,blockchain:i.S.TON},toAccount:r,comment:"",done:!0})}),[g,B]);return(0,r.jsx)(x.im,{standalone:v,extension:j,children:(0,r.jsx)(a.Z,{childFactory:(0,x.mH)(C),children:(0,r.jsx)(c.Z,{nodeRef:N,classNames:"right-to-left",addEndListener:e=>{setTimeout(e,x.x9)},children:(0,r.jsxs)("div",{ref:N,children:["recipient"===H&&(0,r.jsx)(f.Aq,{data:_,setRecipient:async e=>{await A(),E(!0),g(e)},onScan:async e=>{const n=(0,s.M)({url:e});if(null===n)return h.uiEvents.emit("copy",{method:"copy",params:m("Unexpected_QR_Code")});await R(n)},isExternalLoading:S,acceptBlockchains:[i.S.TON],MainButton:x.c7,HeaderBlock:()=>(0,r.jsx)(x.ap,{title:m("nft_transfer_title"),onClose:t})}),"confirm"===H&&(0,r.jsx)(M,{onClose:t,recipient:_,nftItem:n,MainButton:()=>(0,r.jsx)(p.uq,{MainButton:x.y8}),HeaderBlock:()=>(0,r.jsx)(k,{onBack:T,onClose:t})})]})},H)})})},O=()=>{const e=(0,d._H)(),[n,t]=(0,o.useState)(),i=(0,o.useCallback)((()=>{t(void 0)}),[t]);(0,o.useEffect)((()=>{const n=e=>{t(e.params)};return e.uiEvents.on("transferNft",n),()=>{e.uiEvents.off("transferNft",n)}}),[]);const s=(0,o.useCallback)((()=>{if(n)return(0,r.jsx)(I,{onClose:i,nftItem:n})}),[n,i]);return(0,r.jsx)(h.P_,{isOpen:!!n,handleClose:i,hideButton:!0,backShadow:!0,children:s})}},4959:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(9116),i=t(29580);var s=t(61174),o=t(72791),a=t(99172);function c(e,n){var t=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,o.isValidElement)(e)?n(e):e}(e)})),t}function l(e,n,t){return null!=t[n]?t[n]:e.props[n]}function d(e,n,t){var r=c(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),s=[];for(var o in e)o in n?s.length&&(i[o]=s,s=[]):s.push(o);var a={};for(var c in n){if(i[c])for(r=0;r<i[c].length;r++){var l=i[c][r];a[i[c][r]]=t(l)}a[c]=t(c)}for(r=0;r<s.length;r++)a[s[r]]=t(s[r]);return a}(n,r);return Object.keys(i).forEach((function(s){var a=i[s];if((0,o.isValidElement)(a)){var c=s in n,d=s in r,u=n[s],h=(0,o.isValidElement)(u)&&!u.props.in;!d||c&&!h?d||!c||h?d&&c&&(0,o.isValidElement)(u)&&(i[s]=(0,o.cloneElement)(a,{onExited:t.bind(null,a),in:u.props.in,exit:l(a,"exit",e),enter:l(a,"enter",e)})):i[s]=(0,o.cloneElement)(a,{in:!1}):i[s]=(0,o.cloneElement)(a,{onExited:t.bind(null,a),in:!0,exit:l(a,"exit",e),enter:l(a,"enter",e)})}})),i}var u=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},h=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,s.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,s=n.handleExited;return{children:n.firstRender?(t=e,r=s,c(t.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:l(e,"appear",t),enter:l(e,"enter",t),exit:l(e,"exit",t)})}))):d(e,i,s),firstRender:!1}},t.handleExited=function(e,n){var t=c(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,i.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,i=(0,r.Z)(e,["component","childFactory"]),s=this.state.contextValue,c=u(this.state.children).map(t);return delete i.appear,delete i.enter,delete i.exit,null===n?o.createElement(a.Z.Provider,{value:s},c):o.createElement(a.Z.Provider,{value:s},o.createElement(n,i,c))},n}(o.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(e){return e}};const p=h}}]);
//# sourceMappingURL=504.520c6295.chunk.js.map