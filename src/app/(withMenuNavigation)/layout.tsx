import type { PropsWithChildren } from 'react';

import { MenuNavigation } from '@/components/MenuNavigation/MenuNavigation';

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <main className="mb-[70px] max-w-[1024px] mx-auto w-full">
            {children}
            <MenuNavigation />
        </main>
    );
}
