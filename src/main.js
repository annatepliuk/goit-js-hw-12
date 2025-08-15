import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('.form');
const input = form.elements['search-text'];
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;


form.addEventListener('submit', async event => {
  event.preventDefault();

  query = input.value.trim(); 
  page = 1;                   

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No Results',
        message: 'No images match your query.',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    smoothScroll();

    if (page * 15 < totalHits) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});


function smoothScroll() {
  const card = document.querySelector('.gallery .gallery-item');
  if (!card) return;

  const { height: cardHeight } = card.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
