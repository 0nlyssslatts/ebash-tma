import { cloudStorage } from '@telegram-apps/sdk';
import { useLayoutEffect, useState } from 'react';

interface Checks {
  id: number;
  value: string;
}

const useStorage = () => {
  const [checks, setChecks] = useState<string[]>([]);

  const getCheck = async () => {
    if (cloudStorage.isSupported() && cloudStorage.getKeys.isAvailable()) {
      const keys = await cloudStorage.getKeys();
      setChecks(keys);
    }
  };

  const handleCheck = async ({ id, value }: Checks): Promise<void> => {
    if (cloudStorage.isSupported() && cloudStorage.setItem.isAvailable() && cloudStorage.deleteItem.isAvailable()) {
      if (checks.includes(value)) {
        await cloudStorage.deleteItem(`${id}`);
      } else {
        await cloudStorage.setItem(`${id}`, value);
      }
      await getCheck(); // Обновляем список после изменения
    }
  };

  useLayoutEffect(() => {
    getCheck();
  }, []);

  return cloudStorage.isSupported() ? { handleCheck, checks } : undefined;
};

export default useStorage;
