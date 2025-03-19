import { ReactNode } from 'react';

export function Section({ children }: { children: ReactNode }) {
  return <div className="rounded px-5 py-3 w-[100%]">{children}</div>;
}
