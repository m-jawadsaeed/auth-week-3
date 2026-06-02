import api from "./axios";

export const getProfileApi =
  async () => {

    const response =
      await api.get(
        "/users/profile"
      );

    return response.data;
  };

export const getUsersApi =
  async () => {

    const response =
      await api.get(
        "/users"
      );

    return response.data;
  };

export const getAnalyticsApi =
  async () => {

    const response =
      await api.get(
        "/users/analytics"
      );

    return response.data;
  };

export const getRoleStatsApi =
  async () => {
    const response =
      await api.get(
        "/users/stats/roles"
      );

    return response.data;
};

export const getSignupStatsApi =
  async () => {

    const response =
      await api.get(
        "/users/stats/signups"
      );

    return response.data;
  };
  export const updateProfileApi =
  async (
    data: {
      name: string;
    }
  ) => {

    const response =
      await api.patch(
        "/users/profile",
        data
      );

    return response.data;
  };

  export const updateRoleApi =
  async (
    userId: string,
    role: string
  ) => {

    const response =
      await api.patch(
        `/users/${userId}/role`,
        {
          role,
        }
      );

    return response.data;
  };