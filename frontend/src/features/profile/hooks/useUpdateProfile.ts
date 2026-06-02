import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  updateProfileApi,
} from "../../../api/user.api";

import toast from "react-hot-toast";

export const useUpdateProfile =
  () => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn:
        updateProfileApi,

      onMutate:
        async (
          newData
        ) => {

          await queryClient
            .cancelQueries({
              queryKey: [
                "profile",
              ],
            });

          const previousProfile =
            queryClient.getQueryData(
              [
                "profile",
              ]
            );

          queryClient.setQueryData(
            [
              "profile",
            ],

            (
              old: any
            ) => {

              if (
                !old
              )
                return old;

              return {

                ...old,

                data: {

                  ...old.data,

                  name:
                    newData.name,
                },
              };
            }
          );

          return {
            previousProfile,
          };
        },

      onError:
        (
          error,
          variables,
          context
        ) => {

          queryClient.setQueryData(
            [
              "profile",
            ],

            context?.previousProfile
          );

          toast.error(
            "Update failed"
          );
        },

      onSuccess:
        () => {

          toast.success(
            "Profile updated"
          );
        },

      onSettled:
        () => {

          queryClient.invalidateQueries({
            queryKey: [
              "profile",
            ],
          });
        },
    });
  };