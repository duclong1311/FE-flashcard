import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/home/loadable";
import { PageNotFound } from "../../pages/notfound/loadable";
import LoginPage from "../../pages/auth/login";
import RegisterPage from "../../pages/auth/register";
import { ProfilePage } from "../../pages/profile/loadable";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
