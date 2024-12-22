import { bravoClient } from '@/lib/api/bravo-client';
import { LocationAwareCasinos } from '@/components/location-aware-casinos';

export default async function Home() {
  // We'll fetch casinos client-side based on location
  return (
    <main className="container max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Nearby Casinos</h1>
      <LocationAwareCasinos />
    </main>
  );
}