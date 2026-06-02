import {
  useQuery,
} from "@tanstack/react-query";

import {
  getSignupStatsApi,
} from "../../../api/user.api";

export const useSignupStats =
  () => {

    return useQuery({

      queryKey: [
        "signupStats",
      ],

      queryFn:
        getSignupStatsApi,
    });
  };