import { create } from "zustand";

import type { User } from "../../../types/auth.types";

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
  create<AuthState>((set) => ({

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

      localStorage.clear();

      set({
        user: null,
        accessToken: null,
      });
    },
  }));