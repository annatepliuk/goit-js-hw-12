import{a as y,S as g,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",L="51706483-b1178684cf0cda85acd7b38c0";async function b(n,t=1){const o={key:L,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await y.get(h,{params:o})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".load-more"),m=document.querySelector(".loader"),w=new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(n){const t=n.map(o=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${o.likes}</p>
          <p><b>Views:</b> ${o.views}</p>
          <p><b>Comments:</b> ${o.comments}</p>
          <p><b>Downloads:</b> ${o.downloads}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",t),w.refresh()}function q(){u.innerHTML=""}function v(){m.classList.remove("hidden")}function R(){m.classList.add("hidden")}function B(){f.classList.remove("hidden")}function $(){f.classList.add("hidden")}const p=document.querySelector(".form"),M=p.elements["search-text"];document.querySelector(".load-more");let l="",c=1,d=0;p.addEventListener("submit",async n=>{if(n.preventDefault(),l=M.value.trim(),c=1,l===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}q(),$(),v();try{const t=await b(l,c);if(d=t.totalHits,t.hits.length===0){a.info({title:"No Results",message:"No images match your query.",position:"topRight"});return}S(t.hits),O(),c*15<d&&B()}catch{a.error({title:"Error",message:"Something went wrong.",position:"topRight"})}finally{R()}});function O(){const n=document.querySelector(".gallery .gallery-item");if(!n)return;const{height:t}=n.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
