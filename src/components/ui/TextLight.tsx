import { cn } from '@/lib/utils/utils';
import { ReactNode } from 'react';

export function TextLight({ children, className }: { children: ReactNode, className?: string }) {
  return <p className={cn('font-montsserat font-light mb-1', className)}>{children}</p>;
}
