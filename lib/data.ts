import { Casino } from '@/types';

// Simulated data - in a real app, this would be fetched from a database
export async function getCasinos(): Promise<Casino[]> {
  return [
    {
      id: '1',
      name: 'Golden Gates Casino',
      address: '123 Main St, Las Vegas, NV',
      distance: 0.8,
      games: [
        {
          id: '1',
          name: 'No Limit Hold\'em',
          type: 'poker',
          stakes: '1/2',
          waitingList: [
            { id: '1', name: 'John Smith', joinedAt: '2024-03-26T10:00:00Z' },
            { id: '2', name: 'Alice Johnson', joinedAt: '2024-03-26T10:15:00Z' },
          ],
        },
        {
          id: '2',
          name: 'Blackjack',
          type: 'blackjack',
          stakes: '$25 min',
          waitingList: [
            { id: '3', name: 'Bob Wilson', joinedAt: '2024-03-26T10:30:00Z' },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Silver Star Casino',
      address: '456 Strip Ave, Las Vegas, NV',
      distance: 1.2,
      games: [
        {
          id: '3',
          name: 'Pot Limit Omaha',
          type: 'poker',
          stakes: '2/5',
          waitingList: [
            { id: '4', name: 'Emma Davis', joinedAt: '2024-03-26T09:45:00Z' },
            { id: '5', name: 'Mike Brown', joinedAt: '2024-03-26T10:20:00Z' },
          ],
        },
      ],
    },
  ];
}

export async function getCasino(id: string): Promise<Casino | undefined> {
  const casinos = await getCasinos();
  return casinos.find(casino => casino.id === id);
}

export async function getGame(casinoId: string, gameId: string) {
  const casino = await getCasino(casinoId);
  return casino?.games.find(game => game.id === gameId);
}