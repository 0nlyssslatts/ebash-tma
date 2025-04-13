import { motion } from 'framer-motion';

import { useHaptic } from '@/hooks/useHaptic';

import { cn } from '@/lib/utils/utils';

export function SmallButton({
  children,
  onClick,
  className,
}: {
  children: string;
  onClick?: () => void;
  className?: string;
}) {
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
      className={cn(
        'w-full hover:cursor-pointer hover:bg-backgroundgreen bg-secondary text-textgreen py-2 rounded-xl font-medium transition-all relative',
        className
      )}
    >
      {children}
    </motion.button>
  );
}
