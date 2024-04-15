import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
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

export async function loginUser(creds) {
  try {
    const res = await api.post(`/users/login`, creds);
    return res.data;
  } catch (err) {
    throw {
      message: err.response.data.message,
      statusText: err.response.statusText,
      status: err.response.status,
    };
  }
}

export async function signUpUser(userData) {
  try {
    const res = await api.post(`/users/signup`, userData);
    return res.data;
  } catch (err) {
    throw {
      message: err.response.data.message,
      statusText: err.response.statusText,
      status: err.response.status,
    };
  }
}

const apis = {
  loginUser,
  signUpUser,
};

export default apis;