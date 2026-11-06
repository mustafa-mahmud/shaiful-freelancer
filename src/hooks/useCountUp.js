import { useEffect, useRef, useState } from "react";

export function useCountUp({ end = 0, duration = 1.6, threshold = 0.35, once = true }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || end <= 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        if (once && animated.current) return;
        animated.current = true;
        const startTime = performance.now();
        const step = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / (duration * 1000), 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, threshold, once]);

  return [ref, count];
}
