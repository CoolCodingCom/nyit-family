import { getTokenFromGoogle } from "../apis/user";

export async function requireAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    try {
      const data = await getTokenFromGoogle();
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      return true;
    } catch (err) {
      console.error("Error during Google login:", err.message);
      return false;
    }
  } else {
    return true;
  }
}
