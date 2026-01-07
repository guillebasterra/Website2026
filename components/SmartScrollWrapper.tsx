'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

interface SmartScrollWrapperProps {
  children: React.ReactNode;
}

export default function SmartScrollWrapper({ children }: SmartScrollWrapperProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldAddPadding, setShouldAddPadding] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkContentHeight = () => {
      if (contentRef.current) {
        // Get the first child element (the actual page content)
        const firstChild = contentRef.current.firstElementChild as HTMLElement;
        if (!firstChild) return;

        // Use getBoundingClientRect for more accurate height measurement
        const contentHeight = firstChild.getBoundingClientRect().height;
        const viewportHeight = window.innerHeight;
        const threshold = viewportHeight * 0.75;

        // Add padding if content exceeds 75% of viewport height
        setShouldAddPadding(contentHeight > threshold);
      }
    };

    // Check on mount and after route changes
    checkContentHeight();

    // Recheck on window resize
    window.addEventListener('resize', checkContentHeight);

    // Multiple delays to catch different loading stages, including MDX rendering
    const timer1 = setTimeout(checkContentHeight, 100);
    const timer2 = setTimeout(checkContentHeight, 300);
    const timer3 = setTimeout(checkContentHeight, 500);
    const timer4 = setTimeout(checkContentHeight, 1000);
    const timer5 = setTimeout(checkContentHeight, 1500);

    return () => {
      window.removeEventListener('resize', checkContentHeight);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [children, pathname]);

  return (
    <div ref={contentRef} className={shouldAddPadding ? 'pb-[50vh]' : ''}>
      {children}
    </div>
  );
}
