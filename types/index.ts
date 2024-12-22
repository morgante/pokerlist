import type { WaitlistEntry } from "@/lib/api/bravo-api";

export interface Casino {
  id: string;
  name: string;
  address: string;
  distance: number; // in miles
  games: Game[];
}

export interface Game {
  id: string;
  name: string;
  type: "poker" | "blackjack" | "roulette";
  stakes: string;
  waitingList: Player[];
}

export type Player = Pick<WaitlistEntry, "playername" | "entrytime">;
