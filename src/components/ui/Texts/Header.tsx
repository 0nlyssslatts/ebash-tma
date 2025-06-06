import { ReactNode } from 'react';

export function Header({ children }: { children: string | ReactNode }) {
  return <h1 className="font-blackout text-8xl font-normal m-5 mt-10">{children}</h1>;
}
