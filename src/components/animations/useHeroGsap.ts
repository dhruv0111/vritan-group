import { RefObject, useEffect } from 'react';
import gsap from 'gsap';

export function useHeroGsap(
  titleRef: RefObject<HTMLElement>,
  subtitleRef: RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current!, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from(subtitleRef.current!, {
        y: 16,
        opacity: 0,
        duration: 0.6,
        delay: 0.15,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);
}
