import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SessionLength } from "../types";

type FilterStore = {
  sessionLength: SessionLength;
  playerCountRange: [number, number];
  selectedPlayers: string[];
  playerSearch: string;

  setSessionLength: (value: SessionLength) => void;
  setPlayerCountRange: (value: [number, number]) => void;
  togglePlayer: (playerName: string) => void;
  setPlayerSearch: (value: string) => void;
  resetFilters: () => void;
};

const defaultState = {
  sessionLength: "flex" as SessionLength,
  playerCountRange: [2, 16] as [number, number],
  selectedPlayers: [] as string[],
  playerSearch: "",
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      ...defaultState,

      setSessionLength: (value) => set({ sessionLength: value }),

      setPlayerCountRange: (value) => set({ playerCountRange: value }),

      togglePlayer: (playerName) =>
        set((state) => ({
          selectedPlayers: state.selectedPlayers.includes(playerName)
            ? state.selectedPlayers.filter((name) => name !== playerName)
            : [...state.selectedPlayers, playerName],
        })),

      setPlayerSearch: (value) => set({ playerSearch: value }),

      resetFilters: () => set(defaultState),
    }),
    {
      name: "game-filters", // localStorage key
    },
  ),
);
