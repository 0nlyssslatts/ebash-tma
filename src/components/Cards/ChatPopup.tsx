'use client';

import { motion } from 'framer-motion';

import { SmallButton } from '../ui/Buttons/SmallButton';

interface CardPopupProps {
  title: string;
  href: string;
  popupHandler: () => void;
}

export function ChatPopup({ title, href, popupHandler }: CardPopupProps) {
  return (
    <motion.div
      initial={{ y: '30%', opacity: 0, x: '-50%' }}
      animate={{ y: '90%', opacity: 1, x: '-50%' }}
      className="rounded p-8 z-10 w-[340px] fixed top-0 left-[50%] bg-secondary/60 backdrop-blur-xl"
      onClick={popupHandler}
    >
      <p className="font-blackout text-5xl text-center mb-5">{title}</p>
      <a href={href}>
        <SmallButton>Вступить в чат</SmallButton>
      </a>
    </motion.div>
  );
}
