(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{L8Vt:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),l=(a("ls82"),a("HaE+")),c=a("dI71"),i=a("q1tI"),s=a.n(i),u=a("Bl7J"),o=a("vrFN"),m=a("fBUP"),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={fetchedMembersList:[],hasError:!1},t}Object(c.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)("http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/members");case 3:(t=e.sent).success?this.setState({fetchedMembersList:t.results,hasError:!1}):this.setState({hasError:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({hasError:!0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),a.addDefaultSrc=function(e){e.target.src="https://avatars3.githubusercontent.com/u/13358086?s=200&v=4"},a.render=function(){var e=this,t=this.state,a=t.fetchedMembersList,n=t.hasError,r=a.map((function(t,a){return s.a.createElement("div",{key:t.name+a},t.image_url&&s.a.createElement("img",{onError:e.addDefaultSrc,src:t.image_url,alt:t.name+"'s beautiful face",style:{maxWidth:200}}),s.a.createElement("h2",null,t.name),t.location&&s.a.createElement("div",null,s.a.createElement("p",null,t.location)),t.favorite_techs&&s.a.createElement("div",null,s.a.createElement("h3",null,"Favorite Technologies"),s.a.createElement("ul",null,t.favorite_techs.map((function(e,t){return s.a.createElement("li",{key:t},e)})))),t.hobbies&&s.a.createElement("div",null,s.a.createElement("h3",null,"Hobbies"),s.a.createElement("ul",null,t.hobbies.map((function(e,t){return s.a.createElement("li",{key:t},e)})))),t.links&&s.a.createElement("div",null,s.a.createElement("h3",null,"Contact Info"),s.a.createElement("ul",null,t.links.twitter&&s.a.createElement("li",null,s.a.createElement("a",{href:t.links.twitter},"Twitter")," "),t.links.facebook&&s.a.createElement("li",null,s.a.createElement("a",{href:t.links.facebook},"Facebook")," "),t.links.linkedIn&&s.a.createElement("li",null,s.a.createElement("a",{href:t.links.linkedIn},"LinkedIn")," "),t.links.website&&s.a.createElement("li",null,s.a.createElement("a",{href:t.links.website},"Website")," "),t.links.github&&s.a.createElement("li",null,s.a.createElement("a",{href:t.links.github},"Github")," "),t.links.meetup&&s.a.createElement("li",null,s.a.createElement("a",{href:t.links.meetup},"Meetup")," "))),s.a.createElement("hr",null))}));return s.a.createElement(u.a,null,s.a.createElement(o.a,{title:"Chapter Members"}),s.a.createElement("h1",null,"Chapter Members"),n&&s.a.createElement("p",null,"Unable to fetch members."),s.a.createElement("section",{className:"members"},r))},t}(i.Component);t.default=h}}]);
//# sourceMappingURL=component---src-pages-members-js-25282e94ca4c72f4a5e2.js.map