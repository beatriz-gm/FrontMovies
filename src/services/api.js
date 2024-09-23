import axios from "axios";

export const api = axios.create({
  baseURL: 'https://backmovies-1.onrender.com'
});
