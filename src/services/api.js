import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

})
// 8eef1f105dfbb5e8939df12d84546a10
// movie/now_playing?api_key=8eef1f105dfbb5e8939df12d84546a10&language=pt-BR

export default api;