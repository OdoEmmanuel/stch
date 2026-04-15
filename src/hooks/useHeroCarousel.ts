import { useState, useEffect } from 'react';

export const useHeroCarousel = (imageCount: number, intervalMs: number = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageCount <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [imageCount, intervalMs]);

  return currentIndex;
};