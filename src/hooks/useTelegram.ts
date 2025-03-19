// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';

import { useEffect, useState } from 'react';

export function useTelegramWebApp() {
  // eslint-disable-next-line
  const [tg, setTg] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      setTg(tg);
    }
  }, []);

  return tg;
}
