import axios from "axios";
const instance = axios.create({
  baseURL: process.env.BACKEND,
});
export default instance;
