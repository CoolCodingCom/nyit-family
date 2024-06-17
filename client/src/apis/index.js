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

export async function verifyEmail(uniqueString) {
  try {
    const res = await api.get(`/users/verify/${uniqueString}`);
    return res.data;
  } catch (err) {
    throw {
      message: err.response.data.message,
      statusText: err.response.statusText,
      status: err.response.status,
    };
  }
}

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


const apis = {
  loginUser,
  signUpUser,
  deletePost,
};

export default apis;
