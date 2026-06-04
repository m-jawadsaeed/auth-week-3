import { Link, useLocation } from "react-router-dom";

import { useLogout } from "../features/auth/hooks/useLogout";
import { useAuthStore } from "../features/auth/store/auth.store";

export default function Navbar() {
  const logout = useLogout();

  const location = useLocation();

  const user = useAuthStore(
    (state) => state.user
  );

  const handleLogout = () => {
    const refreshToken =
      localStorage.getItem(
        "refreshToken"
      );

    if (refreshToken) {
      logout.mutate(refreshToken);
    }
  };

  const linkClass = (
    path: string
  ) =>
    `px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <nav className="bg-white shadow border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600"
            >
              AuthShield
            </Link>

            <Link
              to="/"
              className={linkClass("/")}
            >
              Dashboard
            </Link>

            <Link
              to="/profile"
              className={linkClass(
                "/profile"
              )}
            >
              Profile
            </Link>

            {user?.role ===
              "ADMIN" && (
              <>
                <Link
                  to="/admin/users"
                  className={linkClass(
                    "/admin/users"
                  )}
                >
                  Users
                </Link>

                <Link
                  to="/admin/analytics"
                  className={linkClass(
                    "/admin/analytics"
                  )}
                >
                  Analytics
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold text-sm">
                {user?.name}
              </p>

              <p className="text-xs text-slate-500">
                {user?.role}
              </p>
            </div>

            <button
              onClick={
                handleLogout
              }
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}