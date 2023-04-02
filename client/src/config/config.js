export const TIMEOUT_SECS = 30;
export const SEARCH_RESULTS_PER_PAGE = 12;
export const RANDOM_RESULTS_PER_PAGE = 12;
export const ALL_SUGEGSTIONS_RESULTS_PER_PAGE = 20;
export const YOUTUBE_RESULTS_PER_PAGE = 5;
// export const SIMILAR_RESULTS_NUM = 4;
export const BOOKMARKS_PER_PAGE = 4;
export const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyASgDRVrS92SRmEPJ-KgT1crYkk_g9VQvo&maxResults=10&order=viewCount&type=video`;

export const BASE_URL = 'https://api.spoonacular.com/recipes';
export const API_KEY = 'apiKey=09908c6a4e7e49669b60317179a383e9';
// d98e8989f48349e38f7bad430d139b47
// 09908c6a4e7e49669b60317179a383e9

export const CATEGORIES_URL = `${BASE_URL}/complexSearch?type=&number=6&${API_KEY}`;
// export const LOCAL_SERVER_URL = 'https://resipis-kdcz.onrender.com';
export const LOCAL_SERVER_URL = process.env.REACT_APP_BACKEND_URL;
