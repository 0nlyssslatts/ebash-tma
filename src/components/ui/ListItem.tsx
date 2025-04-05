'use client';

import { motion } from 'framer-motion';

import { useHaptic } from '@/hooks/useHaptic';

import { TextLight } from './Texts/TextLight';
import { cn } from '@/lib/utils/utils';

interface ListItemProps {
  item: string;
  handleStorage: () => void;
  isChecked: boolean;
}

export function ListItem({ item, handleStorage, isChecked }: ListItemProps) {
  const haptic = useHaptic();

  const handleCheckboxChange = () => {
    handleStorage();
    haptic.notificationOccurred('success');
  };

  return (
    <motion.li
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-row items-center relative select-none"
      onClick={handleCheckboxChange}
    >
      <div className="relative w-12 h-11 mr-2">
        <input
          type="checkbox"
          className="w-full h-full m-0 rounded-lg appearance-none border 
         checked:bg-black checked:border-textgreen
         focus:outline-none focus:ring-1 focus:ring-green-100
         "
          checked={isChecked}
          readOnly
          onClick={(e) => e.preventDefault()}
        />
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
      </div>

      <div
        className={cn(
          'w-full flex flex-row gap-5 hover:cursor-pointer text-textgreen px-3 py-2 rounded font-medium transition-all relative border rounded-lg',
          isChecked ? 'bg-black line-through border-textgreen' : ''
        )}
      >
        <TextLight className={cn('text-base text-white', isChecked ? 'text-textgreen' : '')}>{item}</TextLight>
      </div>
    </motion.li>
  );
}
