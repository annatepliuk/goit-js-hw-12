import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51706483-b1178684cf0cda85acd7b38c0';


export function getImagesByQuery(query) 
{
const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  }; 
   return axios
   .get(BASE_URL, {params})
   .then(res => res.data);
}