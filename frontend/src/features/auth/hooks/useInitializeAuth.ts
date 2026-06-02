import {
  useEffect,
} from "react";

import {
  refreshApi,
} from "../../../api/auth.api";

import {
  useAuthStore,
} from "../store/auth.store";

export const useInitializeAuth =
  () => {

    const {
      login,
    } =
      useAuthStore();

    useEffect(() => {

      const initialize =
        async () => {

          try {

            const refreshToken =
              localStorage.getItem(
                "refreshToken"
              );

            if (
              !refreshToken
            ) return;

            const response =
              await refreshApi(
                refreshToken
              );

            const data =
              response.data;

            login(
              data.user,
              data.accessToken,
              data.refreshToken
            );

          } catch {

            localStorage.clear();
          }
        };

      initialize();

    }, []);
  };