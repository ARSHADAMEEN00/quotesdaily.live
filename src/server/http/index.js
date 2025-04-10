// eslint-disable-next-line import/no-cycle
import { createAxiosInstance } from './request';

// Export the axiosInstance directly
// export { axiosInstance as axios };

export async function get(url, config = {}, type) {
  const axiosInstance = createAxiosInstance(type);
  return axiosInstance?.get(url, { ...config }).then((response) => response?.data);
}

export async function post(url, data, config = {}, type) {
  const axiosInstance = createAxiosInstance(type);
  return axiosInstance?.post(url, { ...data }, { ...config }).then((response) => response?.data);
}

export async function put(url, data, config = {}, type) {
  const axiosInstance = createAxiosInstance(type);
  return axiosInstance?.put(url, { ...data }, { ...config }).then((response) => response?.data);
}

export async function patch(url, data, config = {}, type) {
  const axiosInstance = createAxiosInstance(type);
  return axiosInstance?.patch(url, { ...data }, { ...config }).then((response) => response?.data);
}

export async function del(url, config = {}, type) {
  const axiosInstance = createAxiosInstance(type);
  return axiosInstance?.delete(url, { ...config }).then((response) => response?.data);
}
