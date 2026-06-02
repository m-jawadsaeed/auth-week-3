import {
  useMutation,
} from "@tanstack/react-query";

import {
  registerApi,
} from "../../../api/auth.api";

import toast from "react-hot-toast";

export const useRegister =
  () => {

    return useMutation({

      mutationFn:
        registerApi,

      onSuccess: () => {

        toast.success(
          "Registration successful"
        );

        window.location.href =
          "/login";
      },

      onError: () => {

        toast.error(
          "Registration failed"
        );
      },
    });
  };