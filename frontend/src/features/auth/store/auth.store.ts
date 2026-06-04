import { create } from "zustand";

import { persist } from "zustand/middleware";

import type {
  User,
} from "../../../types/auth.types";

interface AuthState {
  user: User | null;

  accessToken: string | null;

  setUser: (
    user: User | null
  ) => void;

  setAccessToken: (
    token: string | null
  ) => void;

  login: (
    user: User,
    accessToken: string,
    refreshToken: string
  ) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>()(
    persist(
      (set) => ({
        user: null,

        accessToken: null,

        setUser: (user) =>
          set({ user }),

        setAccessToken: (
          token
        ) =>
          set({
            accessToken: token,
          }),

        login: (
          user,
          accessToken,
          refreshToken
        ) => {
          localStorage.setItem(
            "refreshToken",
            refreshToken
          );

          set({
            user,
            accessToken,
          });
        },

        logout: () => {
          localStorage.removeItem(
            "refreshToken"
          );

          set({
            user: null,
            accessToken: null,
          });
        },
      }),
      {
        name: "auth-storage",
      }
    )
  );