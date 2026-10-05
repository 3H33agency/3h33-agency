'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface IntroAnimationProps {
    onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<SVGSVGElement>(null);
    const skipBtnRef = useRef<HTMLButtonElement>(null);
    const [hasSkipped, setHasSkipped] = useState(false);
    const timelineRef = useRef<any>(null);

  useEffect(() => {
        // Check if intro was already played this session
                const introShown = sessionStorage.getItem('introShown');
        if (introShown) {
                onComplete();
                return;
        }

                sessionStorage.setItem('introShown', 'true');

                if (!containerRef.current || !logoRef.current) return;

                const ctx = gsap.context(() => {
                        // Get all path elements from the SVG
                                               const paths = logoRef.current?.querySelectorAll('path');
                        if (!paths) return;

                                               // Calculate total length for each path
                                               const pathLengths: number[] = [];
                        paths.forEach((path) => {
                                  const length = (path as SVGPathElement).getTotalLength?.() || 0;
                                  pathLengths.push(length);
                                  (path as SVGPathElement).style.strokeDasharray = String(length);
                                  (path as SVGPathElement).style.strokeDashoffset = String(length);
                        });

                                               // Create main timeline
                                               const tl = gsap.timeline({
                                                         onComplete: () => {
                                                                     if (!hasSkipped) {
                                                                                   completeIntro();
                                                                     }
                                                         },
                                               });

                                               timelineRef.current = tl;

                                               // Intro: fade in background (black)
                                               tl.to(containerRef.current, { opacity: 1, duration: 0.3 }, 0);

                                               // Animate each path with slight stagger
                                               paths.forEach((path, index) => {
                                                         tl.to(
                                                                     path,
                                                           {
                                                                         strokeDashoffset: 0,
                                                                         duration: 2.0,
                                                                         ease: 'power2.inOut',
                                                           },
                                                                     0.2 + index * 0.1
                                                                   );
                                               });

                                               // Grain effect (subtle flicker)
                                               tl.to(
                                                         containerRef.current,
                                                 {
                                                             '--grain-opacity': 0.15,
                                                             duration: 2.2,
                                                             ease: 'none',
                                                 },
                                                         0.2
                                                       );

                                               // Glitch effect (only on desktop, subtle)
                                               if (window.innerWidth >= 768) {
                                                         const glitchTimes = [1.2, 1.5, 2.2, 2.6];
                                                         glitchTimes.forEach((time) => {
                                                                     tl.to(
                                                                                   logoRef.current,
                                                                       {
                                                                                       x: gsap.utils.random(-2, 2),
                                                                                       y: gsap.utils.random(-1, 1),
                                                                                       duration: 0.05,
                                                                       },
                                                                                   time
                                                                                 );
                                                         });
                                               }

                                               // Show skip button after 0.8s
                                               tl.to(skipBtnRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.4 }, 0.8);

                                               // Hold final frame for 0.3s
                                               tl.to({}, { duration: 0.3 });

                                               // Fade out and transition to hero
                                               tl.to(
                                                         containerRef.current,
                                                 {
                                                             opacity: 0,
                                                             duration: 0.6,
                                                             ease: 'power2.inOut',
                                                 },
                                                         '-=0.2'
                                                       );
                });

                return () => {
                        ctx.revert();
                        if (timelineRef.current) {
                                  timelineRef.current.kill();
                        }
                };
  }, [onComplete, hasSkipped]);

  const completeIntro = () => {
        if (timelineRef.current) {
                timelineRef.current.kill();
        }
        if (containerRef.current) {
                gsap.to(containerRef.current, {
                          opacity: 0,
                          duration: 0.5,
                          ease: 'power2.inOut',
                          onComplete: onComplete,
                });
        }
  };

  const handleSkip = () => {
        setHasSkipped(true);
        completeIntro();
  };

  return (
        <div
                ref={containerRef}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black opacity-0"
                style=
          {{
                      '--grain-opacity': 0,
          } as React.CSSProperties & { '--grain-opacity': number }
}
    >
{/* Grain texture overlay */}
      <div
                className="absolute inset-0 pointer-events-none"
                style={{
                            backgroundImage: `
                                        url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")
                                                  `,
                            opacity: 'var(--grain-opacity)',
                            mixBlendMode: 'overlay',
                }}
              />

{/* Logo SVG */}
      <svg
                ref={logoRef}
                viewBox="0 0 400 150"
                className="w-64 md:w-80 h-auto relative z-10"
                style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))' }}
              >
        {/* 3 */}
              <path
                          d="M 50 50 Q 80 50 80 75 Q 80 90 60 95 Q 80 100 80 115 Q 80 140 50 140 L 50 130 Q 70 130 70 115 Q 70 105 55 105 L 50 105 L 50 95 L 55 95 Q 70 95 70 85 Q 70 70 50 70 L 50 50 Z"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
      
        {/* H */}
              <path
                          d="M 110 50 L 110 140 M 160 50 L 160 140 M 110 95 L 160 95"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
      
        {/* 3 (second) */}
              <path
                          d="M 200 50 Q 230 50 230 75 Q 230 90 210 95 Q 230 100 230 115 Q 230 140 200 140 L 200 130 Q 220 130 220 115 Q 220 105 205 105 L 200 105 L 200 95 L 205 95 Q 220 95 220 85 Q 220 70 200 70 L 200 50 Z"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
      
        {/* 3 (third) */}
              <path
                          d="M 270 50 Q 300 50 300 75 Q 300 90 280 95 Q 300 100 300 115 Q 300 140 270 140 L 270 130 Q 290 130 290 115 Q 290 105 275 105 L 270 105 L 270 95 L 275 95 Q 290 95 290 85 Q 290 70 270 70 L 270 50 Z"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
      </svg>svg>
        
      {/* Skip button */}
              <button
                ref={skipBtnRef}
                          onClick={handleSkip}
                                    className="absolute bottom-8 right-8 px-4 py-2 text-xs text-white border border-white border-opacity-40 rounded opacity-0 pointer-events-none hover:border-opacity-100 transition-all duration-200"
                                              style={{ backdropFilter: 'blur(4px)' }}
      >
        Skip
          </button>
          
{/* Reduced motion support */}
      <style>{`
              @media (prefers-reduced-motion: reduce) {
                        svg {
                                    opacity: 1 !important;
                                              }
                                                        svg path {
                                                                    stroke-dashoffset: 0 !important;
                                                                              }
                                                                                      }
                                                                                            `}</style>style>
        </div>
          );
          }</svg>
