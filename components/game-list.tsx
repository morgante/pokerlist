import { GameCard } from './game-card';
import type { WaitlistEntry } from '@/lib/api/bravo-api';

interface GameListProps {
  games: Array<{
    gamecode: string;
    gamename: string;
    players: WaitlistEntry[];
  }>;
  casinoId: string;
}

export function GameList({ games, casinoId, targetPlayer }: GameListProps) {
  return (
    <div className="space-y-4">
      {games.map((game) => (
        <GameCard
          key={game.gamecode}
          game={game}
          casinoId={casinoId}
        />
      ))}
    </div>
  );
}