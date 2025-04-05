import { motion } from 'framer-motion';
import { useState } from 'react';

import { TextLight } from './Texts/TextLight';
import { cn } from '@/lib/utils/utils';
import { useHaptic } from '@/hooks/useHaptic';

export function ListItem({ item }: { item: string }) {
  const [isChecked, setIsChecked] = useState(false);
  const haptic = useHaptic();

  const handleCheckboxChange = () => {
    haptic.notificationOccurred('success');
    setIsChecked((prev) => !prev);
  };

  return (
    <motion.li
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-row items-center relative select-none"
      onClick={handleCheckboxChange}
    >
      {isChecked && (
        <svg
          className="absolute left-[9px] top-[14px]"
          width="24"
          height="24"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.6667 1L9.95833 20.7083L1 11.75"
            stroke="#96FFCE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
