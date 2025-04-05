'use client';

import { useLayoutEffect, useState } from 'react';

interface Checks {
  id: string;
  value: string;
}

const useStorage = () => {
  const tg = window.Telegram?.WebApp?.CloudStorage;
  const [checks, setChecks] = useState<string[]>([]);

  const getCheck = async () => {
    const keys = await tg.getKeys((error: Error, data: string[]) => {
      if (error) {
        console.error('Error getting keys:', error);
      } else {
        console.log('Received keys:', data); // Добавлено логирование
        return data;
      }
    });
    setChecks(Array.isArray(keys) ? keys : []);
  };

  const handleCheck = async ({ id, value }: Checks) => {
    try {
      if (tg) {
        // Оптимизированное обновление состояния
        setChecks((prev) => {
          const newChecks = prev.includes(id.toString())
            ? prev.filter((key) => key !== id.toString())
            : [...prev, id.toString()];
          return newChecks;
        });

        // Отложенный запрос к хранилищу
        const fn = checks.includes(id.toString()) ? () => tg.removeItem(`${id}`) : () => tg.setItem(`${id}`, value);

        await fn();
      }
    } catch (error) {
      console.error('Error handling check:', error);
      // Откат состояния при ошибке
      setChecks((prev) => [...prev]);
    }
  };

  useLayoutEffect(() => {
    getCheck();
  }, []); // Добавлен пустой массив зависимостей, чтобы useEffect срабатывал только при монтировании

  return { checks, handleCheck };
};

export default useStorage;
