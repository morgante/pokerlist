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
  return (
    <Card>
      <Link href={`/casino/${casinoId}/games/${game.gamecode}`}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{game.gamename}</h2>
            <div className="flex items-center text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              <span>{game.players.length}</span>
            </div>
          </div>
        </CardHeader>
      </Link>
    </Card>
  );
}