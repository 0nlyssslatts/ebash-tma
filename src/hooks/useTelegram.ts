'use client';

import { useEffect, useState } from 'react';

export default function useTelegramWebApp() {
  const [tg, setTg] = useState<typeof window.Telegram.WebApp | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const init = () => {
        if (window.Telegram?.WebApp) {
          const webApp = window.Telegram.WebApp;
          webApp.ready();
          setTg(webApp);
        }
        setIsLoading(false);
      };

      // Если Telegram уже загружен
      if (window.Telegram) {
        init();
      } else {
        // Ожидаем загрузки скрипта
        const timeout = setTimeout(() => {
          init();
          clearTimeout(timeout);
        }, 1000);
      }
    }
  }, []);

  return {
    tg,
    isLoading,
    isReady: !!tg && !isLoading,
  };
}
