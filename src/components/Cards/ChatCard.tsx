'use client';

import { motion } from 'framer-motion';

import { TextLighter } from '../ui/Texts/TextLighter';

interface CardPopupProps {
  title: string;
  href: string;
  isOpen: boolean;
}

interface CardProps {
  title: string;
  description: string;
  href: string;
  color: string;
  handlePopup: ({ title, href, isOpen }: CardPopupProps) => void;
}

export function ChatCard({ title, description, href, color, handlePopup }: CardProps) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="overflow-hidden relative rounded px-2 py-2 w-full flex flex-col gap-2 border"
        onClick={() => handlePopup({ title, href, isOpen: false })}
      >
        <p className="font-blackout text-4xl md:text-6xl text-center">{title}</p>
        <TextLighter className="justify-center items-center text-center">{description}</TextLighter>

        <div style={{ backgroundColor: `${color}` }} className={`w-full h-2 z-3 absolute bottom-0 left-0`}></div>
      </motion.div>
    </>
  );
}
