import { ReactNode } from 'react';

export function Text({ children }: { children: ReactNode }) {
  return <p className="font-montsserat text-xl font-medium mb-1">{children}</p>;
}
