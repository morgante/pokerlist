import { Users } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { formatWaitTime } from '@/lib/utils/date';
import type { Player } from '@/types';

export function WaitingList({ players }: { players: Player[] }) {
  const sortedPlayers = players;

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
                className="flex items-center justify-between p-3 bg-accent rounded-lg"
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