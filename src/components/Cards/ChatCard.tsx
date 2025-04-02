'use client';

import { motion } from 'framer-motion';

import { TextLighter } from '../ui/Texts/TextLighter';

interface CardPopupProps {
  title: string;
  descriptionLong: string;
  href: string;
}

interface CardProps {
  title: string;
  descriptionShort: string;
  descriptionLong: string;
  href: string;
  color: string;
  handlePopup: ({ title, descriptionLong, href }: CardPopupProps) => void;
}

export function ChatCard({ title, descriptionShort, descriptionLong, href, color, handlePopup }: CardProps) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className="overflow-hidden relative rounded px-2 py-2 w-full flex flex-col gap-2 border"
        onClick={() => handlePopup({ title, descriptionLong, href })}
      >
        <p className="font-blackout text-4xl md:text-6xl text-center">{title}</p>
        <TextLighter>{descriptionShort}</TextLighter>

        <div style={{ backgroundColor: `${color}` }} className={`w-full h-2 z-3 absolute bottom-0 left-0`}></div>
      </motion.div>
    </>
  );
}
