if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bx9V9zN2.css",revision:null},{url:"assets/index-G4xc0Mr8.js",revision:null},{url:"index.html",revision:"6a3ef340fdcd51193c3fbec0fb6ad93f"},{url:"registerSW.js",revision:"c55ce6ad132feb9d8c298250c8c12323"},{url:"serviceWorker.js",revision:"5a993b79355a98a2c40d751bb5315c3f"},{url:"manifest.webmanifest",revision:"894541a88fb0325a15431d509bba279e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
