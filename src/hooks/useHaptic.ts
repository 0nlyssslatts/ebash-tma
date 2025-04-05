'use client';

export function useHaptic() {
  let haptic = null;

  if (typeof window !== 'undefined' && window.Telegram?.WebApp) haptic = window.Telegram.WebApp.HapticFeedback;

  return haptic;
}