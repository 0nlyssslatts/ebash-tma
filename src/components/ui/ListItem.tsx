import { motion } from 'framer-motion';

import { TextLight } from './TextLight';

export function ListItem({ item, index }: { item: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, transition: {} }}
      whileTap={{ scale: 0.98, transition: {} }}
      className="w-full flex flex-row gap-5  hover:cursor-pointer hover:bg-backgroundgreen text-textgreen px-3 py-2 rounded font-medium transition-all relative border rounded-lg"
    >
      <span className="font-blackout text-2xl font-normal">{index.toString()}</span>
      <TextLight className='text-base'>{item}</TextLight>
    </motion.li>
  );
}
