let activeScrollFrame: number | null = null;

// Clean up helper to stop ongoing scrolling
function cancelActiveScroll() {
  if (activeScrollFrame !== null) {
    cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = null;
  }
}

/**
 * Custom smooth-scrolling implementation with adjustable duration and easing.
 * Provides a significantly slower and more elegant scroll compared to the default browser behavior.
 */
export function slowScrollTo(targetPosition: number, duration: number = 1600) {
  // Cancel any ongoing programmatic scroll
  cancelActiveScroll();

  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();

  // Cubic-bezier style custom easing function for premium feel
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // Intercept manual scrolling actions to yield control back to the user
  const handleUserInterrupt = () => {
    cancelActiveScroll();
    cleanupEvents();
  };

  const cleanupEvents = () => {
    window.removeEventListener('wheel', handleUserInterrupt);
    window.removeEventListener('touchmove', handleUserInterrupt);
  };

  // Register user actions that should cancel programmatic scrolling
  window.addEventListener('wheel', handleUserInterrupt, { passive: true });
  window.addEventListener('touchmove', handleUserInterrupt, { passive: true });

  function animation(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easedProgress = easeInOutCubic(progress);
    window.scrollTo(0, startPosition + distance * easedProgress);

    if (progress < 1) {
      activeScrollFrame = requestAnimationFrame(animation);
    } else {
      cleanupEvents();
      activeScrollFrame = null;
    }
  }

  activeScrollFrame = requestAnimationFrame(animation);
}

/**
 * Attaches a global listener to intercept clicks on standard anchor tags starting with '#'
 * and handles them using the slowScrollTo function.
 */
export function registerSlowScroll() {
  const handleAnchorClick = (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = window.innerWidth < 640 ? 70 : 155;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        slowScrollTo(offsetPosition, 1600);
      }
    }
  };

  document.addEventListener('click', handleAnchorClick);
  return () => {
    cancelActiveScroll();
    document.removeEventListener('click', handleAnchorClick);
  };
}
