import { useEffect } from "react";

import { refreshApi } from "../../../api/auth.api";
import { getProfileApi } from "../../../api/user.api";

import { useAuthStore } from "../store/auth.store";

export const useInitializeAuth = () => {
  const login = useAuthStore(
    (state) => state.login
  );

  useEffect(() => {
    const initialize = async () => {
      try {
        const refreshToken =
          localStorage.getItem(
            "refreshToken"
          );

        if (!refreshToken) {
          return;
        }

        const refreshResponse =
          await refreshApi(
            refreshToken
          );

        const refreshData =
          refreshResponse.data.data;

        const profileResponse =
          await getProfileApi();

        const user =
          profileResponse.data.data ??
          profileResponse.data;

        login(
          user,
          refreshData.accessToken,
          refreshData.refreshToken
        );
      } catch (error) {
        console.error(error);

        localStorage.clear();
      }
    };

    initialize();
  }, [login]);
};