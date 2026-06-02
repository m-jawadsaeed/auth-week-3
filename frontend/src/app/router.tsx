import {
  createBrowserRouter,
} from "react-router-dom";

import ProtectedRoute
from "../components/protectedRoutes";

import LoginPage
from "../features/auth/pages/loginPage";

import RegisterPage
from "../features/auth/pages/registerPage";
import DashboardPage
from "../features/dashboard/pages/dashboardPage";

import ProfilePage
from "../features/profile/pages/ProfilePage";

import UsersPage
from "../features/admin/pages/UsersPage";

import AnalyticsPage
from "../features/admin/pages/AnalyticsPage";

export const router =
  createBrowserRouter([

    {
        path:"/login",
        element:<LoginPage />
    },

    {
        path:"/register",
        element:<RegisterPage />
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
      path:"/admin/users",

      element:(
        <ProtectedRoute
        role="ADMIN"
        >
        <UsersPage />
        </ProtectedRoute>
      )
    },
    {
      path:"/admin/analytics",

      element:(
        <ProtectedRoute
        role="ADMIN"
        >
        <AnalyticsPage />
        </ProtectedRoute>
      )
    },
  ]);