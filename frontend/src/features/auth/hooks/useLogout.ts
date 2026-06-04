import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../../api/auth.api";
import { useAuthStore } from "../store/auth.store";

export const useLogout = () => {
  const logoutStore = useAuthStore((state) => state.logout);
  const refreshToken = useAuthStore((state) => state.refreshToken);

  return useMutation({
    mutationFn: async () => {
      if (refreshToken) {
        await logoutApi(refreshToken);
      }
    },

    onSettled: () => {
      logoutStore();
      localStorage.clear();
      window.location.href = "/login";
    },
  });
};