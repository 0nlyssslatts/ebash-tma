'use client';

import useStorage from '@/hooks/useStorage';

import { ListItem } from './ListItem';
import { cn } from '@/lib/utils/utils';

export function List({ listArray, className }: { listArray: { check: string }[]; className?: string }) {
  const { checks, handleCheck } = useStorage();
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa', checks);
  return (
    <ul className={cn('flex flex-col gap-2', className)}>
      {listArray.map(({ check }, index) => (
        <ListItem
          key={index}
          item={check}
          isChecked={checks.includes(String(index))}
          handleStorage={() => handleCheck({ id: String(index), value: check })}
        />
      ))}
    </ul>
  );
}
