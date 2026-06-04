import {
  createBrowserRouter,
} from "react-router-dom";

import ProtectedRoute from "../components/protectedRoutes";

import GuestRoute from "../components/GuestRoute";

import LoginPage from "../features/auth/pages/loginPage";
import RegisterPage from "../features/auth/pages/registerPage";

import DashboardPage from "../features/dashboard/pages/dashboardPage";

import ProfilePage from "../features/profile/pages/ProfilePage";

import UsersPage from "../features/admin/pages/UsersPage";
import AnalyticsPage from "../features/admin/pages/AnalyticsPage";
import { Navigate } from "react-router-dom";

export const router =
  createBrowserRouter([
    {
      path: "/login",
      element: (
        <GuestRoute>
          <LoginPage />
        </GuestRoute>
      ),
    },

    {
      path: "/register",
      element: (
        <GuestRoute>
          <RegisterPage />
        </GuestRoute>
      ),
    },

    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
    },

    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      ),
    },

    {
      path: "/admin/users",
      element: (
        <ProtectedRoute role="ADMIN">
          <UsersPage />
        </ProtectedRoute>
      ),
    },

    {
      path: "/admin/analytics",
      element: (
        <ProtectedRoute role="ADMIN">
          <AnalyticsPage />
        </ProtectedRoute>
      ),
    },

    {
      path: "*",
      element: (
        <Navigate
          to="/"
          replace
        />
      ),
    },
  ]);