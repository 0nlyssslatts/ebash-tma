import ListItem from './ListItem';

export function List({ listArray }: { listArray: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {listArray.map((item: string, index: number) => {
        return <ListItem key={index} index={index + 1} item={item} />;
      })}
    </ul>
  );
}
