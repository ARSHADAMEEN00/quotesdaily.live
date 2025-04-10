import axios from "axios";

export const TOKEN_PREFIX = "token";
export const decimal = 3;

const ENV = "dev";

// API Base URLs
const BASE_URLS = {
  dev: {
    OPERATION: "https://api.alquran.cloud/",
    FRONTEND: "/",
  },
  prod: {
    OPERATION: "/",
    FRONTEND: "/",
  },
};

const { OPERATION, FRONTEND } = BASE_URLS[ENV];

export const BASE_URL = OPERATION;
export const FROND_END_URL = FRONTEND;

export function createAxiosInstance() {
  const baseURL = BASE_URL;
  const axiosInstance = axios.create({ baseURL });
  return axiosInstance;
}
