import { motion } from 'framer-motion';

import { TextLight } from './TextLight';

export function ListItem({ item, index }: { item: string; index: number }) {
  return (
    <motion.li
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flex flex-row gap-5  hover:cursor-pointer hover:bg-backgroundgreen text-textgreen px-3 py-2 rounded font-medium transition-all relative border rounded-lg"
    >
      <span className="font-blackout text-2xl font-normal">{index.toString()}</span>
      <TextLight className="text-base">{item}</TextLight>
    </motion.li>
  );
}
