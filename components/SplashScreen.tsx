"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const [showText, setShowText] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "AI228 Hub";

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 3000); // 3 seconds delay for loader

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (showText) {
      let i = 0;
      const typingInterval = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            onAnimationComplete();
          }, 1000); // Additional delay after text animation
        }
      }, 150); // Typing speed

      return () => clearInterval(typingInterval);
    }
  }, [showText, onAnimationComplete]);

  const dotVariants = {
    initial: { y: "0%" },
    animate: { y: "100%" },
  };

  const dotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  } as const;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 4.5 }} // Fade out after all animations
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50" // Changed background to black
    >
      {!showText ? (
        <div className="flex space-x-4"> {/* Increased space-x for larger dots */}
          <motion.span
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0 }}
            className="block w-8 h-8 rounded-full bg-red-500" // Larger dots
          />
          <motion.span
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0.2 }}
            className="block w-8 h-8 rounded-full bg-yellow-500" // Larger dots
          />
          <motion.span
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0.4 }}
            className="block w-8 h-8 rounded-full bg-green-500" // Larger dots
          />
        </div>
      ) : (
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white" // Responsive font sizes
        >
          <span className="text-yellow-500">{displayText.slice(0, 2)}</span>{/* 'AI' in yellow */}
          <span className="text-primary">{displayText.slice(2, 5)}</span> {/* '228' in primary */}
          <span className="text-red-500">{displayText.slice(5, 9)}</span>{/* ' Hub' in red */}
        </motion.h1>
      )}
    </motion.div>
  );
}
