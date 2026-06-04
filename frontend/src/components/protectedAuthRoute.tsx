import { useAuthStore } from "../features/auth/store/auth.store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAuthRoute = () => {
  const token = useAuthStore((state) => state.accessToken);

  // If already logged in → block login/register pages
  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedAuthRoute;