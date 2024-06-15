import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./home/components/Layout";
import Home from "./home/pages/Home";
import ProtectedRoute from "./share/components/ProtectedRoute/ProtectedRoute";
import AuthProvider from "./share/components/ProtectedRoute/AuthProvider";
import NotFound from "./share/components/NotFound";
import Login from "./users/pages/Login";
import Signup from "./users/pages/Signup";
import SignupMain from "./users/pages/SignupMain";
import SignupNeedVerify from "./users/pages/SignupNeedVerify";
import Verification from "./users/pages/Verification";
import { action as loginAction } from "./users/pages/Login";
import { action as signUpAction } from "./users/pages/SignupMain";

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
      >
        <Route index element={<Home />} />
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
