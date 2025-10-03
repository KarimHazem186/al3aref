'use client';

import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { button } from '@/lib/variants/button';

const NotificationBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        ' fixed fixed top-0 left-0 w-full z-50 transition-transform duration-300',
        show ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      {/* 'text-xs sm:text-sm', */}
      <div
        className={clsx(
          'bg-primary text-white',
          'py-2 px-4 sm:px-6 md:px-8',
          'text-[10px] sm:text-xs md:text-sm lg:text-[12px]',
          'flex flex-wrap justify-center items-center gap-2',
          'overflow-x-auto whitespace-nowrap',
          'text-center'
        )}
        role="alert"
        aria-label="Important shipping information"
      >
        <span>
          Information on Paying  Tariffs & Customs Fees on International Orders
        </span>
        <button
          className={button({ variant: 'underline', size: 'xs' })}
          aria-label="Learn more about duties and tariffs"
        >
          Learn More
        </button>
  
      </div>
    </header>
  );
};

export default NotificationBar;
