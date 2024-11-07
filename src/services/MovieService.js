const API_KEY = 'ee7f1a23';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === 'True') {
      return data.Search; 
    } else {
      return []; 
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return []; 
  }
};


export const fetchRecommendedMovies = async (query = 'comedy') => {
    try {
      const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        return data.Search; 
      } else {
        throw new Error(data.Error);
      }
    } catch (error) {
      console.error("Error fetching recommended movies:", error);
      return [];
    }
  };


export const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        return data; 
      } else {
        throw new Error(data.Error);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;
    }
  };
  