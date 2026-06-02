import {
  useQuery,
} from "@tanstack/react-query";

import {
  getUsersApi,
} from "../../../api/user.api";

export const useUsers =
  () => {

    return useQuery({

      queryKey: [
        "users",
      ],

      queryFn:
        getUsersApi,
    });
  };