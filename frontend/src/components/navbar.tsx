import { Link } from "react-router-dom";

import { useLogout } from "../features/auth/hooks/useLogout";

import { useAuthStore } from "../features/auth/store/auth.store";

export default function Navbar() {
  const logout = useLogout();

  const user = useAuthStore((state) => state.user);

  return (
    <nav>
      <Link to="/">Dashboard</Link>

      <Link to="/profile">Profile</Link>

      {user?.role === "ADMIN" && (
        <>
          <Link to="/admin/users">Users</Link>

          <Link to="/admin/analytics">Analytics</Link>
        </>
      )}

      <button
        onClick={() => {
          const refreshToken = localStorage.getItem("refreshToken");

          if (refreshToken) {
            logout.mutate(refreshToken);
          }
        }}
      >
        Logout
      </button>
    </nav>
  );
}
