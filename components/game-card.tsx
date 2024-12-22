import Link from 'next/link';
import { Users } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import type { WaitlistEntry } from '@/lib/api/bravo-api';

interface GameCardProps {
  game: {
    gamecode: string;
    gamename: string;
    players: WaitlistEntry[];
  };
  casinoId: string;
}

export function GameCard({ game, casinoId }: GameCardProps) {
  const targetPlayer = "Martin";

  // Find position of player named "Morgante" in any game's waitlist
  const position = game.players.findIndex(player => player.playername.toLowerCase().includes(targetPlayer.toLowerCase()));

  return (
    <Card>
      <Link href={`/casino/${casinoId}/games/${game.gamecode}`}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{game.gamename}</h2>
            <div className={`flex items-center rounded-full px-2 py-1 ${position !== -1
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-muted-foreground'
              }`}>
              <Users className="w-4 h-4 mr-1" />
              <span>{position !== -1 ? position + 1 : game.players.length}</span>
            </div>
          </div>
        </CardHeader>
      </Link>
    </Card>
  );
}