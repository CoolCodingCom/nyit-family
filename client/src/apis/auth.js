import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
});

export async function checkToken(token) {
  try {
    const res = await api.post(`/auth/token`, { token });
    return res.data;
  } catch (err) {
    throw {
      message: err.response.data.message,
      statusText: err.response.statusText,
      status: err.response.status,
    };
  }
}
