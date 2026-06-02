import {
  Navigate,
} from "react-router-dom";

import type {
  ReactNode,
} from "react";

import {
  useAuthStore,
} from "../features/auth/store/auth.store";

interface Props {

  children: ReactNode;

  role?: string;
}

export default function ProtectedRoute({
  children,
  role,
}: Props) {

  const { user } =
    useAuthStore();

  if (!user) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (
    role &&
    user.role !== role
  ) {

    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <>{children}</>;
}