'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { BackButton } from '../ui/Buttons/BackButton';
import { Button } from '../ui/Buttons/Button';
import { SmallButton } from '../ui/Buttons/SmallButton';
import { TextLighter } from '../ui/Texts/TextLighter';

interface CardPopupProps {
  title: string;
  descriptionLong: string;
  href: string;
  popupHandler: () => void;
}

export function ChatPopup({ title, descriptionLong, href, popupHandler }: CardPopupProps) {
  return (
    <motion.div
      initial={{ y: '100vh', opacity: 0, x: '-50%' }}
      animate={{ y: '90%', opacity: 1, x: '-50%' }}
      className="rounded p-8 z-10 w-[340px] fixed top-0 left-[50%] bg-secondary/60 backdrop-blur-xl"
      onClick={popupHandler}
    >
      <p className="font-blackout text-5xl text-center">{title}</p>
      <TextLighter>{descriptionLong}</TextLighter>
      <Link href={href}>
        <SmallButton>Вступить в чат</SmallButton>
      </Link>
    </motion.div>
  );
}
