'use client';
import { useEffect } from 'react';

export function useSwipe(
  ref = typeof window !== 'undefined' ? document : null,
  callback: (e: boolean) => void,
  deps = [],
  ignoreValue = 100,
) {
  if (!ref) return;
  let startX: number, endX: number, startY: number, endY: number;
  startX = endX = startY = endY = 0;

  function touchStart(e: TouchEvent) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }

  function touchEnd(e: TouchEvent) {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    if (
      Math.abs(startX - endX) < ignoreValue ||
      Math.abs(startY - endY) > ignoreValue / 2
    ) {
      return;
    }
    if (startX - endX > 0) {
      callback(false);
    } else {
      callback(true);
    }
  }

  useEffect(() => {
    ref.addEventListener('touchstart', touchStart, false);
    ref.addEventListener('touchend', touchEnd, false);

    return () => {
      ref.removeEventListener('touchstart', touchStart, false);
      ref.removeEventListener('touchend', touchEnd, false);
    };
  }, deps);
}
