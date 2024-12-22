import { notFound } from 'next/navigation';
import { bravoClient } from '@/lib/api/bravo-client';
import { BackButton } from '@/components/back-button';
import { WaitingList } from '@/components/waiting-list';

export default async function GamePage({
  params,
}: {
  params: Promise<{ casinoId: string; gameId: string }>;
}) {
  const { casinoId, gameId } = await params;

  try {
    const games = await bravoClient.getWaitlist(casinoId);
    const game = games.find((g) => g.gamecode === gameId);

    if (!game) {
      notFound();
    }

    return (
      <main className="container max-w-md mx-auto p-4">
        <div className="mb-6">
          <BackButton href={`/casino/${casinoId}/games`} label="Back to games" />
          <h1 className="text-2xl font-bold">{game.gamename}</h1>
        </div>
        <WaitingList players={game.players} />
      </main>
    );
  } catch (error) {
    notFound();
  }
}