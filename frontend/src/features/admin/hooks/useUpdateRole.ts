import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateRoleApi } from "../../../api/user.api";

import type { User } from "../../../types/auth.types";
import type { ApiResponse } from "../../../types/api.types";
import type{
  UpdateRolePayload,
  UpdateRoleContext,
} from "../../../types/admin.types";

export const useUpdateRole = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ApiResponse<User>,
    Error,
    UpdateRolePayload,
    UpdateRoleContext<ApiResponse<User[]>>
  >({
    mutationFn: ({ id, role }) =>
      updateRoleApi(id, role),

    onMutate: async (updatedUser) => {
      await queryClient.cancelQueries({
        queryKey: ["users"],
      });

      const previousUsers =
        queryClient.getQueryData<
          ApiResponse<User[]>
        >(["users"]);

      queryClient.setQueryData<
        ApiResponse<User[]>
      >(["users"], (old) => {
        if (!old) return old;

        return {
          ...old,
          data: old.data.map((user) =>
            user.id === updatedUser.id
              ? {
                  ...user,
                  role: updatedUser.role,
                }
              : user
          ),
        };
      });

      return {
        previousUsers,
      };
    },

    onError: (
      _error,
      _variables,
      context
    ) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(
          ["users"],
          context.previousUsers
        );
      }

      toast.error("Role update failed");
    },

    onSuccess: () => {
      toast.success("Role updated");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};