(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,a,t){e.exports=t(42)},37:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),o=t(2),s=t(8),i="http://localhost:8089/api",m=function(){return"undefined"!==typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},u=Object(s.g)((function(e){var a=e.history;return c.a.createElement("nav",{className:"navbar shadow navbar-light bg-light sticky-top justify-content-between py-2 topNav"},c.a.createElement(o.c,{to:"/",className:"navbar-brand ml-1 px-4",style:{cursor:"pointer"}},c.a.createElement("div",{className:"row h-100 align-items-center"},c.a.createElement("div",{className:"imgContainer",style:{width:"2rem"}},c.a.createElement("img",{src:"../imgs/logo.svg",alt:"logo"})),c.a.createElement("span",null,"\u2003Music"))),m()&&c.a.createElement("div",{className:""},"Welcome ",m().user.name),c.a.createElement("ul",{className:"nav"},m()&&m()&&c.a.createElement("li",{className:"nav-item mx-2"},c.a.createElement(o.c,{exact:!0,className:"nav-link font-weight-bold",to:"/"},"Home")),m()&&m()&&c.a.createElement("li",{className:"nav-item mx-2"},c.a.createElement(o.c,{exact:!0,className:"nav-link font-weight-bold",to:"/user/dashboard"},"Dashboard")),m()&&1===m().user.role&&c.a.createElement("li",{className:"nav-item mx-2"},c.a.createElement(o.c,{exact:!0,className:"nav-link font-weight-bold",to:"/admin/dashboard"},"Admin Dashboard")),!m()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item mx-2"},c.a.createElement(o.c,{className:"nav-link font-weight-bold",to:"/signup"},"Sign Up")),c.a.createElement("li",{className:"nav-item mx-2"},c.a.createElement(o.c,{className:"nav-link font-weight-bold btn btn-primary rounded",to:"/signin"},"Sign In"))),m()&&c.a.createElement("li",{className:"nav-item mx-2"},c.a.createElement("span",{className:"nav-link font-weight-bold btn btn-outline-danger rounded",onClick:function(){!function e(a){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),a(),fetch("".concat(i/e),{method:"GET"}).then((function(e){return console.log("Signout success")})).catch((function(e){return console.log(e)}))}((function(){a.push("/")}))}},"Sign Out"))))})),d=(t(36),function(){return c.a.createElement("footer",{className:"footer mt-5 pt-3",style:{background:"#0C2461"}},c.a.createElement("div",{className:"row w-100"},c.a.createElement("h2",{id:"contactus",className:"mx-auto text-white font-weight-bold"},c.a.createElement("span",null,"Contact Us"))),c.a.createElement("div",{className:"container py-3"},c.a.createElement("div",{className:"row text-white"},c.a.createElement("div",{className:"col row"},c.a.createElement("div",{className:"col d-flex flex-column"},c.a.createElement("h3",null,"Tech Stack"),c.a.createElement("ul",null,c.a.createElement("li",null,"MongoDB"),c.a.createElement("li",null,"Express.js"),c.a.createElement("li",null,"React.js"),c.a.createElement("li",null,"Node.js"),c.a.createElement("li",null,"Bootstrap"))),c.a.createElement("div",{className:"col"},c.a.createElement("h3",null,"Contribute"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{className:"text-white",href:"https://github.com/SatyaNarayanaputlur/capstone-music"},"music reccomender @ GitHub"))))))))}),f=function(e){var a=e.children;return c.a.createElement("div",{id:"base","data-barba":"wrapper"},c.a.createElement(u,null),c.a.createElement("div",{className:"content","data-barba":"container"},a),c.a.createElement(d,null))},E=function(){return c.a.createElement(f,null,c.a.createElement("section",{className:"",style:{background:"#FFFFFF"}},c.a.createElement("div",{class:"svgs"},c.a.createElement("img",{src:"./imgs/static_bg.svg",alt:""})),c.a.createElement("div",{className:"page",id:"part1"},c.a.createElement("div",{className:"imgContainer"},c.a.createElement("img",{src:"./imgs/main_bg_trans.png",alt:"asd"})),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"title text-primary"},"Music Recommender System"),c.a.createElement("div",{className:"btn-grp"},c.a.createElement("a",{href:"/user/dashboard",className:"try"},"Try now"),c.a.createElement("a",{href:"#part2",className:"more"},"How it works?"))),c.a.createElement("div",{className:"scrollIndicator"})),c.a.createElement("div",{className:"page",id:"part2"},c.a.createElement("div",{className:"card myCard"},c.a.createElement("div",{className:"myCard-img"},c.a.createElement("img",{src:"./imgs/track.svg",alt:""})),c.a.createElement("div",{className:"myCard-title text-blue"},"Latest tracks"),c.a.createElement("div",{className:"myCard-body "},"Get a list of latest tracks released in the market, fetched thorugh the Spotify API")),c.a.createElement("div",{className:"card myCard"},c.a.createElement("div",{className:"myCard-img"},c.a.createElement("img",{src:"./imgs/rating.svg",alt:""})),c.a.createElement("div",{className:"myCard-title text-green"},"Add to Favourites"),c.a.createElement("div",{className:"myCard-body "},"Seamlessly add/remove songs to your Favourite tracks by giving them ratings")),c.a.createElement("div",{className:"card myCard"},c.a.createElement("div",{className:"myCard-img"},c.a.createElement("img",{src:"./imgs/model.svg",alt:""})),c.a.createElement("div",{className:"myCard-title text-orange"},"Recommendation"),c.a.createElement("div",{className:"myCard-body "},"Get a bunch of Songs recommended to you by our recommender engine based on collaborative filtering")),c.a.createElement("div",{className:"scrollIndicator"}))))},h=t(10),p=t(5),g=t(3),v=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),a=Object(g.a)(e,2),t=a[0],r=a[1],l=t.name,s=t.email,m=t.password,u=t.error,d=t.success,E=function(e){return function(a){r(Object(p.a)({},t,Object(h.a)({error:!1},e,a.target.value)))}},v=function(e){var a;e.preventDefault(),r(Object(p.a)({},t,{error:!1})),(a={name:l,email:s,password:m},fetch("".concat(i,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?r(Object(p.a)({},t,{error:e.error,success:!1})):r(Object(p.a)({},t,{name:"",email:"",password:"",error:"",success:!0}))})).catch((function(e){return console.log("Error: ",e)}))};return c.a.createElement(f,{title:"Sign Up page",description:"A page for user to sign up"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-success",role:"alert",style:{display:d?"":"none"}},"Account created successfully. Please ",c.a.createElement(o.b,{to:"/signin"},"Login here")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",role:"alert",style:{display:u?"":"none"}},u))),c.a.createElement("div",{className:""},c.a.createElement("div",{className:"row m-0 justify-content-center align-items-center"},c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"imgContainer"},c.a.createElement("img",{src:"./imgs/signup.jpg",alt:"signup"}))),c.a.createElement("div",{className:"col-md-6 text-left"},c.a.createElement("h2",{className:"font-weight-bold mb-5"},"Lets get you all set up"),c.a.createElement("form",{className:"mt-5",action:""},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-dark"},"Name"),c.a.createElement("input",{className:"form-control",onChange:E("name"),type:"text",value:l,placeholder:"John Doe"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-dark"},"Email"),c.a.createElement("input",{className:"form-control",onChange:E("email"),type:"email",value:s,placeholder:"johnDoe@gmail.com"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-dark"},"Password"),c.a.createElement("input",{className:"form-control",onChange:E("password"),type:"password",value:m,placeholder:"***"})),c.a.createElement("button",{onClick:v,className:"btn btn-success btn-block"},"Submit"))))))},b=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,didRedirect:!1}),a=Object(g.a)(e,2),t=a[0],r=a[1],l=t.email,o=t.password,u=t.error,d=t.loading,E=t.didRedirect,v=m().user,b=function(e){return function(a){r(Object(p.a)({},t,Object(h.a)({error:!1},e,a.target.value)))}},N=function(e){e.preventDefault(),r(Object(p.a)({},t,{error:!1,loading:!0})),function(e){return fetch("".concat(i,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:l,password:o}).then((function(e){e.error?r(Object(p.a)({},t,{error:e.error,loading:!1})):function(e,a){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),a())}(e,(function(){r(Object(p.a)({},t,{didRedirect:!0}))}))})).catch((function(e){return console.log("Sigin in request failed: ",e)}))};return c.a.createElement(f,null,d&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",role:"alert",style:{display:u?"":"none"}},u))),c.a.createElement("div",{className:""},c.a.createElement("div",{className:"row m-0 justify-content-center align-items-center"},c.a.createElement("div",{className:"col-6 "},c.a.createElement("div",{className:"imgContainer",style:{width:"40em"}},c.a.createElement("img",{src:"./imgs/login.jpg",alt:"login"}))),c.a.createElement("div",{className:"col-6 h-100 text-left"},c.a.createElement("h2",{className:"font-weight-bold mb-5"},"Welcome Back,"),c.a.createElement("form",{className:"mb-5",action:""},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-dark"},"Email"),c.a.createElement("input",{onChange:b("email"),className:"form-control",type:"email",value:l,placeholder:"johnDoe@example.com"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-dark"},"Password"),c.a.createElement("input",{onChange:b("password"),className:"form-control",type:"password",value:o,placeholder:"***"})),c.a.createElement("button",{onClick:N,className:"btn btn-success btn-block"},"Submit"))))),E?(v&&v.role,c.a.createElement(s.a,{to:"/user/dashboard"})):m()?c.a.createElement(s.a,{to:"/"}):void 0)},N=(t(37),t(14)),y=function(e){var a=e.component,t=Object(N.a)(e,["component"]);return c.a.createElement(s.b,Object.assign({},t,{render:function(e){return m()&&1===m().user.role?c.a.createElement(a,e):c.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},j=function(e){var a=e.component,t=Object(N.a)(e,["component"]);return c.a.createElement(s.b,Object.assign({},t,{render:function(e){return m()?c.a.createElement(a,e):c.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},k=t(13),w=t.n(k),O=t(20),C=t(11),x=function(e,a){return fetch("".concat(i,"/track/favourites/").concat(a._id),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},S=function(e,a){return fetch("".concat(i,"/track/").concat(a),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},T=function(e){var a=e.track,t=Object(n.useState)(0),r=Object(g.a)(t,2),l=r[0],o=r[1],s=Object(n.useState)(!1),u=Object(g.a)(s,2),d=u[0],f=u[1],E=a.artist,h=(a.duration,a.id),v=a.name,b=a.image,N=m(),y=N.user,j=N.token,k=function(){x(j,y).then((function(e){(function(e,a,t){e.favourites=e.favourites.filter((function(e){return e.id!==t}));var n={favourites:e.favourites};return fetch("".concat(i,"/user/").concat(e._id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(n)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,j,a.id).then((function(e){o(0),f(!1)}))}))},w=function(e){return function(t){x(j,y).then((function(t){(function(e,a,t,n){var c,r=Object(p.a)({},t,{rating:n});if(e.favourites){var l=e.favourites.findIndex((function(e){return e.id==t.id}));-1!==l?(e.favourites[l]=r,c={favourites:e.favourites}):c={favourites:[].concat(Object(C.a)(e.favourites),[r])}}else c={favourites:[r]};return fetch("".concat(i,"/user/").concat(e._id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(c)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(t,j,a,e).then((function(a){o(e),f(!0)}))}))}};return Object(n.useEffect)((function(){x(j,y).then((function(e){if(e.favourites){var a=e.favourites.filter((function(e){return e.id==h}));a.length&&(o(a[0].rating),f(!0))}}))}),[l]),c.a.createElement("div",{className:"trackCard"},c.a.createElement("div",{className:"trackCard-img-container"},c.a.createElement("img",{src:b,alt:"track image",className:"card-img-top"})),c.a.createElement("div",{className:"trackCard-body"},c.a.createElement("div",{className:"trackCard-name"},v),c.a.createElement("div",{className:"trackCard-artist"},E)),c.a.createElement("div",{className:"trackCard-favourite"},c.a.createElement("div",{className:"removeBtn"},d&&c.a.createElement("button",{onClick:k,className:"btn btn-outline-danger"},"Remove")),c.a.createElement("span",{className:"starRating"},c.a.createElement("input",{id:"".concat(h,"rating5"),type:"radio",name:"".concat(h,"rating"),value:"5",onChange:w("5"),checked:l&&"5"==l}),c.a.createElement("label",{htmlFor:"".concat(h,"rating5")},"5"),c.a.createElement("input",{id:"".concat(h,"rating4"),type:"radio",name:"".concat(h,"rating"),value:"4",onChange:w("4"),checked:l&&"4"==l}),c.a.createElement("label",{htmlFor:"".concat(h,"rating4")},"4"),c.a.createElement("input",{id:"".concat(h,"rating3"),type:"radio",name:"".concat(h,"rating"),value:"3",onChange:w("3"),checked:l&&"3"==l}),c.a.createElement("label",{htmlFor:"".concat(h,"rating3")},"3"),c.a.createElement("input",{id:"".concat(h,"rating2"),type:"radio",name:"".concat(h,"rating"),value:"2",onChange:w("2"),checked:l&&"2"==l}),c.a.createElement("label",{htmlFor:"".concat(h,"rating2")},"2"),c.a.createElement("input",{id:"".concat(h,"rating1"),type:"radio",name:"".concat(h,"rating"),value:"1",onChange:w("1"),checked:l&&"1"==l}),c.a.createElement("label",{htmlFor:"".concat(h,"rating1")},"1"))))},A=function(){var e,a=Object(n.useState)([]),t=Object(g.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)([]),s=Object(g.a)(o,2),u=s[0],d=s[1],E=Object(n.useState)([]),h=Object(g.a)(E,2),p=h[0],v=h[1],b=Object(n.useState)([]),N=Object(g.a)(b,2),y=N[0],j=N[1],k=Object(n.useState)(!1),A=Object(g.a)(k,2),F=A[0],R=A[1],B=Object(n.useState)(!1),I=Object(g.a)(B,2),G=(I[0],I[1]),_=["popular","latest","upcoming","onsale"],P=m(),U=P.user,D=P.token,J=function(){(function(e){return fetch("".concat(i,"/track/new"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(D).then((function(e){e.error?G(e.error):(l([].concat(Object(C.a)(r),Object(C.a)(e))),console.log("New Tracks fetched"))}))},z=function(){var e=Object(O.a)(w.a.mark((function e(){var a,t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,x(D,U);case 3:(t=e.sent).favourites&&(n=t.favourites.length,t.favourites.forEach(function(){var e=Object(O.a)(w.a.mark((function e(t,c){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(D,t.id);case 2:(r=e.sent)&&a.push(r),c==n-1&&d(a);case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){(function(e,a){return fetch("".concat(i,"/user/").concat(a._id,"/recommendations"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(D,U).then((function(e){if(e.error)G(e.error);else{console.log(e);var a=[],t=e.length;e.forEach((function(e,n){S(D,e).then((function(e){e&&a.push(e),n==t-1&&(v([].concat(Object(C.a)(p),a)),console.log("Recommendation Tracks fetched"))})).catch((function(e){return console.log(e)}))}))}}))},M=function(a){a?(clearTimeout(e),e=setTimeout((function(){console.log("SEACRHING: ",a),R(!0),function(e,a,t){var n=new URL("".concat(i,"/track/").concat(a._id,"/search")),c={q:t};return n.search=new URLSearchParams(c).toString(),fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(D,U,a).then((function(e){if(e&&e.error)G(e.error);else if(e.length){console.log("Data: ",e);var a=[],t=e.length;e.forEach((function(e,n){S(D,e).then((function(e){a.push(e),n==t-1&&(j(a),console.log("Search Query Results fetched"))})).catch((function(e){return console.log(e)}))}))}R(!1)})).catch((function(e){return console.log(e)}))}),1e3)):(clearTimeout(e),j([]))};return Object(n.useEffect)((function(){J(),z(),L()}),[]),c.a.createElement(f,null,c.a.createElement("section",{className:"container mt-5",id:"songsSection"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"seach"},c.a.createElement("h4",null,c.a.createElement("i",{className:"fas fa-search text-muted"},"\xa0"),"Search something")),c.a.createElement("input",{type:"text",onChange:function(e){return M(e.target.value)},className:"form-control",id:"searchQuery",placeholder:"Song / artist / album"})),c.a.createElement("img",{className:"col-1",src:"../imgs/loading.gif",style:{display:F?"block":"none"}}),c.a.createElement("div",{className:"row grid mb-3"},y&&y.map((function(e,a){return c.a.createElement("div",{key:a,className:"col-lg-3 col-md-6 col-sm-12 element-item track mb-4 ".concat(_[Math.floor(Math.random()*_.length)])},c.a.createElement(T,{track:e}))}))),c.a.createElement("nav",{className:"mt-5"},c.a.createElement("div",{className:"nav nav-fill nav-lg nav-tabs",id:"nav-tab",role:"tablist"},c.a.createElement("a",{className:"nav-item nav-link active",id:"nav-tracks-tab","data-toggle":"tab",href:"#nav-tracks",role:"tab","aria-controls":"nav-tracks","aria-selected":"true"},c.a.createElement("h3",null,"Tracks")),c.a.createElement("a",{className:"nav-item nav-link",id:"nav-fav-tab","data-toggle":"tab",href:"#nav-fav",role:"tab","aria-controls":"nav-fav","aria-selected":"false"},c.a.createElement("h3",null,"Favourites")),c.a.createElement("a",{className:"nav-item nav-link",id:"nav-rec-tab","data-toggle":"tab",href:"#nav-rec",role:"tab","aria-controls":"nav-fav","aria-selected":"false"},c.a.createElement("h3",null,"Recommendations")))),c.a.createElement("div",{className:"tab-content",id:"nav-tabContent"},c.a.createElement("div",{className:"tab-pane fade show active",id:"nav-tracks",role:"tabpanel","aria-labelledby":"nav-home-tab"},c.a.createElement("div",{className:"tracks-area"},c.a.createElement("div",{className:"button-group"},c.a.createElement("button",{type:"button","data-filter":"*",className:"active",id:"btn1"},"All"),c.a.createElement("button",{type:"button","data-filter":".popular"},"Popular"),c.a.createElement("button",{type:"button","data-filter":".latest"},"Latest"),c.a.createElement("button",{type:"button","data-filter":".upcoming"},"Upcoming")),c.a.createElement("div",{className:"row grid mt-5"},r&&r.map((function(e,a){if(-1==u.findIndex((function(a){return a.id==e.id})))return c.a.createElement("div",{key:a,className:"col-lg-4 col-md-6 col-sm-12 element-item track mb-4 ".concat(_[Math.floor(Math.random()*_.length)])},c.a.createElement(T,{track:e}))}))))),c.a.createElement("div",{className:"tab-pane fade",id:"nav-fav",role:"tabpanel","aria-labelledby":"nav-fav-tab"},c.a.createElement("div",{className:"row grid mt-5"},u&&u.map((function(e,a){return c.a.createElement("div",{key:a,className:"col-lg-4 col-md-6 col-sm-12 element-item track mb-4"},c.a.createElement(T,{track:e}))})))),c.a.createElement("div",{className:"tab-pane fade",id:"nav-rec",role:"tabpanel","aria-labelledby":"nav-rec-tab"},c.a.createElement("div",{className:"row grid mt-5"},p&&p.map((function(e,a){return c.a.createElement("div",{key:a,className:"col-lg-4 col-md-6 col-sm-12 element-item track mb-4"},c.a.createElement(T,{track:e}))})))))))},F=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],r=a[1],l=m(),o=l.user,s=l.token,u=function(){(function(e,a){return fetch("".concat(i,"/user/").concat(a._id,"/all"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(s,o).then((function(e){r(e),console.log("All Users Favs fetched")})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){u()}),[]),c.a.createElement(f,null,c.a.createElement("section",{className:"container border rounded mt-5",id:""},c.a.createElement("nav",{id:"navbar-user-data",className:"navbar navbar-light bg-light my-2 shadow-sm rounded"},c.a.createElement("ul",{className:"nav nav-pills"},t&&t.map((function(e,a){return c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{key:a,className:"nav-link",href:"#".concat(e._id)},e.name))})))),c.a.createElement("table",{class:"table table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"table-success"},c.a.createElement("th",{scope:"col-3"},c.a.createElement("h4",null,"Username")),c.a.createElement("th",{scope:"col-3"},c.a.createElement("h4",null,"Song")),c.a.createElement("th",{scope:"col-3"},c.a.createElement("h4",null,"Artist")),c.a.createElement("th",{scope:"col"},c.a.createElement("h4",null,"Rating")))),c.a.createElement("tbody",null,t&&t.map((function(e,a){return c.a.createElement("tr",null,c.a.createElement("td",{id:e._id},c.a.createElement("h4",null,e.name)),c.a.createElement("td",null,e.favourites.map((function(e,a){return c.a.createElement("div",{className:"alert p-2 alert-primary"},c.a.createElement("b",null,e.name))}))),c.a.createElement("td",null,e.favourites.map((function(e,a){return c.a.createElement("div",{className:"alert p-2 alert-info"},e.artist)}))),c.a.createElement("td",null,e.favourites.map((function(e,a){return c.a.createElement("div",{className:"alert p-2 alert-warning"},c.a.createElement("b",null,e.rating)," stars")}))))}))))))},R=function(){return c.a.createElement(o.a,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0,component:E}),c.a.createElement(s.b,{path:"/signup",exact:!0,component:v}),c.a.createElement(s.b,{path:"/signin",exact:!0,component:b}),c.a.createElement(j,{path:"/user/dashboard",exact:!0,component:A}),c.a.createElement(y,{path:"/admin/dashboard",exact:!0,component:F})))};t(39),t(40),t(41),t(17);l.a.render(c.a.createElement(R,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3b6592b8.chunk.js.map