import {
  useMutation,
} from "@tanstack/react-query";

import {
  logoutApi,
} from "../../../api/auth.api";

import {
  useAuthStore,
} from "../store/auth.store";

export const useLogout = () => {
  const { logout: clearStore } = useAuthStore.getState();
  const refreshToken = useAuthStore.getState().refreshToken;

  return useMutation({
    mutationFn: async () => {
      try {
        if (refreshToken) {
          await logoutApi(refreshToken);
        }
      } catch (err) {
        console.log("Logout API failed, forcing local logout", err);
      }
    },

    onSettled: () => {
      clearStore();
      localStorage.clear();
      window.location.href = "/login";
    },
  });
};