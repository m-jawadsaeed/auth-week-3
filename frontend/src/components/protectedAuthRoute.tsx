import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../features/auth/store/auth.store";

const AuthGuard = () => {
  const token = useAuthStore((state) => state.accessToken);
  const isAuthLoading = useAuthStore((state) => state.isAuthLoading);

  // wait until auth init finishes
  if (isAuthLoading) return null;

  // if logged in → block login/register routes
  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;