import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

import { useInitializeAuth } from "./features/auth/hooks/useInitializeAuth";
import { useAuthStore } from "./features/auth/store/auth.store";

function App() {
  useInitializeAuth();

  const isAuthLoading = useAuthStore(
    (state) => state.isAuthLoading
  );

  if (isAuthLoading) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;
}

export default App;