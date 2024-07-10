import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./home/components/Layout";
import Home from "./home/pages/Home";
import ProtectedRoute, {
  protectedLoader,
} from "./share/components/ProtectedRoute/ProtectedRoute";
import NotFound from "./share/components/NotFound";
import Login from "./users/pages/Login";
import Signup from "./users/pages/Signup";
import SignupMain from "./users/pages/SignupMain";
import SignupNeedVerify from "./users/pages/SignupNeedVerify";
import Verification from "./users/pages/Verification";
import Profile from "./users/pages/Profile.jsx";
import { action as loginAction } from "./users/pages/Login";
import { action as signUpAction } from "./users/pages/SignupMain";
import { ScrollProvider } from "./share/context/scroll-context.jsx";
import ProfilePosts from "./users/pages/ProfilePosts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
        loader={async ({ request }) => await protectedLoader(request)}
      >
        <Route index element={<Home />} />
        <Route path=":id" element={<Profile />}>
          <Route index element={<ProfilePosts />} />
          <Route path="replies" element={<h2>Replies</h2>} />
          <Route path="subs" element={<h2>subs</h2>} />
          <Route path="highlights" element={<h2>highlights</h2>} />
          <Route path="media" element={<h2>media</h2>} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} action={loginAction} />

      <Route path="/signup" element={<Signup />}>
        <Route index element={<SignupMain />} action={signUpAction}></Route>
        <Route path="verification" element={<SignupNeedVerify />}></Route>
        <Route path="verification/:uniqueString" element={<Verification />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return (
    <ScrollProvider>
      <RouterProvider router={router} />{" "}
    </ScrollProvider>
  );
}

export default App;
