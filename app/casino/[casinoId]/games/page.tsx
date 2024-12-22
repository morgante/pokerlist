import { notFound } from 'next/navigation';
import { bravoClient } from '@/lib/api/bravo-client';
import { BackButton } from '@/components/back-button';
import { GameList } from '@/components/game-list';

export default async function CasinoGamesPage({
  params,
}: {
  params: Promise<{ casinoId: string }>;
}) {
  const { casinoId } = await params;

  try {
    const games = await bravoClient.getWaitlist(casinoId);

    return (
      <main className="container max-w-md mx-auto p-4">
        <div className="mb-6">
          <BackButton href="/" label="Back to casinos" />
          <h1 className="text-2xl font-bold">Active Games at {casinoId}</h1>
        </div>
        <GameList games={games} casinoId={casinoId} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching games", error);
    notFound();
  }
}