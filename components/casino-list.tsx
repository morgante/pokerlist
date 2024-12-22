import { CasinoCard } from './casino-card';
import type { CasinoLocation } from '@/lib/api/bravo-api';

export function CasinoList({ casinos }: { casinos: CasinoLocation[] }) {
  return (
    <div className="space-y-4">
      {casinos.map((casino) => (
        <CasinoCard key={casino.casinoID} casino={casino} />
      ))}
    </div>
  );
}