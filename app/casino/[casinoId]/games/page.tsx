import { notFound } from 'next/navigation';
import { bravoClient } from '@/lib/api/bravo-client';
import { BackButton } from '@/components/back-button';
import { GameList } from '@/components/game-list';

export default async function CasinoGamesPage({
  params,
}: {
  params: { casinoId: string };
}) {
  try {
    const games = await bravoClient.getWaitlist(params.casinoId);
    
    return (
      <main className="container max-w-md mx-auto p-4">
        <div className="mb-6">
          <BackButton />
          <h1 className="text-2xl font-bold">Active Games</h1>
        </div>
        <GameList games={games} casinoId={params.casinoId} />
      </main>
    );
  } catch (error) {
    notFound();
  }
}