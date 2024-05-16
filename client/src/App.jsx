import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./home/components/Layout";
import Home from "./home/pages/Home";
import NotFound from "./share/components/NotFound";
import Login from "./users/pages/Login";
import Signup from "./users/pages/Signup";
import SignupMain from "./users/pages/SignupMain";
import SignupVerification from "./users/pages/SignupVerification";
import Verification from "./home/pages/Verification";
import { action as loginAction } from "./users/pages/Login";
import { action as signUpAction } from "./users/pages/SignupMain";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="signup" element={<Signup />}>
        <Route index element={<SignupMain />} action={signUpAction}></Route>
        <Route path="verification" element={<SignupVerification />}></Route>
      </Route>
      <Route path="verification/:uniqueString" element={<Verification />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
