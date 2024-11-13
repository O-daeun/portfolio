'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const requestRef = useRef<number | null>(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollY / windowHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    handleScroll();

    const handleScrollAnimation = () => {
      requestRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollAnimation);
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-[55px] z-50 h-[2px] w-full sm:top-20">
      <div
        className="h-full bg-var-main transition-all duration-200 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
