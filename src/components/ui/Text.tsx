import { cn } from '@/lib/utils/utils';
import { ReactNode } from 'react';

export function Text({ children, className }: { children: ReactNode, className?: string }) {
  return <p className={cn('font-montsserat text-xl font-medium mb-1', className)}>{children}</p>;
}
