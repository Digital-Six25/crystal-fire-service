"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;
  const [isVisible, setIsVisible] = useState(true); // Always visible - no scroll animations
  const ref = useRef<HTMLElement>(null);

  // Remove all intersection observer logic - animations are disabled
  useEffect(() => {
    // No-op - animations disabled
  }, []);

  return { ref, isVisible: true }; // Always return true for isVisible
}
