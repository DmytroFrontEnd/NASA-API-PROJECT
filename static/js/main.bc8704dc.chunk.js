(this["webpackJsonpapi-nasa"]=this["webpackJsonpapi-nasa"]||[]).push([[0],{2:function(e,a,t){e.exports={data:"SecondScreen_data__32dRh",close:"SecondScreen_close__ac4G3",image:"SecondScreen_image__2sh9d",loaderImage:"SecondScreen_loaderImage__2_8TC",getData:"SecondScreen_getData__14rBH",imageAndAbout:"SecondScreen_imageAndAbout__QlvDC",imageDiv:"SecondScreen_imageDiv__1RAFw",explanationDiv:"SecondScreen_explanationDiv__3QaH2",explanation:"SecondScreen_explanation__1aPbk",title:"SecondScreen_title__18jhf",date:"SecondScreen_date__1W8lF",about:"SecondScreen_about__24u3r",btn:"SecondScreen_btn__3kaBw",inputDiv:"SecondScreen_inputDiv__LFsga",warning:"SecondScreen_warning__2_idd",dateAndButton:"SecondScreen_dateAndButton__bYiq8"}},25:function(e,a,t){},26:function(e,a,t){},3:function(e,a,t){e.exports={container:"ThirdScreen_container__2IjA0",marsWeather:"ThirdScreen_marsWeather__Nt9ya",solContainer:"ThirdScreen_solContainer__SrlT4",elName:"ThirdScreen_elName___eDnI",sol:"ThirdScreen_sol__1fD92",explaining:"ThirdScreen_explaining__nL5Rl"}},40:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t(1),c=t.n(s),r=t(9),i=t.n(r),l=(t(25),t(26),t(5)),o=t.n(l),d=function(){return Object(n.jsx)("div",{className:"slide one",children:Object(n.jsxs)("div",{className:o.a.container,children:[Object(n.jsx)("h1",{className:o.a.header,children:"NASA"}),Object(n.jsxs)("div",{className:o.a.greeting,children:[Object(n.jsx)("h1",{className:o.a.about,children:" Astronomy Picture of the Day"}),Object(n.jsx)("h1",{className:o.a.about,children:"&"}),Object(n.jsx)("h1",{className:o.a.about,children:"Weather on the Mars"}),Object(n.jsx)("h1",{className:o.a.arrow,children:Object(n.jsx)("i",{className:"fas fa-arrow-right"})})]})]})})},j=t(8),h=t.n(j),b=function(){return Object(n.jsx)("div",{className:"slide three",children:Object(n.jsxs)("div",{className:h.a.container,children:[Object(n.jsx)("h1",{className:h.a.about,children:"ABOUT"}),Object(n.jsxs)("div",{className:h.a.text,children:[Object(n.jsxs)("h4",{children:["On this web site was used public NASA API which you can found on the",Object(n.jsx)("span",{children:Object(n.jsx)("a",{href:"https://api.nasa.gov/",children:" NASA API PORTAL. "})}),"For the the Astronomy Picture of The day was used APOD API and for the Mars Weather was used Insight: Mars Weather Service API"]}),Object(n.jsx)("h4",{children:"Please contact me if there any errors and also I will be glad if you share your impression of this web site or give me some advice, you can find me on this social media:"}),Object(n.jsxs)("h4",{children:[Object(n.jsx)("a",{className:h.a.links,href:"https://www.linkedin.com/in/dimitri001/",children:Object(n.jsx)("i",{className:"fab fa-linkedin"})}),Object(n.jsx)("a",{className:h.a.links,href:"https://www.instagram.com/_dimitrii/",children:Object(n.jsx)("i",{className:"fab fa-instagram"})})]})]})]})})},m=t(7),u=t.n(m),x=t(10),O=t(4),_=t(2),p=t.n(_),S=t(17),f=t.n(S),v=function(){var e=Object(s.useState)(null),a=Object(O.a)(e,2),t=a[0],c=a[1],r=Object(s.useState)(null),i=Object(O.a)(r,2),l=i[0],o=i[1],d=Object(s.useState)(""),j=Object(O.a)(d,2),h=j[0],b=j[1],m=Object(s.useState)(!1),_=Object(O.a)(m,2),S=_[0],v=_[1],N=Object(s.useState)(""),g=Object(O.a)(N,2),w=g[0],A=g[1],y="https://api.nasa.gov/planetary/apod?api_key=E2yibYfhl3owla9uHSeARmak9Hk6hChjrYnZjIPe&date=".concat(h,"&concept_tags=True"),D=function(){var e=Object(x.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,fetch(y);case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,o(t),c(!1),t.code?(v(!1),A("Date must be after 1995-06-16, the first day an APOD picture was posted.")):(A(""),v(!0)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),T=function(){v(!1)};return Object(n.jsxs)("div",{className:"slide two",children:[Object(n.jsxs)("div",{className:p.a.getData,children:[Object(n.jsx)("h4",{className:p.a.about,children:"Here you can get the Astronomy Picture of the Day"}),Object(n.jsx)("p",{className:p.a.warning,children:w}),Object(n.jsxs)("div",{className:p.a.dateAndButton,children:[Object(n.jsx)("input",{min:"1995-06-16",onChange:function(e){b(e.target.value)},value:h,className:p.a.inputDiv,placeholder:"YYYY-MM-DD",type:"date"}),Object(n.jsx)("button",{className:p.a.btn,onClick:D,children:"Get the Image of the Day"})]})]}),t?Object(n.jsx)("div",{className:p.a.loader,children:Object(n.jsx)("div",{className:"spinner-border text-danger",role:"status"})}):null,S?Object(n.jsx)(f.a,{ariaHideApp:!1,onRequestClose:T,isOpen:S,children:Object(n.jsxs)("div",{className:p.a.data,children:[Object(n.jsx)("div",{onClick:T,className:p.a.close,children:Object(n.jsx)("i",{className:"fas fa-times"})}),Object(n.jsx)("h3",{className:p.a.title,children:l.title}),Object(n.jsx)("div",{className:p.a.date,children:l.date}),Object(n.jsxs)("div",{className:p.a.imageAndAbout,children:[Object(n.jsx)("div",{className:p.a.explanationDiv,children:Object(n.jsx)("h6",{className:p.a.explanation,children:l.explanation})}),Object(n.jsx)("div",{className:p.a.imageDiv,children:Object(n.jsx)("img",{className:p.a.image,src:l.hdurl,alt:"/"})})]})]})}):null]})},N=t(3),g=t.n(N),w=t(6),A=(t(39),function(e){var a=e.data;return Object(n.jsx)("div",{className:g.a.solContainer,children:Object.entries(a).map((function(e){return e[1].First_UTC?Object(n.jsxs)("div",{className:g.a.sol,children:[Object(n.jsx)(w.a,{content:"Martian Day of the year",children:Object(n.jsxs)("h4",{children:["Sol: ",Object(n.jsx)("span",{className:g.a.elName,children:e[0]})]})}),Object(n.jsxs)("h6",{children:[Object(n.jsx)("span",{className:g.a.elName,children:"Season: "}),e[1].Season]}),Object(n.jsx)(w.a,{content:"Time of first datum, of any sensor, for the Sol (UTC; YYYY-MM-DDTHH:MM:SSZ)",children:Object(n.jsxs)("h6",{children:[Object(n.jsx)("span",{className:g.a.elName,children:"First UTC: "}),e[1].First_UTC.substring(0,10)]})}),Object(n.jsx)(w.a,{content:"Time of last datum, of any sensor, for the Sol (UTC; YYYY-MM-DDTHH:MM:SSZ)",children:Object(n.jsxs)("h6",{children:[Object(n.jsx)("span",{className:g.a.elName,children:"Last UTC: "}),e[1].Last_UTC.substring(0,10)]})}),Object(n.jsx)("h6",{children:"Atmospheric pressure sensor summary data: "}),Object(n.jsxs)("div",{className:g.a.tippyDiv,children:[Object(n.jsx)(w.a,{content:"Average of samples over the Sol",children:Object(n.jsxs)("h6",{children:[Object(n.jsx)("span",{className:g.a.elName,children:"AT: "}),e[1].PRE.av," Pa"]})}),Object(n.jsx)(w.a,{content:"Total number of recorded samples over the Sol",children:Object(n.jsxs)("h6",{children:[Object(n.jsx)("span",{className:g.a.elName,children:"CT: "}),e[1].PRE.ct]})}),Object(n.jsx)(w.a,{content:"Minimum data sample over the sol",children:Object(n.jsxs)("h6",{children:[Object(n.jsx)("span",{className:g.a.elName,children:"MN: "}),e[1].PRE.mn," Pa"]})}),Object(n.jsx)(w.a,{content:"Maximum data sample over the sol ",children:Object(n.jsxs)("h6",{children:[Object(n.jsx)("span",{className:g.a.elName,children:"MX: "}),e[1].PRE.mx," Pa"]})})]})]},e[0]):null}))})}),y=function(){var e="https://api.nasa.gov/insight_weather/?api_key=".concat("E2yibYfhl3owla9uHSeARmak9Hk6hChjrYnZjIPe","&feedtype=json&ver=1.0"),a=Object(s.useState)(null),t=Object(O.a)(a,2),c=t[0],r=t[1],i=function(){var a=Object(x.a)(u.a.mark((function a(){var t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(e);case 2:return t=a.sent,a.next=5,t.json();case 5:n=a.sent,r(n);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(s.useEffect)((function(){i()}),[]),Object(n.jsx)("div",{className:"slide four",children:Object(n.jsxs)("div",{className:g.a.container,children:[Object(n.jsxs)("div",{className:g.a.explaining,children:[Object(n.jsx)("div",{children:"* InSight has temporarily suspended daily weather measurements. As more data becomes available, it will appear below."}),Object(n.jsx)("div",{children:"* scroll down to see more data"}),Object(n.jsx)("div",{children:"* hover the element to see what it means"})]}),Object(n.jsx)("h1",{className:g.a.marsWeather,children:"Mars Weather"}),Object(n.jsx)("div",{children:c?Object(n.jsx)(A,{data:c}):null})]})})},D=function(){return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(d,{}),Object(n.jsx)(v,{}),Object(n.jsx)(y,{}),Object(n.jsx)(b,{})]})};var T=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(D,{})})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),P()},5:function(e,a,t){e.exports={header:"FirstScreen_header__w6fLQ",nasaAnimated:"FirstScreen_nasaAnimated__2J8U0",greeting:"FirstScreen_greeting__PqKbl",greetingAnimated:"FirstScreen_greetingAnimated__y9sjK",arrow:"FirstScreen_arrow__ysuXG",arrowAnimation:"FirstScreen_arrowAnimation___gY8b"}},8:function(e,a,t){e.exports={container:"FourthScreen_container__3XFOA",about:"FourthScreen_about__1SkJI",text:"FourthScreen_text__2wN9J",links:"FourthScreen_links__2XluS"}}},[[40,1,2]]]);
//# sourceMappingURL=main.bc8704dc.chunk.js.map