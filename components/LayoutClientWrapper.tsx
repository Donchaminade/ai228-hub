"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreen";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && (
        <SplashScreen onAnimationComplete={handleAnimationComplete} />
      )}
      {!showSplash && children}
    </>
  );
}
