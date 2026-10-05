'use client';

import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SERVICES = [
  { title: 'MANAGEMENT', description: 'Artist management & career development' },
  { title: 'BOOKING', description: 'Event booking & scheduling' },
  { title: 'EVENTS', description: 'Event production & organization' },
  { title: 'MARKETING', description: 'Digital marketing & promotion' },
  { title: 'STRATEGY', description: 'Business strategy & planning' },
  { title: 'PARTNERSHIPS', description: 'Strategic partnerships & collaborations' },
];

export default function AgencySection() {
  const ref = useScrollAnimation('.service-card', { stagger: 0.1 });

  return (
    <section id="agency" ref={ref} className="py-20 px-4 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-widest">SERVICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="service-card p-8 border-2 border-dark-700 hover:border-red transition group"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red transition">
                {service.title}
              </h3>
              <p className="text-grey-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
