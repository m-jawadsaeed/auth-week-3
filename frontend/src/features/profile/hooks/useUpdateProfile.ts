import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  updateProfileApi,
} from "../../../api/user.api";

import toast from "react-hot-toast";

interface ProfileData {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
}

interface ProfileResponse {
  data: ProfileData;
}

interface UpdateProfilePayload {
  name: string;
}

export const useUpdateProfile = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn:
      updateProfileApi,

    onMutate: async (
      newData: UpdateProfilePayload
    ) => {
      await queryClient.cancelQueries({
        queryKey: ["profile"],
      });

      const previousProfile =
        queryClient.getQueryData<ProfileResponse>(
          ["profile"]
        );

      queryClient.setQueryData<ProfileResponse>(
        ["profile"],
        (old) => {
          if (!old) {
            return old;
          }

          return {
            ...old,
            data: {
              ...old.data,
              name: newData.name,
            },
          };
        }
      );

      return {
        previousProfile,
      };
    },

    onError: (
      _error,
      _variables,
      context
    ) => {
      if (
        context?.previousProfile
      ) {
        queryClient.setQueryData(
          ["profile"],
          context.previousProfile
        );
      }

      toast.error(
        "Update failed"
      );
    },

    onSuccess: () => {
      toast.success(
        "Profile updated"
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
};