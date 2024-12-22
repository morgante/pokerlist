import type { Player } from "@/types";

export function usePlayer() {
  const name = "Danny";
  return {
    player: name,
    isTarget: (player: Player) =>
      player.playername.toLowerCase().includes(name.toLowerCase()),
  };
}
