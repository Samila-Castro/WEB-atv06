import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333/"
});

api.interceptors.request.use(async (config) => {
    const login = JSON.parse(localStorage.getItem('@atividade-login') || '{}')
    if (login && login.token) {
      config.headers.Authorization = `Bearer ${login.token}`;
    }
    return config;
  });
export default api;