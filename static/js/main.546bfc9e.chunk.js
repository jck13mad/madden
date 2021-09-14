(this.webpackJsonpjackmadden=this.webpackJsonpjackmadden||[]).push([[0],{29:function(e,t,i){},30:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},39:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),s=i(14),a=i.n(s),l=(i(29),i(8)),r=i(15),o=(i(30),i(0));var d=function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),i=Object(l.a)(t,2),c=i[0],s=i[1];return Object(n.useEffect)((function(){Object(r.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Web Developer","Software Engineer","Full Stack Expertise","All around nice guy"]})}),[]),window.addEventListener("scroll",(function(){console.log(window.scrollX),window.scrollX<=100?s(!0):s(!1)})),Object(o.jsxs)("div",{className:"intro",id:"intro",children:[Object(o.jsxs)("div",{className:"name",children:[Object(o.jsx)("h1",{children:"John"}),Object(o.jsx)("h1",{children:"Madden"}),Object(o.jsx)("h2",{children:window.addEventListener("scroll",console.log(window.scrollX))})]}),Object(o.jsx)("div",{className:"incoming animation sequence fadeInBottom",children:Object(o.jsx)("h2",{children:Object(o.jsx)("span",{ref:e})})}),Object(o.jsx)("div",{className:c?"image active":"image",children:Object(o.jsx)("img",{className:"oldComputer animation sequence fadeInBottom",src:"../oldComputer.png",alt:"old computer"})})]})};i(32);var j=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),i=t[0],c=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=65?c(!0):c(!1)})),Object(o.jsxs)("div",{className:i?"navbar active":"navbar",id:"navbar",children:[Object(o.jsx)("h1",{children:"JM"}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"navbar-list",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#projects",children:"Projects"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#blogs",children:"Blogs"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#contact",children:"Contact"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"../JohnMaddenResume.pdf",download:!0,children:"Resume"})})]})})]})};i(33),i(34);function h(e){var t=e.id,i=e.title,n=e.active,c=e.setSelected;return Object(o.jsx)("li",{className:n?"projectList active":"projectList",onClick:function(){return c(t)},children:i})}var b=[{id:1,title:"Hidden Eats",img:"./hidden-eats.png",link:"https://github.com/jck13mad/HiddenEats-Frontend"},{id:2,title:"Portfolio Site v1",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvZ4bwLy9HnBbQxiLWzQkVn5YnWFRcrxRJw&usqp=CAU",link:"https://github.com/jck13mad/Personal-Portfolio"},{id:3,title:"Heading Up",img:"./heading-up.jpg",link:"https://github.com/jck13mad/HeadingUp-secondary"},{id:4,title:"Photo-Synthesis",img:"./photo-synthesis.jpg",link:"https://github.com/jck13mad/photo-synthesis"},{id:5,title:"Covid-19 News Tracker",img:"./covid-19.jpg",link:"https://github.com/jck13mad/covid_19_updates"},{id:6,title:"Netflix Clone",img:"./netflix-clone.jpg",link:""}],m=[{id:6,title:"Hidden Eats",img:"./hidden-eats.png",link:"https://github.com/jck13mad/HiddenEats-Frontend"},{id:7,title:"Portfolio Site v1",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvZ4bwLy9HnBbQxiLWzQkVn5YnWFRcrxRJw&usqp=CAU",link:"https://github.com/jck13mad/Personal-Portfolio"},{id:8,title:"Netflix Clone",img:"./netflix-clone.jpg",link:""}],u=i(16);var g=function(){var e=Object(n.useState)("featured"),t=Object(l.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)([]),a=Object(l.a)(s,2),r=a[0],d=a[1];return Object(n.useEffect)((function(){switch(i){case"featured":d(b);break;case"design":d(m);break;default:d(b)}}),[i]),Object(o.jsxs)("div",{className:"projects",id:"projects",children:[Object(o.jsx)("h1",{className:"projects-title",children:"Projects"}),Object(o.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"design",title:"Design"}].map((function(e){return Object(o.jsx)(h,{title:e.title,active:i===e.id,setSelected:c,id:e.id})}))}),Object(o.jsx)("div",{className:"container",children:r.map((function(e){return Object(o.jsx)(u.a,{href:e.link,children:Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{src:e.img,alt:e.title}),Object(o.jsx)("h3",{className:"project-name",children:e.title})]})})}))})]})};i(35);var x=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),i=t[0],c=t[1],s=[{id:1,icon:"./writing.png",title:"Flatiron JS Project: Hidden Eats",desc:"Building Hidden Eats.",img:"./blog-1.jpg",link:"https://jck13mad.blogspot.com/2021/04/flatiron-javascript-project-hidden-eats.html"},{id:2,icon:"./writing.png",title:"Flatiron Rails Project: Photo-Synthesis",desc:"Building Photo-Synthesis.",img:"./blog-2.png",link:"https://jck13mad.blogspot.com/2021/02/flatiron-rails-project-photo-synthesis.html"},{id:3,icon:"./writing.png",title:"Why Software Engineering",desc:"How I chose this profession.",img:"./blog-3.jpg",link:"https://jck13mad.blogspot.com/2020/03/software-engineering-and-how.html"}],a=function(e){c("left"===e?i>0?i-1:i=s.length-1:i<s.length-1?i+1:0)};return Object(o.jsxs)("div",{className:"blogs",id:"blogs",children:[Object(o.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*i,"vw)")},children:s.map((function(e){return Object(o.jsx)("div",{className:"contain",children:Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsxs)("div",{className:"leftContainer",children:[Object(o.jsx)("div",{className:"blog-title",children:Object(o.jsx)("h3",{children:"Blog"})}),Object(o.jsx)("div",{className:"imgContainer",children:Object(o.jsx)("img",{src:e.icon,alt:""})}),Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("p",{children:e.desc}),Object(o.jsx)("a",{href:e.link,children:"View this blog."})]})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)("img",{src:e.img,alt:""})})]})})}))}),i>0?Object(o.jsx)("img",{src:"./arrow.png",className:"arrow left",alt:"",onClick:function(){return a("left")}}):null,i<s.length-1?Object(o.jsx)("img",{src:"./arrow.png",className:"arrow right",alt:"",onClick:function(){return a()}}):null]})},O=i(17),p=i(10),f=i(18),v=i(24),w=i(23),k=(i(36),i(21)),N=i(48),y=i(49),S=i(50),C=i(51),E=i(52),I=function(e){Object(v.a)(i,e);var t=Object(w.a)(i);function i(){var e;Object(p.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",subject:"",message:""},e.handleChange=function(t,i){e.setState(Object(O.a)({},t,i.target.value))},e}return Object(f.a)(i,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,i={from_name:t.email,to_name:"Jack",subject:t.subject,message_html:t.message};k.a("service_n0lecmf","template_gfc70dr",i,"user_F5ZZu6NGwdEt2qfpjZAdQ").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),this.resetForm()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"contact",id:"contact",children:[Object(o.jsx)("h1",{children:"Get in touch with me!"}),Object(o.jsx)("div",{className:"containing",children:Object(o.jsx)("div",{className:"top",children:Object(o.jsxs)(N.a,{onSubmit:this.handleSubmit.bind(this),children:[Object(o.jsxs)(y.a,{controlId:"formBasicEmail",children:[Object(o.jsx)(S.a,{className:"text-muted",children:"Email address"}),Object(o.jsx)(C.a,{type:"email",name:"email",value:this.state.email,className:"text-primary",onChange:this.handleChange.bind(this,"email"),placeholder:"Enter email",required:!0})]}),Object(o.jsxs)(y.a,{controlId:"formBasicName",children:[Object(o.jsx)(S.a,{className:"text-muted",children:"Name"}),Object(o.jsx)(C.a,{type:"text",name:"name",value:this.state.name,className:"text-primary",onChange:this.handleChange.bind(this,"name"),placeholder:"Name",required:!0})]}),Object(o.jsxs)(y.a,{controlId:"formBasicSubject",children:[Object(o.jsx)(S.a,{className:"text-muted",children:"Subject"}),Object(o.jsx)(C.a,{type:"text",name:"subject",className:"text-primary",value:this.state.subject,onChange:this.handleChange.bind(this,"subject"),placeholder:"Subject",required:!0})]}),Object(o.jsxs)(y.a,{controlId:"formBasicMessage",children:[Object(o.jsx)(S.a,{className:"text-muted",children:"Message"}),Object(o.jsx)(C.a,{type:"textarea",name:"message",className:"text-primary",value:this.state.message,onChange:this.handleChange.bind(this,"message"),placeholder:"How can I help?",required:!0})]}),Object(o.jsx)(E.a,{type:"submit",children:"Send It"})]})})}),Object(o.jsx)("div",{className:"bottom",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://twitter.com/jackathon3",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"mailto:jck13mad@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Email"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/john-madden-063078188/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/jck13mad?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:"Github"})})]})})]})}}]),i}(n.Component);i(39);var B=function(){return Object(o.jsxs)("div",{className:"about",id:"about",children:[Object(o.jsx)("h1",{className:"about-title",children:"About"}),Object(o.jsx)("p",{className:"content",children:"Finishing Flatiron's Software Enigneering Bootcamp, I am excited and ready to begin my career in the field. Though I have little experience, I believe all of my projects establish the base of my knowledge of website creation. I am always learning, as one needs to do with Software Engineering, and love to face challenges that need to be worked through. I am currently freelancing website assistance, but would love to field emails of a position open for Junior - Mid-Level positions. Thank you!"})]})};var F=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)(d,{}),Object(o.jsx)(B,{}),Object(o.jsx)(g,{}),Object(o.jsx)(x,{}),Object(o.jsx)(I,{})]})},P=i(22);a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(P.a,{children:Object(o.jsx)(F,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.546bfc9e.chunk.js.map