import{a as d,S as f,i}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="https://pixabay.com/api/",m="51706483-b1178684cf0cda85acd7b38c0";function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:o}).then(e=>e.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(o===""){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}b(),L();try{const e=await y(o);e.hits.length===0?i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(e.hits)}catch(e){i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}finally{w()}});
//# sourceMappingURL=index.js.map
