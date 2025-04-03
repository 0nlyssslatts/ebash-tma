import { ReactNode } from 'react';
import { cn } from '@/lib/utils/utils';

export function Section({ children, className }: { children: ReactNode, className?: string }) {
  return <div className={cn('rounded w-full', className)}>{children}</div>;
}
