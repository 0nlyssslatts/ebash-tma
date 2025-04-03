import { ListItem } from './ListItem';
import { cn } from '@/lib/utils/utils';

export function List({ listArray, className }: { listArray: { check: string }[]; className?: string }) {
  return (
    <ul className={cn('flex flex-col gap-2', className)}>
      {listArray.map((item: { check: string }, index: number) => {
        return <ListItem key={index} item={item.check} />;
      })}
    </ul>
  );
}
