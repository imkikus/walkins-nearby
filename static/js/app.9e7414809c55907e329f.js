webpackJsonp([0],[,,,function(t,e,a){a(17);var i=a(0)(a(10),a(23),null,null);t.exports=i.exports},function(t,e,a){a(15);var i=a(0)(a(11),a(21),null,null);t.exports=i.exports},function(t,e,a){a(18);var i=a(0)(a(12),a(24),null,null);t.exports=i.exports},function(t,e,a){a(16);var i=a(0)(a(13),a(22),null,null);t.exports=i.exports},,,,function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1),n=a.n(i);e.default={computed:{jobsList:function(){return this.$root.$data.temp},isDataOver:function(){return this.$root.$data.isDataOver}},methods:{takeroute:function(t){this.$router.push("/detail/"+t),console.log(t)},preventDetail:function(t){t.stopPropagation()},onInfinite:function(){var t=this;setTimeout(function(){t.$root.$data.isDataOver?(console.log("Data is over"),t.$refs.infiniteLoading.$emit("$InfiniteLoading:complete")):(t.$root.$emit("get-next-data"),t.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded"))},1500)}},components:{InfiniteLoading:n.a},updated:function(){0==this.isDataOver&&this.$refs.infiniteLoading.$emit("$InfiniteLoading:reset"),console.log("updated")}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{param:this.$route.params.jobId,maplat:"",maplong:"",url:""}},computed:{current:function(){return this.$root.$data.temp[this.param]},geo:function(){}},watch:{current:function(t,e){console.log(t),this.getlatlong()},geo:function(){this.url="geo:"+this.current.companyName+"?q="+this.maplat+","+this.maplong+"("+this.current.companyName+",Provided By App Browzer)"}},methods:{getlatlong:function(){var t=this;this.$http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+this.current.companyName+","+this.current.workLocation+"&key=AIzaSyCYvnTorY23mtCZNzQLpLxE2GdhuYBKMcM").then(function(e){t.maplat=e.body.results[0].geometry.location.lat,t.maplong=e.body.results[0].geometry.location.lng,t.initMap()},function(t){console.log("error")})},initMap:function(){var t={zoom:15,center:new google.maps.LatLng(this.maplat,this.maplong)},e=document.getElementById("map"),a=new google.maps.Map(e,t);new google.maps.Marker({position:new google.maps.LatLng(this.maplat,this.maplong),map:a,title:this.current.companyName})}},updated:function(){this.initMap()},created:function(){this.current=this.$root.$data.temp[this.param],this.$root.$data.redirectFromDetail=!0,this.getlatlong()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(19),n=a.n(i);e.default={data:function(){return{isActive:!0,crossIsVisible:!1,counter:0,currentSearchTerm:"",initialText:!1}},methods:{debounceSearch:n.a.debounce(function(t){this.$root.$data.isDataOver=!1,0!=t.target.value.length?(console.log("The length of search : "+t.target.value.length),this.$root.$emit("get-query-data",t.target.value)):(console.log("The length of search bar : "+t.target.value.length),this.$root.$emit("get-query-data",""))},500),expandSearch:function(){document.querySelector(".tabbed-nav span").style.width="100vw",document.querySelector(".tabbed-nav input").focus(),this.counter=0,setTimeout(function(){document.querySelector(".tabbed-nav .fa-arrow-left").style.opacity=1},100)},collapseSearch:function(){document.querySelector(".tabbed-nav input").value.length>0&&(document.querySelector(".tabbed-nav .fa-times").classList.toggle("app-hidden"),document.querySelector(".tabbed-nav .fa-search").classList.toggle("app-hidden")),document.querySelector(".tabbed-nav span").style.width=0,document.querySelector(".tabbed-nav .fa-arrow-left").style.opacity=0,document.querySelector(".tabbed-nav input").value="";var t=this;this.initialText&&setTimeout(function(){t.$root.$emit("get-query-data","")},500),this.initialText=!1},inputKeyUp:function(){document.querySelector(".tabbed-nav input").value.length>0&&0==this.counter?(document.querySelector(".tabbed-nav .fa-times").classList.remove("app-hidden"),document.querySelector(".tabbed-nav .fa-search").classList.add("app-hidden"),this.counter=1):0==document.querySelector(".tabbed-nav input").value.length&&(document.querySelector(".tabbed-nav .fa-times").classList.add("app-hidden"),document.querySelector(".tabbed-nav .fa-search").classList.remove("app-hidden"),this.counter=0)},clearSearch:function(){document.querySelector(".tabbed-nav input").value="",document.querySelector(".tabbed-nav .fa-times").classList.add("app-hidden"),document.querySelector(".tabbed-nav .fa-search").classList.remove("app-hidden"),this.counter=0,this.$root.$emit("get-query-data","")}},created:function(){console.log("created"),console.log(this.$root.$data.redirectFromDetail)},updated:function(){console.log("updated")},mounted:function(){console.log("mounted"),this.$root.$data.currentSearchTerm.length>0&&1==this.$root.$data.redirectFromDetail&&(console.log("inside loop"),this.expandSearch(),document.querySelector(".tabbed-nav .fa-times").classList.toggle("app-hidden"),document.querySelector(".tabbed-nav .fa-search").classList.toggle("app-hidden"),console.log("current search term is"+this.$root.$data.currentSearchTerm),document.querySelector(".tabbed-nav input").value=this.$root.$data.currentSearchTerm,this.$root.$data.redirectFromDetail=!1)},destroyed:function(){console.log("setting current search term"),this.$root.$data.currentSearchTerm=document.querySelector(".tabbed-nav input").value}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(9),n=a(3),o=a.n(n),s=a(8),r=a(7),c=a(4),l=a.n(c),d=a(6),u=a.n(d),p=a(5),g=a.n(p),v=a(1),h=a.n(v);i.a.use(s.a),i.a.use(r.a);var m=[{path:"/",component:u.a,children:[{path:"/",component:l.a}]},{path:"/detail/:jobId",component:g.a},{path:"*",redirect:"/"}],f=new s.a({routes:m,mode:"history"});new i.a({el:"#app",render:function(t){return t(o.a)},router:f,data:{temp:[],lat:"",long:"",page:1,isDataOver:!1,query:"",complete:!0,redirectFromDetail:!1,currentSearchTerm:"",isDataLoadedInitially:!1},methods:{getData:function(){var t=this,e=this;e.$http.get("https://walkin.asiatrotter.org/api/v1/nearby?lat=12.9716&lng=77.5946&radius=15&query="+this.query+"&limit=10&page="+this.page+"&categoryId=1&city=").then(function(a){if(0==a.data.length)t.isDataOver=!0,document.querySelector(".infinite-status-prompt").innerHTML="No results found";else if(a.data.length>0&&a.data.length<10){for(var i=0;i<a.data.length;i++)a.data[i].distance=Math.round(a.data[i].distance).toFixed(2),e.temp.push(a.data[i]);t.isDataOver=!0,t.isDataLoadedInitially=!0,document.querySelector(".infinite-status-prompt").innerHTML="No more results to show"}else{for(var i=0;i<a.data.length;i++)a.data[i].distance=Math.round(a.data[i].distance).toFixed(2),e.temp.push(a.data[i]);t.isDataOver=!1,t.isDataLoadedInitially=!0}},function(e){console.log("error"),t.isDataOver=!0})},getlocation:function(){var t=this;navigator.geolocation.getCurrentPosition(t.success,t.error)},success:function(t){this.lat=t.coords.latitude,this.long=t.coords.longitude,this.getData(),console.log("NOTE : Google Api Working On Secure Origin , Hence Data Is Served")},error:function(t){console.log("NOTE : Google Api Not Working On Secure Origin , Hence Data Not Served"),console.log(t.code,t.message)}},created:function(){this.getlocation(),this.$on("get-next-data",function(){this.page++,console.log("current page : "+this.page),1==this.isDataLoadedInitially&&this.getData()}),this.$on("get-query-data",function(t){this.query=t,""==this.query?this.page=1:this.page="",console.log("On function called"),console.log("current query : "+this.query),this.temp=[],1==this.isDataLoadedInitially&&this.getData()})},components:{InfiniteLoading:h.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj43MjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTU6MDI6MTMgMjI6MDI6MzU8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy4zLjE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+ChTTdgYAAAF3SURBVHgB7dtBCsIwFIRh69o7eAhdiQdw53U9gFsP4dqt4LK+QANF6Dgp1FbyCyXCG2nz8aKQ1tWKFwIIIIAAAggggAACCCCAQNUCbdte0lE1wtDkO5xnjOkAqQ/1gQOSgbMYpHX/Yn/9vltKR3HeXWS2oj55aTYgA+cVsz83TXOfXGFpJxj4zsnLKo2POA5Lu+6fXA84ghkccISAKNE54AgBUaJzwBECokTngCMERInOAUcIiBKdA44QEKUaOqcR85elhBMBtdklPz9XMfaXNiXnHrVh9q84JTA5WwxUE05CKgbKsrWMxUCxhk+BcwVICNSGJCh0qYafeS1gVEECyRAwInQSSIaAEaGTQDIEjAidBJIhYEToJJAMASNCJ4FkCBgROgkkQ8CI/Esnjb6rYRh8jSSkCKk7I+lJ1/2cT7oWb7l+nXVBwNiZvM2JUzCVaaMDy43/a/TZP5DA6ePk9x0SOBmEEQEEEEAAAQQQQAABBBCoVOANecdGRmb5/CMAAAAASUVORK5CYII="},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"listview"}},[t._l(t.jobsList,function(e,i){return a("div",{staticClass:"list",on:{click:function(e){t.takeroute(i)}}},[a("div",{staticClass:"list-left"},[a("div",{staticClass:"list-favicon-job"},[a("i",{staticClass:"fa fa-suitcase"}),t._v(" "),a("p",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.title))])]),t._v(" "),a("div",{staticClass:"list-favicon-job"},[a("i",{staticClass:"fa fa-industry"}),t._v(" "),a("p",[t._v(t._s(e.companyName))])]),t._v(" "),""!=e.phone?a("div",{staticClass:"list-favicon-job"},[a("i",{staticClass:"fa fa-phone"}),t._v(" "),a("p",[t._v(t._s(e.phone.substring(0,20).match(/[\d, ]/g).join("")))])]):a("div",{staticClass:"list-favicon-job"},[a("i",{staticClass:"fa fa-phone"}),t._v(" "),a("p",[t._v("N/A")])])]),t._v(" "),a("div",{staticClass:"list-right"},[a("span",{staticClass:"distanceInfo"},[a("i",{staticClass:"fa fa-map-marker"}),a("span",[t._v(t._s(e.distance)+" kms")])]),t._v(" "),a("a",{attrs:{href:e.source},on:{click:t.preventDetail}},[a("button",{staticClass:"hvr-grow-shadow"},[t._v("Apply")])])])])}),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{"on-infinite":t.onInfinite,distance:0,spinner:"spiral"}},[a("span",{slot:"no-more"},[t._v("\n\t\t  No More results to show\n\t\t")]),t._v(" "),a("span",{slot:"no-results"},[t._v("\n\t\t  No Results Found\n\t\t")])])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-main"}},[a("div",{staticClass:"fixed-part"},[a("div",{staticClass:"header"},[a("div",{staticClass:"tabbed-navs"},[a("div",{staticClass:"tabbed-nav"},[a("p",[t._v("Current Walkins")]),t._v(" "),a("span",[a("i",{staticClass:"fa fa-arrow-left",on:{click:t.collapseSearch}}),t._v(" "),a("input",{attrs:{type:"text",placeholder:"Search"},on:{keyup:t.inputKeyUp,input:t.debounceSearch}}),t._v(" "),a("i",{staticClass:"fa fa-search",on:{click:t.expandSearch}}),t._v(" "),a("i",{staticClass:"fa fa-times app-hidden",on:{click:t.clearSearch}})])])])])]),t._v(" "),a("transition",{attrs:{appear:"",name:"fade"}},[a("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{appear:"",name:"fade"}},[a("router-view")],1)],1)},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"detail-bar"},[i("router-link",{attrs:{to:"/",replace:""}},[i("button",[i("img",{attrs:{src:a(20)}})])]),t._v(" "),i("p",[t._v(t._s(t.current.title))])],1),t._v(" "),i("a",{staticClass:"geo-link",attrs:{href:t.url}},[t._v(" Get Directions")]),t._v(" "),i("div",{attrs:{id:"map"}}),t._v(" "),i("div",{attrs:{id:"detail-info"}},[i("div",{staticClass:"detail-info-container"},[i("div",{staticClass:"detail-apply"},[i("a",{attrs:{href:t.current.source}},[i("button",{staticClass:"hvr-grow-shadow"},[t._v("Apply")])])]),t._v(" "),i("div",{staticClass:"detail-title detail-div"},[i("h1",{staticClass:"left-border"},[t._v("Title : ")]),t._v(" "),i("p",[t._v(" "+t._s(t.current.title))])]),t._v(" "),i("div",{staticClass:"detail-companyName detail-div"},[i("h1",{staticClass:"left-border"},[t._v("Company Name :  ")]),t._v(" "),i("p",[t._v(" "+t._s(t.current.companyName))])]),t._v(" "),i("div",{staticClass:"detail-description detail-div"},[i("h1",{staticClass:"left-border"},[t._v("Job Description :  ")]),t._v(" "),i("p",[t._v(" "+t._s(t.current.jobDescription))])]),t._v(" "),i("div",{staticClass:"detail-website detail-div"},[i("h1",{staticClass:"left-border"},[t._v("Website :  ")]),t._v(" "),""!=t.current.website?i("p",[t._v(" "+t._s(t.current.website))]):i("p",[t._v("N/A")])]),t._v(" "),i("div",{staticClass:"detail-experience detail-div"},[i("h1",{staticClass:"left-border"},[t._v("Experience :  ")]),t._v(" "),""!=t.current.experience?i("p",[t._v(" "+t._s(t.current.experience))]):i("p",[t._v("N/A")])]),t._v(" "),i("div",{staticClass:"detail-qualification detail-div"},[i("h1",{staticClass:"left-border"},[t._v("Qualification :  ")]),t._v(" "),i("p",[t._v(" "+t._s(t.current.qualification))])]),t._v(" "),i("div",{staticClass:"detail-salary detail-div"},[i("h1",{staticClass:"left-border"},[t._v("Salary :  ")]),t._v(" "),""!=t.current.phone?i("p",[t._v(" "+t._s(t.current.salary))]):i("p",[t._v("N/A")])]),t._v(" "),i("div",{staticClass:"detail-phone detail-div"},[i("h1",{staticClass:"left-border"},[t._v("Phone : ")]),t._v(" "),""!=t.current.phone?i("p",[t._v(t._s(t.current.phone.substring(0,20).match(/[\d, ]/g).join("")))]):i("p",[t._v("N/A")])]),t._v(" "),i("div",{staticClass:"detail-apply"},[i("a",{attrs:{href:t.current.source}},[i("button",{staticClass:"hvr-grow-shadow"},[t._v("Apply")])])])])])])},staticRenderFns:[]}},,,function(t,e){}],[14]);
//# sourceMappingURL=app.9e7414809c55907e329f.js.map