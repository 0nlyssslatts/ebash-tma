import { motion } from 'framer-motion';

export function Button({ children, onClick }: { children: string; onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full hover:cursor-pointer hover:bg-backgroundgreen bg-background text-textgreen py-3 rounded font-medium transition-all relative"
    >
      {children}
    </motion.button>
  );
}
