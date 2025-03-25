import { motion } from 'framer-motion';
import Link from 'next/link';

import { TextLight } from './ui/Texts/TextLight';

const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500'];

export function ChatCard({ title, text, index, href }: { title: string; text: string; index: number; href: string }) {
  const color = colors[index % colors.length];

  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ scale: 1.02, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className="overflow-hidden relative rounded px-5 py-7 w-full flex flex-col gap-2 border"
      >
        <p className="font-blackout text-4xl md:text-6xl my-3 text-center">{title}</p>
        <TextLight>{text}</TextLight>

        <div className={`w-full h-3 ${color} absolute bottom-0 left-0`}></div>
      </motion.div>
    </Link>
  );
}
