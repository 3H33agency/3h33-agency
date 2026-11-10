'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ARTISTS, type RosterArtist } from '@/utils/constants';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32Zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm5.3-7.02a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0Z" />
    </svg>
  );
}

function SoundcloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M1 14.5c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2Zm2-2.2c0-.3.2-.5.5-.5s.5.2.5.5v4.2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-4.2Zm2-1.3c0-.3.2-.5.5-.5s.5.2.5.5v5.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-5.5Zm2-1.2c0-.3.2-.5.5-.5s.5.2.5.5v6.7c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.8Zm2-1.3c0-.3.2-.5.5-.5s.5.2.5.5v8c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-8Zm2.5-1.5c0-.3.2-.5.5-.5s.5.2.5.5v9.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V7Zm3 .5c2.5 0 4.5 1.9 4.7 4.3.4-.2.8-.3 1.3-.3 1.7 0 3 1.3 3 3s-1.3 3-3 3h-6c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5Z" />
    </svg>
  );
}

function ArtistCard({ artist }: { artist: RosterArtist }) {
  return (
    <div className="artist-card flex flex-col">
      <div className="relative aspect-square bg-dark-700 rounded border-2 border-dark-600 hover:border-red transition mb-4 overflow-hidden">
        {artist.image ? (
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center">
            <span className="text-grey-400">{artist.name}</span>
          </div>
        )}
      </div>

      <h3 className="text-2xl font-bold text-white">{artist.name}</h3>

      {(artist.tagline || artist.location) && (
        <p className="text-sm text-grey-400 mt-1 tracking-wide uppercase">
          {[artist.tagline, artist.location].filter(Boolean).join(' · ')}
        </p>
      )}

      {artist.styles && artist.styles.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-3">
          {artist.styles.map((style) => (
            <li
              key={style}
              className="px-2 py-1 text-xs font-bold tracking-wide text-grey-400 border border-dark-600 rounded"
            >
              {style}
            </li>
          ))}
        </ul>
      )}

      {artist.bio && <p className="text-sm text-grey-400 leading-relaxed mt-3">{artist.bio}</p>}

      <div className="flex items-center gap-3 mt-4">
        <a
          href="#contact"
          className="px-4 py-2 border-2 border-red text-red hover:bg-red hover:text-dark-900 transition font-bold"
        >
          BOOK
        </a>

        {artist.instagram && (
          <a
            href={artist.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${artist.name}`}
            className="text-grey-400 hover:text-red transition"
          >
            <InstagramIcon />
          </a>
        )}

        {artist.soundcloud && (
          <a
            href={artist.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`SoundCloud de ${artist.name}`}
            className="text-grey-400 hover:text-red transition"
          >
            <SoundcloudIcon />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ArtistsSection() {
  const ref = useScrollAnimation('.artist-card', { stagger: 0.15 });

  return (
    <section id="artists" ref={ref} className="py-20 px-4 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-widest">ARTISTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {ARTISTS.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
