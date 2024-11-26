'use client';

import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg w-full"
      >
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white absolute top-4 right-4"
        >
          &times;
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
