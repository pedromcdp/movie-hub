import axios from "axios"

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {
  api_key: process.env.REACT_APP_API_KEY,
  language: "pt-pt",
}

const requests = {
  get: async (url, params) => {
    const request = await axios.get(url, { params })
    return request.data
  },
}

const Movies = {
  getTrendingTitles: (type, time_window, page) =>
    requests.get(`/trending/${type}/${time_window}`, { page }),
  getMovie: (type, query) => requests.get(`/${type}/${query}`),
  getSearchTerm: (categorie, searchTerm, page) =>
    requests.get(`/search/${categorie}`, { query: searchTerm, page }),
  getDiscover: (type, sort, page) =>
    requests.get(`/discover/${type}`, { sort_by: sort, page }),
  getCast: (type, id) => requests.get(`/${type}/${id}/credits`),
}

export default Movies
