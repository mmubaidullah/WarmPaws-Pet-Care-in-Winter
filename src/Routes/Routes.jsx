import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import ServiceAll from "../Pages/ServiceAll";
import PrductDetails from "../Pages/PrductDetails";
import ProtectedRoute from "../Components/ProtectedRoute";
import Profile from "../Pages/Profile";
import ForgotPassword from "../Pages/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServiceAll />,
      },
      {
        path: "/prducts/:id",
        element: (
          <ProtectedRoute>
            <PrductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/Signin",
        element: <Signin />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/forget-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);
