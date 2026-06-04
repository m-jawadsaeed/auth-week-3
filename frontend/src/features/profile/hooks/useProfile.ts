import { useQuery } from "@tanstack/react-query";

import { getProfileApi } from "../../../api/user.api";

export const useProfile =
  () => {
    return useQuery({
      queryKey: ["profile"],

      queryFn: getProfileApi,

      staleTime:
        1000 * 60 * 5,
    });
  };