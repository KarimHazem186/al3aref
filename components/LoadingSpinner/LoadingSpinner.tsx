"use client";

import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // <div className="loading">

    
    <AnimatePresence>
      {loading && (
        <motion.div
          className="flex flex-col items-center justify-center h-screen bg-white space-y-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo with shine */}
          <div className="relative">
            <motion.img
              src="/assets/logo/logo_1.png"
              alt="Site Logo"
              width={160}
              height={100}
              className="w-auto h-20 p-1 relative z-10"
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Shine overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent z-20"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              style={{ transform: "skewX(-20deg)" }}
            />
          </div>

          {/* Spinner with fade-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <ClipLoader color="#ba9c66" size={50} />
          </motion.div>

          {/* Loading text with bounce */}
          <motion.p
            className="text-lg font-semibold text-primary"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.6,
              type: "spring",
              stiffness: 120,
            }}
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
      </AnimatePresence>
      
      // </div>
  );
};

export default LoadingSpinner;
