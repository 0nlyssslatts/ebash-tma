import { ReactNode } from 'react';

export function TextLight({ children }: { children: ReactNode }) {
  return <p className="font-montsserat text-base font-extralight">{children}</p>;
}
