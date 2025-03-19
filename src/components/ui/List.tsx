import { cn } from '@/lib/utils/utils';
import { ListItem } from './ListItem';

export function List({ listArray, className }: { listArray: string[], className?: string }) {
  return (
    <ul className={cn('flex flex-col gap-2', className)}>
      {listArray.map((item: string, index: number) => {
        return <ListItem key={index} index={index + 1} item={item} />;
      })}
    </ul>
  );
}
