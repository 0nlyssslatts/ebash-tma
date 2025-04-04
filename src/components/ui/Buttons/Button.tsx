import { useHaptic } from '@/hooks/useHaptic';
import { motion } from 'framer-motion';

export function Button({ children, onClick }: { children: string; onClick?: () => void }) {
  const haptic = useHaptic();

  const handleClick = () => {
    haptic.impactOccurred('light');
    onClick?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full hover:cursor-pointer hover:bg-backgroundgreen bg-background text-textgreen py-3 rounded font-medium transition-all relative"
    >
      {children}
    </motion.button>
  );
}
