import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import {
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  queryClient,
} from "./app/queryClient";

import {
  Toaster,
} from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <React.StrictMode>

    <QueryClientProvider
      client={queryClient}
    >

      <Toaster />

      <App />

    </QueryClientProvider>

  </React.StrictMode>
);