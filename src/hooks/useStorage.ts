'use client';

import { useEffect, useState } from 'react';

// Correct import

interface Checks {
  id: number;
  value: string;
}

const useStorage = () => {
  const [checks, setChecks] = useState<string[]>([]);
  const tg = window.Telegram?.WebApp.CloudStorage;

  const getCheck = async () => {
    const keys = await tg.getKeys();
    setChecks(keys);
  };

  const handleCheck = async ({ id, value }: Checks) => {
    if (checks.includes(`${id}`)) {
      await tg.deleteItem(`${id}`);
    } else {
      await tg.setItem(`${id}`, value[0]);
    }
  };

  useEffect(() => {
    getCheck();
  }, [getCheck]);

  return {};
};

export default useStorage;
