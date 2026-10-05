'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 bg-dark-900">
      <div className="text-center">
        <h1
          ref={titleRef}
          className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-widest text-white mb-4 leading-none"
        >
          3H33
        </h1>
        <div
          ref={subtitleRef}
          className="text-lg sm:text-xl lg:text-2xl text-grey-300 font-light tracking-wide max-w-2xl mx-auto"
        >
          MANAGEMENT & BOOKING
          <br />
          THE NIGHT SOCIAL NETWORK
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 border-r-2 border-red" />
      </div>
    </section>
  );
}
