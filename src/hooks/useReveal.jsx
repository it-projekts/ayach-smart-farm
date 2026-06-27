import { useEffect, useRef } from 'react';

export default function useReveal() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);
}
