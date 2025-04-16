'use client';

import { useEffect, useState } from 'react';

export const useLink = () => {
  const [isTelegramWebView, setIsTelegramWebView] = useState(false);

  useEffect(() => {
    setIsTelegramWebView(!!window.Telegram?.WebApp?.openLink);
  }, []);

  const openLink = (href: string, options = { try_instant_view: false, try: 'chrome' }) => {
    if (isTelegramWebView && window.Telegram?.WebApp?.openLink) {
      window.Telegram.WebApp.openLink(href, options);
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return openLink;
};
