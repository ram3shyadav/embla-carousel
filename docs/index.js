!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("EmblaCarousel",[],t):"object"==typeof exports?exports.EmblaCarousel=t():e.EmblaCarousel=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector1D=function(e){var t=e;function n(e){return t/=e,o}function r(e){return"number"==typeof e?e:e.get()}var o={add:function(e){return t+=r(e),o},divide:n,get:function(){return t},multiply:function(e){return t*=e,o},normalize:function(){return 0!==t&&n(t),o},set:function(e){return t=r(e),o},subtract:function(e){return t-=r(e),o}};return Object.freeze(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rectWidth=function(e){return e.getBoundingClientRect().width},t.map=function(e,t,n,r,o){return r+(e-t)/(n-t)*(o-r)},t.arrayFromCollection=function(e){return Array.prototype.slice.call(e)},t.debounce=function(e,t){var n={id:0};return function(){window.clearTimeout(n.id),n.id=window.setTimeout(e,t)||0}},t.roundToDecimals=function(e){var t=Math.pow(10,e);return function(e){return Math.round(e*t)/t}},t.groupArray=function(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},t.arrayKeys=function(e){return Object.keys(e).map(Number)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Limit=function(e){var t=e.min,n=e.max,r={min:n,max:t},o={min:t,max:n};function i(e){return e<t}function c(e){return e>n}function a(e){return i(e)?"min":c(e)?"max":""}var u={constrain:function(e){var t=a(e);return t?o[t]:e},loop:function(e){var t=a(e);return t?r[t]:e},max:n,min:t,reachedAny:function(e){return i(e)||c(e)},reachedMax:c,reachedMin:i};return Object.freeze(u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Counter=function e(t){var n=t.start,r=t.limit,o=t.loop,i=r.min,c=r.max,a=o?"loop":"constrain",u=d(n);function s(){return u}function l(e){return u=d(e),f}function d(e){return r[a](e)}var f={add:function e(t){if(0!==t){var n=t/Math.abs(t);return l(s()+n),e(t+-1*n)}return f},clone:function(){return e({start:s(),limit:r,loop:o})},get:s,max:c,min:i,set:l};return Object.freeze(f)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.Direction=function(e){var t=r.Vector1D(n(e));function n(e){return 0===e?0:e/Math.abs(e)}var o={get:t.get,set:function(e){var r=n(e.get());return 0!==r&&t.set(r),o}};return Object.freeze(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventStore=function(){var e=[],t={add:function(n,r,o){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.addEventListener(r,o,i),e.push((function(){return n.removeEventListener(r,o,i)})),t},removeAll:function(){return e.filter((function(e){return e()})),e.length=0,t}};return Object.freeze(t)}},function(e,t,n){e.exports=n(7)},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),i=n(26),c=n(5),a=n(27),u=n(1);function s(e){var t,n,s,l,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=i.EventDispatcher(),v=c.EventStore(),p=u.debounce(T,500),m=_,g=f.on,y=f.off,b=r({},a.defaultOptions,d),x=!1,h=0;function S(){if(!e)throw new Error("Missing root element 😢");var t=b.containerSelector,r=e.querySelector(t);if(!r)throw new Error("Missing container element 😢");n=e,s=r,l=u.arrayFromCollection(s.children),x=!0}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!x;if(h=window.innerWidth,S(),0!==l.length){if(b=r(b,e),t=o.Engine(n,s,l,b,f),v.add(window,"resize",p),l.forEach(P),t.translate.to(t.scrollBody.location),b.loop&&1===l.length)return O({loop:!1});b.draggable&&M(),b.loop&&t.slideLooper.loop(l),i&&(f.on("select",j),f.on("init",j),setTimeout((function(){return f.dispatch("init")}),0))}}function M(){var e=n.classList,r=b,o=r.draggingClass,i=r.draggableClass;t.dragHandler.addActivationEvents(),f.on("dragStart",(function(){return e.add(o)})),f.on("dragEnd",(function(){return e.remove(o)})),e.add(i)}function j(){var e=t,n=e.index,r=e.indexPrevious,o=e.indexGroups,i=b.selectedClass,c=o[r.get()],a=o[n.get()];c.forEach((function(e){return l[e].classList.remove(i)})),a.forEach((function(e){return l[e].classList.add(i)}))}function P(t,n){v.add(t,"focus",(function(){var t=Math.floor(n/b.slidesToScroll),r=n?t:n;e.scrollLeft=0,L(r)}),!0)}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(x){var n=t.index.get(),o=r({startIndex:n},e);z(),O(o)}}function z(){t.dragHandler.removeAllEvents(),t.animation.stop(),v.removeAll(),n.classList.remove(b.draggableClass),s.style.transform="",l.forEach((function(e){return e.style.left=""}))}function D(){z(),x=!1,t={},f.dispatch("destroy")}function T(){h!==window.innerWidth&&(h=window.innerWidth,_(),f.dispatch("resize"))}function w(){return t.indexGroups.map((function(e){return{slideIndexes:e,slideNodes:e.map((function(e){return l[e]}))}}))}function E(){var e=t.index.clone().add(1);t.scrollBody.useDefaultMass().useDefaultSpeed(),t.scrollTo.index(e.get(),-1)}function A(){var e=t.index.clone().add(-1);t.scrollBody.useDefaultMass().useDefaultSpeed(),t.scrollTo.index(e.get(),1)}function B(e){var n=t.scrollBy.distance(e);t.scrollBody.useDefaultMass().useDefaultSpeed(),t.scrollTo.distance(n,!1)}function L(e){t.scrollBody.useDefaultMass().useDefaultSpeed(),t.scrollTo.index(e,0)}function C(){var e=t.index;return b.loop||e.get()!==e.min}function V(){var e=t.index;return b.loop||e.get()!==e.max}function k(){return t.index.get()}function I(){return t.indexPrevious.get()}function F(){return t.scrollProgress.get()}function N(){return t.dragHandler.clickAllowed()}function H(){return s}function W(){return l}O(b);var K={canScrollNext:V,canScrollPrev:C,changeOptions:m,clickAllowed:N,containerNode:H,destroy:D,off:y,on:g,previousScrollSnap:I,scrollBy:B,scrollNext:E,scrollPrev:A,scrollProgress:F,scrollSnapList:w,scrollTo:L,selectedScrollSnap:k,slideNodes:W};return Object.freeze(K)}t.EmblaCarousel=s,t.default=s,e.exports=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(10),i=n(3),c=n(11),a=n(12),u=n(2),s=n(13),l=n(14),d=n(15),f=n(16),v=n(17),p=n(18),m=n(19),g=n(20),y=n(21),b=n(22),x=n(23),h=n(24),S=n(25),O=n(1),M=n(0);t.Engine=function(e,t,n,j,P){var _=j.align,z=j.startIndex,D=j.loop,T=j.speed,w=j.dragFree,E=j.slidesToScroll,A=j.containScroll,B=O.rectWidth(t),L=s.PxToPercent(B),C=L.totalPercent,V=O.arrayKeys(n),k=n.map(O.rectWidth).map(L.measure),I=O.groupArray(k,E).map((function(e){return e.reduce((function(e,t){return e+t}))})),F=O.arrayKeys(I),N=k.reduce((function(e,t){return e+t})),H=r.Alignment({align:_,viewSize:C}),W=y.ScrollSnap({snapSizes:I,alignment:H,loop:D}),K=v.ScrollContain({alignment:H,contentSize:N,slideIndexes:V,slidesToScroll:E,viewSize:C}),G=!D&&A,U=F.map(W.measure),q=K.snaps(U),R=G?q:U,X=O.groupArray(V,E),Y=K.indexes(U),J=R.length-1,Q=G?Y:X,Z=u.Limit({min:0,max:J}),$=i.Counter({limit:Z,start:z,loop:D}),ee=$.clone(),te=p.ScrollLimit({loop:D,contentSize:N}).measure(R),ne=o.Animation((function(){if(le.scrollBody.seek(ie).update(),se.pointerDown()||(D||le.scrollBounds.constrain(ie),le.scrollBody.settle(ie)&&le.animation.stop()),D){var e=le.scrollBody.direction.get();le.scrollLooper.loop(ce,e),le.slideLooper.loop(n)}var t=le.scrollBody.settle(ie);P.dispatch(t?"settle":"scroll"),le.translate.to(le.scrollBody.location),le.animation.proceed()})),re=R[$.get()],oe=M.Vector1D(re),ie=M.Vector1D(re),ce=[oe,ie],ae=l.ScrollBody({location:oe,speed:T,mass:1}),ue=x.ScrollTo({animation:ne,events:P,index:$,indexPrevious:ee,scrollTarget:b.ScrollTarget({align:_,contentSize:N,index:$,limit:te,loop:D,scrollSnaps:R,snapSizes:I,target:ie}),target:ie}),se=c.DragHandler({animation:ne,dragFree:w,dragTracker:a.DragTracker(L),element:e,events:P,index:$,limit:te,location:oe,loop:D,scrollBody:ae,scrollTo:ue,snapSizes:I,target:ie}),le={animation:ne,dragHandler:se,index:$,indexGroups:Q,indexPrevious:ee,scrollBody:ae,scrollBounds:d.ScrollBounds({animation:ne,limit:te,location:oe,scrollBody:ae}),scrollBy:f.ScrollBy({limit:te,loop:D,target:ie}),scrollLooper:m.ScrollLooper({contentSize:N,limit:te,location:oe,pxToPercent:L}),scrollProgress:g.ScrollProgress({limit:te,location:oe}),scrollTo:ue,slideLooper:h.SlideLooper({contentSize:N,location:oe,scrollSnaps:R,slideSizes:k,viewSize:C}),target:ie,translate:S.Translate(t)};return Object.freeze(le)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Alignment=function(e){var t=e.viewSize,n=e.align,r={start:function(e){return 0*e},center:function(e){return(t-e)/2},end:function(e){return t-e}},o={measure:function(e){return r[n](e)}};return Object.freeze(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Animation=function(e){var t=requestAnimationFrame.bind(window),n=cancelAnimationFrame.bind(window),r=0;function o(e,t){return function(){e===!!r&&t()}}function i(){r=t(e)}var c={proceed:o(!0,i),start:o(!1,i),stop:o(!0,(function(){n(r),r=0}))};return Object.freeze(c)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(5),i=n(0);t.DragHandler=function(e){var t=e.target,n=e.scrollBody,c=e.dragFree,a=e.animation,u=e.element,s=e.dragTracker,l=e.location,d=e.events,f=e.limit,v=["INPUT","SELECT","TEXTAREA"],p=i.Vector1D(0),m=i.Vector1D(0),g=i.Vector1D(0),y=o.EventStore(),b=o.EventStore(),x={mouse:2.5,touch:3.5},h={mouse:4,touch:7},S={mouse:12,touch:14},O={mouse:6,touch:5},M=!1,j=!1,P=!1,_=!1;function z(e){_="mousedown"===e.type;var r,o,i=t.get()-l.get(),c=Math.abs(i)>=2,f=_||!c,y=(r=e.target,o=r.nodeName||"",!(v.indexOf(o)>-1)),x=c||_&&y;_&&0!==e.button||(M=!0,s.pointerDown(e),g.set(t),t.set(l),n.useDefaultMass().useSpeed(80),function(){var e=_?document:u;b.add(e,"touchmove",D).add(e,"touchend",T).add(e,"mousemove",D).add(e,"mouseup",T)}(),a.start(),p.set(s.readPoint(e,"x")),m.set(s.readPoint(e,"y")),d.dispatch("dragStart"),f&&(P=!1),x&&e.preventDefault())}function D(n){if(!j&&!_){var r=s.readPoint(n,"x").get(),o=s.readPoint(n,"y").get(),i=Math.abs(r-p.get()),c=Math.abs(o-m.get());if(!(j=i>c)&&!P)return T()}var a=s.pointerMove(n),u=f.reachedAny(l.get()),d=!e.loop&&u?2:1;!P&&a&&(P=!0),t.add(a/d),n.preventDefault()}function T(){var o=s.pointerUp()*(c?h:x)[_?"mouse":"touch"],i=t.get()-g.get();Math.abs(i)>=.5&&!_&&(P=!0),_=!1,j=!1,M=!1,b.removeAll(),n.useSpeed((c?O:S)[_?"mouse":"touch"]),function(n){var o=e.scrollTo,i=e.snapSizes,a=e.index,u=Math.abs(n),s=i[a.get()]/2,l=f.reachedAny(t.get()+n);if(c||l||!(u>4&&u<s))o.distance(n,!c);else{var d=-1*r.Direction(n).get(),v=a.clone().add(d);o.index(v.get(),0)}}(o),d.dispatch("dragEnd")}function w(e){P&&e.preventDefault()}var E={addActivationEvents:function(){var e=u;y.add(e,"touchmove",(function(){})).add(e,"touchend",(function(){})).add(e,"touchstart",z).add(e,"mousedown",z).add(e,"touchcancel",T).add(e,"contextmenu",T).add(e,"click",w)},clickAllowed:function(){return!P},pointerDown:function(){return M},removeAllEvents:function(){y.removeAll(),b.removeAll()}};return Object.freeze(E)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.DragTracker=function(e){var t={x:"clientX",y:"clientY"},n=r.Vector1D(0),o=r.Vector1D(0),i=r.Vector1D(0),c=r.Vector1D(0),a=[],u=(new Date).getTime(),s=!1;function l(e,n){s=!e.touches;var r=t[n],o=s?e[r]:e.touches[0][r];return c.set(o)}var d={pointerDown:function(t){var r=l(t,"x");return n.set(r),i.set(r),e.measure(n.get())},pointerMove:function(t){var n=l(t,"x"),r=(new Date).getTime();return r-u>=10&&(a.push(n.get()),u=r),o.set(n).subtract(i),i.set(n),e.measure(o.get())},pointerUp:function(){var t=i.get(),n=s?5:4,r=a.slice(-n).map((function(e){return t-e})).sort((function(e,t){return Math.abs(e)<Math.abs(t)?1:-1}))[0];return i.set(r||0),a=[],e.measure(i.get())},readPoint:l};return Object.freeze(d)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PxToPercent=function(e){var t={measure:function(t){return t/e*100},totalPercent:100};return Object.freeze(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(1),i=n(0);t.ScrollBody=function(e){var t=e.location,n=e.speed,c=e.mass,a=o.roundToDecimals(2),u=i.Vector1D(0),s=i.Vector1D(0),l=i.Vector1D(0),d=r.Direction(0),f={speed:n,mass:c};function v(e){return f.speed=e,m}function p(e){return f.mass=e,m}var m={direction:d,location:t,seek:function(e){l.set(e).subtract(t);var n=l.get(),r=o.map(n,0,100,0,f.speed);return d.set(l),l.normalize().multiply(r).subtract(u),function(e){e.divide(f.mass),s.add(e)}(l),m},settle:function(e){var n=e.get()-t.get(),r=!a(n);return r&&t.set(e),r},update:function(){u.add(s),t.add(u),s.multiply(0)},useDefaultMass:function(){return p(c),m},useDefaultSpeed:function(){return v(n),m},useMass:p,useSpeed:v};return Object.freeze(m)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollBounds=function(e){var t=e.limit,n=e.location,r=e.scrollBody,o=e.animation,i=t.min,c=t.max,a=t.reachedMin,u=t.reachedMax,s=0,l={constrain:function(e){(function(e){return!s&&(a(n.get())?e.get()!==i:!!u(n.get())&&e.get()!==c)})(e)&&(s=window.setTimeout((function(){var n=t.constrain(e.get());e.set(n),r.useSpeed(10).useMass(3),o.start(),s=0}),50))}};return Object.freeze(l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollBy=function(e){var t=e.loop,n=e.limit,r=e.target,o=n.min,i=n.max,c=n.reachedMin,a=n.reachedMax,u=o-i,s={distance:function(e){var n=u*e;return t?n:function(e){var t=r.get()+e;return a(t)?i-r.get():c(t)?o-r.get():e}(n)}};return Object.freeze(s)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(1);t.ScrollContain=function(e){var t=e.alignment,n=e.contentSize,i=e.viewSize,c=e.slideIndexes,a=e.slidesToScroll,u=o.groupArray(c,a),s=n>i,l=r.Limit({min:-n+i,max:0});function d(e,t){return u.slice(e,t).reduce((function(e,t){return e.concat(t)}),[])}function f(e){var t=e[0],n=e[e.length-1],o=e.lastIndexOf(t)+1,i=e.indexOf(n);return r.Limit({min:o,max:i})}var v={indexes:function(e){if(!s)return[c];var t=f(e.map(l.constrain)),n=t.min,r=t.max,o=d(0,n),i=u.slice(n,r),a=d(r,e.length);return[o].concat(i.concat([a]))},snaps:function(e){if(!s)return[t.measure(n)];var r=e.map(l.constrain),o=f(r),i=o.min,c=o.max;return r.slice(i-1,c+1)}};return Object.freeze(v)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.ScrollLimit=function(e){var t=e.contentSize,n=e.loop,o={measure:function(e){var o=e[0],i=e[e.length-1],c=n?o-t:i,a=o;return r.Limit({min:c,max:a})}};return Object.freeze(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.ScrollLooper=function(e){var t=e.contentSize,n=e.location,o=e.limit,i=e.pxToPercent,c=o.min+i.measure(.1),a=o.max+i.measure(.1),u=r.Limit({min:c,max:a}),s=u.reachedMin,l=u.reachedMax,d={loop:function(e,r){if(function(e){return 1===e?l(n.get()):-1===e&&s(n.get())}(r)){var o=t*(-1*r);e.forEach((function(e){return e.add(o)}))}}};return Object.freeze(d)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollProgress=function(e){var t=e.location,n=e.limit,r=n.min,o=n.max,i=r-o,c={get:function(){return(t.get()-o)/i}};return Object.freeze(c)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(2);t.ScrollSnap=function(e){var t,n,i=e.snapSizes,c=e.alignment,a=e.loop,u=i.map(c.measure),s=(t=o.Limit({min:0,max:i.length-1}),n=r.Counter({limit:t,start:0,loop:a}),i.map((function(e,t){var r=n.set(t+1).get();return e+u[t]-u[r]}))),l={measure:function(e){return s.slice(0,e).reduce((function(e,t){return e-t}),u[0])}};return Object.freeze(l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollTarget=function(e){var t,n,r,o=e.loop,i=e.limit,c=e.scrollSnaps,a=e.contentSize,u=i.reachedMin,s=i.reachedMax,l=i.reachedAny,d=(t=e.align,n=e.snapSizes,r=e.index.clone(),n.reduce((function(e,o,i){var a=r.set(i).add("end"===t?1:0),u=c[i]-n[a.get()]/2,s=i?e[i-1].end:c[0];return e.concat([{start:s,end:u}])}),[]));function f(e,t){return Math.abs(e)<Math.abs(t)?e:t}var v={byDistance:function(t,n){var r=e.target,i=e.index,f=r.get()+t,v=function(e){for(;s(e);)e-=a;for(;u(e);)e+=a;var t=d.reduce((function(t,n,r){return e<=n.start&&e>n.end?r:t}),0);return{distance:e,index:t}}(f),p=!o&&l(f);if(p||!n){var m=i.min,g=i.max,y=s(f)?m:g;return{distance:t,index:p?y:v.index}}var b={distance:f,index:i.get()},x=0===t?b:v;return{distance:t+function(t){var n=t.distance,r=t.index,i=c[e.index.max],u=o&&n<i&&0===r?n+a:n;return c[r]-u}(x),index:x.index}},byIndex:function(t,n){var r=e.target.get(),i=c[t]-r,u={distance:i,index:t};if(o){var s=i,l=a+i,d=i-a;if(n&&1===e.index.max){var v=f(s,1===n?l:d);u.distance=Math.abs(v)*n}else u.distance=f(f(s,l),d)}return u}};return Object.freeze(v)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollTo=function(e){var t=e.index,n=e.scrollTarget,r=e.animation,o=e.indexPrevious,i=e.events,c=e.target;function a(e){var n=e.distance,a=e.index!==t.get();n&&(r.start(),c.add(n)),a&&(o.set(t.get()),t.set(e.index),i.dispatch("select"))}var u={distance:function(e,t){a(n.byDistance(e,t))},index:function(e,r){var o=t.clone().set(e);a(n.byIndex(o.get(),r))}};return Object.freeze(u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0);t.SlideLooper=function(e){var t,n,i,c=e.contentSize,a=e.viewSize,u=e.slideSizes,s=e.scrollSnaps,l=r.arrayKeys(u),d=l.slice().reverse(),f=(t=s[0]-1,n=p(t,d),i=m(t,n,0),g(n,i,1)).concat(function(){var e=p(a-s[0]-1,l),t=m(c,l,-a);return g(e,-t,0)}());function v(e,t){return e.reduce((function(e,t){return e-u[t]}),t)}function p(e,t){return t.reduce((function(t,n){return v(t,e)>0?t.concat([n]):t}),[])}function m(e,t,n){return t.reduce((function(t,n){var r=t+u[n];return r<e?r:t}),n)}function g(e,t,n){var r=e.slice().sort((function(e,t){return e-t}));return r.map((function(e,i){var a=e,u=c*(n?-1:0),s=c*(n?0:1),d=function(e,t,n){var r=l.length-1;return v(e.map((function(e){return(e+n)%r})),t)}(r.slice(0,i),t,n),f=o.Vector1D(-1),p=o.Vector1D(0);return{point:d,findTarget:function(e){var t=e>d?u:s;return p.set(0).set(t)},location:f,index:a}}))}var y={loop:function(t){var n=e.location;f.forEach((function(e){var r=e.findTarget,o=e.location,i=e.index,c=r(n.get());c.get()!==o.get()&&(t[i].style.left="".concat(c.get(),"%"),o.set(c))}))},loopPoints:f};return Object.freeze(y)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.Translate=function(e){var t=r.roundToDecimals(2),n=0,o={to:function(r){var o=t(r.get());n!==o&&(getComputedStyle(e).transform,e.style.transform="translate3d(".concat(o,"%,0px,0px)"),n=o)}};return Object.freeze(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventDispatcher=function(){var e={destroy:[],dragEnd:[],dragStart:[],init:[],resize:[],scroll:[],select:[],settle:[]},t={dispatch:function(n){return e[n].forEach((function(e){return e()})),t},off:function(n,r){return e[n]=e[n].filter((function(e){return e!==r})),t},on:function(n,r){return e[n]=e[n].concat([r]),t}};return Object.freeze(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=Object.freeze({align:"center",containScroll:!1,containerSelector:"*",dragFree:!1,draggable:!0,draggableClass:"is-draggable",draggingClass:"is-dragging",loop:!1,selectedClass:"is-selected",slidesToScroll:1,speed:10,startIndex:0})}])}));