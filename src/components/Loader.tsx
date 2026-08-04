"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ============================================================
// LOADER COMPONENT
// ============================================================

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Wait for everything to load
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <Image
                src="https://avatars.githubusercontent.com/u/227557537?v=4"
                alt="Logo"
                fill
                className="object-cover rounded-full border-2 border-orange-400/30"
                priority
              />
              <div className="absolute -inset-2 rounded-full border-2 border-orange-400/20 animate-spin-slow" />
              <div className="absolute -inset-4 rounded-full border border-orange-400/10 animate-spin-reverse" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light text-white tracking-widest"
          >
            Hami<span className="text-orange-400">Parsa</span>
          </motion.h2>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-48 h-1 mt-6 bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs text-gray-500 mt-3 font-mono tracking-widest"
          >
            {progress < 30 && "Loading..."}
            {progress >= 30 && progress < 70 && "Almost there..."}
            {progress >= 70 && progress < 100 && "Finalizing..."}
            {progress >= 100 && "Ready! 🚀"}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}