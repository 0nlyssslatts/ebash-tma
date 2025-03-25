import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/utils';

export function SmallButton({ children, onClick, className }: { children: string; onClick?: () => void; className?: string }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'w-full hover:cursor-pointer hover:bg-backgroundgreen bg-secondary text-textgreen py-2 rounded-xl font-medium transition-all relative',
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
