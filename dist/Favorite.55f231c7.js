// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2Uran":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "28caeae955f231c7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dpfdu":[function(require,module,exports) {
var _bookProductsJs = require("./bookProducts.js");
var _favoriteCartJs = require("./FavoriteCart.js");
// ======================== ADD MENU SHADOW =====================
const addShadow = ()=>{
    const header = document.querySelector("header");
    window.scrollY >= 50 ? header.classList.add("header-shadow") : header.classList.remove("header-shadow");
};
window.addEventListener("scroll", addShadow);
// ======================== FavoriteCart =====================
const showFavoriteBooks = (newArray)=>{
    let favoriteCartHTML = "";
    let favoriteCard = document.getElementById("favorite-cards");
    let favoriteProducts = [];
    if (newArray.length === 0) favoriteCard.innerHTML = `
        <div class="favoriteCart__defaultMessage">
                <i class="ri-book-mark-line"></i>
                <span>No Bookmarks</span>
        </div>
        `;
    else if (newArray) {
        newArray.forEach((item)=>{
            (0, _bookProductsJs.products).forEach((product)=>{
                if (item.id === product.id) favoriteProducts.push(product);
            });
        });
        if (favoriteProducts) {
            favoriteProducts.forEach((item)=>{
                favoriteCartHTML += `
            
            <div class="favoriteCart__card">
                <div class="favoriteCart__img">
                    <img src="${item.image}" alt="images">
                </div>
                <div class="favoriteCart__data">
                    <h3 class="favoriteCart__title">${item.title}</h3>
                    <p class="favoriteCart__price">$${Math.round(item.priceCents / 100).toFixed(2)}</p>
                    <p class="favoriteCart__discription">
                        A twisting, haunting true-life murder mystery about one of the most monstrous crimes in American history, from the author of The Wager and The Lost City of Z, \u{201C}one of the preeminent adventure and true-crime writers working today."\u{2014}New York Magazine \u{2022} NATIONAL BOOK AWARD FINALIST \u{2022} NOW A MARTIN SCORSESE PICTURE \u{201C}A shocking whodunit\u{2026}What more could fans of true-crime thrillers ask?\u{201D}\u{2014}USA Today\u{201C}A masterful work of literary journalism crafted with the urgency of a mystery.\u{201D} \u{2014}The Boston GlobeIn the 1920s, the richest people per capita in the world were members of the Osage Nation in Oklahoma. After oil was discovered beneath their land, the Osage rode in chauffeured automobiles, built mansions, and sent their children to study in Europe.Then, one by one, the Osage began to be killed off. The family of an Osage woman, Mollie Burkhart, became a prime target. One of her relatives was shot. Another was poisoned. And it was just the beginning, as more and more Osage were dying under mysterious circumstances, and many of those who dared to investigate the killings were themselves murdered. As the death toll rose, the newly created FBI took up the case, and the young director, J. Edgar Hoover, turned to a former Texas Ranger named Tom White to try to unravel the mystery. White put together an undercover team, including a Native American agent who infiltrated the region, and together with the Osage began to expose one of the most chilling conspiracies in American history.Look for David Grann\u{2019}s latest bestselling book, The Wager!
                    </p>
                </div>
                <i class="ri-close-line favoriteCart__close" id=${item.id}></i>
            </div>
            `;
            });
            favoriteCard.innerHTML = favoriteCartHTML;
        }
    }
};
showFavoriteBooks((0, _favoriteCartJs.favoriteCart));
//RemoveProducts
let closeButton = document.querySelectorAll(".favoriteCart__close");
closeButton.forEach((item)=>{
    item.addEventListener("click", ()=>{
        const itemId = item.getAttribute("id");
        (0, _favoriteCartJs.removeProduct)(itemId);
        showFavoriteBooks((0, _favoriteCartJs.favoriteCart));
        console.log(itemId);
        closeButton = document.querySelectorAll(".favoriteCart__close");
        upDateCloseButton(closeButton);
    });
});
const upDateCloseButton = (closeButton)=>{
    closeButton.forEach((item)=>{
        item.addEventListener("click", ()=>{
            const itemId = item.getAttribute("id");
            (0, _favoriteCartJs.removeProduct)(itemId);
            showFavoriteBooks((0, _favoriteCartJs.favoriteCart));
            console.log(itemId);
            closeButton = document.querySelectorAll(".favoriteCart__close");
            upDateCloseButton(closeButton);
        });
    });
};

},{"./bookProducts.js":"doAEg","./FavoriteCart.js":"jm28i"}],"doAEg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "products", ()=>products);
const products = [
    {
        id: "3iy5peu",
        image: "images/book-1.png",
        title: "The Lord Of The King",
        rating: {
            stars: 4,
            count: 230
        },
        priceCents: 1090
    },
    {
        id: "u53txii",
        image: "images/book-2.png",
        title: "Simple & Minimalist",
        rating: {
            stars: 4.5,
            count: 190
        },
        priceCents: 2090
    },
    {
        id: "3f67bi5z",
        image: "images/book-3.png",
        title: "Muted color posted template",
        rating: {
            stars: 2,
            count: 80
        },
        priceCents: 1240
    },
    {
        id: "qfseoft",
        image: "images/book-4.png",
        title: "Poring Dreams",
        rating: {
            stars: 4.5,
            count: 450
        },
        priceCents: 3060
    },
    {
        id: "2j4sgwa",
        image: "images/book-5.png",
        title: "Customize Your Autumn Clothes",
        rating: {
            stars: 3.5,
            count: 130
        },
        priceCents: 1000
    },
    {
        id: "pmamsvo",
        image: "images/book-6.png",
        title: "Designed For Work",
        rating: {
            stars: 2.9,
            count: 8
        },
        priceCents: 1000,
        discount: 0.2
    },
    {
        id: "nj4yddm",
        image: "images/book-7.png",
        title: "Plant Tree For The Future",
        rating: {
            stars: 3.0,
            count: 180
        },
        priceCents: 2030
    },
    {
        id: "i24sz6w",
        image: "images/book-8.png",
        title: "Modern Abstract Poster",
        rating: {
            stars: 4.5,
            count: 1030
        },
        priceCents: 3020
    },
    {
        id: "kmmx5ix",
        image: "images/book-9.png",
        title: "Bird Park",
        rating: {
            stars: 5,
            count: 2040
        },
        priceCents: 3500
    },
    {
        id: "9gsxgkh",
        image: "images/book-10.png",
        title: "Memories of The Sword",
        rating: {
            stars: 2.5,
            count: 30
        },
        priceCents: 2800
    },
    {
        id: "u37wcro",
        image: "images/discount-book-1.png",
        title: "Idea For Interior",
        rating: {
            stars: 4.5,
            count: 1900
        },
        priceCents: 1499,
        discount: 0.2
    },
    {
        id: "nin79fw",
        image: "images/discount-book-2.png",
        title: "Classic Blue",
        rating: {
            stars: 4.5,
            count: 140
        },
        priceCents: 1200,
        discount: 0.2
    },
    {
        id: "33bmic9",
        image: "images/home-book-1.png",
        title: "Diana & Jack",
        rating: {
            stars: 5,
            count: 30
        },
        priceCents: 2800,
        position: "home"
    },
    {
        id: "9ip9mkk",
        image: "images/home-book-2.png",
        title: "Christmas has come",
        rating: {
            stars: 5,
            count: 30
        },
        priceCents: 2800,
        position: "home"
    },
    {
        id: "vsqhcfy",
        image: "images/home-book-3.png",
        title: "True & Tony",
        rating: {
            stars: 5,
            count: 30
        },
        priceCents: 2800,
        position: "home",
        discount: 0.2
    },
    {
        id: "d9auhde",
        image: "images/home-book-4.png",
        title: "Celtic Tales",
        rating: {
            stars: 5,
            count: 30
        },
        priceCents: 2800,
        position: "home"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jm28i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "favoriteCart", ()=>favoriteCart);
parcelHelpers.export(exports, "activeHeartDefault", ()=>activeHeartDefault);
parcelHelpers.export(exports, "activeHeart", ()=>activeHeart);
parcelHelpers.export(exports, "makeFavoriteCart", ()=>makeFavoriteCart);
parcelHelpers.export(exports, "removeProduct", ()=>removeProduct);
let favoriteCart = JSON.parse(localStorage.getItem("favorite-cart")) || [];
const activeHeartDefault = (favoriteCart)=>{
    const liked = "ri-heart-3-fill", unliked = "ri-heart-3-line";
    if (favoriteCart) favoriteCart.forEach((item)=>{
        const itemClass = document.getElementById(item.id);
        itemClass.classList.remove(unliked);
        itemClass.classList.add(liked);
    });
};
const activeHeart = (array, newarray)=>{
    const liked = "ri-heart-3-fill", unliked = "ri-heart-3-line";
    array.forEach((item)=>{
        const arrayId = item.id, arrayClass = document.getElementById(arrayId);
        arrayClass.classList.remove(liked);
        arrayClass.classList.add(unliked);
    });
    newarray.forEach((item)=>{
        const arrayId = item.id, arrayClass = document.getElementById(arrayId);
        arrayClass.classList.remove(unliked);
        arrayClass.classList.add(liked);
    });
};
const makeFavoriteCart = (Button)=>{
    Button.forEach((item)=>{
        item.addEventListener("click", ()=>{
            const Id = item.getAttribute("id"), Class = document.getElementById(Id);
            let newFavoriteCart = [];
            if (favoriteCart) favoriteCart.forEach((list)=>{
                if (list.id !== Id) newFavoriteCart.push({
                    id: list.id
                });
            });
            if (favoriteCart.length === newFavoriteCart.length) newFavoriteCart.push({
                id: Id
            });
            activeHeart(favoriteCart, newFavoriteCart);
            favoriteCart = newFavoriteCart;
            document.querySelector(".favorite-number").innerHTML = favoriteCart.length;
            localStorage.setItem("favorite-cart", JSON.stringify(favoriteCart));
        });
    });
};
const removeProduct = (closeProductId)=>{
    let newFavoriteCart = [];
    favoriteCart.forEach((item)=>{
        if (item.id !== closeProductId) newFavoriteCart.push({
            id: item.id
        });
    });
    favoriteCart = newFavoriteCart;
    localStorage.setItem("favorite-cart", JSON.stringify(favoriteCart));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2Uran","dpfdu"], "dpfdu", "parcelRequire4c6f")

//# sourceMappingURL=Favorite.55f231c7.js.map
