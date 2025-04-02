import { motion } from 'framer-motion';
import { useState } from 'react';

import { TextLight } from './Texts/TextLight';
import { cn } from '@/lib/utils/utils';

export function ListItem({ item }: { item: string }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <motion.li
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-row items-center relative"
      onClick={handleCheckboxChange}
    >
      {isChecked && (
        <svg
          className="absolute left-1"
          width="31"
          height="22"
          viewBox="0 0 31 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.6667 1L9.95833 20.7083L1 11.75"
            stroke="#96FFCE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      <input
        type="checkbox"
        className="w-12 h-11 m-0 mr-2 rounded-lg appearance-none border 
         checked:bg-black
         focus:outline-none focus:ring-1 focus:ring-green-100
         "
        checked={isChecked}
      />

      <div
        className={cn(
          'w-full flex flex-row gap-5 hover:cursor-pointer text-textgreen px-3 py-2 rounded font-medium transition-all relative border rounded-lg',
          isChecked ? 'bg-black line-through' : ''
        )}
      >
        <TextLight className="text-base text-white">{item}</TextLight>
      </div>
    </motion.li>
  );
}
