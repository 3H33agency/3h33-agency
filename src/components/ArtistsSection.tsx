'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ARTISTS = [
  { name: 'ADR', slug: 'adr' },
  { name: 'KAZE', slug: 'kaze' },
  { name: 'NOXIA', slug: 'noxia' },
  { name: 'SKRIOUT', slug: 'skriout' },
  { name: 'RAIJIN', slug: 'raijin' },
];

export default function ArtistsSection() {
  const ref = useScrollAnimation('.artist-card', { stagger: 0.15 });

  return (
    <section id="artists" ref={ref} className="py-20 px-4 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-widest">ARTISTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTISTS.map((artist) => (
            <div key={artist.slug} className="artist-card">
              <div className="aspect-square bg-dark-700 rounded border-2 border-dark-600 hover:border-red transition mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center">
                  <span className="text-grey-400">{artist.name}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
              <button className="px-4 py-2 border-2 border-red text-red hover:bg-red hover:text-dark-900 transition font-bold">
                BOOK
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
