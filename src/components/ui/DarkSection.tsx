import { ReactNode } from 'react';

import { cn } from '@/lib/utils/utils';

export function DarkSection({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('bg-secondary rounded px-5 py-3 w-full mb-5', className)}>{children}</div>;
}
