!function(){"use strict";var a={913:function(){try{self["workbox:core:6.4.1"]&&_()}catch(a){}},550:function(){try{self["workbox:expiration:6.4.1"]&&_()}catch(a){}},977:function(){try{self["workbox:precaching:6.4.1"]&&_()}catch(a){}},80:function(){try{self["workbox:routing:6.4.1"]&&_()}catch(a){}},873:function(){try{self["workbox:strategies:6.4.1"]&&_()}catch(a){}}},b={};function c(d){var e=b[d];if(void 0!==e)return e.exports;var f=b[d]={exports:{}},g=!0;try{a[d](f,f.exports,c),g=!1}finally{g&&delete b[d]}return f.exports}!function(){c(913);class a extends Error{constructor(b,d){const e=((a,...b)=>{let c=a;return b.length>0&&(c+=` :: ${JSON.stringify(b)}`),c})(b,d);super(e),this.name=b,this.details=d}}const f=new Set(),g={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},h=a=>[g.prefix,a,g.suffix].filter(a=>a&&a.length>0).join("-"),i=a=>{for(const b of Object.keys(g))a(b)},j={updateDetails:a=>{i(b=>{"string"==typeof a[b]&&(g[b]=a[b])})},getGoogleAnalyticsName:a=>a||h(g.googleAnalytics),getPrecacheName:a=>a||h(g.precache),getPrefix:()=>g.prefix,getRuntimeName:a=>a||h(g.runtime),getSuffix:()=>g.suffix};function k(a,b){const c=new URL(a);for(const d of b)c.searchParams.delete(d);return c.href}async function l(a,b,c,d){const e=k(b.url,c);if(b.url===e)return a.match(b,d);const f=Object.assign(Object.assign({},d),{ignoreSearch:!0}),g=await a.keys(b,f);for(const h of g){const i=k(h.url,c);if(e===i)return a.match(h,d)}}let m;function n(a){a.then(()=>{})}async function o(){for(const a of f)await a()}const p=a=>{const b=new URL(String(a),location.href);return b.href.replace(new RegExp(`^${location.origin}`),"")};function q(a){return new Promise(b=>setTimeout(b,a))}function r(a,b){const c=b();return a.waitUntil(c),c}async function s(b,c){let d=null;if(b.url){const e=new URL(b.url);d=e.origin}if(d!==self.location.origin)throw new a("cross-origin-copy-response",{origin:d});const f=b.clone(),g={headers:new Headers(f.headers),status:f.status,statusText:f.statusText},h=c?c(g):g,i=!function(){if(void 0===m){const a=new Response("");if("body"in a)try{new Response(a.body),m=!0}catch(b){m=!1}m=!1}return m}()?await f.blob():f.body;return new Response(i,h)}const t=(a,b)=>b.some(b=>a instanceof b);let u,v;const w=new WeakMap(),x=new WeakMap(),y=new WeakMap(),z=new WeakMap(),A=new WeakMap();let B={get(a,b,c){if(a instanceof IDBTransaction){if("done"===b)return x.get(a);if("objectStoreNames"===b)return a.objectStoreNames||y.get(a);if("store"===b)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return C(a[b])},set(a,b,c){return a[b]=c,!0},has(a,b){return a instanceof IDBTransaction&&("done"===b||"store"===b)||b in a}};function C(a){var b,c;if(a instanceof IDBRequest)return(function(a){const b=new Promise((b,c)=>{const d=()=>{a.removeEventListener("success",e),a.removeEventListener("error",f)},e=()=>{b(C(a.result)),d()},f=()=>{c(a.error),d()};a.addEventListener("success",e),a.addEventListener("error",f)});return b.then(b=>{b instanceof IDBCursor&&w.set(b,a)}).catch(()=>{}),A.set(b,a),b})(a);if(z.has(a))return z.get(a);const d="function"==typeof(b=a)?(c=b)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(v||(v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(c)?function(...a){return c.apply(D(this),a),C(w.get(this))}:function(...a){return C(c.apply(D(this),a))}:function(a,...b){const d=c.call(D(this),a,...b);return y.set(d,a.sort?a.sort():[a]),C(d)}:(b instanceof IDBTransaction&&function(a){if(!x.has(a)){const b=new Promise((b,c)=>{const d=()=>{a.removeEventListener("complete",e),a.removeEventListener("error",f),a.removeEventListener("abort",f)},e=()=>{b(),d()},f=()=>{c(a.error||new DOMException("AbortError","AbortError")),d()};a.addEventListener("complete",e),a.addEventListener("error",f),a.addEventListener("abort",f)});x.set(a,b)}}(b),t(b,u||(u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(b,B):b;return d!==a&&(z.set(a,d),A.set(d,a)),d}const D=a=>A.get(a),E=["get","getKey","getAll","getAllKeys","count"],F=["put","add","delete","clear"],G=new Map();function H(a,b){if(a instanceof IDBDatabase&&!(b in a)&&"string"==typeof b){if(G.get(b))return G.get(b);const c=b.replace(/FromIndex$/,""),d=b!==c,e=F.includes(c);if(c in(d?IDBIndex:IDBObjectStore).prototype&&(e||E.includes(c))){const f=async function(a,...b){const f=this.transaction(a,e?"readwrite":"readonly");let g=f.store;return d&&(g=g.index(b.shift())),(await Promise.all([g[c](...b),e&&f.done,]))[0]};return G.set(b,f),f}}}(function(a){B=a(B)})(a=>({...a,get:(b,c,d)=>H(b,c)||a.get(b,c,d),has:(b,c)=>!!H(b,c)||a.has(b,c)})),c(550);const I="cache-entries",J=a=>{const b=new URL(a,location.href);return b.hash="",b.href};class K{constructor(L,M={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=M.maxEntries,this._maxAgeSeconds=M.maxAgeSeconds,this._matchOptions=M.matchOptions,this._cacheName=L,this._timestampModel=new class{constructor(N){this._db=null,this._cacheName=N}_upgradeDb(O){const P=O.createObjectStore(I,{keyPath:"id"});P.createIndex("cacheName","cacheName",{unique:!1}),P.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(Q){this._upgradeDb(Q),this._cacheName&&(function(a,{blocked:b}={}){const c=indexedDB.deleteDatabase(a);return b&&c.addEventListener("blocked",()=>b()),C(c).then(()=>void 0)})(this._cacheName)}async setTimestamp(R,S){R=J(R);const T={url:R,timestamp:S,cacheName:this._cacheName,id:this._getId(R)},U=await this.getDb(),V=U.transaction(I,"readwrite",{durability:"relaxed"});await V.store.put(T),await V.done}async getTimestamp(W){const X=await this.getDb(),Y=await X.get(I,this._getId(W));return null==Y?void 0:Y.timestamp}async expireEntries(Z,$){const _=await this.getDb();let aa=await _.transaction(I).store.index("timestamp").openCursor(null,"prev");const ba=[];let ca=0;for(;aa;){const da=aa.value;da.cacheName===this._cacheName&&(Z&&da.timestamp<Z||$&&ca>=$?ba.push(aa.value):ca++),aa=await aa.continue()}const ea=[];for(const fa of ba)await _.delete(I,fa.id),ea.push(fa.url);return ea}_getId(ga){return this._cacheName+"|"+J(ga)}async getDb(){return this._db||(this._db=await function(a,b,{blocked:c,upgrade:d,blocking:e,terminated:f}={}){const g=indexedDB.open(a,1),h=C(g);return d&&g.addEventListener("upgradeneeded",a=>{d(C(g.result),a.oldVersion,a.newVersion,C(g.transaction))}),c&&g.addEventListener("blocked",()=>c()),h.then(a=>{f&&a.addEventListener("close",()=>f()),e&&a.addEventListener("versionchange",()=>e())}).catch(()=>{}),h}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}(L)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;const ha=this._maxAgeSeconds?Date.now()-1000*this._maxAgeSeconds:0,ia=await this._timestampModel.expireEntries(ha,this._maxEntries),ja=await self.caches.open(this._cacheName);for(const ka of ia)await ja.delete(ka,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,n(this.expireEntries()))}async updateTimestamp(la){await this._timestampModel.setTimestamp(la,Date.now())}async isURLExpired(ma){if(!this._maxAgeSeconds)return!1;{const na=await this._timestampModel.getTimestamp(ma),oa=Date.now()-1000*this._maxAgeSeconds;return void 0===na||na<oa}}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class pa{constructor(qa={}){this.cachedResponseWillBeUsed=async({event:a,request:b,cacheName:c,cachedResponse:d})=>{if(!d)return null;const e=this._isResponseDateFresh(d),f=this._getCacheExpiration(c);n(f.expireEntries());const g=f.updateTimestamp(b.url);if(a)try{a.waitUntil(g)}catch(h){}return e?d:null},this.cacheDidUpdate=async({cacheName:a,request:b})=>{const c=this._getCacheExpiration(a);await c.updateTimestamp(b.url),await c.expireEntries()},this._config=qa,this._maxAgeSeconds=qa.maxAgeSeconds,this._cacheExpirations=new Map(),qa.purgeOnQuotaError&&(function(a){f.add(a)})(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(ra){if(ra===j.getRuntimeName())throw new a("expire-custom-caches-only");let sa=this._cacheExpirations.get(ra);return sa||(sa=new K(ra,this._config),this._cacheExpirations.set(ra,sa)),sa}_isResponseDateFresh(ta){if(!this._maxAgeSeconds)return!0;const ua=this._getDateHeaderTimestamp(ta);if(null===ua)return!0;const va=Date.now();return ua>=va-1000*this._maxAgeSeconds}_getDateHeaderTimestamp(wa){if(!wa.headers.has("date"))return null;const xa=wa.headers.get("date"),ya=new Date(xa),za=ya.getTime();return isNaN(za)?null:za}async deleteCacheAndMetadata(){for(const[Aa,Ba]of this._cacheExpirations)await self.caches.delete(Aa),await Ba.delete();this._cacheExpirations=new Map()}}function Ca(a){return"string"==typeof a?new Request(a):a}c(873);class Da{constructor(Ea,Fa){for(const Ga of(this._cacheKeys={},Object.assign(this,Fa),this.event=Fa.event,this._strategy=Ea,this._handlerDeferred=new class{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}(),this._extendLifetimePromises=[],this._plugins=[...Ea.plugins],this._pluginStateMap=new Map(),this._plugins))this._pluginStateMap.set(Ga,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(Ha){const{event:Ia}=this;let Ja=Ca(Ha);if("navigate"===Ja.mode&&Ia instanceof FetchEvent&&Ia.preloadResponse){const Ka=await Ia.preloadResponse;if(Ka)return Ka}const La=this.hasCallback("fetchDidFail")?Ja.clone():null;try{for(const Ma of this.iterateCallbacks("requestWillFetch"))Ja=await Ma({request:Ja.clone(),event:Ia})}catch(Na){if(Na instanceof Error)throw new a("plugin-error-request-will-fetch",{thrownErrorMessage:Na.message})}const Oa=Ja.clone();try{let Pa;for(const Qa of(Pa=await fetch(Ja,"navigate"===Ja.mode?void 0:this._strategy.fetchOptions),this.iterateCallbacks("fetchDidSucceed")))Pa=await Qa({event:Ia,request:Oa,response:Pa});return Pa}catch(Ra){throw La&&await this.runCallbacks("fetchDidFail",{error:Ra,event:Ia,originalRequest:La.clone(),request:Oa.clone()}),Ra}}async fetchAndCachePut(Sa){const Ta=await this.fetch(Sa),Ua=Ta.clone();return this.waitUntil(this.cachePut(Sa,Ua)),Ta}async cacheMatch(Va){const Wa=Ca(Va);let Xa;const{cacheName:Ya,matchOptions:Za}=this._strategy,$a=await this.getCacheKey(Wa,"read"),_a=Object.assign(Object.assign({},Za),{cacheName:Ya});for(const ab of(Xa=await caches.match($a,_a),this.iterateCallbacks("cachedResponseWillBeUsed")))Xa=await ab({cacheName:Ya,matchOptions:Za,cachedResponse:Xa,request:$a,event:this.event})||void 0;return Xa}async cachePut(bb,cb){const db=Ca(bb);await q(0);const eb=await this.getCacheKey(db,"write");if(!cb)throw new a("cache-put-with-no-response",{url:p(eb.url)});const fb=await this._ensureResponseSafeToCache(cb);if(!fb)return!1;const{cacheName:gb,matchOptions:hb}=this._strategy,ib=await self.caches.open(gb),jb=this.hasCallback("cacheDidUpdate"),kb=jb?await l(ib,eb.clone(),["__WB_REVISION__"],hb):null;try{await ib.put(eb,jb?fb.clone():fb)}catch(lb){if(lb instanceof Error)throw"QuotaExceededError"===lb.name&&await o(),lb}for(const mb of this.iterateCallbacks("cacheDidUpdate"))await mb({cacheName:gb,oldResponse:kb,newResponse:fb.clone(),request:eb,event:this.event});return!0}async getCacheKey(nb,ob){const pb=`${nb.url} | ${ob}`;if(!this._cacheKeys[pb]){let qb=nb;for(const rb of this.iterateCallbacks("cacheKeyWillBeUsed"))qb=Ca(await rb({mode:ob,request:qb,event:this.event,params:this.params}));this._cacheKeys[pb]=qb}return this._cacheKeys[pb]}hasCallback(sb){for(const tb of this._strategy.plugins)if(sb in tb)return!0;return!1}async runCallbacks(ub,vb){for(const wb of this.iterateCallbacks(ub))await wb(vb)}*iterateCallbacks(xb){for(const yb of this._strategy.plugins)if("function"==typeof yb[xb]){const zb=this._pluginStateMap.get(yb),Ab=a=>{const b=Object.assign(Object.assign({},a),{state:zb});return yb[xb](b)};yield Ab}}waitUntil(Bb){return this._extendLifetimePromises.push(Bb),Bb}async doneWaiting(){let Cb;for(;Cb=this._extendLifetimePromises.shift();)await Cb}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(Db){let Eb=Db,Fb=!1;for(const Gb of this.iterateCallbacks("cacheWillUpdate"))if(Fb=!0,!(Eb=await Gb({request:this.request,response:Eb,event:this.event})||void 0))break;return!Fb&&Eb&&200!==Eb.status&&(Eb=void 0),Eb}}class Hb{constructor(Ib={}){this.cacheName=j.getRuntimeName(Ib.cacheName),this.plugins=Ib.plugins||[],this.fetchOptions=Ib.fetchOptions,this.matchOptions=Ib.matchOptions}handle(Jb){const[Kb]=this.handleAll(Jb);return Kb}handleAll(Lb){Lb instanceof FetchEvent&&(Lb={event:Lb,request:Lb.request});const Mb=Lb.event,Nb="string"==typeof Lb.request?new Request(Lb.request):Lb.request,Ob="params"in Lb?Lb.params:void 0,Pb=new Da(this,{event:Mb,request:Nb,params:Ob}),Qb=this._getResponse(Pb,Nb,Mb),Rb=this._awaitComplete(Qb,Pb,Nb,Mb);return[Qb,Rb]}async _getResponse(Sb,Tb,Ub){await Sb.runCallbacks("handlerWillStart",{event:Ub,request:Tb});let Vb;try{if(!(Vb=await this._handle(Tb,Sb))||"error"===Vb.type)throw new a("no-response",{url:Tb.url})}catch(Wb){if(Wb instanceof Error){for(const Xb of Sb.iterateCallbacks("handlerDidError"))if(Vb=await Xb({error:Wb,event:Ub,request:Tb}))break}if(Vb);else throw Wb}for(const Yb of Sb.iterateCallbacks("handlerWillRespond"))Vb=await Yb({event:Ub,request:Tb,response:Vb});return Vb}async _awaitComplete(Zb,$b,_b,ac){let bc,cc;try{bc=await Zb}catch(dc){}try{await $b.runCallbacks("handlerDidRespond",{event:ac,request:_b,response:bc}),await $b.doneWaiting()}catch(ec){ec instanceof Error&&(cc=ec)}if(await $b.runCallbacks("handlerDidComplete",{event:ac,request:_b,response:bc,error:cc}),$b.destroy(),cc)throw cc}}const fc={cacheWillUpdate:async({response:a})=>200===a.status||0===a.status?a:null};class gc extends Hb{constructor(hc={}){super(hc),this.plugins.some(a=>"cacheWillUpdate"in a)||this.plugins.unshift(fc),this._networkTimeoutSeconds=hc.networkTimeoutSeconds||0}async _handle(ic,jc){const kc=[],lc=[];let mc;if(this._networkTimeoutSeconds){const{id:nc,promise:oc}=this._getTimeoutPromise({request:ic,logs:kc,handler:jc});mc=nc,lc.push(oc)}const pc=this._getNetworkPromise({timeoutId:mc,request:ic,logs:kc,handler:jc});lc.push(pc);const qc=await jc.waitUntil((async()=>await jc.waitUntil(Promise.race(lc))||await pc)());if(!qc)throw new a("no-response",{url:ic.url});return qc}_getTimeoutPromise({request:rc,logs:sc,handler:tc}){let uc;const vc=new Promise(a=>{const b=async()=>{a(await tc.cacheMatch(rc))};uc=setTimeout(b,1000*this._networkTimeoutSeconds)});return{promise:vc,id:uc}}async _getNetworkPromise({timeoutId:wc,request:xc,logs:yc,handler:zc}){let Ac,Bc;try{Bc=await zc.fetchAndCachePut(xc)}catch(Cc){Cc instanceof Error&&(Ac=Cc)}return wc&&clearTimeout(wc),(Ac||!Bc)&&(Bc=await zc.cacheMatch(xc)),Bc}}class Dc extends Hb{constructor(Ec={}){super(Ec),this.plugins.some(a=>"cacheWillUpdate"in a)||this.plugins.unshift(fc)}async _handle(Fc,Gc){const Hc=Gc.fetchAndCachePut(Fc).catch(()=>{});let Ic=await Gc.cacheMatch(Fc),Jc;if(Ic);else try{Ic=await Hc}catch(Kc){Kc instanceof Error&&(Jc=Kc)}if(!Ic)throw new a("no-response",{url:Fc.url,error:Jc});return Ic}}c(80);const Lc=a=>a&&"object"==typeof a?a:{handle:a};class Mc{constructor(Nc,Oc,Pc="GET"){this.handler=Lc(Oc),this.match=Nc,this.method=Pc}setCatchHandler(Qc){this.catchHandler=Lc(Qc)}}class Rc extends Mc{constructor(Sc,Tc,Uc){super(({url:a})=>{const b=Sc.exec(a.href);if(b&&(a.origin===location.origin||0===b.index))return b.slice(1)},Tc,Uc)}}class Vc{constructor(){this._routes=new Map(),this._defaultHandlerMap=new Map()}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",a=>{const{request:b}=a,c=this.handleRequest({request:b,event:a});c&&a.respondWith(c)})}addCacheListener(){self.addEventListener("message",a=>{if(a.data&&"CACHE_URLS"===a.data.type){const{payload:b}=a.data,c=Promise.all(b.urlsToCache.map(b=>{"string"==typeof b&&(b=[b]);const c=new Request(...b);return this.handleRequest({request:c,event:a})}));a.waitUntil(c),a.ports&&a.ports[0]&&c.then(()=>a.ports[0].postMessage(!0))}})}handleRequest({request:Wc,event:Xc}){const Yc=new URL(Wc.url,location.href);if(Yc.protocol.startsWith("http")){const Zc=Yc.origin===location.origin,{params:$c,route:_c}=this.findMatchingRoute({event:Xc,request:Wc,sameOrigin:Zc,url:Yc});let ad=_c&&_c.handler;const bd=Wc.method;if(!ad&&this._defaultHandlerMap.has(bd)&&(ad=this._defaultHandlerMap.get(bd)),ad){let cd;try{cd=ad.handle({url:Yc,request:Wc,event:Xc,params:$c})}catch(dd){cd=Promise.reject(dd)}const ed=_c&&_c.catchHandler;return cd instanceof Promise&&(this._catchHandler||ed)&&(cd=cd.catch(async a=>{if(ed)try{return await ed.handle({url:Yc,request:Wc,event:Xc,params:$c})}catch(b){b instanceof Error&&(a=b)}if(this._catchHandler)return this._catchHandler.handle({url:Yc,request:Wc,event:Xc});throw a})),cd}}}findMatchingRoute({url:fd,sameOrigin:gd,request:hd,event:id}){const jd=this._routes.get(hd.method)||[];for(const kd of jd){let ld;const md=kd.match({url:fd,sameOrigin:gd,request:hd,event:id});if(md)return ld=md,Array.isArray(ld)&&0===ld.length?ld=void 0:md.constructor===Object&&0===Object.keys(md).length?ld=void 0:"boolean"==typeof md&&(ld=void 0),{route:kd,params:ld}}return{}}setDefaultHandler(nd,od="GET"){this._defaultHandlerMap.set(od,Lc(nd))}setCatchHandler(pd){this._catchHandler=Lc(pd)}registerRoute(qd){this._routes.has(qd.method)||this._routes.set(qd.method,[]),this._routes.get(qd.method).push(qd)}unregisterRoute(rd){if(!this._routes.has(rd.method))throw new a("unregister-route-but-not-found-with-method",{method:rd.method});const sd=this._routes.get(rd.method).indexOf(rd);if(sd> -1)this._routes.get(rd.method).splice(sd,1);else throw new a("unregister-route-route-not-registered")}}let td;const ud=()=>(td||((td=new Vc()).addFetchListener(),td.addCacheListener()),td);function vd(b,c,d){let e;if("string"==typeof b){const f=new URL(b,location.href),g=({url:a})=>a.href===f.href;e=new Mc(g,c,d)}else if(b instanceof RegExp)e=new Rc(b,c,d);else if("function"==typeof b)e=new Mc(b,c,d);else if(b instanceof Mc)e=b;else throw new a("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});const h=ud();return h.registerRoute(e),e}function wd(b){if(!b)throw new a("add-to-cache-list-unexpected-type",{entry:b});if("string"==typeof b){const c=new URL(b,location.href);return{cacheKey:c.href,url:c.href}}const{revision:d,url:e}=b;if(!e)throw new a("add-to-cache-list-unexpected-type",{entry:b});if(!d){const f=new URL(e,location.href);return{cacheKey:f.href,url:f.href}}const g=new URL(e,location.href),h=new URL(e,location.href);return g.searchParams.set("__WB_REVISION__",d),{cacheKey:g.href,url:h.href}}c(977);class xd{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:a,state:b})=>{b&&(b.originalRequest=a)},this.cachedResponseWillBeUsed=async({event:a,state:b,cachedResponse:c})=>{if("install"===a.type&&b&&b.originalRequest&&b.originalRequest instanceof Request){const d=b.originalRequest.url;c?this.notUpdatedURLs.push(d):this.updatedURLs.push(d)}return c}}}class yd extends Hb{constructor(zd={}){zd.cacheName=j.getPrecacheName(zd.cacheName),super(zd),this._fallbackToNetwork=!1!==zd.fallbackToNetwork,this.plugins.push(yd.copyRedirectedCacheableResponsesPlugin)}async _handle(Ad,Bd){const Cd=await Bd.cacheMatch(Ad);return Cd||(Bd.event&&"install"===Bd.event.type?await this._handleInstall(Ad,Bd):await this._handleFetch(Ad,Bd))}async _handleFetch(Dd,Ed){let Fd;const Gd=Ed.params||{};if(this._fallbackToNetwork){const Hd=Gd.integrity,Id=Dd.integrity,Jd=!Id||Id===Hd;Fd=await Ed.fetch(new Request(Dd,{integrity:Id||Hd})),Hd&&Jd&&(this._useDefaultCacheabilityPluginIfNeeded(),await Ed.cachePut(Dd,Fd.clone()))}else throw new a("missing-precache-entry",{cacheName:this.cacheName,url:Dd.url});return Fd}async _handleInstall(Kd,Ld){this._useDefaultCacheabilityPluginIfNeeded();const Md=await Ld.fetch(Kd),Nd=await Ld.cachePut(Kd,Md.clone());if(!Nd)throw new a("bad-precaching-response",{url:Kd.url,status:Md.status});return Md}_useDefaultCacheabilityPluginIfNeeded(){let Od=null,Pd=0;for(const[Qd,Rd]of this.plugins.entries())Rd!==yd.copyRedirectedCacheableResponsesPlugin&&(Rd===yd.defaultPrecacheCacheabilityPlugin&&(Od=Qd),Rd.cacheWillUpdate&&Pd++);0===Pd?this.plugins.push(yd.defaultPrecacheCacheabilityPlugin):Pd>1&&null!==Od&&this.plugins.splice(Od,1)}}yd.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:a}){return!a||a.status>=400?null:a}},yd.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:a}){return a.redirected?await s(a):a}};class Sd{constructor({cacheName:Td,plugins:Ud=[],fallbackToNetwork:Vd=!0}={}){this._urlsToCacheKeys=new Map(),this._urlsToCacheModes=new Map(),this._cacheKeysToIntegrities=new Map(),this._strategy=new yd({cacheName:j.getPrecacheName(Td),plugins:[...Ud,new class{constructor({precacheController:Wd}){this.cacheKeyWillBeUsed=async({request:a,params:b})=>{const c=(null==b?void 0:b.cacheKey)||this._precacheController.getCacheKeyForURL(a.url);return c?new Request(c,{headers:a.headers}):a},this._precacheController=Wd}}({precacheController:this}),],fallbackToNetwork:Vd}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(Xd){this.addToCacheList(Xd),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(Yd){const Zd=[];for(const $d of Yd){"string"==typeof $d?Zd.push($d):$d&& void 0===$d.revision&&Zd.push($d.url);const{cacheKey:_d,url:ae}=wd($d),be="string"!=typeof $d&&$d.revision?"reload":"default";if(this._urlsToCacheKeys.has(ae)&&this._urlsToCacheKeys.get(ae)!==_d)throw new a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(ae),secondEntry:_d});if("string"!=typeof $d&&$d.integrity){if(this._cacheKeysToIntegrities.has(_d)&&this._cacheKeysToIntegrities.get(_d)!==$d.integrity)throw new a("add-to-cache-list-conflicting-integrities",{url:ae});this._cacheKeysToIntegrities.set(_d,$d.integrity)}if(this._urlsToCacheKeys.set(ae,_d),this._urlsToCacheModes.set(ae,be),Zd.length>0){const ce=`Workbox is precaching URLs without revision info: ${Zd.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(ce)}}}install(de){return r(de,async()=>{const a=new xd();for(const[b,c]of(this.strategy.plugins.push(a),this._urlsToCacheKeys)){const d=this._cacheKeysToIntegrities.get(c),e=this._urlsToCacheModes.get(b),f=new Request(b,{integrity:d,cache:e,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:c},request:f,event:de}))}const{updatedURLs:g,notUpdatedURLs:h}=a;return{updatedURLs:g,notUpdatedURLs:h}})}activate(ee){return r(ee,async()=>{const a=await self.caches.open(this.strategy.cacheName),b=await a.keys(),c=new Set(this._urlsToCacheKeys.values()),d=[];for(const e of b)c.has(e.url)||(await a.delete(e),d.push(e.url));return{deletedURLs:d}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(fe){const ge=new URL(fe,location.href);return this._urlsToCacheKeys.get(ge.href)}getIntegrityForCacheKey(he){return this._cacheKeysToIntegrities.get(he)}async matchPrecache(ie){const je=ie instanceof Request?ie.url:ie,ke=this.getCacheKeyForURL(je);if(ke){const le=await self.caches.open(this.strategy.cacheName);return le.match(ke)}}createHandlerBoundToURL(me){const ne=this.getCacheKeyForURL(me);if(!ne)throw new a("non-precached-url",{url:me});return a=>(a.request=new Request(me),a.params=Object.assign({cacheKey:ne},a.params),this.strategy.handle(a))}}let oe;const pe=()=>(oe||(oe=new Sd()),oe);class qe extends Mc{constructor(re,se){super(({request:a})=>{const b=re.getURLsToCacheKeys();for(const c of(function*(a,{ignoreURLParametersMatching:b=[/^utm_/,/^fbclid$/],directoryIndex:c="index.html",cleanURLs:d=!0,urlManipulation:e}={}){const f=new URL(a,location.href);f.hash="",yield f.href;const g=function(a,b=[]){for(const c of[...a.searchParams.keys()])b.some(a=>a.test(c))&&a.searchParams.delete(c);return a}(f,b);if(yield g.href,c&&g.pathname.endsWith("/")){const h=new URL(g.href);h.pathname+=c,yield h.href}if(d){const i=new URL(g.href);i.pathname+=".html",yield i.href}if(e){const j=e({url:f});for(const k of j)yield k.href}})(a.url,se)){const d=b.get(c);if(d){const e=re.getIntegrityForCacheKey(d);return{cacheKey:d,integrity:e}}}},re.strategy)}}const te=async(a,b="-precache-")=>{const c=await self.caches.keys(),d=c.filter(c=>c.includes(b)&&c.includes(self.registration.scope)&&c!==a);return await Promise.all(d.map(a=>self.caches.delete(a))),d};function ue(a){const b=pe();return b.matchPrecache(a)}self.skipWaiting(),self.addEventListener("activate",()=>self.clients.claim());var ve=[{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/651.26ed5489af6f3b1f.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/framework-beb51d85c0b60541.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/main-a005d21ee873905b.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/pages/_app-4425924d9a6174ea.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/pages/_error-e88020a086f71044.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/pages/blog-aa4080b943d0f4e4.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/pages/contact-09803b934710486e.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/pages/fallback-69c20c04962a00a0.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/pages/index-0b4d1a95f2c041ca.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/pages/skills-e6302830fe2c713d.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/polyfills-5cd94c89d3acac5f.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/chunks/webpack-49fac14cdd97b4a6.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/css/e6c38078dd48c66b.css'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/dZlMgOQ0Z2lrNhIo4ZinR/_buildManifest.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/dZlMgOQ0Z2lrNhIo4ZinR/_middlewareManifest.js'},{'revision':'dZlMgOQ0Z2lrNhIo4ZinR','url':'/_next/static/dZlMgOQ0Z2lrNhIo4ZinR/_ssgManifest.js'},{'revision':'49624d6d53a861c51058cf42ee0c164d','url':'/arrow.svg'},{'revision':'04f8ff74b276607cb7cbef3e68333e36','url':'/bondux.svg'},{'revision':'63bc0fbdd1046bd6c2b453d1ba3e6515','url':'/camera.svg'},{'revision':'0cae4d5a5541f5135b46be183a8bb724','url':'/circle.svg'},{'revision':'429ba9b9477b464300b1a6d227ceb6c0','url':'/design.jpg'},{'revision':'d5611d61bcbe4dd13e647808856ef4c3','url':'/design_christmastree.png'},{'revision':'0115a4b1159282ba3c5aeaf930ff8dd5','url':'/design_context.png'},{'revision':'bcf69320a892c9e3c0b757e4f813b4bb','url':'/design_converge-diverge.png'},{'revision':'0f7ef9afa2c87d0f7dc98d70d0b0dc47','url':'/design_graphic.jpg'},{'revision':'1aeab0e1834151c9269dc8094e64d618','url':'/design_iterate.png'},{'revision':'ef469a1e60134289269a8e26223be6e1','url':'/design_together.png'},{'revision':'982f0607ef198abc16347aed151dade7','url':'/email.svg'},{'revision':'210a681cf29b739f784b8acc13e84ec3','url':'/facebook.svg'},{'revision':'d8cb95008fa7fc57bcad251a111a7239','url':'/favicon.png'},{'revision':'d81609480a2ce66fc1324f2d7d02f38f','url':'/fonts/DejaVuSans-ExtraLight.woff2'},{'revision':'f3d7cff97960be3599487a42a3160f8c','url':'/fonts/DejaVuSansCondensed-Bold.woff2'},{'revision':'9dcc53d2fd0191e5f2d2eab7f053a771','url':'/fonts/DejaVuSansCondensed.woff2'},{'revision':'94f1f7e17dad1cc5b621f1ecae51bdc7','url':'/fonts/DejaVuSerifCondensed-Bold.woff2'},{'revision':'c99151646eecc318ec19df5bb2c183f8','url':'/image4.jpg'},{'revision':'35d96a54faa3c9d668bcf0ea85bca32d','url':'/instagram.svg'},{'revision':'935fcdba5a158df02c3d681cfa1f1054','url':'/linkedin.svg'},{'revision':'323abea12252967c0a4e20a01c878e87','url':'/manifest.json'},{'revision':'a573bf01a4d46829152efbb1543d28d1','url':'/music.jpg'},{'revision':'5dfb50412322687e6f99723ac08101cb','url':'/music1.jpg'},{'revision':'d49d30bce8270733bc5adf2a1f476ea8','url':'/music2.jpg'},{'revision':'10f247c61880a74d0b53bed2738d41a9','url':'/phone.svg'},{'revision':'64746a69e51f2006f7e1c56ff2502f7c','url':'/photography.jpg'},{'revision':'514e7f737e0553ad733f88ef151afc74','url':'/photography1.jpg'},{'revision':'0a35d89ecb1c192ddf5d1f4d86797972','url':'/photography2.jpg'},{'revision':'d374250d7c5f8b569fbc47fc5fdf129e','url':'/photography3.jpg'},{'revision':'159a1b9ec0fab68010c0b8740ce24039','url':'/photography4.jpg'},{'revision':'c2dbda64d483f75fdcd2c379f4a9b801','url':'/pwa/maskable_icon.png'},{'revision':'c33613e500566407c77c2b2f03f84284','url':'/pwa/maskable_icon_x192.png'},{'revision':'1653143acbfc6580b492aa7887832a4a','url':'/pwa/maskable_icon_x512.png'},{'revision':'08a05c240b3793d79add9bc8d33f6f23','url':'/soundcloud.svg'},{'revision':'92755e283bde96b801fc20024c92d86a','url':'/towards_the_artist.svg'}];ve.push({url:"/fallback",revision:"1234567890"}),(function(a){const b=pe();b.precache(a)})(ve),(function(a){const b=pe(),c=new qe(b,a);vd(c)})(void 0),self.addEventListener("activate",a=>{const b=j.getPrecacheName();a.waitUntil(te(b).then(a=>{}))}),vd("/",new gc({cacheName:"start-url",plugins:[new pa({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),vd(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new class extends Hb{async _handle(we,xe){let ye=await xe.cacheMatch(we),ze;if(!ye)try{ye=await xe.fetchAndCachePut(we)}catch(Ae){Ae instanceof Error&&(ze=Ae)}if(!ye)throw new a("no-response",{url:we.url,error:ze});return ye}}({cacheName:"google-fonts",plugins:[new pa({maxEntries:4,maxAgeSeconds:31536000,purgeOnQuotaError:!0})]}),"GET"),vd(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new Dc({cacheName:"static-font-assets",plugins:[new pa({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),vd(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new class extends Hb{constructor(Be={}){super(Be),this._networkTimeoutSeconds=Be.networkTimeoutSeconds||0}async _handle(Ce,De){let Ee,Fe;try{const Ge=[De.fetch(Ce),];if(this._networkTimeoutSeconds){const He=q(1000*this._networkTimeoutSeconds);Ge.push(He)}if(!(Fe=await Promise.race(Ge)))throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(Ie){Ie instanceof Error&&(Ee=Ie)}if(!Fe)throw new a("no-response",{url:Ce.url,error:Ee});return Fe}}({cacheName:"static-image-assets",plugins:[new pa({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),vd(/\.(?:js)$/i,new Dc({cacheName:"static-js-assets",plugins:[new pa({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),vd(/\.(?:css|less)$/i,new Dc({cacheName:"static-style-assets",plugins:[new pa({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),vd(/\.(?:json|xml|csv)$/i,new gc({cacheName:"static-data-assets",plugins:[new pa({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),vd(/\/api\/.*$/i,new gc({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new pa({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),vd(/.*/i,new gc({cacheName:"others",networkTimeoutSeconds:10,plugins:[new pa({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),(function(a){const b=ud();b.setDefaultHandler(a)})(new Dc()),(function(a){const b=ud();b.setCatchHandler(a)})(function(a){var b=a.event;switch(b.request.destination){case"document":return ue("/fallback");break;case"image":return ue("/static/images/fallback.png");break;case"font":default:return Response.error()}})}()}()