'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

import { ArrowIcon } from './ArrowIcon';
import { DarkSection } from './DarkSection';
import { Text } from './Texts/Text';

interface ClosingSectionProps {
  header: string;
  children: ReactNode;
}

export function ClosingSection({ header, children }: ClosingSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DarkSection className="select-none">
      <motion.div
        className="flex flex-row justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        layout
      >
        <div>
          <Text>{header}</Text>
        </div>
        <div className="flex flex-col justify-center">
          <ArrowIcon isOpen={isOpen} />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </DarkSection>
  );
}
