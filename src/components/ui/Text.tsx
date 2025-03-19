import { ReactNode } from 'react';

export function Text({ children }: { children: ReactNode }) {
  return <p className="font-montsserat text-2xl font-medium">{children}</p>;
}
