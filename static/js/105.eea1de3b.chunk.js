"use strict";(self.webpackChunkcontact_hub=self.webpackChunkcontact_hub||[]).push([[105],{105:function(t,n,e){e.r(n),e.d(n,{default:function(){return T}});var i,o,r,a,c,l=e(7990),s={modalDivContactFormActive:"ContactForm_modalDivContactFormActive__iqPeh",divForMiniContactForm:"ContactForm_divForMiniContactForm__GE+KH",firstDivContactFormActive:"ContactForm_firstDivContactFormActive__ULKpq",buttonAddMiniContactForm:"ContactForm_buttonAddMiniContactForm__HTUv0",divForMiniContactFormHover:"ContactForm_divForMiniContactFormHover__hDzTU",firstDivContactForm:"ContactForm_firstDivContactForm__IX7sb",divContactForm:"ContactForm_divContactForm__rz08u",formContactForm:"ContactForm_formContactForm__EZbe8",labelContactForm:"ContactForm_labelContactForm__ocuDM",inputContactForm:"ContactForm_inputContactForm__h2PrQ",buttonContactForm:"ContactForm_buttonContactForm__lTw1p",nameInputContactForm:"ContactForm_nameInputContactForm__lolmN"},u=e(4420),d=e(2580),m=e(2791),h=e(184),C=function(){var t=(0,u.I0)(),n=(0,u.v9)(d.Af).map((function(t){return t.name}));var e=function(t){"Escape"===t.key&&i()},i=function t(n){var i=document.querySelector(".modalDivContactForm"),o=document.querySelector(".firstDivContactForm"),r=document.querySelectorAll(".inputsAdd");function a(){i.removeEventListener("click",t),document.removeEventListener("keydown",e),r.forEach((function(t){return t.blur()})),i.classList.remove(s.modalDivContactFormActive),o.classList.remove(s.firstDivContactFormActive)}n?n.target.classList.contains(s.modalDivContactFormActive)&&a():a()};return(0,m.useEffect)((function(){var t=document.querySelector(".divForMiniContactForm"),n=document.querySelector(".firstDivContactForm"),e=document.querySelector(".labelFilter");t.addEventListener("mouseenter",(function(){n.classList.add(s.divForMiniContactFormHover),e&&(e.style.marginRight="155px")})),t.addEventListener("mouseleave",(function(){n.classList.remove(s.divForMiniContactFormHover),e&&(e.style.marginRight="130px")}))})),(0,h.jsx)("div",{className:[s.modalDivContactForm,"modalDivContactForm"].join(" "),children:(0,h.jsxs)("div",{className:[s.firstDivContactForm,"firstDivContactForm"].join(" "),children:[(0,h.jsx)("div",{className:[s.divForMiniContactForm,"divForMiniContactForm"].join(" "),children:(0,h.jsx)("button",{className:s.buttonAddMiniContactForm,type:"button",onClick:function(){var t=document.querySelector(".modalDivContactForm"),n=document.querySelector(".firstDivContactForm"),o=document.querySelector(".inputNameAdd");t.classList.add(s.modalDivContactFormActive),n.classList.add(s.firstDivContactFormActive),setTimeout((function(){o.focus()}),100),t.addEventListener("click",i),document.addEventListener("keydown",e)},children:"Add"})}),(0,h.jsx)("div",{className:s.divContactForm,children:(0,h.jsxs)("form",{className:s.formContactForm,onSubmit:function(e){e.preventDefault();var o=e.currentTarget.elements.name.value;if(n.some((function(t){return t.toLowerCase()===o.toLowerCase()})))alert("".concat(o," is already in contacts."));else{var r=e.currentTarget.elements.number.value,a={name:o,number:r};t((0,l.uK)(a)),e.currentTarget.reset(),i()}},children:[(0,h.jsxs)("label",{className:s.labelContactForm,children:[(0,h.jsx)("span",{className:s.nameInputContactForm,children:"Name"}),(0,h.jsx)("input",{className:[s.inputContactForm,"inputNameAdd","inputsAdd"].join(" "),type:"text",name:"name",required:!0})]}),(0,h.jsxs)("label",{className:s.labelContactForm,children:[(0,h.jsx)("span",{className:s.nameInputContactForm,children:"Number"}),(0,h.jsx)("input",{className:[s.inputContactForm,"inputsAdd"].join(" "),type:"tel",name:"number",required:!0})]}),(0,h.jsx)("button",{className:s.buttonContactForm,type:"submit",children:"Add contact"})]})})]})})},f=e(9439),g={labelFilter:"Filter_labelFilter__7SBy1",inputFilter:"Filter_inputFilter__8QMOp"},p=e(1473),v=function(){var t=(0,u.v9)(d.AD),n=(0,u.I0)(),e=(0,m.useState)(""),i=(0,f.Z)(e,2),o=i[0],r=i[1];return(0,m.useEffect)((function(){var t=window.innerWidth;r(t>465?"Please start typing the desired name":t<=465&&t>370?"Please start typing name":"Type name")}),[]),(0,h.jsx)("label",{className:[g.labelFilter,"labelFilter"].join(" "),children:(0,h.jsx)("input",{value:t,className:g.inputFilter,type:"text",name:"filter",placeholder:o,onChange:function(t){t.preventDefault();var e=t.target.value;n((0,p.T)(e))}})})},x={divForContactList:"Styles_divForContactList__Ofiyn",listContacts:"Styles_listContacts__SuTGr",itemContact:"Styles_itemContact__64PYw",itemContactActive:"Styles_itemContactActive__g5AvF",firstDivItemContact:"Styles_firstDivItemContact__qg5NT",divItemContact:"Styles_divItemContact__azqCU",pItemContactsName:"Styles_pItemContactsName__ZaW5M",pItemContactsNumber:"Styles_pItemContactsNumber__mAeQH",buttonDelete:"Styles_buttonDelete__Et1oD",changeCBut:"Styles_changeCBut__smBip",callBut:"Styles_callBut__LcsX1"},y=e(7392),b={formChangingCWindow:"ChangingCWindow_formChangingCWindow__Ly6Lz",labelChangingCWindow:"ChangingCWindow_labelChangingCWindow__8hyzk",inputChangingCWindow:"ChangingCWindow_inputChangingCWindow__U+AvV",buttonsChangingCWindow:"ChangingCWindow_buttonsChangingCWindow__CIoc1",buttonChangingCWindow:"ChangingCWindow_buttonChangingCWindow__QQGd6"},w=e(7386),F=function(t){var n=t.closeChangingCWindow,e=t.name,i=t.number,o=t.id,r=(0,u.I0)();return(0,m.useEffect)((function(){var t=2,n=window.innerWidth,e=n<=1e3?n:1e3;e<800&&(t=1.5);var i=document.querySelectorAll(".nameInputChangingCWindow"),o=document.querySelectorAll(".inputChangingCWindow"),r=document.querySelector(".buttonsChangingCWindow"),a=document.querySelectorAll(".buttonChangingCWindow"),c=document.querySelectorAll(".labelChangingCWindow"),l=document.querySelector(".formChangingCWindow");i&&o&&r&&a&&c&&l&&(i.forEach((function(n){return n.style.fontSize=e/(21*t)+"px"})),o.forEach((function(n){n.style.width=e/(1.666667*t)+"px",n.style.height=e/(12.5*t)+"px",n.style.borderRadius=e/(50*t)+"px",n.style.fontSize=e/(25*t)+"px",n.style.paddingLeft=e/(50*t)+"px",n.style.paddingRight=e/(50*t)+"px",n.style.borderWidth=e/(500*t)+"px"})),r.style.width=e/(1.666667*t)+"px",a.forEach((function(n){n.style.height=e/(16.66667*t)+"px",n.style.borderRadius=e/(100*t)+"px",n.style.fontSize=e/(35.7*t)+"px"})),c.forEach((function(n){return n.style.gap=e/(50*t)+"px"})),l.style.gap=e/(25*t)+"px",l.style.borderRadius=e/(25*t)+"px")}),[]),(0,h.jsxs)("form",{className:[b.formChangingCWindow,"formChangingCWindow"].join(" "),onSubmit:function(t){t.preventDefault();var a=t.currentTarget.elements.name.value,c=o,s=t.currentTarget.elements.number.value,u={id:c,name:a,number:s};if(e!==a||i!==s){r((0,l._n)(u)),t.currentTarget.reset();var d=document.querySelector(".listContactsForGap").scrollLeft;r((0,w.B)(d))}else n()},children:[(0,h.jsxs)("label",{className:[b.labelChangingCWindow,"labelChangingCWindow"].join(" "),children:[(0,h.jsx)("span",{className:[b.nameInputChangingCWindow,"nameInputChangingCWindow"].join(" "),children:"Name"}),(0,h.jsx)("input",{className:[b.inputChangingCWindow,"inputChangingCWindow"].join(" "),defaultValue:e,type:"text",name:"name",required:!0})]}),(0,h.jsxs)("label",{className:[b.labelChangingCWindow,"labelChangingCWindow"].join(" "),children:[(0,h.jsx)("span",{className:[b.nameInputChangingCWindow,"nameInputChangingCWindow"].join(" "),children:"Number"}),(0,h.jsx)("input",{className:[b.inputChangingCWindow,"inputChangingCWindow"].join(" "),defaultValue:i,type:"tel",name:"number",required:!0})]}),(0,h.jsxs)("div",{className:[b.buttonsChangingCWindow,"buttonsChangingCWindow"].join(" "),children:[(0,h.jsx)("button",{className:[b.buttonChangingCWindow,"buttonChangingCWindow"].join(" "),type:"button",onClick:n,children:"Changen't contact"}),(0,h.jsx)("button",{className:[b.buttonChangingCWindow,"buttonChangingCWindow"].join(" "),type:"submit",children:"Change contact"})]})]})},_=function(t){var n=t.contact,e=t.index,i=t.id,o=t.activeId,r="https://lh3.googleusercontent.com/pw/ABLVV857Vcs93eVOrm0Pm8WnNvcJSKLX3arSslyCmWpj-7cuG6ywCsjBpMiPRikFXgiC2xK8v2En5xPEynswskO4l7gjBpdWNWzhFRyOj8BJ3orxfjDDlbSF1EOr7mROLVTTOvdNiJhvM432128-GmRqOrEKcQ=w1500-h1000-s-no-gm?authuser=0",a=(0,u.I0)(),c=(0,u.v9)(d.MH),s=(0,u.v9)(d.gt),C=(0,u.v9)(d.D5),g=(0,u.v9)(d.DJ).length,p=(0,u.v9)(d.pI),v=p?p.img:"https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0",b=(0,u.v9)(d.D9),_=b?b.img:r,j=(0,m.useState)(!1),W=(0,f.Z)(j,2),N=W[0],S=W[1],L=(0,m.useRef)(null),A=L.current,E=(0,m.useRef)(null),D=E.current,I=(0,m.useRef)(null),R=I.current,q=(0,m.useRef)(null),M=q.current,k=(0,m.useRef)(null),B=k.current,T=(0,m.useState)(r),Z=(0,f.Z)(T,2),z=Z[0],P=Z[1];(0,m.useEffect)((function(){P(g>1?_:1===g?v:r)}),[g,v,_,z]);var H=c.length,O=1,K=s[O=e>=H?c[e%H]:c[e]]?s[O].img:null;(0,m.useEffect)((function(){var t=C<=1e3?C:1e3;i!==o&&A&&D&&R&&M&&B?(S(!1),A.style.borderRadius=t/44+"px",D.style.borderRadius=t/44+"px",D.style.textShadow=t/500+"px "+t/500+"px "+t/200+"px black",R.style.top=t/44+"px",R.style.left=t/44+"px",M.style.top=t/44+"px",M.style.right=t/44+"px",M.style.width=t/26+"px",M.style.height=t/26+"px",R.style.width=t/26+"px",R.style.height=t/26+"px",B.style.bottom=t/44+"px",B.style.left=t/44+"px",B.style.width=t/26+"px",B.style.height=t/26+"px"):i===o&&A&&D&&R&&M&&B&&(A.style.borderRadius=t/44*1.4+"px",D.style.borderRadius=t/44*1.4+"px",D.style.textShadow=t/500+"px"+t/500+"px"+t/200+"px black",R.style.top=t/44*1.4+"px",R.style.left=t/44*1.4+"px",M.style.top=t/44*1.4+"px",M.style.right=t/44*1.4+"px",M.style.width=t/26*1.4+"px",M.style.height=t/26*1.4+"px",R.style.width=t/26*1.4+"px",R.style.height=t/26*1.4+"px",B.style.bottom=t/44*1.4+"px",B.style.left=t/44*1.4+"px",B.style.width=t/26*1.4+"px",B.style.height=t/26*1.4+"px")}),[o,i,D,A,R,M,B,C]);return(0,h.jsx)("div",{ref:L,className:[x.firstDivItemContact,"firstDivItemContact"].join(" "),style:{backgroundImage:"url(".concat(K||z,")"),backgroundSize:"cover",backgroundPosition:"center"},children:(0,h.jsxs)("div",{ref:E,className:[x.divItemContact,"divItemContact"].join(" "),children:[(0,h.jsx)("h2",{className:x.pItemContactsName,children:n.name}),(0,h.jsx)("p",{className:x.pItemContactsNumber,children:n.number}),(0,h.jsx)("button",{ref:q,id:n.id,className:x.buttonDelete,type:"button",onClick:function(){var t=n.id;a((0,l.GK)(t)),a((0,y.U7)());var e=document.querySelector(".listContactsForGap").scrollLeft;a((0,w.B)(e))},children:"Delete"}),(0,h.jsx)("button",{ref:I,type:"button",className:x.changeCBut,onClick:function(){setTimeout((function(){S(!0)}),400)},children:"Change contact"}),(0,h.jsx)("a",{href:"tel:".concat(n.number),children:(0,h.jsx)("button",{ref:k,type:"button",className:x.callBut,children:"Call to contact"})}),N&&(0,h.jsx)(F,{closeChangingCWindow:function(){S(!1)},name:n.name,number:n.number,id:n.id})]})})},j=function(){var t=(0,u.I0)(),n=(0,u.v9)(d.Af),e=(0,m.useState)(n),i=(0,f.Z)(e,2),o=i[0],r=i[1],a=(0,u.v9)(d.AD),c=(0,u.v9)(d.yS),l=(0,u.v9)(d.D5),s=(0,m.useState)(null),C=(0,f.Z)(s,2),g=C[0],p=C[1],v=(0,m.useRef)(!1),y=(0,m.useRef)([]),b=(0,m.useRef)([]),F=(0,m.useRef)(null);return(0,m.useEffect)((function(){c>0&&F.current&&(setTimeout((function(){F.current.scrollLeft=c}),100),t((0,w.B)(0)))}),[c,t]),(0,m.useEffect)((function(){var t=F.current,n=b.current,e=y.current,i=document.querySelector(".listContactsForGap"),o=window.innerWidth,r=o<=1e3?o:1e3;if(r&&e.length>0){e.forEach((function(t){t.style.minWidth=r/2+"px",t.style.height=r/3.334+"px",t.style.fontSize=r/38+"px",t.style.borderRadius=r/44+"px",p(null)})),i.style.gap=r/20+"px";var a=function(){e.length>0&&e.forEach((function(t){return s(t,o)}))};!v.current&&t&&e&&(v.current=!0,t.addEventListener("scroll",a));var c=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(o=window.innerWidth,(r=o<=1e3?o:1e3)&&e.length>0){var c=e.filter((function(t){return t.getAttribute("id")!==n.getAttribute("id")}));c.forEach((function(t){t.style.minWidth=r/2+"px",t.style.height=r/3.334+"px",t.style.fontSize=r/38+"px",t.style.borderRadius=r/44+"px",t.classList.remove(x.itemContactActive)})),n.style.minWidth=r/2*1.4+"px",n.style.height=r/3.334*1.4+"px",n.style.fontSize=r/38*1.4+"px",n.style.borderRadius=r/44*1.4+"px",n.classList.add(x.itemContactActive),p(n.getAttribute("id"));var l=F.current.scrollLeft;F.current.style.scrollBehavior="smooth",0!==i&&(F.current.scrollLeft=l+i),setTimeout((function(){t&&t.addEventListener("scroll",a)}),500)}},l=function(n,e){t&&t.removeEventListener("scroll",a);var i=n.getBoundingClientRect(),o=F.current.getBoundingClientRect(),r=260,l=60;if(e>=1e3?(r=300,l=100):e<1e3&&e>=900?(r=285,l=95):e<900&&e>=800?(r=253,l=85):e<800&&e>=750?(r=233,l=77):e<750&&e>=700?(r=218,l=73):e<700&&e>=650?(r=202,l=67):e<650&&e>=600?(r=187,l=62):e<600&&e>=550?(r=173,l=58):e<550&&e>=500?(r=158,l=51):e<500&&e>=450?(r=153,l=58):e<450&&e>=400?(r=137,l=51):e<400&&e>=350?(r=121,l=46):e<350&&(r=105,l=36),i.x<o.x+o.width/2){var s=0-o.width/2+i.x+r;c(n,s)}else{var u=0-o.width/2+i.x+l;c(n,u)}};e.forEach((function(e){var i=e.getAttribute("id");!n.includes(i)&&t&&(e.addEventListener("click",(function(){return l(e,o)})),n.push(i))}));var s=function(t,n){var e=t.getBoundingClientRect(),i=F.current.getBoundingClientRect(),o=i.x+i.width/2-e.width/2+50-270,r=i.x+i.width/2+e.width/2-50-270,a=200;if(n<=650&&n>500?(o=i.x+i.width/2-e.width/2+50-170,r=i.x+i.width/2+e.width/2-50-170,a=150):n<=500&&n>450?(o=i.x+i.width/2-e.width/2+50-170,r=i.x+i.width/2+e.width/2-50-170,a=130):n<=450&&n>350?(o=i.x+i.width/2-e.width/2+50-100,r=i.x+i.width/2+e.width/2-50-100,a=100):n<=350&&(o=i.x,r=i.x+i.width/2+e.width/2-50-60,a=80),e.x>o&&e.x<i.x+i.width/2&&!t.classList.contains(x.itemContactActive)){var l=0-e.width/2+a;c(t,l)}else if(e.x>i.x+i.width/2&&e.x<r&&!t.classList.contains(x.itemContactActive)){var s=0+e.width/2-100;c(t,s)}};return function(){r=null,t&&(v.current=!1,t.removeEventListener("scroll",a)),e.length>0&&(e.forEach((function(t){t.removeEventListener("click",(function(){return l(t,o)}))})),b.current=[])}}}),[o,l]),(0,m.useEffect)((function(){y.current=[],a.length>0?r(n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))):r(n)}),[a,n]),(0,m.useEffect)((function(){var t=window.innerHeight,n=document.querySelector("header"),e=document.querySelector(".divForAllMain"),i=n.getBoundingClientRect().height+e.getBoundingClientRect().height+15,r=document.querySelector("body");r.style.height="100%";var a=document.querySelector("#root");a.style.height="100%";var c=document.querySelector("html");return c.style.height="100%",t<i&&o.length>0&&(r.style.height="auto",a.style.height="auto",c.style.height="auto"),function(){i=null}}),[o]),(0,h.jsx)("ul",{ref:F,className:[x.listContacts,"listContactsForGap"].join(" "),children:0===o.length&&0===a.length?(0,h.jsx)("h2",{children:"Right now you don't have any contacts."}):0!==o.length?o.map((function(t){return(0,h.jsx)("li",{ref:function(t){null===t||y.current.some((function(n){return n.getAttribute("id")===t.getAttribute("id")}))||y.current.push(t)},id:t.id,className:[x.itemContact,"itemContact"].join(" "),children:(0,h.jsx)(_,{contact:t,index:o.indexOf(t),id:t.id,activeId:g})},t.id)})):(0,h.jsx)("h2",{children:"Not found any contacts that meet the search criteria."})})},W=e(3433),N=e(168),S=e(7924),L=(0,S.F4)(i||(i=(0,N.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),A=S.ZP.div(o||(o=(0,N.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\n"]))),E=S.ZP.div(r||(r=(0,N.Z)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]))),D=S.ZP.div(a||(a=(0,N.Z)(["\n  animation: ",' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n\n  &:after {\n    content: " ";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #000;\n    margin: -4px 0 0 -4px;\n  }\n'])),L),I=(0,S.ZP)(D)(c||(c=(0,N.Z)(["\n  &:nth-child(1) {\n    animation-delay: -0.036s;\n    &:after {\n      top: 63px;\n      left: 63px;\n    }\n  }\n  &:nth-child(2) {\n    animation-delay: -0.072s;\n    &:after {\n      top: 68px;\n      left: 56px;\n    }\n  }\n  &:nth-child(3) {\n    animation-delay: -0.108s;\n    &:after {\n      top: 71px;\n      left: 48px;\n    }\n  }\n  &:nth-child(4) {\n    animation-delay: -0.144s;\n    &:after {\n      top: 72px;\n      left: 40px;\n    }\n  }\n  &:nth-child(5) {\n    animation-delay: -0.18s;\n    &:after {\n      top: 71px;\n      left: 32px;\n    }\n  }\n  &:nth-child(6) {\n    animation-delay: -0.216s;\n    &:after {\n      top: 68px;\n      left: 24px;\n    }\n  }\n  &:nth-child(7) {\n    animation-delay: -0.252s;\n    &:after {\n      top: 63px;\n      left: 17px;\n    }\n  }\n  &:nth-child(8) {\n    animation-delay: -0.288s;\n    &:after {\n      top: 56px;\n      left: 12px;\n    }\n  }\n"]))),R=function(){return(0,h.jsx)(A,{children:(0,h.jsx)(E,{children:(0,W.Z)(Array(8)).map((function(t,n){return(0,h.jsx)(I,{},n)}))})})},q=function(){var t=window.innerWidth,n=(0,u.v9)(d.gt),e=(0,u.v9)(d.MH),i=(0,u.I0)(),o=(0,u.v9)(d.xU),r=(0,u.v9)(d.zh);(0,m.useEffect)((function(){e.length<n.length&&i((0,y.Kj)(function(){var t=[],e=n.length-1;function i(){var n=Math.floor(Math.random()*e),o=t.length;t[o-1]!==n&&t[o-2]!==n&&t[o-3]!==n&&t[o-4]!==n&&t[o-5]!==n?t.push(n):i()}for(var o=0;o<=e;o++)i();return t}()))})),(0,m.useEffect)((function(){i((0,l.yF)())}),[i]);var a=20;return a=t>1e3?50:t>500&&t<=1e3?t/20:t/40,(0,h.jsx)("div",{className:[x.allDivContactList,"allDivContactList"].join(" "),children:r?(0,h.jsx)("h2",{children:"Oopsss...Something went wrong..."}):(0,h.jsx)("div",{id:"divForContactList",className:x.divForContactList,style:{paddingLeft:a,paddingRight:a},children:o&&!r?(0,h.jsx)(R,{}):(0,h.jsx)(j,{})})})},M=e(5294),k=e(8992),B="PageUsers_divContFiltPageUsers__JZL5M",T=function(){var t=(0,u.v9)(k.rK);return t&&(M.Z.defaults.headers.common.Authorization="Bearer ".concat(t)),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:B,children:[(0,h.jsx)(v,{}),(0,h.jsx)(C,{})]}),(0,h.jsx)(q,{})]})}}}]);
//# sourceMappingURL=105.eea1de3b.chunk.js.map