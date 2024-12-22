import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDistance } from '@/lib/utils/distance';
import type { CasinoLocation } from '@/lib/api/bravo-api';

export function CasinoCard({ casino }: { casino: CasinoLocation }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">{casino.shortName}</h2>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{casino.city}, {casino.state}</span>
            </div>
          </div>
          <Badge variant="secondary">{formatDistance(casino.distance)}</Badge>
        </div>
      </CardHeader>
      {casino.enableGameList && (
        <CardContent>
          <Link
            href={`/casino/${casino.casinoID}/games`}
            className="block p-2 rounded-md hover:bg-accent transition-colors"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">View Games</span>
              <Badge variant="secondary">{casino.gameCount || 0} active</Badge>
            </div>
          </Link>
        </CardContent>
      )}
    </Card>
  );
}