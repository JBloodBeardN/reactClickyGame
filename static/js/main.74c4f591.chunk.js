(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),c=r.n(o),s=(r(15),r(6)),i=r(3),l=r(4),m=r(7),u=r(5),d=r(8);var p=function(e){return a.a.createElement("div",{onClick:e.compareSelection,className:"col-md-3 col-sm-4 col-xs-6"},a.a.createElement("img",{alt:"placeholder",src:e.href}))},S=function(e){function t(){var e,r;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={topScore:0,currentScore:0,images:["https://via.placeholder.com/200x200?text=firstImage","https://via.placeholder.com/200x200?text=secondImage","https://via.placeholder.com/200x200?text=thirdImage","https://via.placeholder.com/200x200?text=fourthImage"],selectedImages:[]},r.setTopScore=function(){r.state.currentScore===r.state.topScore&&r.setState({topScore:r.state.currentScore+1})},r.iterateCurrentScore=function(e){r.setState({currentScore:r.state.currentScore+1}),e()},r.resetCurrentScoreAndEmptySelectedImagesArray=function(){r.setState({currentScore:0}),r.setState({selectedImages:[]})},r.setRandomOrder=function(){var e=r.state.images.map(function(e){return{index:Math.random(),image:e}}).sort(function(e,t){return e.index-t.index});e=e.map(function(e){return e.image}),r.setState({images:e})},r.compareSelection=function(e){if(console.log(e.target),console.log(r.state.selectedImages),r.state.selectedImages.indexOf(e.target.src)){r.setTopScore();var t=[e.target.src].concat(Object(s.a)(r.state.selectedImages));r.setState({currentScore:r.state.currentScore+1,selectedImages:t})}else r.resetCurrentScoreAndEmptySelectedImagesArray(),r.setRandomOrder()},r.componentDidMount=function(){console.log("componentDidMount")},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"TopScore: ",this.state.topScore),a.a.createElement("h2",null,"User Score: ",this.state.currentScore),a.a.createElement("div",{className:"row"},this.state.images.map(function(t){return a.a.createElement(p,{compareSelection:e.compareSelection,href:t})})))}}]),t}(a.a.Component);var h=function(){return a.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,r){e.exports=r(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.74c4f591.chunk.js.map