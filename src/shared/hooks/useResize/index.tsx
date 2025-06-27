'use client';

import { useEffect, useState } from 'react';

const screenSizes = {
  SCREEN_XS: 360,
  SCREEN_SM: 480,
  SCREEN_MD: 840,
  SCREEN_LG: 1024,
  SCREEN_XL: 1200,
};

export const useResize = () => {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWidth((prevWidth) => {
        const newWidth = window.innerWidth;
        return prevWidth !== newWidth ? newWidth : prevWidth;
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    isScreenXs: width < screenSizes.SCREEN_SM,
    isScreenSm: width >= screenSizes.SCREEN_SM && width < screenSizes.SCREEN_MD,
    isScreenMd: width >= screenSizes.SCREEN_MD && width < screenSizes.SCREEN_LG,
    isScreenLg: width >= screenSizes.SCREEN_LG && width < screenSizes.SCREEN_XL,
    isScreenXl: width >= screenSizes.SCREEN_XL,
  };
};
