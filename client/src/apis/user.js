import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
});

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

<<<<<<< HEAD:client/src/apis/index.js
export async function deletePost(pid) {
  try {
    const res = await api.delete(`/posts/delete/${pid}`);
    return res.data;
  } catch (err) {
=======
export async function getTokenFromGoogle() {
  try {
    const res = await api.get("/auth/google/login/success", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
>>>>>>> 3b11a2feb55367309ce193d86c0e52abb84f48bb:client/src/apis/user.js
    throw {
      message: err.response.data.message,
      statusText: err.response.statusText,
      status: err.response.status,
    };
  }
}
<<<<<<< HEAD:client/src/apis/index.js


const apis = {
  loginUser,
  signUpUser,
  deletePost,
};

export default apis;
=======
>>>>>>> 3b11a2feb55367309ce193d86c0e52abb84f48bb:client/src/apis/user.js
