import { motion } from 'framer-motion';

export function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full hover:cursor-pointer hover:bg-[#96FFCE0D] bg-[#282828] py-3 rounded font-medium transition-all relative"
    >
      {text}
    </motion.button>
  );
}
