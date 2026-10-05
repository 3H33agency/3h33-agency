'use client';

import Hero from '@/components/Hero';
import ArtistsSection from '@/components/ArtistsSection';
import AgencySection from '@/components/AgencySection';
import N8LifeSection from '@/components/N8LifeSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ArtistsSection />
      <AgencySection />
      <N8LifeSection />
      <ContactSection />
    </>
  );
}
