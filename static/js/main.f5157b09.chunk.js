(this["webpackJsonprandom-video"]=this["webpackJsonprandom-video"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/search.33f0a46d.svg"},23:function(e,a,t){e.exports=t.p+"static/media/plane.838c07c7.svg"},24:function(e,a,t){e.exports=t.p+"static/media/tree.299111ad.svg"},25:function(e,a,t){e.exports=t.p+"static/media/monitor.fc934c15.svg"},26:function(e,a,t){e.exports=t.p+"static/media/gaming.89938ec0.svg"},27:function(e,a,t){e.exports=t.p+"static/media/sport.58a419f8.svg"},28:function(e,a,t){e.exports=t.p+"static/media/cooking.a0a9754b.svg"},29:function(e,a,t){e.exports=t.p+"static/media/video.c7f46783.svg"},30:function(e,a,t){e.exports=t.p+"static/media/news.95d865b6.svg"},31:function(e,a,t){e.exports=t.p+"static/media/relax.2b46b137.svg"},32:function(e,a,t){e.exports=t.p+"static/media/lion.14f20f49.svg"},34:function(e,a,t){e.exports=t.p+"static/media/vidLogo.849da0dd.svg"},36:function(e,a,t){e.exports=t(66)},42:function(e,a,t){},43:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(7),s=t.n(r),l=t(12),i=t.n(l),o=t(21),m=t(3),u=t(4),d=t(6),p=t(5),h=(t(42),t(22)),v=t.n(h),f=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={searchValue:""},e.handleChange=function(a){e.setState({searchValue:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.handleFormSubmission(e.state.searchValue)},e}return Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search topic for video",onChange:this.handleChange}),c.a.createElement("button",{type:"submit",className:"search-button"},c.a.createElement("img",{src:v.a,alt:"search",className:"search-logo"}))))}}]),t}(c.a.Component),g=t(10),E=(t(43),t(23)),N=t.n(E),b=t(24),k=t.n(b),C=t(25),w=t.n(C),x=t(26),y=t.n(x),S=t(27),O=t.n(S),j=t(28),V=t.n(j),R=t(29),B=t.n(R),F=t(30),L=t.n(F),I=t(31),A=t.n(I),D=t(32),z=t.n(D),J=["travel","nature","technology","gaming","fitness"],W=["cooking","entertainment","news","relaxing","wildlife"],M=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={searchVal:""},e.handleClick=function(a){e.setState({searchVal:a},(function(){e.props.onButtonClick(e.state.searchVal),console.log(e.state.searchVal)}))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g.a,{indicators:!1,interval:5e3,pause:"hover"},c.a.createElement(g.a.Item,null,c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{id:"travel",className:"preset travel",onClick:function(){return e.handleClick(J[0])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:N.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"Travel")),c.a.createElement("button",{id:"nature",className:"preset nature",onClick:function(){return e.handleClick(J[1])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:k.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"Nature")),c.a.createElement("button",{id:"technology",className:"preset tech",onClick:function(){return e.handleClick(J[2])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:w.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"Technology")),c.a.createElement("button",{id:"gaming",className:"preset gaming",onClick:function(){return e.handleClick(J[3])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:y.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"Gaming")),c.a.createElement("button",{id:"fitness",className:"preset fitness",onClick:function(){return e.handleClick(J[4])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:O.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"Fitness")))),c.a.createElement(g.a.Item,null,c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{className:"preset cooking",onClick:function(){return e.handleClick(W[0])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:V.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"Cooking")),c.a.createElement("button",{className:"preset entertainment",onClick:function(){return e.handleClick(W[1])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:B.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"Entertainment")),c.a.createElement("button",{className:"preset news",onClick:function(){return e.handleClick(W[2])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:L.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"News")),c.a.createElement("button",{className:"preset relax",onClick:function(){return e.handleClick(W[3])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:A.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"Relax")),c.a.createElement("button",{className:"preset wildlife",onClick:function(){return e.handleClick(W[4])}},c.a.createElement("div",{className:"opac"}),c.a.createElement("img",{src:z.a,alt:"",className:"icon"}),c.a.createElement("p",{className:"heading"},"Wildlife")))))}}]),t}(c.a.Component),T=t(33),U=(t(46),function(e){var a=e.video;if(!a)return c.a.createElement("div",null);var t="https://www.youtube.com/embed/".concat(a.id.videoId);return c.a.createElement("div",null,c.a.createElement(T.a,{id:"video",url:t,className:"video-player",frameBorder:"0",allowFullScreen:"allowFullScreen"}))}),Y=t(34),q=t.n(Y),G=(t(47),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("img",{src:q.a,alt:"Random Vidz",className:"logo"}),c.a.createElement("p",{className:"title"},"RandomVidz"))}),H=t(35),K=t.n(H).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),P=(t(65),"AIzaSyDsJWs8BO_xyW5FKPkYvDD7nafEYdCB-Hw"),_=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={videoList:[],video:null},e.getRandom=function(){return Math.floor(50*Math.random())},e.handleSubmit=function(){var a=Object(o.a)(i.a.mark((function a(t){var n,c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,K.get("/search",{params:{part:"snippet",maxResults:50,key:P,q:t,regionCode:"US",relevanceLanguage:"en"}});case 2:n=a.sent,e.setState({videoList:n.data.items}),c=e.getRandom(),e.setState({video:e.state.videoList[c]});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state.video;return c.a.createElement("div",{className:"app"},c.a.createElement(G,null),c.a.createElement(f,{handleFormSubmission:this.handleSubmit}),c.a.createElement(M,{onButtonClick:this.handleSubmit}),c.a.createElement(U,{video:e}))}}]),t}(c.a.Component);s.a.render(c.a.createElement(_,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f5157b09.chunk.js.map