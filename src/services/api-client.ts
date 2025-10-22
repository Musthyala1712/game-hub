// src/services/api-client.ts
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_API_KEY is not defined in the .env file");
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
  },
});
