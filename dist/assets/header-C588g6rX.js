(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();function l(){const r=window.location.pathname,e=s(r),o=document.querySelector("header");if(!o)return;const a=c(e),t=i(e);o.innerHTML=`
        <div class="header-title">${a}</div>
        <div class="buttonDiv">
            <span class="buttonSpan">
                ${t}
            </span>
        </div>
    `,d(e)}function s(r){return r.includes("about-us")?"about-us":r.includes("about-tarot")?"about-tarot":r.includes("recent-cards")?"recent-cards":r.includes("reading-room")?"reading-room":"home"}function c(r){return{home:"WELCOME","about-us":"Meet the Team","about-tarot":"About Tarot","recent-cards":"Recent Cards","reading-room":"Reading Room"}[r]||"WELCOME"}function i(r){const e=r==="home"?"":"../";switch(r){case"home":return`
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
                    <button class="header-button">Home</button>
                </a>
            `;case"recent-cards":return`
                <a href="${e}index.html">
                    <button class="header-button">Home</button>
                </a>
                <a href="#" onclick="event.preventDefault();">
                    <button class="header-button clear-button">Clear Saved Cards</button>
                </a>
            `;case"reading-room":return`
                <a href="${e}index.html">
                    <button class="header-button">Home</button>
                </a>
                <a href="${e}recent-cards/index.html">
                    <button class="header-button">Recent Cards</button>
                </a>
            `;default:return`
                <a href="${e}index.html">
                    <button class="header-button">Home</button>
                </a>
            `}}function d(r){if(r==="recent-cards"){const e=document.querySelector(".clear-button");e&&e.addEventListener("click",()=>{localStorage.clear(),window.location.reload()})}}export{l as r};
