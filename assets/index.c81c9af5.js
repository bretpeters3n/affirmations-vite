import{r as d}from"./react.a7ab7074.js";import{r as X,c as Z}from"./react-dom.aad15b87.js";import{B as ee,L as D}from"./react-router-dom.b89f8c36.js";import{B as A,Q as te}from"./react-toastify.524bb1fa.js";import"./dotenv.01ac9843.js";import{d as ie,a as re,T as U,M as z,I as ae,b as ne,c as oe,e as se,f as le}from"./@mui.b0b2f288.js";import{S as ce,a as j}from"./@splidejs.5140dec3.js";import{u as de}from"./styled-components.84137b29.js";import{j as e,F as b,a as n}from"./@emotion.e89d8f29.js";import{a as C,b as K,d as ue,e as M}from"./react-router.f0f539b8.js";import{S as _}from"./short-unique-id.1b69fe19.js";import"./react-bootstrap.a91a39b6.js";import{m as Y}from"./framer-motion.8963ad62.js";import"./@babel.a48f8056.js";import"./scheduler.dc157529.js";import"./@remix-run.4f127cc9.js";import"./clsx.97e103c5.js";import"./react-transition-group.9eaf0af4.js";import"./stylis.dba46a58.js";import"./hoist-non-react-statics.638f24d5.js";import"./react-is.82bdbfaf.js";import"./classnames.f9d2a9c9.js";import"./prop-types.d41223d0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const me=[{id:"4EBDTB",currentGroup:"Default Affirmations",groups:[{id:"fkuT6N",group:"Default Affirmations",affirmations:[{id:"iqjiu5",affirmation:"You got this"},{id:"xsNHVz",affirmation:"You\u2019ll figure it out"},{id:"fFTc4T",affirmation:"You\u2019re a smart cookie"},{id:"xxbx1b",affirmation:"I believe in you"},{id:"ogoSaR",affirmation:"Sucking at something is the first step towards being good at something"}]}]}],G=r=>{localStorage.setItem("affirmationsUnique",JSON.stringify(r))},k=()=>{let r=[];function i(){r=localStorage.getItem("affirmationsUnique")?JSON.parse(localStorage.getItem("affirmationsUnique")):me,localStorage.setItem("affirmationsUnique",JSON.stringify(r))}return i(),r},O=(r,i)=>{r[0].currentGroup=i;let t;return Object.entries(r[0].groups).forEach(s=>{const[a,o]=s;o.group===i&&(t=a)}),r[0].groups[t].affirmations},E=(r,i)=>{let t;return Object.entries(r[0].groups).forEach(s=>{const[a,o]=s;o.group===i&&(t=a)}),t},F=r=>{let i=[];return r&&r[0].groups.forEach(t=>{i.push(t.group)}),i};function c(r){return e(fe,{className:"btn",onClick:r.run,children:r.text})}const fe=de.div`
  border: 2px solid var(--primaryColor);
  background-color: var(--backgroundColor);
  color: var(--primaryColor);
  white-space: no-wrap;
  border-radius: 40px;
  padding: 0.6em 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  transition: background-color 0.25s;
  margin-inline-start: 8px;
  margin-inline-end: 8px;
  margin: 8px;
  writing-mode: horizontal-tb;
  @media (max-width: 991px) {
    white-space: initial;
  }
  &:hover {
    border: 2px solid var(--primaryBtnColor);
    background-color: var(--primaryBtnColor);
    color: var(--backgroundColor);
  }
`,pe=()=>{const r=C(),i="/affirmations-vite/",t=k(),s=t[0].currentGroup,a=O(t,s),o=()=>{r(`${i}add`,{state:{currentGroup:s,affirmationsData:t}})};return e(b,{children:e("section",{className:"home-slideshow",children:n(ce,{options:{pagination:!1,pauseOnHover:!1,arrows:!1,type:"fade",rewind:!0,autoplay:!0,speed:500,width:"100vw",height:"100vh",interval:4e3},"aria-label":"My Affirmation Quotes",children:[a.length==0?n(j,{className:"d-flex justify-content-center w-100",style:{width:"100vw!important"},children:[n("p",{children:["No affirmations present",e("br",{}),"in ",e("i",{children:s})," group"]}),e("div",{className:"pt-0 pb-0 mt-0 mb-0",children:e(c,{text:"Add Affirmation",run:()=>o()})})]}):a.map(l=>e(j,{id:l.id,value:l.affirmation,"data-splide-interval":l.affirmation.length>60?"8000":"4000",children:e("p",{children:l.affirmation})},l.id)),e("div",{className:"splide__progress",children:e("div",{className:"splide__progress__bar"})})]})})})},he=({affirmation:r,id:i,currentGroup:t,affirmationsData:s})=>{const a=C(),o="/affirmations-vite/",l=m=>{let x=m.target.closest("li").getAttribute("id");a(`${o}edit`,{state:{affirmationId:x}})};return e("li",{style:{listStyleType:"none"},id:i,className:"list-group-flush splide__slide__EDIT",children:e("div",{className:"card",children:n("div",{className:"card-body d-flex flex-row",children:[e("p",{className:"theme-switcher text-center",children:r}),e("button",{onClick:m=>{l(m)},className:"theme-switcher edit",children:e(ie,{fontSize:"small",style:{color:"white"}})})]})})},i)},ge=({currentGroup:r,affirmationsData:i,affirmations:t})=>e(b,{children:n("div",{className:"MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root",style:{width:"100%",maxWidth:"500px",margin:"auto"},children:[n("label",{className:"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1jy569b-MuiFormLabel-root-MuiInputLabel-root","data-shrink":"true",htmlFor:"outlined-select-currency",id:"outlined-select-currency-label",children:["Group: ",e("i",{style:{color:"#303030"},children:r})]}),n("div",{className:"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-multiline css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root",style:{borderRadius:"5px"},children:[n("div",{className:"d-grid gap-2 p-3 pt-4",children:[t.length?t.map(({affirmation:s,id:a},o)=>e(he,{affirmation:s,id:o,currentGroup:r,affirmationsData:i},a)):n("p",{className:"mb-2",children:[e("i",{children:"No affirmations present"}),e("br",{}),e("small",{className:"text-muted",children:"add an affirmation above ^"})]}),t.length?e("div",{className:"pt-3",children:e("p",{children:e("i",{children:"End of list"})})}):null]}),e("fieldset",{"aria-hidden":"true",className:"MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline aff-wrap-gradient",children:e("legend",{className:"css-14lo706",children:n("span",{children:["Group: ",r]})})})]})]})}),ye=({currentGroup:r,affirmationsData:i,affirmations:t})=>{const s=C(),a="/affirmations-vite/",o=()=>{s(`${a}add`,{state:{currentGroup:r,affirmationsData:i}})};return n(b,{children:[e("div",{className:"pt-4 pb-0",children:e(c,{text:"Add Affirmation",run:()=>o()})}),e("div",{className:"pt-0 pb-2",children:e(re,{style:{color:"rgb(150, 150, 150)"}})}),e(ge,{affirmationsData:i,currentGroup:r,affirmations:t})]})},S=({children:r})=>{const i=d.exports.useRef(null);return i.current||(i.current=document.createElement("div")),d.exports.useEffect(()=>{const t=document.getElementById("modal");return t.appendChild(i.current),()=>t.removeChild(i.current)},[]),X.exports.createPortal(e("div",{children:r}),i.current)},J=new _,be=class{constructor(r,i){this.id=J.rnd(),this.uid=J.rnd(),this.group=r,this.affirmations=[]}},Ne=new _,ve=()=>{const r=C(),i="/affirmations-vite/",[t,s]=d.exports.useState(k()),[a,o]=d.exports.useState(t[0].currentGroup),[l,m]=d.exports.useState(F(t)),[h,x]=d.exports.useState(O(t,a)),[w,g]=d.exports.useState(!1),[f,p]=d.exports.useState(!1),[R,I]=d.exports.useState(!1),[L,y]=d.exports.useState(""),N="+ Create new group",T=()=>{const u=O(t,a);x(u),t[0].currentGroup=a,G(t)},$=()=>{m(F(t))},H=()=>{let u=t[0].groups;const v=E(t,a);u=u.slice(0,Number(v)).concat(u.slice(Number(v)+1)),t[0].groups=u,A.success(`Group '${a}' deleted!`,{position:"bottom-center"}),o(t[0].groups[0].group),G(t),r(`${i}current`),console.log("this is after the 'navigate' that is being skipped")};d.exports.useEffect(()=>{T(),$()},[a]);const W=()=>{const u=document.getElementById("name").value;if(l.includes(u))alert("You already have a group with this name. Please name your group anything else to continue creating it.");else if(!u)alert("You have not entered any text. Please name your group to continue creating it.");else{const v=t[0].groups.length+1,B=new be(u,v);t[0].groups.push({id:Ne.rnd(),group:B.group,affirmations:B.affirmations}),G(t),g(!1),o(u),A.success(`Group '${u}' added!`,{position:"bottom-center"})}},P=()=>{const u=E(t,a),v="shared?query=",q=window.location.href.split(i,2);console.log("hi"),console.log(q[0]);const V=[t[0].groups[u]].flat(),Q=JSON.stringify(V);y(`${q[0]}${i}${v}${Q}`),I(!0)};return n(b,{children:[n("div",{className:"search-params",children:[n(U,{style:{width:"100%",maxWidth:"500px",textAlign:"left"},select:!0,id:"outlined-select-currency",label:"Please select or create new group",value:a,onChange:u=>{let v=u.target.value;v==N?g(!0):o(v)},children:[t[0].groups.map(u=>e(z,{id:u.id,style:{fontFamily:"Poppins"},value:u.group,children:u.group},u.id)),e(z,{style:{fontFamily:"Poppins"},value:N,children:N})]}),e("ul",{className:"list-group cards pb-3",children:e(Y.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.5,delay:.125},children:e(ye,{currentGroup:a,affirmationsData:t,affirmations:h})})}),n("div",{className:"d-flex justify-content-between pt-2 pb-2",style:{maxWidth:"500px",margin:"auto"},children:[e("div",{style:{visibility:"hidden"},children:e(c,{"aria-label":"layout spacer"})}),!h.length==0?e(c,{text:"Share Group","aria-label":"share group",run:()=>P()}):e("div",{style:{visibility:"hidden"},children:e(c,{text:"Share Group","aria-label":"share group",run:()=>P()})}),e(ae,{disableRipple:!0,disableFocusRipple:!0,size:"small","aria-label":"delete",className:"btnGroupDelete",onClick:()=>p(!0),children:e(ne,{fontSize:"medium"})})]})]}),w?e(S,{children:n("div",{className:"modal-container",children:[e("h2",{children:"Creating new group?"}),n("div",{className:"buttons",children:[e("form",{children:e(U,{required:!0,autoFocus:!0,className:"w-100 mb-2 mt-1",type:"text",id:"name",label:"Group name",variant:"outlined",name:"name",minLength:"1",maxLength:"100",size:"20"})}),n("div",{className:"d-flex justify-content-center",children:[e(c,{text:"Cancel",run:()=>g(!1)}),e(c,{text:"Create Group",run:()=>W()})]})]})]})}):null,f?e(S,{children:n("div",{className:"modal-container",children:[e("h2",{children:"Delete this group?"}),e("p",{children:a}),n("div",{className:"buttons",children:[e(c,{text:"Abort!",run:()=>p(!1)}),e(c,{text:"Confirm",run:()=>H()})]})]})}):null,R?e(S,{children:n("div",{className:"modal-container",children:[e("h2",{children:"Share this group?"}),e("p",{children:a}),e("label",{style:{display:"flex",flexDirection:"column",padding:"8px"},children:e("textarea",{style:{height:"200px",fontSize:"10px"},type:"text",readOnly:!0,value:L})}),n("div",{className:"buttons",children:[e(c,{text:"Close",run:()=>I(!1)}),e(c,{text:"Copy to clipboard",run:()=>{navigator.clipboard.writeText(L),A.success(`Sharable '${a}' URL copied to clipboard!`,{position:"bottom-center"})}})]})]})}):null]})},xe=()=>e(b,{children:e(Y.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeOut",duration:.5},children:n("section",{className:"traditional__layout",children:[e("h1",{className:"pb-3",children:"Saved Affirmations"}),e(ve,{})]})})}),we=()=>{const r=C(),i="/affirmations-vite/",t=K(),[s,a]=d.exports.useState(!1),[o,l]=d.exports.useState(!1),[m,h]=d.exports.useState(k()),[x,w]=d.exports.useState(m[0].currentGroup);let g=E(m,x),f=t.state.affirmationId,p=m[0].groups[g].affirmations[f].affirmation;const R=()=>{let y=m[0].groups[g].affirmations,N=y.slice(0,Number(f)).concat(y.slice(Number(f)+1));m[0].groups[g].affirmations=N,A.success(`Affirmation '${p}' deleted!`,{position:"bottom-center"}),G(m),r(`${i}current`)};function I(){const y=document.getElementById("affirmationText").value;y?y==p?(A.info("No changes were made \u{1F9D0} Try again?",{position:"bottom-center"}),r(`${i}current`)):(m[0].groups[g].affirmations[f].affirmation=y,G(m),A.success(`Update to '${y}', success!`,{position:"bottom-center"}),r(`${i}current`)):a(!0)}function L(){r(`${i}current`)}return n(b,{children:[n("section",{className:"traditional__layout addAffirmation",children:[e("h1",{className:"pb-2",children:"Edit Affirmation"}),e("div",{className:"pb-2",children:e("p",{children:"Edit your affirmation below"})}),e("form",{className:"align-items-center pb-3",children:e("textarea",{className:"",id:"affirmationText",defaultValue:p})}),n("div",{className:"flex",children:[e(c,{text:"Cancel",run:()=>L()}),e(c,{text:"Update Affirmation",run:()=>I()}),e(c,{text:"Delete Affirmation",run:()=>l(!0)})]})]}),s?e(S,{children:n("div",{className:"modal-container",children:[e("h2",{children:"Affirmation text is empty"}),e("p",{children:"Please add text and try again"}),e("div",{className:"buttons",children:e(c,{text:"Understood",run:()=>a(!1)})})]})}):null,o?e(S,{children:n("div",{className:"modal-container",children:[e("h2",{children:"Delete this affirmation"}),e("p",{children:"Are you sure?"}),n("div",{className:"buttons",children:[e(c,{text:"Abort",run:()=>l(!1)}),e(c,{text:"Delete",run:()=>{R(),l(!1)}})]})]})}):null]})};new _;const Ae=class{constructor(r,i){this.affirmation=r,this.id=i}},Se=()=>{const r=C(),i="/affirmations-vite/",t=K(),s=new _,[a,o]=d.exports.useState(!1);let l=t.state.affirmationsData,m=t.state.currentGroup,h=E(l,m);const x=()=>{const g=document.getElementById("affirmationText").value;if(!g)o(!0);else{const f=s.rnd(),p=new Ae(g,f);l[0].groups[h].affirmations.unshift({id:p.id,affirmation:p.affirmation}),G(l),A.success(`Affirmation '${p.affirmation}' added!`,{position:"bottom-center"}),r(`${i}current`)}},w=()=>{r(`${i}current`)};return n(b,{children:[n("section",{className:"traditional__layout addAffirmation",children:[e("h1",{className:"font-bold pb-2",children:"Add Affirmation"}),e("div",{className:"pb-2",children:e("p",{children:"Enter your affirmation below"})}),e("form",{className:"align-items-center pb-3",children:e("textarea",{autoFocus:!0,className:"",id:"affirmationText",placeholder:"Type/paste your affirmation here"})}),n("div",{className:"flex",children:[e(c,{text:"Cancel",run:()=>w()}),e(c,{text:"Add Affirmation",run:()=>x()})]})]}),a?e(S,{children:n("div",{className:"modal-container",children:[e("h2",{children:"Affirmation text is empty"}),e("p",{children:"Please add text and try again"}),e("div",{className:"buttons",children:e(c,{text:"Understood",run:()=>o(!1)})})]})}):null]})},Ce="/affirmations-vite/assets/Af-logo.08741b66.svg",Me=()=>e(b,{children:n("section",{className:"traditional__layout addAffirmation",children:[e("div",{children:e("img",{src:Ce,alt:"Affirmations app SVG logo"})}),e("h1",{className:"font-bold text-purple-600 pb-2 pt-2",children:"About this application"}),n("div",{className:"about",children:[e("p",{className:"pb-3",children:"This application gives you an editable slideshow of affirmations for your inspirational viewing pleasure. Keep yourself inspired!"}),e("h2",{children:"What can I do?"}),n("p",{className:"pb-3",children:["Feel free to ",e("i",{children:"add"})," your own affirmations, ",e("i",{children:"edit"})," existing ones, ",e("i",{children:"erase"})," them all to start from scratch, and ",e("i",{children:"load"})," ","in the default affirmations that you started with."]}),e("h2",{children:"Noteable tidbit"}),e("p",{className:"pb-3",children:"This app uses localStorage to save your affirmations. If that means nothing to you here is what you need to know. Your affirmations are stored in your web browser (as opposed to a database) so if you keep using this device and this browser you will always see your affirmations. This means you will only have access to your personal affirmations specifically on this device and broswer."})]})]})}),Ge=({affirmation:r,id:i,currentGroup:t,affirmationsData:s})=>(C(),e("li",{style:{listStyleType:"none"},id:i,className:"list-group-flush splide__slide__EDIT",children:e("div",{className:"card",children:e("div",{className:"card-body d-flex flex-row",children:e("p",{className:"theme-switcher text-center",style:{paddingRight:"unset"},children:r})})})},i)),Ie=({sharedAffirmations:r})=>{const[i,t]=d.exports.useState(JSON.parse(r)[0].affirmations),[s,a]=d.exports.useState(JSON.parse(r)[0].group);return n(b,{children:[e("div",{className:"pt-3",children:n("p",{children:["List of ",e("i",{children:s})," affirmations"]})}),e("div",{className:"d-grid gap-2 p-3 pt-1",children:i.length?i.map(({affirmation:o,id:l},m)=>e(Ge,{affirmation:o,id:m},l)):e("h1",{children:"No Affirmations present"})})]})},Le=new _,_e=r=>{const i=C(),t="/affirmations-vite/",[s,a]=d.exports.useState(!1),[o,l]=d.exports.useState(!1),m=new URLSearchParams(window.location.search),[h,x]=d.exports.useState(k()),[w,g]=d.exports.useState(m.get("query")),f=JSON.parse(w)[0].group,[p,R]=d.exports.useState(F(h)),I=()=>{p.includes(f)?l(!0):a(!0)},L=()=>{i(`${t}about`)},y=()=>{const N=document.getElementById("name").value;if(p.includes(N))alert("You already have a group with this name. Please name your group anything else to continue creating it.");else if(!N)alert("You have not entered any text. Please name your group to continue creating it.");else{const T=h[0].groups.length;let $=JSON.parse(w);$[0].group=N,h[0].groups.push($[0]),h[0].groups[T].id=Le.rnd(),G(h),i(`${t}`),A.success(`Group '${N}' added. Enjoy!`,{position:"bottom-center"})}};return n(b,{children:[n("section",{className:"traditional__layout",children:[e("h1",{className:"pb-2",children:"Incoming Affirmations"}),n("div",{className:"d-flex flex-column justify-content-center",children:[n("p",{className:"mb-3",style:{width:"385px",margin:"0 auto"},children:["Someone has sent you a list of affirmations titled"," ",e("i",{children:f}),"."]}),e("div",{className:"flex",children:e(c,{text:"Accept & view",run:()=>I()})})]}),e(Ie,{sharedAffirmations:w}),e("div",{className:"flex",children:e(c,{text:"About this site",run:()=>L()})})]}),o?e(S,{children:n("div",{className:"modal-container",children:[e("h2",{children:"Rename new group"}),n("p",{children:["You already have a group named ",e("i",{children:f}),"."]}),n("div",{className:"buttons",children:[e("form",{children:e(U,{required:!0,autoFocus:!0,className:"w-100 mb-2 mt-1",type:"text",id:"name",label:"Rename group to continue",variant:"outlined",name:"name",minLength:"1",maxLength:"100",size:"20"})}),e(c,{text:"Cancel",run:()=>l(!1)}),e(c,{text:"Rename",run:()=>{y(),l(!1)}})]})]})}):null,s?e(S,{children:n("div",{className:"modal-container",children:[e("h2",{children:"Import this group?"}),e("p",{children:f}),n("div",{className:"buttons",children:[e(c,{text:"Abort!",run:()=>a(!1)}),e(c,{text:"Confirm",run:()=>{y(),a(!1)}})]})]})}):null]})},Re=()=>{const[r,i]=d.exports.useState(!1),t="/affirmations-vite/",s=()=>{i(a=>!a)};return e(b,{children:n(ee,{children:[n("nav",{className:"theme-switcher btm-gradient",children:[e("div",{id:"appName",className:"theme-switcher",children:"Affirmations"}),e("button",{id:"hamburger",className:r?"opened":"",onClick:s,"aria-label":"Main Menu",children:n("svg",{width:"40",height:"40",viewBox:"0 0 100 100",children:[e("path",{className:"theme-switcher line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),e("path",{className:"theme-switcher line line2",d:"M 20,50 H 80"}),e("path",{className:"theme-switcher line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})}),n("ul",{id:"menu",className:r?"opened":"",children:[e("li",{children:e(D,{to:`${t}`,onClick:s,className:"theme-switcher",children:e(oe,{fontSize:"large"})})}),e("li",{children:e(D,{to:`${t}current`,onClick:s,className:"theme-switcher",children:e(se,{fontSize:"large"})})}),e("li",{children:e(D,{to:`${t}about`,onClick:s,children:e(le,{fontSize:"large"})})})]})]}),e("main",{children:n(ue,{children:[e(M,{path:`${t}`,element:e(pe,{})}),e(M,{path:`${t}current`,element:e(xe,{})}),e(M,{path:`${t}add`,element:e(Se,{})}),e(M,{path:`${t}edit`,element:e(we,{})}),e(M,{path:`${t}shared`,element:e(_e,{})}),e(M,{path:`${t}about`,element:e(Me,{})}),e(M,{path:"*",element:e("p",{children:"Path not resolved"})})]})}),e(te,{})]})})},$e=document.getElementById("root"),Ee=Z($e);Ee.render(e(d.exports.StrictMode,{children:e(Re,{})}));
