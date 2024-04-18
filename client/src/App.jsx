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
import { action as loginAction } from "./users/pages/Login";
import { action as signUpAction } from "./users/pages/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="signup" element={<Signup />} action={signUpAction} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
