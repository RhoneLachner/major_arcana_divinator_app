(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const u="ONE_OR_THREE";function s(t,e){localStorage.setItem(t,JSON.stringify(e))}function i(){const t=window.location.pathname,e=d(t),o=document.querySelector("header");if(!o)return;const a=l(e),r=b(e);o.innerHTML=`
        <div class="header-title">${a}</div>
        <div class="buttonDiv">
            <span class="buttonSpan">
                ${r}
            </span>
        </div>
    `,f(e)}function d(t){return t.includes("about-us")?"about-us":t.includes("about-tarot")?"about-tarot":t.includes("recent-cards")?"recent-cards":t.includes("reading-room")?"reading-room":"home"}function l(t){return{home:"WELCOME","about-us":"Meet the Team","about-tarot":"About Tarot","recent-cards":"Recent Cards","reading-room":"Reading Room"}[t]||"WELCOME"}function b(t){const e=t==="home"?"":"../";switch(t){case"home":return`
                <a href="${e}about-tarot/index.html">
                    <button class="header-button">About Tarot</button>
                </a>
                <a href="${e}recent-cards/index.html">
                    <button class="header-button">Recent Cards</button>
                </a>
            `;case"about-us":return`
                <a href="${e}index.html">
                    <button class="header-button">Home</button>
                </a>
                <a href="${e}recent-cards/index.html">
                    <button class="header-button">Recent Cards</button>
                </a>
            `;case"about-tarot":return`
                <a href="${e}index.html">
                    <button class="header-button">Home</buttonc>
                </a>
            `;case"recent-cards":return`
                <a href="${e}index.html">
                    <button class="header-button">Home</button>
                </a>
                <a>
                    <button class="header-button" class="clear-button">Clear Saved Cards</button>
                </a>
            `;case"reading-room":return`
                <a href="${e}index.html">
                    <button>Home</button>
                </a>
                <a href="${e}recent-cards/index.html">
                    <button class="header-button">Recent Cards</button>
                </a>
            `;default:return`
                <a href="${e}index.html">
                    <button class="header-button">Home</button>
                </a>
            `}}function f(t){if(t==="recent-cards"){const e=document.querySelector(".clear-button");e&&e.addEventListener("click",()=>{localStorage.clear(),window.location.reload()})}}i();const h=document.getElementById("beginButton");h.addEventListener("click",()=>{const t=document.querySelector(":checked");s(u,t.value)});
