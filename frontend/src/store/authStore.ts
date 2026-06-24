/**
 * Auth store stub.
 *
 * This uses a simple module-level variable pattern until you add Zustand.
 * To add Zustand: `npm install zustand`, then replace this file with a real store.
 *
 * @example with Zustand:
 * import { create } from "zustand";
 * export const useAuthStore = create<AuthState>((set) => ({ ... }));
 */

export interface AuthState {
  token: string | null;
  userId: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  clearAuth: () => void;
}

// Minimal implementation — replace with Zustand or Context
let _token: string | null = localStorage.getItem("auth_token");

export const authStore: AuthState = {
  get token() { return _token; },
  get userId() { return null; /* decode from JWT when ready */ },
  get isAuthenticated() { return _token !== null; },
  setToken(token: string) {
    _token = token;
    localStorage.setItem("auth_token", token);
  },
  clearAuth() {
    _token = null;
    localStorage.removeItem("auth_token");
  },
};
