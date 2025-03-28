'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

import { DarkSection } from './DarkSection';
import { Text } from './Texts/Text';

interface ClosingSectionProps {
  header: string;
  children: ReactNode;
}

export function ClosingSection({ header, children }: ClosingSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DarkSection>
      <div className="flex flex-row justify-between">
        <div>
          <Text>{header}</Text>
        </div>
        <div className="flex flex-col justify-center" onClick={() => setIsOpen((prev) => !prev)}>
          <ArrowIcon isOpen={isOpen}></ArrowIcon>
        </div>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      )}
    </DarkSection>
  );
}
