(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{169:function(e,a,t){e.exports=t(416)},176:function(e,a,t){},177:function(e,a,t){},178:function(e,a,t){e.exports=t.p+"7ae833e17fb31d18e512910cdd91fe2a.png"},194:function(e,a,t){},195:function(e,a,t){},196:function(e,a,t){},202:function(e,a,t){e.exports=t.p+"39b11f10fbbe3142859230c9c4d2671c.png"},207:function(e,a,t){},208:function(e,a,t){},209:function(e,a,t){e.exports=t.p+"0da5eee18521345fc9e5438cd0d51337.png"},210:function(e,a,t){},30:function(e,a,t){"use strict";t.d(a,"c",(function(){return n})),t.d(a,"d",(function(){return r})),t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return s}));var n="GET_PAGE_CONTENT_SUCCESS",r="GET_SIDE_NAV_DETAILS_SUCCESS",o="BEGIN_API_CALL",s="API_CALL_ERROR"},415:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(74),s=t(14),l=(t(175),t(176),t(177),t(59)),i=function(e){return r.a.createElement("div",{className:e.horizontal?"social-icons social-icons-horizontal":"social-icons d-none d-md-block"},r.a.createElement("ul",{className:"list-unstyled text-center mb-0"},r.a.createElement("li",{className:"list-unstyled-item"},r.a.createElement("a",{href:"https://twitter.com/TheGeekyIndian",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("li",{className:"list-unstyled-item"},r.a.createElement("a",{href:"https://www.facebook.com/TheGeekyIndianPage",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("li",{className:"list-unstyled-item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/thegeekyindian/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})))))},c=function(){return r.a.createElement("div",{className:"row flex-xl-nowrap geek-main-content noBackgroundLogo"},r.a.createElement("div",{className:"masthead col-md-7 order-1"},r.a.createElement("div",{className:"masthead-bg"}),r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100"},r.a.createElement("div",{className:"col-12 my-auto"},r.a.createElement("div",{className:"masthead-content text-white py-5 py-md-0"},r.a.createElement("h1",{className:"mb-3"},"Coming Soon"),r.a.createElement("p",{className:"mb-5"},"We are working hard to finish the development of this site. Our target launch date is",r.a.createElement("strong",null," May 2020"),". Sign up for updates using the form below"),r.a.createElement("div",{className:"input-group input-group-newsletter"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email...","aria-label":"Enter email...","aria-describedby":"basic-addon"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-secondary",type:"button"},"Notify Me!")))))))),r.a.createElement("div",{className:"col-md-5 order-2 row"},r.a.createElement("div",{className:"m-auto"},r.a.createElement("img",{src:t(178),width:"400",height:"50",className:"d-inline-block align-top rotate",alt:""}))),r.a.createElement(i,null))},u=t(23),d=t(24),m=t(27),p=t(25),g=t(28),h=t(60),f=t(30),b=t(66),v=t.n(b),E=t(91);function k(e){return P.apply(this,arguments)}function P(){return(P=Object(E.a)(v.a.mark((function e(a){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.ok){e.next=2;break}return e.abrupt("return",a.json());case 2:if(400!==a.status){e.next=7;break}return e.next=5,a.text();case 5:throw t=e.sent,new Error(t);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){throw console.error("API call failed. "+e),e}var L=location.origin+"/pages/",C=".json";function y(){return{type:f.a}}function w(e){return function(a){return a({type:f.b}),function(e){return fetch(L+"/nav/"+e+C).then(k).catch(N)}(e).then((function(e){a(function(e){return{type:f.d,sideNav:e}}(e))})).catch((function(e){throw a(y()),e}))}}function O(e,a){return function(t){return function(e,a){return fetch(L+"/content/"+e+"/"+a+C).then(k).catch(N)}(e,a).then((function(e){var a;t((a=e,{type:f.c,pageContent:a}))})).catch((function(e){throw t(y()),e}))}}var S=t(26),j=t(47),x=(t(194),t(195),t(196),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={},t.onBreadCrumbLinkClick=function(e){var a=t.props.links;t.props.onBreadCrumbLinkClick(a,a[e])},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"getLinksForBreadCrumb",value:function(e){var a=[];if(e&&e.length>0)for(var t=0;t<e.length;t++){var n=e[t];0==t?a.push({page:n.page,shortName:n.shortName,originalPageLink:n.page}):a.push({page:a[t-1].page+"/"+n.page,shortName:n.shortName,originalPageLink:n.page})}return a}},{key:"notLastLink",value:function(e,a){return e.originalPageLink!=a[a.length-1].page}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"breadCrumb"},r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"/"},r.a.createElement("i",{className:"fa fa-home"}))),this.props.links&&this.props.links.length>0&&this.getLinksForBreadCrumb(this.props.links).map((function(a,t){return r.a.createElement("li",{key:a.page,className:"breadcrumb-item"},e.notLastLink(a,e.props.links)?r.a.createElement(s.b,{to:a.page,onClick:function(){return e.onBreadCrumbLinkClick(t)}},a.shortName):r.a.createElement("span",null,a.shortName))})))))}}]),a}(r.a.Component)),B=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={},t.onLinkClick=function(e){e!=t.props.currentLoadedPage?(console.log("SideBarLink -> currentLoadedPage:",t.props.currentLoadedPage+", newPage: "+e+", parentPages"+t.props.parentPages),t.props.parentLinkChangeHandler(t.props.currentLoadedPage,t.props.parentPages,e)):console.log("SideBarLink -> current loaded page is same currentLoadedPage:",t.props.currentLoadedPage+", newPage: ",e)},t.isIntialLoad=!0,t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"getParentRouteURL",value:function(){for(var e=this.props.parentPages,a="",t=0;t<e.length;t++)a=a+e[t].page+"/";return a}},{key:"getParentPages",value:function(e){var a=this.props.parentPages.slice();return a.push({key:e.page,page:e.page,name:e.name,shortName:e.shortName}),a}},{key:"isCurrentLoadedPageIsChildrenOfTheseLinks",value:function(e,a){for(var t=null,n=0;n<e.length;n++){if(e[n].page==a){t=e[n];break}if(e[n].subLinks&&e[n].subLinks.length>0&&(t=this.isCurrentLoadedPageIsChildrenOfTheseLinks(e[n].subLinks,a))&&t.page==a)break}return t}},{key:"isCurrentLoadedPageIsChildrenOfThisLink",value:function(e,a,t,n,r){var o=r;this.isIntialLoad&&(e.page==a.page?o=n:null!=this.isCurrentLoadedPageIsChildrenOfTheseLinks(e.subLinks,a.page)&&(o=n));return t&&(this.isIntialLoad=!1),o}},{key:"render",value:function(){var e=this,t=this.props,n=t.link,o=t.parentLinkChangeHandler,l=t.currentLoadedPage,i=t.parentPages;return r.a.createElement(r.a.Fragment,null,n&&n.subLinks&&0!=n.subLinks.length&&i?r.a.createElement("li",{key:n.key},r.a.createElement(s.b,{to:this.getParentRouteURL()+n.page,onClick:function(){return e.onLinkClick(n)},className:l.page==n.page?"activeLink borderedLink":"borderedLink"},r.a.createElement("i",{className:n.iconClass}),n.name),r.a.createElement("a",{href:"#"+n.key+"-ul","data-toggle":"collapse","aria-expanded":"false",className:this.isCurrentLoadedPageIsChildrenOfThisLink(n,l,!1,"preDropDownAnchor dropdown-toggle","preDropDownAnchor dropdown-toggle collapsed")}),r.a.createElement("ul",{className:this.isCurrentLoadedPageIsChildrenOfThisLink(n,l,!0,"collapse list-unstyled show","collapse list-unstyled"),id:n.key+"-ul"},n.subLinks.map((function(t){return r.a.createElement(a,{link:t,parentLinkChangeHandler:o,key:t.key,parentPages:e.getParentPages(n),currentLoadedPage:l,isIntialLoad:e.props.isIntialLoad})})))):r.a.createElement("li",null,i&&r.a.createElement(s.b,{key:n.key,to:this.getParentRouteURL()+n.page,className:l.page==n.page?"activeLink  borderedLink":" borderedLink",onClick:function(){return e.onLinkClick(n)}},r.a.createElement("i",{className:n.iconClass}),n.name)))}}]),a}(r.a.Component),I=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={},t.onLinkChange=function(e,a,n){console.log("SideBar -> currentLoadedPage:"+e+", newPage: "+n+", parentPages",a),t.props.onLinkChange(e,a,n)},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{id:"sidebar",className:this.props.hideSideBar?"active":""},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("a",{className:"navbar-brand geeky-navbar-brand",href:"/"},r.a.createElement("img",{src:t(202),width:"100",height:"50",className:"d-inline-block align-top rotate",alt:""}))),r.a.createElement("ul",{className:"list-unstyled components"},this.props.sideNav&&r.a.createElement("p",null,this.props.sideNav.title),this.props.sideNav&&this.props.sideNav.links&&this.props.sideNav.links.map((function(a){return r.a.createElement(B,{link:a,key:a.key,parentPages:e.props.parentPages,parentLinkChangeHandler:e.onLinkChange,currentLoadedPage:e.props.currentLoadedPage})}))))}}]),a}(r.a.Component),T=t(168),A="https://thegeekyindian.com",R=(t(207),function(){return r.a.createElement("div",{className:"loader"},"Loading...")}),F=(t(208),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={currentLoadedPage:"",urlOfPage:A},t.getPageContent=function(){var e=Object(E.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||a==t.state.currentLoadedPage){e.next=12;break}return e.prev=1,t.setCurrentState({currentLoadedPage:a}),e.next=5,t.props.actions.getPageContent(t.props.parentPage,a);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),j.toast.error(a+"could not be loaded for "+t.props.parentPage+" section"+e.t0.message,{autoClose:!1});case 10:e.next=13;break;case 12:console.log("Content for "+t.props.parentPage+" type "+a+" page is already loaded");case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}(),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getPageContent(this.props.currentLoadedPage.page).catch((function(a){j.toast.error("Loading "+e.props.currentLoadedPage.page+" page failed"+a.message,{autoClose:!1})}))}},{key:"componentWillReceiveProps",value:function(e){e.currentLoadedPage.page!=this.props.currentLoadedPage.page&&this.getPageContent(e.currentLoadedPage.page).catch((function(a){j.toast.error("Loading "+e.currentLoadedPage.page+" page failed"+a.message,{autoClose:!1})})),this.setState({urlOfPage:this.getURLOfThisPage(e.parentPages)})}},{key:"getURLOfThisPage",value:function(e){var a=A;if(e&&e.length>0)for(var t=0;t<e.length;t++)0==t?a+=e[t].page:a=a+"/"+e[t].page;return a}},{key:"setCurrentState",value:function(e){this.setState(e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.loading?r.a.createElement(R,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(T.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,this.props.pageContent.title),r.a.createElement("link",{rel:"canonical",href:this.state.urlOfPage}),r.a.createElement("meta",{name:"description",content:this.props.pageContent.description})),r.a.createElement("h3",null,this.props.pageContent.heading),this.props.pageContent.dataList&&this.props.pageContent.dataList.map((function(e,a){return r.a.createElement("p",{key:a},e.data)}))))}}]),a}(r.a.Component));var U=Object(h.b)((function(e){return{pageContent:e.currentPage.pageContent,loading:e.apiCallsInProgress>0}}),(function(e){return{actions:{getPageContent:Object(S.bindActionCreators)(O,e)}}}))(F),D=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={firstPageLoaded:!1,hideSideBar:!1,currentLoadedPage:{},parentPagesForSideNav:[],parentPagesForBreadCrumb:[]},t.sideBarToggled=function(){t.setState({hideSideBar:!t.state.hideSideBar})},t.onLinkChange=function(e,a,n){console.log("SideBarWrapper -> currentLoadedPage:"+e+", newPage: "+n+", parentPages"+a);var r=a.slice();r.push(n),t.setState({currentLoadedPage:n,parentPagesForBreadCrumb:r})},t.onBreadCrumbLinkClick=function(e,a){for(var n=[],r=0;r<e.length&&(n.push(e[r]),a.page!=e[r].page);r++);t.setState({currentLoadedPage:a,parentPagesForBreadCrumb:n})},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){var a=e.sideNav,t=e.parentRouteUrl;if(a&&a.title&&t){var n=location.pathname;console.log("location: ",location),console.log("SideBarWrapper -> path: "+n),n&&n.indexOf("/")>=0&&n.indexOf("/")!=n.lastIndexOf("/")?(console.log("SideBarWrapper -> loading from url path"),this.loadContentFromParentUrlOrRoutePage(a,n,this.getDefaultParentPages(a,t))):(console.log("SideBarWrapper -> loading from sidenav props",a),this.loadContentFromParentUrlOrRoutePage(a,a.mainPage,this.getDefaultParentPages(a,t)))}}},{key:"getDefaultParentPages",value:function(e,a){var t=[];return e&&t.push({key:a,page:a,name:e.title,shortName:e.shortName}),console.log("parent Pages ->",t),t}},{key:"getCurrentLoadedPage",value:function(e,a){for(var t=null,n=0;n<a.length;n++){if(a[n].page==e){t=a[n];break}if(a[n].subLinks&&a[n].subLinks.length>0&&(t=this.getCurrentLoadedPage(e,a[n].subLinks))&&t.page==e)break}return t}},{key:"getCurrentLoadedPageDetails",value:function(e,a){var t=this.props.parentRouteUrl;if(e){if(e.mainPage==a||t==a)return{key:t,page:e.mainPage,name:e.title,shortName:e.shortName};var n=this.getCurrentLoadedPage(a,e.links);if(null!=n)return n;window.location="/404"}}},{key:"addParentPagesFromURLRoute",value:function(e,a,t){var n=t.slice(),r=a.split("/");if(r.length>2)for(var o=2;o<r.length;o++)n.push(this.getCurrentLoadedPageDetails(e,r[o]));return n}},{key:"loadContentFromParentUrlOrRoutePage",value:function(e,a,t){var n=t.slice();if(a&&a.lastIndexOf("/")>=0){var r=a.substring(a.lastIndexOf("/")+1);if(r){console.log("SideBarWrapper -> currentLoadedPage: "+this.state.currentLoadedPage+", newCurrentLoadedPage:"+r);var o=this.getCurrentLoadedPageDetails(e,r);this.setState({currentLoadedPage:o,parentPagesForSideNav:n,parentPagesForBreadCrumb:this.addParentPagesFromURLRoute(e,a,t)})}}else{console.log("SideBarWrapper -> currentLoadedPage: "+this.state.currentLoadedPage+", newCurrentLoadedPage:"+a);var s=this.getCurrentLoadedPageDetails(e,a);this.setState({currentLoadedPage:s,parentPagesForSideNav:n,parentPagesForBreadCrumb:t})}}},{key:"componentDidMount",value:function(){var e=this.props,a=e.pageType,t=e.actions;0!=a.length&&t.getSideNav(a).catch((function(e){j.toast.error("Loading page "+a+"failed"+e.message,{autoClose:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"geek-main-content"}," ",this.props.loading?r.a.createElement(R,null):r.a.createElement("div",{className:"sideBarwrapper"},this.props.sideNav&&r.a.createElement(I,{sideNav:this.props.sideNav,hideSideBar:this.state.hideSideBar,onLinkChange:this.onLinkChange,parentPages:this.state.parentPagesForSideNav,currentLoadedPage:this.state.currentLoadedPage}),r.a.createElement("div",{id:"content"},r.a.createElement("div",{className:"mainContentHeader"},r.a.createElement("a",{className:"sidebarToggler",onClick:function(){return e.sideBarToggled()}},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement(x,{links:this.state.parentPagesForBreadCrumb,onBreadCrumbLinkClick:this.onBreadCrumbLinkClick})),r.a.createElement(l.a,{path:this.props.parentRouteUrl+"/:id"},r.a.createElement(U,{colapseLinkClicked:this.sideBarToggled,parentPages:this.state.parentPagesForBreadCrumb,parentPage:this.props.pageType,onBreadCrumbLinkClick:this.onBreadCrumbLinkClick,currentLoadedPage:this.state.currentLoadedPage})))))}}]),a}(r.a.Component);var _=Object(h.b)((function(e){return{sideNav:e.currentPage.sideNav,loading:e.apiCallsInProgress>0}}),(function(e){return{actions:{getSideNav:Object(S.bindActionCreators)(w,e)}}}))(D),M=function(e){var a=e.match;return r.a.createElement(_,{pageType:"about",parentRouteUrl:a.path})},W=function(){var e={};return r.a.createElement("nav",{className:"navbar fixed-top navbar-icon-top navbar-expand-md navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand geeky-navbar-brand",href:"/"},r.a.createElement("img",{src:t(209),width:"300",height:"50",className:"d-inline-block align-top ",alt:""})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"}),r.a.createElement("ul",{className:"navbar-nav "},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/javaHome",activeStyle:e},r.a.createElement("i",{className:"fab fa-java"},r.a.createElement("span",{className:"badge badge-success"},"1")),"Java")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/about",activeStyle:e},r.a.createElement("i",{className:"fa fa-users"}),"About us")))))},G=function(){return r.a.createElement("div",{className:"geeky-footer"},r.a.createElement("footer",{className:"footer text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 mb-5 mb-lg-0"},r.a.createElement("h4",{className:"text-uppercase mb-4"},"Location"),r.a.createElement("p",{className:"lead mb-0"},"Mumbai",r.a.createElement("br",null),"Maharashtra, India")),r.a.createElement("div",{className:"col-lg-4 mb-5 mb-lg-0"},r.a.createElement("h4",{className:"text-uppercase mb-4"},"Around the Web"),r.a.createElement(i,{horizontal:!0})),r.a.createElement("div",{className:"col-lg-4 mt-md-0 mt-sm-5 mt-xs-5"},r.a.createElement("h4",{className:"text-uppercase mb-4"},"About"),r.a.createElement("p",{className:"lead mb-0"},"A website for all geeks who wants to learn and succeed",r.a.createElement(s.b,{className:"nav-item nav-link my-2 my-sm-0 white-underline-text",to:"/about"},"About Geeky Indian")))))),r.a.createElement("section",{className:"copyright py-4 text-center text-white"},r.a.createElement("div",{className:"container"},r.a.createElement("small",null,"Copyright © thegeekyindian.com 2020"))))},H=function(){return r.a.createElement("div",{className:"row flex-xl-nowrap geek-main-content"},r.a.createElement("section",{id:"not-found",className:"notFoundPage"},r.a.createElement("div",{id:"title"}),r.a.createElement("div",{className:"circles"},r.a.createElement("p",null,"404",r.a.createElement("br",null),r.a.createElement("small",null,"PAGE NOT FOUND")),r.a.createElement("span",{className:"circle big"}),r.a.createElement("span",{className:"circle med"}),r.a.createElement("span",{className:"circle small"}))))},J=(t(210),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={intervalId:0,thePosition:!1},t.onScrollStep=function(){0===window.pageYOffset&&clearInterval(t.state.intervalId),window.scroll(0,window.pageYOffset-t.props.scrollStepInPx)},t.scrollToTop=function(){var e=setInterval(t.onScrollStep,t.props.delayInMs);t.setState({intervalId:e})},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(){window.scrollY>170?e.setState({thePosition:!0}):e.setState({thePosition:!1})})),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.thePosition&&r.a.createElement("span",{className:"goToTop",title:"Go to top",onClick:function(){return e.scrollToTop()}},r.a.createElement("i",{title:"Go to top",className:"fas fa-arrow-up"})))}}]),a}(r.a.Component)),z=function(){return r.a.createElement("div",{className:"row flex-xl-nowrap geek-main-content"},r.a.createElement("div",{className:"col-12 col-md-3 col-xl-2 bd-sidebar p-1 mt-4"}),r.a.createElement("div",{className:"col-12 col-md-9 col-xl-8 bd-content mt-4 p-1 "},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Java!"),r.a.createElement("p",{className:"lead"},"Java is a high-level programming language developed by Oracle services. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications. The Java syntax is similar to C++, but is strictly an object-oriented programming language"),r.a.createElement("p",{className:"lead"},"A new world for java developers is opening soon."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"Mean while you can go to home page and learn more about us."),r.a.createElement("p",{className:"lead"},r.a.createElement("a",{className:"btn btn-primary btn-lg",href:"/",role:"button"},r.a.createElement("i",{className:"fa fa-home"}),"  Home")))),r.a.createElement("div",{className:"d-none d-xl-block col-xl-2 col-md-3 bd-toc p-1 mt-4"}))};t(211);var Y=function(){return r.a.createElement("div",{className:"container-fluid mainApp"},r.a.createElement(W,null),r.a.createElement("div",{className:"topRouterWrapper"},r.a.createElement("div",{className:"overlay"}),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:c}),r.a.createElement(l.a,{path:"/about",component:M}),r.a.createElement(l.a,{path:"/javaHome",component:z}),r.a.createElement(l.a,{component:H}))),r.a.createElement(G,null),r.a.createElement(J,{scrollStepInPx:"100",delayInMs:"10"}),r.a.createElement(j.ToastContainer,{autoClose:3e3,hideProgressBar:!0}))},V=t(169),q=t.n(V)()(),K=document.getElementById("mainApp");K.hasChildNodes()?Object(o.hydrate)(r.a.createElement(h.a,{store:q},r.a.createElement(s.a,null,r.a.createElement(Y,null))),K):Object(o.render)(r.a.createElement(h.a,{store:q},r.a.createElement(s.a,null,r.a.createElement(Y,null))),K)},416:function(e,a,t){"use strict";t.r(a);var n=t(26),r=t(30),o={currentPage:{sideNav:{},pageContent:{}},apiCallsInProgress:0};var s=Object(n.combineReducers)({currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.currentPage,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case r.c:return{pageContent:a.pageContent,sideNav:e.sideNav};case r.d:return{pageContent:e.pageContent,sideNav:a.sideNav};default:return e}},apiCallsInProgress:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.apiCallsInProgress,t=arguments.length>1?arguments[1]:void 0;return t.type==r.b?a+1:t.type===r.a||"_SUCCESS"===(e=t.type).substring(e.length-8)?a-1:a}}),l=t(170);function i(e){return Object(n.createStore)(s,e,Object(n.applyMiddleware)(l.a))}t.d(a,"default",(function(){return i}))}},[[415,0,1]]]);
//# sourceMappingURL=geek.d955d80cfa0ca6d6aaf5.bundle.js.map