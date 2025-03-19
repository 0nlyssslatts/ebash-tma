import { ReactNode } from 'react';

export function TextLighter({ children }: { children: ReactNode }) {
  return <p className="font-montsserat text-sm font-extralight mb-1">{children}</p>;
}
