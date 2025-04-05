import type { PropsWithChildren } from 'react';
import { isMobile } from 'react-device-detect';

import { MenuNavigation } from '@/components/MenuNavigation/MenuNavigation';
import ProviderLayout from '@/components/Provider/Provider';
import { BackButton } from '@/components/ui/Buttons/BackButton';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main
      style={{
        marginBottom: `calc(${isMobile ? 90 : 60}px + var(--tg-safe-area-inset-bottom))`,
      }}
      className={`max-w-[1024px] mx-auto w-full relative`}
    >
      <BackButton />
      <ProviderLayout>{children}</ProviderLayout>
      <MenuNavigation />
    </main>
  );
}
