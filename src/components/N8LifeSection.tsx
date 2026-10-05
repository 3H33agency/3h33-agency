'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function N8LifeSection() {
  const ref = useScrollAnimation('.n8life-item', { stagger: 0.15 });

  return (
    <section id="events" ref={ref} className="py-20 px-4 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-red mb-8 tracking-widest">N8LIFE</h2>
        <p className="text-grey-300 text-xl max-w-2xl mb-16">
          The booking platform built by 3h33. Connecting talents, venues, and events.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: '100+', desc: 'Talents' },
            { label: '50+', desc: 'Events' },
            { label: '25+', desc: 'Venues' },
            { label: '24/7', desc: 'Booking' },
          ].map((stat, i) => (
            <div key={i} className="n8life-item text-center">
              <div className="text-3xl md:text-4xl font-black text-red">{stat.label}</div>
              <div className="text-grey-400 text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <Link
            href="https://n8life.fr"
            target="_blank"
            className="px-8 py-3 bg-red text-dark-900 font-bold hover:bg-red-dark transition flex-1 text-center"
          >
            VISIT N8LIFE
          </Link>
          <Link
            href="https://n8life.fr/repertoire"
            target="_blank"
            className="px-8 py-3 border-2 border-red text-red hover:bg-red hover:text-dark-900 transition font-bold flex-1 text-center"
          >
            BROWSE TALENTS
          </Link>
        </div>
      </div>
    </section>
  );
}
