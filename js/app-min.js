$(document).foundation(),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function($){var e="Close",t="BeforeClose",n="AfterClose",i="BeforeAppend",o="MarkupParse",r="Open",a="Change",s="mfp",l=".mfp",c="mfp-ready",p="mfp-removing",d="mfp-prevent-close",u,f=function(){},m=!!window.jQuery,g,v=$(window),h,C,y,w,b=function(e,t){u.ev.on(s+e+".mfp",t)},I=function(e,t,n,i){var o=document.createElement("div");return o.className="mfp-"+e,n&&(o.innerHTML=n),i?t&&t.appendChild(o):(o=$(o),t&&o.appendTo(t)),o},x=function(e,t){u.ev.triggerHandler(s+e,t),u.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),u.st.callbacks[e]&&u.st.callbacks[e].apply(u,$.isArray(t)?t:[t]))},k=function(e){return e===w&&u.currTemplate.closeBtn||(u.currTemplate.closeBtn=$(u.st.closeMarkup.replace("%title%",u.st.tClose)),w=e),u.currTemplate.closeBtn},T=function(){$.magnificPopup.instance||(u=new f,u.init(),$.magnificPopup.instance=u)},_=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};f.prototype={constructor:f,init:function(){var e=navigator.appVersion;u.isLowIE=u.isIE8=document.all&&!document.addEventListener,u.isAndroid=/android/gi.test(e),u.isIOS=/iphone|ipad|ipod/gi.test(e),u.supportsTransition=_(),u.probablyMobile=u.isAndroid||u.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),h=$(document),u.popupsCache={}},open:function(e){var t;if(!1===e.isObj){u.items=e.items.toArray(),u.index=0;var n=e.items,i;for(t=0;t<n.length;t++)if(i=n[t],i.parsed&&(i=i.el[0]),i===e.el[0]){u.index=t;break}}else u.items=$.isArray(e.items)?e.items:[e.items],u.index=e.index||0;if(u.isOpen)return void u.updateItemHTML();u.types=[],y="",e.mainEl&&e.mainEl.length?u.ev=e.mainEl.eq(0):u.ev=h,e.key?(u.popupsCache[e.key]||(u.popupsCache[e.key]={}),u.currTemplate=u.popupsCache[e.key]):u.currTemplate={},u.st=$.extend(!0,{},$.magnificPopup.defaults,e),u.fixedContentPos="auto"===u.st.fixedContentPos?!u.probablyMobile:u.st.fixedContentPos,u.st.modal&&(u.st.closeOnContentClick=!1,u.st.closeOnBgClick=!1,u.st.showCloseBtn=!1,u.st.enableEscapeKey=!1),u.bgOverlay||(u.bgOverlay=I("bg").on("click.mfp",function(){u.close()}),u.wrap=I("wrap").attr("tabindex",-1).on("click.mfp",function(e){u._checkIfClose(e.target)&&u.close()}),u.container=I("container",u.wrap)),u.contentContainer=I("content"),u.st.preloader&&(u.preloader=I("preloader",u.container,u.st.tLoading));var o=$.magnificPopup.modules;for(t=0;t<o.length;t++){var r=o[t];r=r.charAt(0).toUpperCase()+r.slice(1),u["init"+r].call(u)}x("BeforeOpen"),u.st.showCloseBtn&&(u.st.closeBtnInside?(b("MarkupParse",function(e,t,n,i){n.close_replaceWith=k(i.type)}),y+=" mfp-close-btn-in"):u.wrap.append(k())),u.st.alignTop&&(y+=" mfp-align-top"),u.fixedContentPos?u.wrap.css({overflow:u.st.overflowY,overflowX:"hidden",overflowY:u.st.overflowY}):u.wrap.css({top:v.scrollTop(),position:"absolute"}),(!1===u.st.fixedBgPos||"auto"===u.st.fixedBgPos&&!u.fixedContentPos)&&u.bgOverlay.css({height:h.height(),position:"absolute"}),u.st.enableEscapeKey&&h.on("keyup.mfp",function(e){27===e.keyCode&&u.close()}),v.on("resize.mfp",function(){u.updateSize()}),u.st.closeOnContentClick||(y+=" mfp-auto-cursor"),y&&u.wrap.addClass(y);var a=u.wH=v.height(),s={};if(u.fixedContentPos&&u._hasScrollBar(a)){var l=u._getScrollbarSize();l&&(s.marginRight=l)}u.fixedContentPos&&(u.isIE7?$("body, html").css("overflow","hidden"):s.overflow="hidden");var c=u.st.mainClass;return u.isIE7&&(c+=" mfp-ie7"),c&&u._addClassToMFP(c),u.updateItemHTML(),x("BuildControls"),$("html").css(s),u.bgOverlay.add(u.wrap).prependTo(u.st.prependTo||$(document.body)),u._lastFocusedEl=document.activeElement,setTimeout(function(){u.content?(u._addClassToMFP("mfp-ready"),u._setFocus()):u.bgOverlay.addClass("mfp-ready"),h.on("focusin.mfp",u._onFocusIn)},16),u.isOpen=!0,u.updateSize(a),x("Open"),e},close:function(){u.isOpen&&(x("BeforeClose"),u.isOpen=!1,u.st.removalDelay&&!u.isLowIE&&u.supportsTransition?(u._addClassToMFP("mfp-removing"),setTimeout(function(){u._close()},u.st.removalDelay)):u._close())},_close:function(){x("Close");var e="mfp-removing mfp-ready ";if(u.bgOverlay.detach(),u.wrap.detach(),u.container.empty(),u.st.mainClass&&(e+=u.st.mainClass+" "),u._removeClassFromMFP(e),u.fixedContentPos){var t={marginRight:""};u.isIE7?$("body, html").css("overflow",""):t.overflow="",$("html").css(t)}h.off("keyup.mfp focusin.mfp"),u.ev.off(".mfp"),u.wrap.attr("class","mfp-wrap").removeAttr("style"),u.bgOverlay.attr("class","mfp-bg"),u.container.attr("class","mfp-container"),!u.st.showCloseBtn||u.st.closeBtnInside&&!0!==u.currTemplate[u.currItem.type]||u.currTemplate.closeBtn&&u.currTemplate.closeBtn.detach(),u.st.autoFocusLast&&u._lastFocusedEl&&$(u._lastFocusedEl).focus(),u.currItem=null,u.content=null,u.currTemplate=null,u.prevHeight=0,x("AfterClose")},updateSize:function(e){if(u.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;u.wrap.css("height",n),u.wH=n}else u.wH=e||v.height();u.fixedContentPos||u.wrap.css("height",u.wH),x("Resize")},updateItemHTML:function(){var e=u.items[u.index];u.contentContainer.detach(),u.content&&u.content.detach(),e.parsed||(e=u.parseEl(u.index));var t=e.type;if(x("BeforeChange",[u.currItem?u.currItem.type:"",t]),u.currItem=e,!u.currTemplate[t]){var n=!!u.st[t]&&u.st[t].markup;x("FirstMarkupParse",n),u.currTemplate[t]=!n||$(n)}C&&C!==e.type&&u.container.removeClass("mfp-"+C+"-holder");var i=u["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,u.currTemplate[t]);u.appendContent(i,t),e.preloaded=!0,x("Change",e),C=e.type,u.container.prepend(u.contentContainer),x("AfterChange")},appendContent:function(e,t){u.content=e,e?u.st.showCloseBtn&&u.st.closeBtnInside&&!0===u.currTemplate[t]?u.content.find(".mfp-close").length||u.content.append(k()):u.content=e:u.content="",x("BeforeAppend"),u.container.addClass("mfp-"+t+"-holder"),u.contentContainer.append(u.content)},parseEl:function(e){var t=u.items[e],n;if(t.tagName?t={el:$(t)}:(n=t.type,t={data:t,src:t.src}),t.el){for(var i=u.types,o=0;o<i.length;o++)if(t.el.hasClass("mfp-"+i[o])){n=i[o];break}t.src=t.el.attr("data-mfp-src"),t.src||(t.src=t.el.attr("href"))}return t.type=n||u.st.type||"inline",t.index=e,t.parsed=!0,u.items[e]=t,x("ElementParse",t),u.items[e]},addGroup:function(e,t){var n=function(n){n.mfpEl=this,u._openClick(n,e,t)};t||(t={});var i="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(i).on(i,n)):(t.isObj=!1,t.delegate?e.off(i).on(i,t.delegate,n):(t.items=e,e.off(i).on(i,n)))},_openClick:function(e,t,n){if((void 0!==n.midClick?n.midClick:$.magnificPopup.defaults.midClick)||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var i=void 0!==n.disableOn?n.disableOn:$.magnificPopup.defaults.disableOn;if(i)if($.isFunction(i)){if(!i.call(u))return!0}else if(v.width()<i)return!0;e.type&&(e.preventDefault(),u.isOpen&&e.stopPropagation()),n.el=$(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),u.open(n)}},updateStatus:function(e,t){if(u.preloader){g!==e&&u.container.removeClass("mfp-s-"+g),t||"loading"!==e||(t=u.st.tLoading);var n={status:e,text:t};x("UpdateStatus",n),e=n.status,t=n.text,u.preloader.html(t),u.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),u.container.addClass("mfp-s-"+e),g=e}},_checkIfClose:function(e){if(!$(e).hasClass("mfp-prevent-close")){var t=u.st.closeOnContentClick,n=u.st.closeOnBgClick;if(t&&n)return!0;if(!u.content||$(e).hasClass("mfp-close")||u.preloader&&e===u.preloader[0])return!0;if(e===u.content[0]||$.contains(u.content[0],e)){if(t)return!0}else if(n&&$.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){u.bgOverlay.addClass(e),u.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),u.wrap.removeClass(e)},_hasScrollBar:function(e){return(u.isIE7?h.height():document.body.scrollHeight)>(e||v.height())},_setFocus:function(){(u.st.focus?u.content.find(u.st.focus).eq(0):u.wrap).focus()},_onFocusIn:function(e){if(e.target!==u.wrap[0]&&!$.contains(u.wrap[0],e.target))return u._setFocus(),!1},_parseMarkup:function(e,t,n){var i;n.data&&(t=$.extend(n.data,t)),x("MarkupParse",[e,t,n]),$.each(t,function(t,n){if(void 0===n||!1===n)return!0;if(i=t.split("_"),i.length>1){var o=e.find(".mfp-"+i[0]);if(o.length>0){var r=i[1];"replaceWith"===r?o[0]!==n[0]&&o.replaceWith(n):"img"===r?o.is("img")?o.attr("src",n):o.replaceWith($("<img>").attr("src",n).attr("class",o.attr("class"))):o.attr(i[1],n)}}else e.find(".mfp-"+t).html(n)})},_getScrollbarSize:function(){if(void 0===u.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),u.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return u.scrollbarSize}},$.magnificPopup={instance:null,proto:f.prototype,modules:[],open:function(e,t){return T(),e=e?$.extend(!0,{},e):{},e.isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return $.magnificPopup.instance&&$.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&($.magnificPopup.defaults[e]=t.options),$.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},$.fn.magnificPopup=function(e){T();var t=$(this);if("string"==typeof e)if("open"===e){var n,i=m?t.data("magnificPopup"):t[0].magnificPopup,o=parseInt(arguments[1],10)||0;i.items?n=i.items[o]:(n=t,i.delegate&&(n=n.find(i.delegate)),n=n.eq(o)),u._openClick({mfpEl:n},t,i)}else u.isOpen&&u[e].apply(u,Array.prototype.slice.call(arguments,1));else e=$.extend(!0,{},e),m?t.data("magnificPopup",e):t[0].magnificPopup=e,u.addGroup(t,e);return t};var P="inline",S,E,O,z=function(){O&&(E.after(O.addClass(S)).detach(),O=null)};$.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){u.types.push("inline"),b("Close.inline",function(){z()})},getInline:function(e,t){if(z(),e.src){var n=u.st.inline,i=$(e.src);if(i.length){var o=i[0].parentNode;o&&o.tagName&&(E||(S=n.hiddenClass,E=I(S),S="mfp-"+S),O=i.after(E).detach().removeClass(S)),u.updateStatus("ready")}else u.updateStatus("error",n.tNotFound),i=$("<div>");return e.inlineElement=i,i}return u.updateStatus("ready"),u._parseMarkup(t,{},e),t}}});var M="ajax",B,A=function(){B&&$(document.body).removeClass(B)},L=function(){A(),u.req&&u.req.abort()};$.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){u.types.push("ajax"),B=u.st.ajax.cursor,b("Close.ajax",L),b("BeforeChange.ajax",L)},getAjax:function(e){B&&$(document.body).addClass(B),u.updateStatus("loading");var t=$.extend({url:e.src,success:function(t,n,i){var o={data:t,xhr:i};x("ParseAjax",o),u.appendContent($(o.data),"ajax"),e.finished=!0,A(),u._setFocus(),setTimeout(function(){u.wrap.addClass("mfp-ready")},16),u.updateStatus("ready"),x("AjaxContentAdded")},error:function(){A(),e.finished=e.loadError=!0,u.updateStatus("error",u.st.ajax.tError.replace("%url%",e.src))}},u.st.ajax.settings);return u.req=$.ajax(t),""}}});var H,F=function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=u.st.image.titleSrc;if(t){if($.isFunction(t))return t.call(u,e);if(e.el)return e.el.attr(t)||""}return""};$.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=u.st.image,t=".image";u.types.push("image"),b("Open"+t,function(){"image"===u.currItem.type&&e.cursor&&$(document.body).addClass(e.cursor)}),b("Close"+t,function(){e.cursor&&$(document.body).removeClass(e.cursor),v.off("resize.mfp")}),b("Resize"+t,u.resizeImage),u.isLowIE&&b("AfterChange",u.resizeImage)},resizeImage:function(){var e=u.currItem;if(e&&e.img&&u.st.image.verticalFit){var t=0;u.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",u.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,H&&clearInterval(H),e.isCheckingImgSize=!1,x("ImageHasSize",e),e.imgHidden&&(u.content&&u.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var t=0,n=e.img[0],i=function(o){H&&clearInterval(H),H=setInterval(function(){if(n.naturalWidth>0)return void u._onImageHasSize(e);t>200&&clearInterval(H),t++,3===t?i(10):40===t?i(50):100===t&&i(500)},o)};i(1)},getImage:function(e,t){var n=0,i=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===u.currItem&&(u._onImageHasSize(e),u.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,x("ImageLoadComplete")):(n++,n<200?setTimeout(i,100):o()))},o=function(){e&&(e.img.off(".mfploader"),e===u.currItem&&(u._onImageHasSize(e),u.updateStatus("error",r.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},r=u.st.image,a=t.find(".mfp-img");if(a.length){var s=document.createElement("img");s.className="mfp-img",e.el&&e.el.find("img").length&&(s.alt=e.el.find("img").attr("alt")),e.img=$(s).on("load.mfploader",i).on("error.mfploader",o),s.src=e.src,a.is("img")&&(e.img=e.img.clone()),s=e.img[0],s.naturalWidth>0?e.hasSize=!0:s.width||(e.hasSize=!1)}return u._parseMarkup(t,{title:F(e),img_replaceWith:e.img},e),u.resizeImage(),e.hasSize?(H&&clearInterval(H),e.loadError?(t.addClass("mfp-loading"),u.updateStatus("error",r.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),u.updateStatus("ready")),t):(u.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),u.findImageSize(e)),t)}}});var j,N=function(){return void 0===j&&(j=void 0!==document.createElement("p").style.MozTransform),j};$.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=u.st.zoom,t=".zoom",n;if(e.enabled&&u.supportsTransition){var i=e.duration,o=function(t){var n=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+e.duration/1e3+"s "+e.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,n.css(o),n},r=function(){u.content.css("visibility","visible")},a,s;b("BuildControls"+t,function(){if(u._allowZoom()){if(clearTimeout(a),u.content.css("visibility","hidden"),!(n=u._getItemToZoom()))return void r();s=o(n),s.css(u._getOffset()),u.wrap.append(s),a=setTimeout(function(){s.css(u._getOffset(!0)),a=setTimeout(function(){r(),setTimeout(function(){s.remove(),n=s=null,x("ZoomAnimationEnded")},16)},i)},16)}}),b("BeforeClose"+t,function(){if(u._allowZoom()){if(clearTimeout(a),u.st.removalDelay=i,!n){if(!(n=u._getItemToZoom()))return;s=o(n)}s.css(u._getOffset(!0)),u.wrap.append(s),u.content.css("visibility","hidden"),setTimeout(function(){s.css(u._getOffset())},16)}}),b("Close"+t,function(){u._allowZoom()&&(r(),s&&s.remove(),n=null)})}},_allowZoom:function(){return"image"===u.currItem.type},_getItemToZoom:function(){return!!u.currItem.hasSize&&u.currItem.img},_getOffset:function(e){var t;t=e?u.currItem.img:u.st.zoom.opener(u.currItem.el||u.currItem);var n=t.offset(),i=parseInt(t.css("padding-top"),10),o=parseInt(t.css("padding-bottom"),10);n.top-=$(window).scrollTop()-i;var r={width:t.width(),height:(m?t.innerHeight():t[0].offsetHeight)-o-i};return N()?r["-moz-transform"]=r.transform="translate("+n.left+"px,"+n.top+"px)":(r.left=n.left,r.top=n.top),r}}});var W="iframe",Z="//about:blank",q=function(e){if(u.currTemplate.iframe){var t=u.currTemplate.iframe.find("iframe");t.length&&(e||(t[0].src=Z),u.isIE8&&t.css("display",e?"block":"none"))}};$.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){u.types.push("iframe"),b("BeforeChange",function(e,t,n){t!==n&&("iframe"===t?q():"iframe"===n&&q(!0))}),b("Close.iframe",function(){q()})},getIframe:function(e,t){var n=e.src,i=u.st.iframe;$.each(i.patterns,function(){if(n.indexOf(this.index)>-1)return this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1});var o={};return i.srcAction&&(o[i.srcAction]=n),u._parseMarkup(t,o,e),u.updateStatus("ready"),t}}});var R=function(e){var t=u.items.length;return e>t-1?e-t:e<0?t+e:e},K=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};$.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var e=u.st.gallery,t=".mfp-gallery";if(u.direction=!0,!e||!e.enabled)return!1;y+=" mfp-gallery",b("Open"+t,function(){e.navigateByImgClick&&u.wrap.on("click"+t,".mfp-img",function(){if(u.items.length>1)return u.next(),!1}),h.on("keydown"+t,function(e){37===e.keyCode?u.prev():39===e.keyCode&&u.next()})}),b("UpdateStatus"+t,function(e,t){t.text&&(t.text=K(t.text,u.currItem.index,u.items.length))}),b("MarkupParse"+t,function(t,n,i,o){var r=u.items.length;i.counter=r>1?K(e.tCounter,o.index,r):""}),b("BuildControls"+t,function(){if(u.items.length>1&&e.arrows&&!u.arrowLeft){var t=e.arrowMarkup,n=u.arrowLeft=$(t.replace(/%title%/gi,e.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),i=u.arrowRight=$(t.replace(/%title%/gi,e.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close");n.click(function(){u.prev()}),i.click(function(){u.next()}),u.container.append(n.add(i))}}),b("Change"+t,function(){u._preloadTimeout&&clearTimeout(u._preloadTimeout),u._preloadTimeout=setTimeout(function(){u.preloadNearbyImages(),u._preloadTimeout=null},16)}),b("Close"+t,function(){h.off(t),u.wrap.off("click"+t),u.arrowRight=u.arrowLeft=null})},next:function(){u.direction=!0,u.index=R(u.index+1),u.updateItemHTML()},prev:function(){u.direction=!1,u.index=R(u.index-1),u.updateItemHTML()},goTo:function(e){u.direction=e>=u.index,u.index=e,u.updateItemHTML()},preloadNearbyImages:function(){var e=u.st.gallery.preload,t=Math.min(e[0],u.items.length),n=Math.min(e[1],u.items.length),i;for(i=1;i<=(u.direction?n:t);i++)u._preloadItem(u.index+i);for(i=1;i<=(u.direction?t:n);i++)u._preloadItem(u.index-i)},_preloadItem:function(e){if(e=R(e),!u.items[e].preloaded){var t=u.items[e];t.parsed||(t=u.parseEl(e)),x("LazyLoad",t),"image"===t.type&&(t.img=$('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,x("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0}}}});var D="retina";$.magnificPopup.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=u.st.retina,t=e.ratio;t=isNaN(t)?t():t,t>1&&(b("ImageHasSize.retina",function(e,n){n.img.css({"max-width":n.img[0].naturalWidth/t,width:"100%"})}),b("ElementParse.retina",function(n,i){i.src=e.replaceSrc(i,t)}))}}}}),T()});