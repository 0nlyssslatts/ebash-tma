import { ReactNode } from 'react';

export function TextLight({ children }: { children: ReactNode }) {
  return <p className="font-montsserat text-base font-light mb-1">{children}</p>;
}
