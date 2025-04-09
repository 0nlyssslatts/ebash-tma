import { ReactNode } from 'react';

import { cn } from '@/lib/utils/utils';

export function TextLighter({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('font-montsserat text-sm font-extralight mb-1', className)}>{children}</p>;
}
