import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Courses from "../pages/dashboard/Courses";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Auth from "../layouts/Auth";
import HomePage from "../pages/landing/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        title: "Home"
      }
    ]
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />
      }
    ]
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
        title: "Dashboard"
      },
      {
        path: "/courses",
        element: <Courses />,
        title: "Courses"
      },
      {
        path: "/class",
        element: <div>Class</div>,
        title: "Class"
      },
      {
        path: "/add",
        element: <div>Add New File</div>,
        title: "Add-file"
      }
    ]
  },
  {
    path: "*",
    element: <div className="h-screen flex justify-center items-center text-3xl">Page Not Found</div>,
    title: "404 Page"
  }

])

export default router;