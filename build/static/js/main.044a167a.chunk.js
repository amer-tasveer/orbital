(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/orbital-pic1.3aa9e098.svg"},34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),i=a.n(s),l=(a(39),a(4)),o=a(5),c=a(7),d=a(6),u=(a(40),a(16)),m=a(13),h=a.n(m),f=(a(58),a(14)),p=a(2),v=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={post:[],loading:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getFeatured(),p.a.initialize("UA-174924337-1"),p.a.pageview(this.props.location.pathname)}},{key:"getFeatured",value:function(){var e=this;h.a.get("/api/article/post/all/").then((function(t){e.setState({post:t.data.items}),console.log(e.state.post),console.log(t)}))}},{key:"renderPara",value:function(e){return e.content.map((function(e,t){return void 0==e.content[0]?null:e.content[0].value?e.content[0].value:void 0}))}},{key:"renderFeatured",value:function(){var e=this,t=this.state.post;if(console.log(t),void 0!=t)return t.map((function(t,a){return"articlesart"==t.sys.contentType.sys.id?r.a.createElement("div",{className:"featured-container"},r.a.createElement("img",{className:"images",src:t.fields.images[0].fields.file.url}),r.a.createElement(f.b,{className:"post-title",to:"/articles/"+t.fields.slug},r.a.createElement("label",null,t.fields.title)),r.a.createElement("p",{className:"post-text"},e.renderPara(t.fields.firstparagraph))):"articlesfeatured"==t.sys.contentType.sys.id?r.a.createElement("div",{className:"featured-container"},r.a.createElement("img",{className:"images",src:t.fields.images[0].fields.file.url}),r.a.createElement(f.b,{className:"post-title",to:"/featured/"+t.fields.slug},r.a.createElement("label",null,t.fields.title)),r.a.createElement("p",{className:"post-text"},e.renderPara(t.fields.firstparagraph))):void 0}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"landing-wrapper"},r.a.createElement("div",{className:"featured-wrapper"},this.renderFeatured()))}}]),a}(n.Component),g=(a(64),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){p.a.initialize("UA-174924337-1"),p.a.pageview(this.props.location.pathname)}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"about-column"},r.a.createElement("p",{className:"about-text"},"An Esoteric collection of articles and artwork with a spotlight on contemporary Southeast Asian music culture and the forces that provoke our works. The Southeast Asian independent music scene is like no other with barely any meddling from large multinational record labels, musicians have been produced with symbiotic ties with other visual creative mediums and their respective subcultures, this is what we hope to explore and archive."),r.a.createElement("p",{className:"about-text"},"Orbital will always be ad-free but we need support. Help assist us in developing more expansive projects and content for the site so we can keep providing you with the best in curated weirdness."),r.a.createElement("hr",{className:"hr"}),r.a.createElement("h3",{className:"column-header"},"Be A Contrubitor"),r.a.createElement("p",{className:"about-text"},"All content mediums wellcome -  Sounds, Photography, Articles or Events. Get in touch with us."),r.a.createElement("hr",{className:"hr"}),r.a.createElement("h3",{className:"column-header"},"Staff Writer Wanted"),r.a.createElement("p",{className:"about-text"},"Passionate about music and the arts? We would love to hear about you!"),r.a.createElement("hr",{className:"hr"})),r.a.createElement("div",{className:"team-column"},r.a.createElement("div",{className:"team-container"},r.a.createElement("label",{className:"team-name"},"Manish Dhadli"),r.a.createElement("label",{className:"team-role"},"Lead Editor"),r.a.createElement("p",{className:"team-text"},"Professionally, I am anything but a creative. After studying engineering and coming from a world that generally lacks bold expression. I would describe myself as a casual curator of weird and esoteric art. My appreciation of the Arts comes from largely personal interest, not a professional one. This, I feel, is the way forward for a vast majority of people when it comes to creative appreciation. As the arts can sometimes feel excluding to the casual observer, looked at as something needing participation to fully appreciate. With Orbital we hope to bring out and display for all the lesser known eccentricities of SEA music culture."),r.a.createElement("label",{className:"team-name"},"Amer-Tasveer"),r.a.createElement("label",{className:"team-role"},"Web Development Lead "),r.a.createElement("p",{className:"team-text"},"After working on a variety of commercial projects including start-ups, Tass decided that he would like to drive into the world of creative media. This new medium, he feels, is needed to balance the humdrum of the concrete world... and his web development portfolio. Thus, this is his dive into the meta.  "),r.a.createElement("label",{className:"team-name"},"Katheleen Lee"),r.a.createElement("label",{className:"team-role"},"Contributor"))))}}]),a}(n.Component)),E=(a(30),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={post:[],loading:!1,loaded:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){p.a.initialize("UA-174924337-1"),p.a.pageview(this.props.location.pathname),this.getPostData(),window.addEventListener("scroll",(function(){var e=document.getElementsByClassName("news-image");void 0!==e[0]&&(e[0].style.opacity=1);for(var t=window.pageYOffset,a=0;a<e.length;a++){console.log(e[a].offsetTop),t>=e[a].offsetTop-700&&(e[a].style.opacity=1)}}))}},{key:"getPostData",value:function(){var e=this;this.setState({loading:!0}),h.a.get("/api/article/post/art/"+this.props.match.params.slug).then((function(t){e.setState({post:t.data.items[0],loading:!1,loaded:!0}),console.log(e.state.post)}))}},{key:"FirstPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.firstparagraph)return null;if(e.fields.firstparagraph)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.firstparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.firstparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.firstparagraph)));if(0==this.state.loaded&&0==this.state.post.length)return null}}},{key:"SecondPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.secondparagraph)return null;if(e.fields.secondparagraph)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.secondparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.secondparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.secondparagraph)),r.a.createElement("div",null))}else if(0==this.state.loaded&&0==this.state.post.length)return null}},{key:"ThirdPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.thirdparagraph)return null;if(e.fields.thirdparagraph)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.thirdparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.thirdparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.thirdparagraph)))}else if(0==this.state.loaded&&0==this.state.post.length)return null}},{key:"FourthPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.fourthparagraph)return null;if(e.fields.fourthparagraph)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.fourthparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.fourthparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.fourthparagraph)))}else if(0==this.state.loaded&&0==this.state.post.length)return null}},{key:"FifthPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.fifthparagraph)return null;if(e.fields.fifthparagraph.content)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.fifthparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.fifthparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.fifthparagraph)))}else if(0==this.state.loaded&&0==this.state.post.length)return r.a.createElement("div",null,r.a.createElement("h1",null,"Loading"))}},{key:"renderLastImage",value:function(e){var t=0;return e.content.map((function(e,a){if(void 0==e.content[0]){if(++t>2)return r.a.createElement("img",{className:"last-image",src:e.data.target.fields.file.url})}else if(e.content[0].value)return null}))}},{key:"renderImage",value:function(e){var t=0;return e.content.map((function(e,a){if(void 0==e.content[0]){if(++t<=2)return r.a.createElement("img",{className:"news-image",src:e.data.target.fields.file.url})}else if(e.content[0].value)return null}))}},{key:"renderPara",value:function(e){return e.content.map((function(e,t){return void 0==e.content?null:e.content.map((function(e,t){return 0==e.marks.length?r.a.createElement("p",{className:"news-info"},e.value):"bold"==e.marks[0].type?r.a.createElement("p",{className:"news-info-bold"},e.value):void 0}))}))}},{key:"renderTitle",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length)return r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",{className:"article-header"},e.fields.title),r.a.createElement("div",{className:"icon-author-container"},r.a.createElement("i",{class:"las la-arrow-right"}),r.a.createElement("label",{className:"author-text"},"Written By ",e.fields.author)))}},{key:"render",value:function(){return r.a.createElement("div",{className:"post-wrapper"},this.renderTitle(),r.a.createElement("div",{class:"news-list"},this.FirstPara(),this.SecondPara(),this.ThirdPara(),this.FourthPara(),this.FifthPara()))}}]),a}(n.Component)),w=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={post:[],loading:!1,loaded:!1,quotes:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getPostData(),p.a.initialize("UA-174924337-1"),p.a.pageview(this.props.location.pathname),window.addEventListener("scroll",(function(){var e=document.getElementsByClassName("news-image");void 0!==e[0]&&(e[0].style.opacity=1);for(var t=window.pageYOffset,a=(window.height,0);a<e.length;a++){t>=e[a].offsetTop-700&&(e[a].style.opacity=1)}}))}},{key:"getPostData",value:function(){var e=this;this.setState({loading:!0}),h.a.get("/api/article/post/featured/"+this.props.match.params.slug).then((function(t){e.setState({post:t.data.items[0],loading:!1,loaded:!0})}))}},{key:"FirstPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.firstparagraph)return null;if(e.fields.firstparagraph)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.firstparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.firstparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.firstparagraph)));if(0==this.state.loaded&&0==this.state.post.length)return null}}},{key:"SecondPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.secondparagraph)return null;if(e.fields.secondparagraph)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.secondparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.secondparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.secondparagraph)),r.a.createElement("div",null))}else if(0==this.state.loaded&&0==this.state.post.length)return null}},{key:"ThirdPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.thirdparagraph)return null;if(e.fields.thirdparagraph)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.thirdparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.thirdparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.thirdparagraph)))}else if(0==this.state.loaded&&0==this.state.post.length)return null}},{key:"FourthPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.fourthparagraph)return null;if(e.fields.fourthparagraph)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.fourthparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.fourthparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.fourthparagraph)))}else if(0==this.state.loaded&&0==this.state.post.length)return null}},{key:"FifthPara",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length){if(void 0==e.fields.fifthparagraph)return null;if(e.fields.fifthparagraph.content)return r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.fifthparagraph)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.fifthparagraph)),r.a.createElement("div",null,this.renderLastImage(e.fields.fifthparagraph)))}else if(0==this.state.loaded&&0==this.state.post.length)return r.a.createElement("div",null,r.a.createElement("h1",null,"Loading"))}},{key:"renderLastImage",value:function(e){var t=0;return e.content.map((function(e,a){if(void 0==e.content[0]){if(++t>2)return r.a.createElement("img",{className:"last-image",src:e.data.target.fields.file.url})}else if(e.content[0].value)return null}))}},{key:"renderImage",value:function(e){var t=0;return e.content.map((function(e,a){if(void 0==e.content[0]){if(++t<=2)return r.a.createElement("img",{className:"news-image",src:e.data.target.fields.file.url})}else if(e.content[0].value)return null}))}},{key:"renderPara",value:function(e){return e.content.map((function(e,t){return void 0==e.content?null:e.content.map((function(e,t){return 0==e.marks.length?r.a.createElement("p",{className:"news-info"},e.value):"bold"==e.marks[0].type?r.a.createElement("p",{className:"news-info-bold"},e.value):void 0}))}))}},{key:"renderTitle",value:function(){var e=this.state.post;if(1==this.state.loaded&&0!==this.state.post.length)return r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",{className:"article-header"},e.fields.title),r.a.createElement("div",{className:"icon-author-container"},r.a.createElement("i",{class:"las la-arrow-right"}),r.a.createElement("label",{className:"author-text"},"Written By ",e.fields.author)))}},{key:"renderQuote",value:function(){var e=this.state.post;return 1==this.state.loaded&&0!==this.state.post.length?r.a.createElement("div",{class:"news-item"},r.a.createElement("div",{class:"news-image"},this.renderImage(e.fields.qoutes)),r.a.createElement("div",{class:"news-info"},this.renderPara(e.fields.qoutes))):0==this.state.loaded&&0==this.state.post.length?null:void 0}},{key:"render",value:function(){return r.a.createElement("div",{className:"post-wrapper"},this.renderTitle(),r.a.createElement("div",{class:"news-list"},this.renderQuote(),this.FirstPara(),this.SecondPara(),this.ThirdPara(),this.FourthPara(),this.FifthPara()))}}]),a}(n.Component),y=(a(65),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){p.a.initialize("UA-174924337-1"),p.a.pageview(this.props.location.pathname)}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"main-header-text"},"Get In Touch"),r.a.createElement("div",{className:"middle"},r.a.createElement("text",{className:"name-text"},"Email"),r.a.createElement("input",{className:"name",placeholder:"Eg. Username@123.com"}),r.a.createElement("text",{className:"name-text"},"Title"),r.a.createElement("input",{className:"name",placeholder:"Eg. Talks about collaborations"}),r.a.createElement("text",{className:"name-text"},"Message"),r.a.createElement("textarea",{className:"textarea",placeholder:"Type here..."}),r.a.createElement("button",{className:"submitbtn"},"Submit")))}}]),a}(n.Component)),b=(a(66),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={featured:[],loading:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getFeatured(),p.a.initialize("UA-174924337-1"),p.a.pageview(this.props.location.pathname)}},{key:"getFeatured",value:function(){var e=this;h.a.get("/api/article/post/featured/").then((function(t){e.setState({featured:t.data.items}),console.log(e.state.featured)}))}},{key:"renderPara",value:function(e){return e.content.map((function(e,t){return void 0==e.content[0]?null:e.content[0].value?e.content[0].value:void 0}))}},{key:"renderFeatured",value:function(){var e=this,t=this.state.featured;if(void 0!=t)return t.map((function(t,a){return r.a.createElement("div",{className:"featured-container"},r.a.createElement("img",{className:"images",src:t.fields.images[0].fields.file.url}),r.a.createElement(f.b,{className:"post-title",to:"/featured/"+t.fields.slug},r.a.createElement("label",null,t.fields.title)),r.a.createElement("p",{className:"post-text"},e.renderPara(t.fields.firstparagraph)))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"postlist-wrapper"},r.a.createElement("div",{className:"article-wrapper"},this.renderFeatured()))}}]),a}(n.Component)),N=(a(67),a(33)),k=a.n(N),P=a(1),O=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleScroll=n.handleScroll.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=document.getElementById("navbar");e.offsetTop;window.pageYOffset>=200?(e.classList.add("sticky"),e.classList.add("sticky-logo")):e.classList.remove("sticky")}},{key:"rendernav",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"top-container"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:k.a}))),r.a.createElement("div",{id:"navbar"},r.a.createElement("a",{href:"/"},"Home"),r.a.createElement("a",{href:"/featured"},"Featured"),r.a.createElement("a",{href:"/about"},"About Us"),r.a.createElement("a",{href:"/contact"},"Contact")))}},{key:"render",value:function(){return r.a.createElement(f.a,null,this.rendernav(),r.a.createElement(P.a,{path:"/",exact:!0,component:v}),r.a.createElement(P.a,{path:"/articles/:slug",exact:!0,component:E}),r.a.createElement(P.a,{path:"/featured/:slug",exact:!0,component:w}),r.a.createElement(P.a,{path:"/featured/",exact:!0,component:b}),r.a.createElement(P.a,{path:"/about",exact:!0,component:g}),r.a.createElement(P.a,{path:"/contact",exact:!0,component:y}))}}]),a}(n.Component),j=(a(68),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer-wrapper"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-link-container"},r.a.createElement("div",{className:"link-container"},r.a.createElement("a",{href:"/",className:"footer-link"},"Home"),r.a.createElement("a",{href:"/featured",className:"footer-link"},"Featured"),r.a.createElement("a",{href:"/about",className:"footer-link"},"About"),r.a.createElement("a",{href:"/contact",className:"footer-link"},"Contact"),r.a.createElement("div",{className:"copyright-container"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{class:"las la-copyright"})),r.a.createElement("label",{className:"copyright-text"},"Copyright 2020"))))))}}]),a}(n.Component)),x=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){p.a.initialize("UA-174924337-1")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(j,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.044a167a.chunk.js.map