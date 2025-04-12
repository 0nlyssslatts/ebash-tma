'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { useHaptic } from '@/hooks/useHaptic';

import { ArrowIcon } from './ArrowIcon';
import { Button } from './Buttons/Button';
import { SmallButton } from './Buttons/SmallButton';
import { CheckMark } from './CheckMark';
import CustomPortableText from './Texts/CustomPortableText';
import { TextLight } from './Texts/TextLight';
import { CheckProps } from '@/lib/types/guide';
import { cn } from '@/lib/utils/utils';

interface ListItemProps {
  item: CheckProps;
  handleStorage: () => void;
  isChecked: boolean;
}

export function ListItem({ item, handleStorage, isChecked }: ListItemProps) {
  const haptic = useHaptic();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    handleStorage();
    haptic.notificationOccurred('success');
    setIsOpen(false);
  };

  return (
    <motion.li
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-row items-center relative select-none"
    >
      <div onClick={handleCheckboxChange} className="absolute top-[1px] w-[52px] h-[52px] mr-2">
        <input
          type="checkbox"
          className={cn(
            'w-full h-full m-0 rounded-lg appearance-none border focus:outline-none focus:ring-1 focus:ring-green-100',
            isChecked ? 'checked:bg-black checked:border-textgreen' : ''
          )}
          checked={isChecked}
          readOnly
          onClick={(e) => e.preventDefault()}
        />
        <CheckMark isChecked={isChecked} className="absolute left-[14px] top-[16px]" />
      </div>

      <div
        className={cn(
          'w-full flex flex-col hover:cursor-pointer rounded font-medium transition-all ml-14 border rounded-lg'
        )}
      >
        <div
          onClick={() => {
            if (!isChecked) setIsOpen((prev) => !prev);
          }}
          className={cn(
            'w-full flex flex-row text-textgreen px-3 py-3 rounded font-medium rounded-lg relative',
            isChecked ? 'bg-black line-through border-textgreen' : ''
          )}
        >
          <TextLight className={cn('text-base text-white w-[90%]', isChecked ? 'text-textgreen' : '')}>
            {item.check}
          </TextLight>
          <ArrowIcon isOpen={isOpen} className="absolute right-3 top-6" />
        </div>
        <AnimatePresence>
          {isOpen && !isChecked && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.3,
                  opacity: { duration: 0.2 },
                },
              }}
              transition={{
                duration: 0.3,
                opacity: { duration: 0.15 },
              }}
              className="border-t w-full px-3 py-3 overflow-hidden"
              style={{ originY: 0 }}
            >
              {item.description && <CustomPortableText content={item.description}></CustomPortableText>}

              {item.examples && (
                <div className="flex flex-row w-full gap-1 mb-1 mt-1">
                  {item.examples.map((example, index) => (
                    <Link href={example.exampleHref} key={index} className="flex-1">
                      <SmallButton className="bg-[#282828] w-full text-sm text-white">
                        {example.exampleButton}
                      </SmallButton>
                    </Link>
                  ))}
                </div>
              )}
              {item.button.text && (
                <Link href={item.button.href}>
                  <Button>{item.button.text}</Button>
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}
