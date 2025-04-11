'use client';

import useStorage from '@/hooks/useStorage';

import { ListItem } from './ListItem';
import { CheckProps } from '@/lib/types/guide';
import { cn } from '@/lib/utils/utils';

export function List({ listArray, className }: { listArray: CheckProps[]; className?: string }) {
  const { checks, handleCheck } = useStorage();

  return (
    <ul className={cn('flex flex-col gap-2', className)}>
      {listArray.map((item, index) => {
        const itemId = String(index);
        return (
          <ListItem
            key={itemId}
            item={item}
            isChecked={checks.includes(itemId)}
            handleStorage={() =>
              handleCheck({
                id: itemId,
                value: item.check,
              })
            }
          />
        );
      })}
    </ul>
  );
}
