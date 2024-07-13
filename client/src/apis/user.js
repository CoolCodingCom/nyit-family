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

export async function getTokenFromGoogle() {
  try {
    const res = await api.get("/auth/google/login/success", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw {
      message: err.response.data.message,
      statusText: err.response.statusText,
      status: err.response.status,
    };
  }
}

export async function getUserById(uid) {
  try {
    const res = await api.get(`/users/${uid}`);
    return res.data;
  } catch (err) {
    throw {
      message: err.response.data.message,
      statusText: err.response.statusText,
      status: err.response.status,
    };
  }
}

export async function getUsersByQueryKey(qkey) {
  try {
    const res = await api.get(`/search/${qkey}`);
    return res.data;
  } catch (err) {
    throw {
      message: err.response.data.message,
      statusText: err.response.statusText,
      status: err.response.status,
    };
  }
}