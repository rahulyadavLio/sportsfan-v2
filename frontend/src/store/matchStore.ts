import type { Match } from "@/types/match";

/**
 * Match store stub — holds live match data and selected match context.
 * Replace with Zustand: `create<MatchState>((set) => ({...}))`
 */
export interface MatchState {
  liveMatches: Match[];
  selectedMatch: Match | null;
  setLiveMatches: (matches: Match[]) => void;
  setSelectedMatch: (match: Match | null) => void;
}

let _liveMatches: Match[] = [];
let _selectedMatch: Match | null = null;

export const matchStore: MatchState = {
  get liveMatches() { return _liveMatches; },
  get selectedMatch() { return _selectedMatch; },
  setLiveMatches(matches) { _liveMatches = matches; },
  setSelectedMatch(match) { _selectedMatch = match; },
};
