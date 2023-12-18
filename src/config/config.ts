// Configuration for TMDB API

const API_URL:string = "https://api.themoviedb.org/3/";
const API_KEY:string = '2dca580c2a14b55200e784d157207b4d';

const BASE_URL:string = `${API_URL}discover/movie?api_key=${API_KEY}`;
const SEARCH_BASE_URL:string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

const GENERE_BASE_URL: string = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en`

export {
  API_URL,
  API_KEY,
  BASE_URL,
  SEARCH_BASE_URL,
  GENERE_BASE_URL
};
