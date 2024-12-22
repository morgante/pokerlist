import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BravoAPIError } from '@/lib/api/bravo-api';

interface ErrorDisplayProps {
  error: Error;
}

export function ErrorDisplay({ error }: ErrorDisplayProps) {
  if (error instanceof BravoAPIError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error fetching data</AlertTitle>
        <AlertDescription className="mt-2">
          <div className="space-y-2">
            <p>{error.message}</p>
            <details className="text-sm">
              <summary className="cursor-pointer">Technical details</summary>
              <div className="mt-2 space-y-1">
                <p>Endpoint: {error.endpoint}</p>
                {error.statusCode && <p>Status: {error.statusCode}</p>}
              </div>
            </details>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
}