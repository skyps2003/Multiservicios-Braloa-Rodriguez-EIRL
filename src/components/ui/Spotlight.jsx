import React, { useEffect, useState } from 'react';

const Spotlight = () => {
  const [coords, setCoords] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="theme-spotlight" 
      style={{ '--x': coords.x, '--y': coords.y }} 
    />
  );
};

export default Spotlight;
