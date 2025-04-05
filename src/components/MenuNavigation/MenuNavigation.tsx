'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { match } from 'path-to-regexp';
import { isMobile } from 'react-device-detect';

import { useHaptic } from '@/hooks/useHaptic';

import { MENU_LINKS } from './menu-links';

export function MenuNavigation() {
  const pathname = usePathname();
  const haptic = useHaptic();

  const menuHeight = isMobile ? 'h-[90px]' : 'h-[60px]';

  const bottomPadding = isMobile ? { paddingBottom: 'var(--tg-safe-area-inset-bottom)' } : {};

  return (
    <div>
      <div
        style={bottomPadding}
        className={`fixed rounded border-t sm:border-x bottom-0 left-1/2 flex ${menuHeight} w-full max-w-2xl z-110 -translate-x-1/2 lg:-translate-x-[calc(50%+8px)] items-center justify-between bg-secondary px-8 pt-[10px]`}
      >
        {MENU_LINKS.map(({ Icon, link }, index) => (
          <Link href={link} key={index} onClick={() => haptic.impactOccurred('soft')}>
            <Icon color={match(link)(pathname) ? '#96FFCE' : '#fff'} size={30} />
          </Link>
        ))}
      </div>
    </div>
  );
}
