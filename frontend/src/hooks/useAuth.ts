/**
 * useAuth — authentication hook stub.
 *
 * Wire this up to your auth provider (Firebase Auth, NextAuth, custom JWT, etc.)
 * Replace the stub state with real auth logic.
 */

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
}

// TODO: Replace with Zustand authStore or Context once backend is connected
export function useAuth() {
  // Stub — replace with real auth state
  const user: AuthUser | null = null;
  const isLoading = false;
  const isAuthenticated = user !== null;

  const login = async (_email: string, _password: string) => {
    // TODO: Call auth service / Firebase signIn
    throw new Error("Auth not yet implemented");
  };

  const logout = async () => {
    // TODO: Clear token / Firebase signOut
    throw new Error("Auth not yet implemented");
  };

  const register = async (_email: string, _password: string, _displayName: string) => {
    // TODO: Call auth service register endpoint
    throw new Error("Auth not yet implemented");
  };

  return { user, isLoading, isAuthenticated, login, logout, register };
}
