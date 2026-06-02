import {
  RouterProvider,
} from "react-router-dom";

import {
  router,
} from "./app/router";

import {
  useInitializeAuth,
} from "./features/auth/hooks/useInitializeAuth";

function App() {

  useInitializeAuth();

  return (
    <RouterProvider
      router={router}
    />
  );
}

export default App;