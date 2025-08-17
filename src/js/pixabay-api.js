import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51706483-b1178684cf0cda85acd7b38c0';
export const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const res = await axios.get(BASE_URL, { params });
  return res.data;
}
