import { redirect } from "react-router-dom";
import { requireAuth } from "../../../utils/util";

export async function protectedLoader(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = await requireAuth(request);
  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    );
  } else {
    return null;
  }
}

export default function ProtectedRoute({ children }) {
  return children;
}
