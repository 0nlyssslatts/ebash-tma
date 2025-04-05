'use client';

import useStorage from '@/hooks/useStorage';

import { ListItem } from './ListItem';
import { cn } from '@/lib/utils/utils';

export function List({ listArray, className }: { listArray: { check: string }[]; className?: string }) {
  const { checks, handleCheck, isSupported } = useStorage();

  if (!isSupported) {
    return <div className={cn('text-yellow-600 p-4', className)}>Storage is not supported in this environment</div>;
  }

  return (
    <ul className={cn('flex flex-col gap-2', className)}>
      {listArray.map((item, index) => (
        <ListItem
          key={index}
          item={item.check}
          isChecked={checks.includes(item.check)}
          handleStorage={() => handleCheck({ id: index, value: item.check })}
        />
      ))}
    </ul>
  );
}
