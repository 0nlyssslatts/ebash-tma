'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { match } from 'path-to-regexp';

import { MENU_LINKS } from './menu-links';

export function MenuNavigation() {
    const pathname = usePathname();

    return (
        <div className="fixed rounded border-t bottom-0 left-1/2 flex h-[70px] w-full max-w-[1024px] z-110 -translate-x-1/2 items-center justify-between bg-secondary px-8">
            {MENU_LINKS.map(({ Icon, link }, index) => (
                <Link href={link} key={index}>
                    <Icon color={match(link)(pathname) ? '#96FFCE' : '#fff'} size={30} />
                </Link>
            ))}
        </div>
    );
}
