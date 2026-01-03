'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactOverlay({ isOpen, onClose }: ContactOverlayProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Overlay Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <div
              className="bg-white border border-black p-12 max-w-md w-full pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-2xl hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                ×
              </button>

              <div className="text-center space-y-4">
                <p className="text-lg leading-relaxed">
                  Shoot me an email:{' '}
                  <a
                    href="mailto:guillebasterra@gmail.com"
                    className="underline hover:text-gray-600 transition-colors"
                  >
                    guillebasterra@gmail.com
                  </a>
                  {' '}or DM me on X:{' '}
                  <a
                    href="https://twitter.com/willybasterra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-600 transition-colors"
                  >
                    willybasterra
                  </a>
                  . Reach out, I'd love to talk.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
