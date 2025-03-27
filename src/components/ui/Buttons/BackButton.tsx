'use client';

import { motion } from 'framer-motion';
import { Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  onClick?: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  const router = useRouter();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      style={{
        left: 'calc(max((100vw - 1024px)/2, 0px) + 23px)',
      }}
      className="rounded-lg w-9 h-9 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-secondary flex justify-center items-center hover:cursor-pointer fixed top-5"
      onClick={onClick ? onClick : () => router.back()}
    >
      <Undo2 />
    </motion.button>
  );
}
