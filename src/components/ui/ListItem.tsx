import { TextLight } from './TextLight';

export default function ListItem({ item, index }: { item: string; index: number }) {
  return (
    <li className="w-full flex flex-row gap-5  hover:cursor-pointer hover:bg-backgroundgreen bg-background text-textgreen py-3 rounded font-medium transition-all relative">
      <span className="font-blackout text-2xl font-normal">{index.toString()}</span>
      <TextLight>{item}</TextLight>
    </li>
  );
}
