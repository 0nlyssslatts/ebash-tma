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
      if (exists) {
        await new Promise((resolve, reject) => {
          tg.CloudStorage.removeItem(id, (error: Error) => {
            if (error) {
              reject(error);
            } else {
              resolve(null);
            }
          });
        });
      } else {
        await new Promise((resolve, reject) => {
          tg.CloudStorage.setItem(id, value, (error: Error) => {
            if (error) {
              reject(error);
            } else {
              resolve(null);
            }
          });
        });
      }

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
