import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BackButton() {
  return (
    <Link href="/">
      <Button variant="ghost" size="sm" className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Casinos
      </Button>
    </Link>
  );
}