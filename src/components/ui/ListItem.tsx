'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { useHaptic } from '@/hooks/useHaptic';
import { useLink } from '@/hooks/useLink';

import { Button } from './Buttons/Button';
import { SmallButton } from './Buttons/SmallButton';
import { ArrowIcon } from './Icons/ArrowIcon';
import { CheckMark } from './Icons/CheckMark';
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
  const openLink = useLink();
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
      <motion.div onClick={handleCheckboxChange} className="absolute top-[1px] w-[52px] h-[52px] mr-2">
        <input
          type="checkbox"
          className={cn(
            'w-full h-full m-0 rounded-lg appearance-none border focus:outline-none focus:ring-1 focus:ring-green-100',
            isChecked ? 'bg-black border-textgreen' : ''
          )}
          checked={isChecked}
          readOnly
          onClick={(e) => e.preventDefault()}
        />
        <CheckMark isChecked={isChecked} className="absolute left-[14px] top-[16px]" />
      </motion.div>

      <div
        className={cn(
          'w-full flex flex-col hover:cursor-pointer rounded font-medium transition-all ml-14 border rounded-lg',
          isChecked && 'bg-black border-textgreen'
        )}
      >
        <div
          onClick={() => {
            if (!isChecked) setIsOpen((prev) => !prev);
          }}
          className={cn(
            'w-full flex flex-row text-textgreen px-3 py-3 rounded font-medium rounded-lg relative',
            isChecked ? 'line-through' : ''
          )}
        >
          <TextLight className={cn('text-base text-white w-[90%]', isChecked ? 'text-textgreen' : '')}>
            {item.check}
          </TextLight>
          <ArrowIcon isOpen={isOpen} className={cn('absolute right-3 top-6', isChecked && 'hidden')} />
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
              className="border-t w-full overflow-hidden"
              style={{ originY: 0 }}
            >
              <div className="px-3 py-3">
                {item.description && <CustomPortableText content={item.description}></CustomPortableText>}

                {item.examples && (
                  <div className="flex flex-row w-full gap-1 mb-1 mt-1">
                    {item.examples.map((example, index) => (
                      <SmallButton
                        key={index}
                        onClick={() => (window.location.href = example.exampleHref)}
                        className="bg-[#282828] w-full text-sm text-white"
                      >
                        {example.exampleButton}
                      </SmallButton>
                    ))}
                  </div>
                )}
                {item.button.text && <Button onClick={() => openLink(item.button.href)}>{item.button.text}</Button>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}
