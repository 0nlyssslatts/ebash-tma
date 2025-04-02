import { ReactNode } from 'react';

export function DarkSection({ children }: { children: ReactNode }) {
  return <div className="bg-secondary rounded px-5 py-3 w-full mb-5">{children}</div>;
}
