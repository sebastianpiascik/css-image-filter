webpackJsonp([1],{HO5I:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=(s("Jmt5"),s("pFYg")),r=s.n(i),n=s("W3Iv"),o=s.n(n),l={name:"Main",data:function(){return{grayscale:0,sepia:0,saturate:1,hueRotate:0,invert:0,brightness:1,contrast:1,blur:0,suffix:{hueRotate:"deg",blur:"px"}}},computed:{filters:function(){var t=this;return{filter:o()(this._data).filter(function(t){return"object"!==r()(t[1])}).map(function(e){return e[0].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+"("+e[1]+(t.suffix[e[0]]||"")+")"}).join(" ")}}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"app row align-items-center justify-content-center"},[a("div",{staticClass:"app__image col-md-8"},[a("img",{staticClass:"img img-responsive",style:t.filters,attrs:{src:s("dZ/S")}})]),t._v(" "),a("div",{staticClass:"app__filters col-md-12 mt-5"},[a("div",{staticClass:"row filters__fiter"},[a("div",{staticClass:"col-md-4"},[a("strong",[t._v("Grayscale ("+t._s(t.grayscale)+")")])]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.grayscale,expression:"grayscale"}],attrs:{type:"range",max:"1",min:"0",step:"0.01"},domProps:{value:t.grayscale},on:{__r:function(e){t.grayscale=e.target.value}}})])]),t._v(" "),a("div",{staticClass:"row filters__fiter"},[a("div",{staticClass:"col-md-4"},[a("strong",[t._v("Sepia ("+t._s(t.sepia)+")")])]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sepia,expression:"sepia"}],attrs:{type:"range",max:"1",min:"0",step:"0.01"},domProps:{value:t.sepia},on:{__r:function(e){t.sepia=e.target.value}}})])]),t._v(" "),a("div",{staticClass:"row filters__fiter"},[a("div",{staticClass:"col-md-4"},[a("strong",[t._v("Saturate ("+t._s(t.saturate)+")")])]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.saturate,expression:"saturate"}],attrs:{type:"range",max:"1",min:"0",step:"0.01"},domProps:{value:t.saturate},on:{__r:function(e){t.saturate=e.target.value}}})])]),t._v(" "),a("div",{staticClass:"row filters__fiter"},[a("div",{staticClass:"col-md-4"},[a("strong",[t._v("Hue Rotate ("+t._s(t.hueRotate)+" deg)")])]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.hueRotate,expression:"hueRotate"}],attrs:{type:"range",max:"360",min:"0",step:"1"},domProps:{value:t.hueRotate},on:{__r:function(e){t.hueRotate=e.target.value}}})])]),t._v(" "),a("div",{staticClass:"row filters__fiter"},[a("div",{staticClass:"col-md-4"},[a("strong",[t._v("Invert ("+t._s(t.invert)+")")])]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.invert,expression:"invert"}],attrs:{type:"range",max:"1",min:"0",step:"0.01"},domProps:{value:t.invert},on:{__r:function(e){t.invert=e.target.value}}})])]),t._v(" "),a("div",{staticClass:"row filters__fiter"},[a("div",{staticClass:"col-md-4"},[a("strong",[t._v("Brightness ("+t._s(t.brightness)+")")])]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.brightness,expression:"brightness"}],attrs:{type:"range",max:"3",min:"0",step:"0.01"},domProps:{value:t.brightness},on:{__r:function(e){t.brightness=e.target.value}}})])]),t._v(" "),a("div",{staticClass:"row filters__fiter"},[a("div",{staticClass:"col-md-4"},[a("strong",[t._v("Contrast ("+t._s(t.contrast)+")")])]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contrast,expression:"contrast"}],attrs:{type:"range",max:"1",min:"0",step:"0.01"},domProps:{value:t.contrast},on:{__r:function(e){t.contrast=e.target.value}}})])]),t._v(" "),a("div",{staticClass:"row filters__fiter"},[a("div",{staticClass:"col-md-4"},[a("strong",[t._v("Blur ("+t._s(t.blur)+"px)")])]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.blur,expression:"blur"}],attrs:{type:"range",max:"50",min:"0",step:"0.1"},domProps:{value:t.blur},on:{__r:function(e){t.blur=e.target.value}}})])])])])])},staticRenderFns:[]};var v={components:{Main:s("VU/8")(l,c,!1,function(t){s("HO5I")},null,null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Main")],1)},staticRenderFns:[]};var d=s("VU/8")(v,u,!1,function(t){s("vQkD")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:d},template:"<App/>"})},"dZ/S":function(t,e,s){t.exports=s.p+"static/img/bg.417b6c7.jpg"},vQkD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3c21700039a863e7fea1.js.map