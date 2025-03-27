'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { TextLighter } from './ui/Texts/TextLighter';

interface CardProps {
  title: string;
  descriptionShort: string;
  descriptionLong: string;
  href: string;
  color: string;
}

export function ChatCard({ title, descriptionShort, href, color }: CardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ scale: 1.02, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className="overflow-hidden z-1 relative rounded px-2 py-2 w-full flex flex-col gap-2 border"
      >
        <p className="font-blackout text-4xl md:text-6xl text-center">{title}</p>
        <TextLighter>{descriptionShort}</TextLighter>

        <div style={{ backgroundColor: `${color}` }} className={`w-full h-2 z-3 absolute bottom-0 left-0`}></div>
      </motion.div>
    </Link>
  );
}
