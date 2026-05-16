import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeTransition = () => {
  const { isDark } = useTheme();
  const prevDark = useRef(isDark);
  const [animating, setAnimating] = useState(false);
  const [overlayColor, setOverlayColor] = useState('');

  useEffect(() => {
    if (prevDark.current !== isDark) {
      // Use the color of the theme we are LEAVING
      setOverlayColor(prevDark.current ? '#0F172A' : '#F8FAFC');
      setAnimating(true);
      prevDark.current = isDark;
      
      const timer = setTimeout(() => setAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isDark]);

  if (!animating) return null;

  return (
    <div 
      className="theme-overlay-fade" 
      style={{ 
        '--color': overlayColor 
      }} 
    />
  );
};

export default ThemeTransition;
