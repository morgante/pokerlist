import { Users } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { formatWaitTime } from '@/lib/utils/date';
import type { Player } from '@/types';
import { usePlayer } from '@/hooks/use-player';

export function WaitingList({ players }: { players: Player[] }) {
  const sortedPlayers = players;
  const { isTarget } = usePlayer();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2">
        <Users className="w-5 h-5" />
        <h2 className="text-xl font-semibold">Waiting List</h2>
      </CardHeader>
      <CardContent>
        {sortedPlayers.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No players waiting
          </p>
        ) : (
          <div className="space-y-4">
            {sortedPlayers.map((player, index) => (
              <div
                key={`${player.playername}-${player.entrytime}`}
                className={`flex items-center justify-between p-3 rounded-lg ${isTarget(player) ? 'bg-green-500/20' : 'bg-accent'
                  }`}
              >
                <div>
                  <div className="font-medium">
                    {index + 1}. {player.playername}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Joined {formatWaitTime(player.entrytime)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}