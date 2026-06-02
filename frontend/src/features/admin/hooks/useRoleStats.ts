import {
  useQuery,
} from "@tanstack/react-query";

import {
  getRoleStatsApi,
} from "../../../api/user.api";

export const useRoleStats =
  () => {

    return useQuery({

      queryKey: [
        "roleStats",
      ],

      queryFn:
        getRoleStatsApi,
    });
  };