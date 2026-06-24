import type { AuthUser } from "@/hooks/useAuth";

/**
 * User profile store stub.
 * Replace with Zustand: `create<UserState>((set) => ({...}))`
 */
export interface UserState {
  profile: AuthUser | null;
  setProfile: (user: AuthUser) => void;
  clearProfile: () => void;
}

let _profile: AuthUser | null = null;

export const userStore: UserState = {
  get profile() { return _profile; },
  setProfile(user: AuthUser) { _profile = user; },
  clearProfile() { _profile = null; },
};
