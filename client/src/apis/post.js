import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
});
// add token if it exists to header ['authorization']
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function deletePost(pid) {
  try {
    const res = await api.delete(`/posts/delete/${pid}`);
    return res.data;
  } catch (err) {
    throw {
      message: err.response.data.message,
      statusText: err.response.statusText,
      status: err.response.status,
    };
  }
}
