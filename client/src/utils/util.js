import { getTokenFromGoogle } from "../apis/user";

export async function requireAuth(request) {
  // check if first google login
  const ifGoogleLogin =
    new URL(request.url).searchParams.get("google") || false;
  if (ifGoogleLogin) {
    try {
      const data = await getTokenFromGoogle();
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
    } catch (err) {
      console.error("Error during Google login:", err.message);
      return false;
    }
  }
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  } else {
    return true;
  }
}
