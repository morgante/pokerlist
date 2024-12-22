"use client";

import { useEffect, useState } from 'react';
import { useLocation } from '@/hooks/use-location';
import { CasinoList } from './casino-list';
import { ErrorDisplay } from './error-display';
import { Loader2 } from 'lucide-react';
import type { CasinoLocation } from '@/lib/api/bravo-api';

export function LocationAwareCasinos() {
  const { coords, error: locationError, loading: locationLoading } = useLocation();
  const [casinos, setCasinos] = useState<CasinoLocation[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (coords) {
      fetch(`/api/casinos?lat=${coords.latitude}&lon=${coords.longitude}`)
        .then(async res => {
          const data = await res.json();
          if (!res.ok) {
            throw new Error(data.error || 'Failed to fetch casinos', {
              cause: {
                status: res.status,
                statusText: res.statusText,
                details: data.details,
                endpoint: data.endpoint
              }
            });
          }
          if (data.error) {
            throw new Error(data.error, {
              cause: {
                status: res.status,
                statusText: res.statusText,
                details: data.details,
                endpoint: data.endpoint
              }
            });
          }
          return data;
        })
        .then(setCasinos)
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }
  }, [coords]);

  if (locationLoading || loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-6 w-6 animate-spin" />
        <span className="ml-2">Finding nearby casinos...</span>
      </div>
    );
  }

  if (locationError) {
    return <ErrorDisplay error={new Error(locationError)} />;
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  console.log("casinos", casinos);

  return <CasinoList casinos={casinos} />;
}