import {
  useQuery,
} from "@tanstack/react-query";

import {
  getAnalyticsApi,
} from "../../../api/user.api";

export const useAnalytics =
  () => {

    return useQuery({

      queryKey: [
        "analytics",
      ],

      queryFn:
        getAnalyticsApi,
    });
  };