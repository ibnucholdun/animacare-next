import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers,
});

instance.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.request.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default instance;
