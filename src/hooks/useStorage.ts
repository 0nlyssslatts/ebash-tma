'use client';

import { useCallback, useLayoutEffect, useState } from 'react';

interface Checks {
  id: string;
  value: string;
}

const useStorage = () => {
  const tg = window.Telegram?.WebApp;
  const [checks, setChecks] = useState<string[]>([]);

  const getCheck = useCallback(async () => {
    try {
      if (!tg?.CloudStorage) return;

      const keys = await new Promise<string[]>((resolve, reject) => {
        tg.CloudStorage.getKeys((error: Error, data: string[]) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
      setChecks(keys);
    } catch (error) {
      console.error('Error getting keys:', error);
      setChecks([]);
    }
  }, [tg?.CloudStorage]);

  const handleCheck = async ({ id, value }: Checks) => {
    try {
      if (!tg?.CloudStorage) return;

      const exists = checks.includes(id);
      const operation = exists ? 'remove' : 'add';

      setChecks((prev) => (exists ? prev.filter((checkId) => checkId !== id) : [...prev, id]));

      const storagePromise = new Promise<void>((resolve, reject) => {
        const callback = (error: Error | null) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        };

        if (operation === 'remove') {
          tg.CloudStorage.removeItem(id, callback);
        } else {
          tg.CloudStorage.setItem(id, value, callback);
        }
      });

      await storagePromise;

      await getCheck();
    } catch (error) {
      console.error('Error handling check:', error);
      await getCheck();
    }
  };

  useLayoutEffect(() => {
    tg?.ready();
    getCheck();
  }, [getCheck, tg]);

  return { checks, handleCheck };
};

export default useStorage;
