(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95387,a=>{"use strict";var e=a.i(91398),i=a.i(58678),n=a.i(19811),t=a.i(32111),o=a.i(36283),r=a.i(19341);function s(a){return(0,r.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(a)}function l(a){return(0,r.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"}}]})(a)}let c="#071013",d="#20a4f3",m="#1d2b35",h="#fb232e",x=c+"80",f={Go:o.SiGo,Python:o.SiPython,AWS:o.SiAmazonaws,MySQL:o.SiMysql,Redis:o.SiRedis,Docker:o.SiDocker,Kubernetes:o.SiKubernetes,"JS/TS":o.SiJavascript,React:o.SiReact,"Next.js":o.SiNextdotjs},p=`
  .about-contanier {
    display: flex;
    flex: 1;
    flex-direction: row;
    margin: 1vh 10vw 1vh 10vw;
  }

  .about-heading {
    font-family: 'Ubuntu', sans-serif;
    font-size: calc(1.5rem + 0.7vw);
    color: ${d};
  }

  .about-meta {
    display: flex;
    flex: 25%;
    max-width: 25%;
    flex-direction: column;
    align-items: center;
    padding: 1vh 2.5vw 1vh 2.5vw;
  }

  .about-meta-info {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: calc(0.9rem + 0.1vw);
    color: ${m};
  }

  .about-meta-icon-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .about-meta-icon {
    color: ${m};
    font-size: 21px;
    margin-right: 5px;
  }

  .display-img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    border: 0px solid ${m};
  }

  .about-info {
    display: flex;
    flex: 75%;
    flex-direction: column;
    padding-top: 1vh;
    color: ${c+"d9"};
  }

  .about-info-description {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: calc(0.9rem + 0.3vw);
    margin: 1vh 0 1vh 0;
  }

  .external-link {
    text-decoration: none;
    color: ${c};
    cursor: pointer;
    border-bottom: 1px dashed ${h};
  }

  .external-link:hover {
    color: ${d};
  }

  .horizontal-line-break {
    margin: 2vh 15% 2vh 15%;
    border: 2px solid ${x};
  }

  #portfolio-line-break {
    display: none;
  }

  .tools-container {
    display: flex;
    flex: 100%;
    max-width: 100%;
    flex-direction: row;
    margin: 1vh 10vw 1vh 10vw;
  }

  .portfolio-section-container {
    display: flex;
    flex: 50%;
    max-width: 50%;
    flex-direction: column;
  }

  .portfolio-section-heading {
    font-family: 'Ubuntu', sans-serif;
    font-size: calc(1.2rem + 0.7vw);
    color: ${d};
    text-decoration: underline;
    text-decoration-color: #ffaa33;
    padding-bottom: 1vh;
  }

  .organization-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .organization-info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  .organization-logo {
    width: 6%;
    height: auto;
    max-width: 10%;
    padding: 0 0% 0 0%;
  }

  .organization-name {
    width: 90%;
    padding: 0 1% 0 1%;
    font-family: 'Maven Pro', sans-serif;
    font-size: calc(1rem + 0.4vw);
    font-weight: bold;
    color: ${h};
  }

  ,roles-container {
    display: flex;
    flex: 100%;
    flex-direction: column;
  }

  .role-container {
    display: flex;
    flex: 100%;
    flex-direction: row;
    padding: 1% 1% 1% 1%;
  }

  .role-buffer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    max-width: 10%;
  }

  .role-buffer-dot {
    width: .5em;
    height: .5em;
    background-color: ${c};
    border-radius: 50%;
  }

  .role {
    display: flex;
    flex: 90%;
    max-width: 90%;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .role-name {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: calc(0.8rem + 0.3vw);
    font-weight: bold;
    color: ${m};
  }

  .role-duration {
    font-family: 'Ubuntu', sans-serif;
    font-size: calc(0.7rem + 0.1vw);
    font-weight: light;
    color: ${c+"bf"};
  }

  .tech-stack-group-heading {
    font-family: 'Maven Pro', sans-serif;
    font-size: calc(1rem + 0.4vw);
    font-weight: bold;
    color: ${h};
  }

  .tech-stack-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 2vw 0 2vw;
  }

  .tech-stack-division {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0.8vw;
    padding-right: 0.8vw;
    padding-top: 0.1vw;
    padding-bottom: 0.1vw;
  }

  .tech-stack-icon {
    color: ${m};
    width: calc(1rem + 1vw);
    height: calc(1rem + 1vw);
  }

  .tech-stack-name {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: calc(0.7rem + 0.1vw);
    color: ${m};
  }

  @media screen and (max-width: 1200px) {
    .about-contanier {
      flex-direction: row;
      margin: 1vh 2vw 1vh 2vw;
    }

    .about-meta {
      flex: 50%;
      max-width: 50%;
    }

    .display-img {
      width: 75%;
      max-width: 75%;
    }

    .portfolio-section-container {
      flex: 50%;
      max-width: 50%;
    }

    .organization-logo {
      width: 10%;
      padding: 0;
    }

    .tools-container {
      flex-direction: row;
    }
  }

  @media screen and (max-width: 580px) {
    .about-contanier {
      flex-direction: column;
      margin: 1vh 5vw 1vh 5vw;
    }

    .about-meta {
      flex: 100%;
      max-width: 100%;
    }

    .display-img {
      width: 50%;
      max-width: 50%;
    }

    .horizontal-line-break {
      margin: 2vh 10% 2vh 10%;
      border: 1px solid ${x};
    }

    .portfolio-section-container {
      flex: 100%;
      max-width: 100%;
    }

    #portfolio-line-break {
      display: flex;
    }

    .tools-container {
      flex-direction: column;
    }
  }

`,g="https://santhalakshminarayana.github.io/",u="I'm Santha Lakshmi Narayana working as Software Engineer in Bengaluru, India.";function v(a){return(0,e.jsxs)("div",{children:[(0,e.jsxs)(i.default,{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,e.jsx)("meta",{name:"description",content:u}),(0,e.jsx)("meta",{name:"author",content:"Santha Lakshmi Narayana"}),(0,e.jsx)("meta",{property:"og:title",content:"About - Santha Lakshmi Narayana"},"ogtitle"),(0,e.jsx)("meta",{property:"og:description",content:u},"ogdesc"),(0,e.jsx)("meta",{property:"og:url",content:g+"about"},"ogurl"),(0,e.jsx)("meta",{property:"og:image",content:g+"images/santha-lakshmi-narayana.png"},"ogimage"),(0,e.jsx)("meta",{property:"og:type",content:"article"}),(0,e.jsx)("meta",{property:"og:article:publisher",content:g},"ogaritclepublisher"),(0,e.jsx)("meta",{property:"og:site_name",content:"Santha Lakshmi Narayana"},"ogsitename"),(0,e.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,e.jsx)("meta",{name:"twitter:title",content:"About - Santha Lakshmi Narayana"}),(0,e.jsx)("meta",{name:"twitter:description",content:u}),(0,e.jsx)("meta",{name:"twitter:url",content:g+"about"}),(0,e.jsx)("meta",{name:"twitter:site",content:"@santhalakshminarayana"}),(0,e.jsx)("meta",{name:"twitter:image",content:g+"images/santha-lakshmi-narayana.png"}),(0,e.jsx)("meta",{name:"twitter:creator",content:"@santhalakshminarayana"}),(0,e.jsx)("link",{rel:"icon",href:"/images/santha-lakshmi-narayana-logo.png?"}),(0,e.jsx)("link",{rel:"canonical",href:"https://santhalakshminarayana.github.io/about"}),(0,e.jsx)("title",{children:"About - Santha Lakshmi Narayana"}),(0,e.jsx)("style",{type:"text/css",children:p})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(n.default,{}),(0,e.jsxs)("div",{className:"about-contanier",children:[(0,e.jsxs)("div",{className:"about-meta",children:[(0,e.jsx)("img",{className:"display-img",src:"/images/about/santha-lakshmi-narayana.jpg",alt:"Lakshmi Narayana Santha"}),(0,e.jsx)(t.default,{bg_color:"transparent",normal_color:m,icon_size:"21px",horizontal_margin:"5px",horizontal_padding:"1px",vertical_padding:"5px",github:!0,linkedin:!0,medium:!1,kaggle:!1,need_copy_right:!1}),(0,e.jsxs)("div",{className:"about-meta-icon-container",children:[(0,e.jsx)(s,{className:"about-meta-icon"}),(0,e.jsx)("p",{className:"about-meta-info",children:"santhalakshminarayana@gmail.com"})]}),(0,e.jsxs)("div",{className:"about-meta-icon-container",children:[(0,e.jsx)(l,{className:"about-meta-icon"}),(0,e.jsx)("p",{className:"about-meta-info",children:"Bengaluru, India"})]})]}),(0,e.jsxs)("div",{className:"about-info",children:[(0,e.jsx)("p",{className:"about-heading",children:"#Don't study but learn"}),(0,e.jsxs)("p",{className:"about-info-description",children:["Hello, I'm ",(0,e.jsx)("b",{children:"Santha Lakshmi Narayana"}),", Senior Software Engineer at Nouveau Labs in Bengaluru, India."]}),(0,e.jsx)("p",{className:"about-info-description",children:"I primarily work in AI, Machine Learning, and Backend tech. I have profound knowledge of Advanced Image Processing, Computer Vision, NLP, and System Design & Architecture. Throughout my career, I have worked on projects like Contact-center(both call and chat), AutoML, Image enhancement, Search information extraction, Name matching & mapping, etc. I believe in writing performance-optimized code over quantity."})]})]}),(0,e.jsx)("div",{className:"horizontal-line-break"}),(0,e.jsxs)("div",{className:"tools-container",children:[(0,e.jsxs)("div",{className:"portfolio-section-container",children:[(0,e.jsx)("p",{className:"portfolio-section-heading",children:"Experience"}),(0,e.jsxs)("div",{className:"organization-container",children:[(0,e.jsxs)("div",{className:"organization-info-container",children:[(0,e.jsx)("img",{className:"organization-logo",src:"/images/about/nouveau-labs-logo.png",alt:"Nouveau Labs"}),(0,e.jsx)("p",{className:"organization-name",children:"Nouveau Labs"})]}),(0,e.jsx)("div",{className:"roles-container",children:(0,e.jsxs)("div",{className:"role-container",children:[(0,e.jsx)("div",{className:"role-buffer",children:(0,e.jsx)("div",{className:"role-buffer-dot"})}),(0,e.jsxs)("div",{className:"role",children:[(0,e.jsx)("p",{className:"role-name",children:"Senior Software Engineer"}),(0,e.jsx)("p",{className:"role-duration",children:"Oct 2022 to present"})]})]})}),(0,e.jsx)("div",{className:"roles-container",children:(0,e.jsxs)("div",{className:"role-container",children:[(0,e.jsx)("div",{className:"role-buffer",children:(0,e.jsx)("div",{className:"role-buffer-dot"})}),(0,e.jsxs)("div",{className:"role",children:[(0,e.jsx)("p",{className:"role-name",children:"Software Engineer"}),(0,e.jsx)("p",{className:"role-duration",children:"Jun 2020 to Oct 2022"})]})]})}),(0,e.jsx)("div",{className:"roles-container",children:(0,e.jsxs)("div",{className:"role-container",children:[(0,e.jsx)("div",{className:"role-buffer",children:(0,e.jsx)("div",{className:"role-buffer-dot"})}),(0,e.jsxs)("div",{className:"role",children:[(0,e.jsx)("p",{className:"role-name",children:"AI Intern"}),(0,e.jsx)("p",{className:"role-duration",children:"Dec 2019 to Jun 2020"})]})]})})]})]}),(0,e.jsx)("div",{id:"portfolio-line-break",className:"horizontal-line-break"}),(0,e.jsxs)("div",{className:"portfolio-section-container",children:[(0,e.jsx)("p",{className:"portfolio-section-heading",children:"Tech Stack"}),(0,e.jsx)("p",{className:"tech-stack-group-heading",children:"Tools & Skills"}),(0,e.jsx)("div",{className:"tech-stack-group",children:Object.entries(f).map(([a,i])=>(0,e.jsxs)("div",{className:"tech-stack-division",children:[(0,e.jsx)(i,{className:"tech-stack-icon"}),(0,e.jsx)("p",{className:"tech-stack-name",children:a})]},a))})]})]})]})]})}a.s(["default",()=>v],95387)},75336,(a,e,i)=>{let n="/about";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>a.r(95387)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([n])})}]);