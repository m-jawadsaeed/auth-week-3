import api from "./axios";

import type {
  LoginPayload,
  RegisterPayload,
} from "../types/auth.types";

export const loginApi =
  async (
    payload: LoginPayload
  ) => {

    const response =
      await api.post(
        "/auth/login",
        payload
      );

    return response.data;
  };

export const registerApi =
  async (
    payload: RegisterPayload
  ) => {

    const response =
      await api.post(
        "/auth/register",
        payload
      );

    return response.data;
  };

export const refreshApi =
  async (
    refreshToken: string
  ) => {

    const response =
      await api.post(
        "/auth/refresh",
        {
          refreshToken,
        }
      );

    return response.data;
  };

export const logoutApi =
  async (
    refreshToken: string
  ) => {

    const response =
      await api.post(
        "/auth/logout",
        {
          refreshToken,
        }
      );

    return response.data;
  };