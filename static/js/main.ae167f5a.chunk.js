(this.webpackJsonpreact_movie_app_2019=this.webpackJsonpreact_movie_app_2019||[]).push([[0],{20:function(e,a,t){e.exports=t(47)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(13),i=t.n(s),c=t(3),m=t.n(c),o=t(14),l=t(15),u=t(18),d=t(16),v=t(19),p=t(17),_=t.n(p),g=t(2),y=t.n(g);t(45);function f(e){e.id;var a=e.year,t=e.title,r=e.summary,s=e.poster,i=e.genres;return n.a.createElement("div",{className:"movie"},n.a.createElement("img",{src:s,alt:t,title:t}),n.a.createElement("div",{className:"movie__data"},n.a.createElement("h3",{className:"movies__title"},t),n.a.createElement("h5",{className:"movies__year"},a),n.a.createElement("ul",{className:"movie__genres"},i.map((function(e,a){return n.a.createElement("li",{key:a,className:"genres__genre"},e)}))),n.a.createElement("p",{className:"movies__summary"},r.slice(0,180),"...")))}f.prototype={id:y.a.number.isRequired,year:y.a.number.isRequired,title:y.a.string.isRequired,summary:y.a.string.isRequired,poster:y.a.string.isRequired,genres:y.a.arrayOf(y.a.string).isRequired};var E=f,h=(t(46),function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={isLoading:!0,movies:[]},t.getMovies=function(){var e,a;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.awrap(_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by(rating)"));case 2:e=r.sent,a=e.data.data.movies,t.setState({movies:a,isLoading:!1});case 5:case"end":return r.stop()}}))},t}return Object(v.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return n.a.createElement("div",null,a?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader__text"},"Loading...")):n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(n.a.Component));i.a.render(n.a.createElement(h,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ae167f5a.chunk.js.map