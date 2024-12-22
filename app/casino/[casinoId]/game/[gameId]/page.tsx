import { notFound } from 'next/navigation';
import { getCasinos, getCasino, getGame } from '@/lib/data';
import { BackButton } from '@/components/back-button';
import { WaitingList } from '@/components/waiting-list';

export async function generateStaticParams() {
  const casinos = await getCasinos();
  const params = [];

  for (const casino of casinos) {
    for (const game of casino.games) {
      params.push({
        casinoId: casino.id,
        gameId: game.id,
      });
    }
  }

  return params;
}

export default async function GamePage({
  params,
}: {
  params: { casinoId: string; gameId: string };
}) {
  const casino = await getCasino(params.casinoId);
  const game = await getGame(params.casinoId, params.gameId);

  if (!casino || !game) {
    notFound();
  }

  return (
    <main className="container max-w-md mx-auto p-4">
      <div className="mb-6">
        <BackButton href={`/casino/${params.casinoId}`} label="Back to casino" />
        <h1 className="text-2xl font-bold">{casino.name}</h1>
        <p className="text-muted-foreground">{game.name} - {game.stakes}</p>
      </div>
      <WaitingList players={game.waitingList} />
    </main>
  );
}