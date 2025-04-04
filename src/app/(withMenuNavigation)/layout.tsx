import type { PropsWithChildren } from 'react';

import { MenuNavigation } from '@/components/MenuNavigation/MenuNavigation';
import { BackButton } from '@/components/ui/Buttons/BackButton';
import ProviderLayout from '@/components/Provider/Provider';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="mb-[60px] max-w-[1024px] mx-auto w-full relative">
      <BackButton />
      <ProviderLayout>{children}</ProviderLayout>
      <MenuNavigation />
    </main>
  );
}
