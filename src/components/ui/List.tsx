'use client';

import useStorage from '@/hooks/useStorage';

import { ListItem } from './ListItem';
import { cn } from '@/lib/utils/utils';

export function List({ listArray, className }: { listArray: { check: string }[]; className?: string }) {
  const { checks, handleCheck } = useStorage();

  return (
    <ul className={cn('flex flex-col gap-2', className)}>
      {listArray.map(({ check }, index) => {
        const itemId = String(index);
        return (
          <ListItem
            key={itemId}
            item={check}
            isChecked={checks.includes(itemId)}
            handleStorage={() =>
              handleCheck({
                id: itemId,
                value: check,
              })
            }
          />
        );
      })}
    </ul>
  );
}
