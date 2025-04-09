'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import { type PropsWithChildren, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { MainLoader } from '../ui/MainLoader';

export default function ProviderLayout({ children }: PropsWithChildren) {
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSubscription = async (userId: number) => {
      try {
        const response = await fetch('/api/check-subscription', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        const { isSubscribed } = await response.json();
        setIsSubscribed(isSubscribed);

        if (!isSubscribed && process.env.NODE_ENV === 'production') {
          window.location.href = 'https://votyakov.com/ebash';
        }
      } catch (err) {
        console.error('Subscription check error:', err);
        setIsSubscribed(false);
      }
    };

    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      const userId = tg.initDataUnsafe.user?.id;
      if (!userId) {
        console.log('No user ID found');
        setIsSubscribed(false);

        if (process.env.NODE_ENV === 'development') console.log('[INFO] В development режиме нет проверки на подписку');
        else {
          window.location.href = 'https://votyakov.com/ebash';
        }
        return;
      }

      checkSubscription(userId);

      try {
        tg.expand();
        if (isMobile) tg.requestFullscreen();
        tg.disableVerticalSwipes();
      } catch (error) {
        console.log('Telegram API error:', error);
      }
    }
  }, []);

  if (isSubscribed === null) return <MainLoader />;

  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
