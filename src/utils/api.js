import axios from "axios";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

dotenvExpand(dotenv.config());

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
