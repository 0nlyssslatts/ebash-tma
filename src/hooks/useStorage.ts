'use client';

import { cloudStorage } from '@telegram-apps/sdk';
import { useCallback, useEffect, useState } from 'react';

interface Checks {
  id: number;
  value: string;
}

const useStorage = () => {
  const [checks, setChecks] = useState<string[]>([]);

  const getCheck = useCallback(async () => {
    if (typeof window !== 'undefined' && cloudStorage.isSupported() && cloudStorage.getKeys.isAvailable()) {
      try {
        const keys = await cloudStorage.getKeys();
        setChecks(keys);
      } catch (error) {
        console.error('Failed to get storage keys:', error);
      }
    }
  }, []);

  const handleCheck = useCallback(
    async ({ id, value }: Checks) => {
      if (typeof window !== 'undefined' && cloudStorage.isSupported()) {
        try {
          if (checks.includes(value)) {
            await cloudStorage.deleteItem(`${id}`);
          } else {
            await cloudStorage.setItem(`${id}`, value);
          }
          await getCheck();
        } catch (error) {
          console.error('Storage operation failed:', error);
        }
      }
    },
    [checks, getCheck]
  );

  useEffect(() => {
    getCheck();
  }, [getCheck]);

  return {
    handleCheck,
    checks,
    isSupported: true,
  };
};

export default useStorage;
