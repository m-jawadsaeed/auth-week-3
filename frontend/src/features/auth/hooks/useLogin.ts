import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../api/auth.api";
import { useAuthStore } from "../store/auth.store";
import toast from "react-hot-toast";

export const useLogin = () => {

  const login =
    useAuthStore(
      (state) => state.login
    );

  return useMutation({

    mutationFn: loginApi,

    onSuccess: (response) => {

      const payload =
        response.data;

      login(
        payload.user,
        payload.accessToken,
        payload.refreshToken
      );

      toast.success(
        "Login successful"
      );

      window.location.replace("/");
    },

    onError: () => {

      toast.error(
        "Invalid credentials"
      );
    },
  });
};