import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: number;
  name: string;
  email: string;
  role?: string;
};

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;

  isAuthLoading: boolean;

  login: (user: User, accessToken: string, refreshToken: string) => void;
  logout: () => void;
  setAuthLoading: (state: boolean) => void;
  setAccessToken: (token: string) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,

      isAuthLoading: true,

      login: (user, accessToken, refreshToken) =>
        set({ user, accessToken, refreshToken }),

      logout: () => {
        localStorage.removeItem("refreshToken"); // IMPORTANT
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
        });
      },

      setAuthLoading: (state) =>
        set({ isAuthLoading: state }),

      setAccessToken: (token) =>
        set({ accessToken: token }),
    }),
    {
      name: "auth-storage",
    }
  )
);