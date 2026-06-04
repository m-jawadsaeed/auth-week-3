import { useEffect } from "react";

import { refreshApi } from "../../../api/auth.api";
import { getProfileApi } from "../../../api/user.api";

import { useAuthStore } from "../store/auth.store";

export const useInitializeAuth = () => {
  const login = useAuthStore((state) => state.login);
  const setAuthLoading = useAuthStore((state) => state.setAuthLoading);

  useEffect(() => {
    const init = async () => {
      try {
        setAuthLoading(true);

        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) return;

        const refreshResponse = await refreshApi(refreshToken);

        const refreshData = refreshResponse.data.data;

        const profileResponse = await getProfileApi();

        const user =
          profileResponse.data.data ?? profileResponse.data;

        login(
          user,
          refreshData.accessToken,
          refreshData.refreshToken
        );
      } catch (err) {
        console.log(err);
        localStorage.clear();
      } finally {
        setAuthLoading(false);
      }
    };

    init();
  }, [login, setAuthLoading]);
};