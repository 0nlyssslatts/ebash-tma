'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import { SmallButton } from '../ui/Buttons/SmallButton';

interface CardPopupProps {
  title: string;
  href: string;
  popupHandler: () => void;
  isOpen: boolean;
  id: string;
}

export function ChatPopup({ title, href, popupHandler, isOpen, id }: CardPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={id}
          initial={{
            y: '100vh',
            opacity: 0,
            x: '-50%',
          }}
          animate={{
            y: '-50%',
            x: '-50%',
            opacity: 1,
          }}
          exit={{
            y: '100vh',
            opacity: 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20,
            mass: 0.5,
          }}
          className="rounded p-8 z-10 w-[340px] fixed top-1/2 left-1/2 bg-secondary/60 backdrop-blur-xl"
          onClick={popupHandler}
        >
          <div className="absolute z-15 top-2 right-3">
            <X />
          </div>
          <p className="font-blackout text-5xl text-center mb-5">{title}</p>
          <a href={href}>
            <SmallButton>Вступить в чат</SmallButton>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
