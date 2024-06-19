import { getTokenFromGoogle } from "../apis/user";
import { checkToken } from "../apis/auth";

export async function requireAuth(request) {
  // check if first google login
  const ifGoogleFirstLogin =
    new URL(request.url).searchParams.get("google") || false;
  if (ifGoogleFirstLogin) {
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
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    } else {
      let isValid = false;
      try {
        const data = await checkToken(token);
        isValid = data.isValid;
      } catch (err) {
        console.error("Error during authenticating token:", err.message);
      }
      return isValid;
    }
  }
}
