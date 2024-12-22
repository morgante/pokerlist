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
    // Fetch both casino details and games in parallel
    const [casinoDetail, games] = await Promise.all([
      bravoClient.getCasinoDetail(casinoId),
      bravoClient.getWaitlist(casinoId)
    ]);

    if (!casinoDetail) {
      notFound();
    }

    return (
      <main className="container max-w-md mx-auto p-4">
        <div className="mb-6">
          <BackButton href="/" label="Back to casinos" />
          <h1 className="text-2xl font-bold">
            {casinoDetail.casinodescription}
          </h1>
        </div>
        <GameList games={games} casinoId={casinoId} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching casino data", error);
    notFound();
  }
}