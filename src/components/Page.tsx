import { ReactNode } from 'react';

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto p-4">{children}</div>
    </div>
  );
}
