import axios from "axios";
import { lang } from "../constants";
let langValue = localStorage.getItem("i18nextLng")

const publicAxios = axios.create({
  
  baseURL: `https://old-khiva-server.onrender.com/api/ru`,
  // baseURL: `http://localhost:5000/api/${lang}`,
});

publicAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("acsess-token");

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default publicAxios;
