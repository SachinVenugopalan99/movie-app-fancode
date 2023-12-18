import {
  BASE_URL,
  SEARCH_BASE_URL,
  GENERE_BASE_URL
} from "../config/config";

export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const apiSettings = {
  fetchMovies: async (year: number, genre: string): Promise<Movies> => {
      const endpoint: string = `${BASE_URL}&sort_by=popularity.desc&primary_release_year=${year}&with_genres=${genre}&page=1&vote_count.gte=100`
    return await (await fetch(endpoint)).json();
  },
  fetchGenres: async() => {
    const endpoint: string = `${GENERE_BASE_URL}`;
        return await (await fetch(endpoint)).json();
  },
    fetchMoviesonSearch: async(search: string) => {
    const endpoint: string = `${SEARCH_BASE_URL}${search}`;
        return await (await fetch(endpoint)).json();
  }
}