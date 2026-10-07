'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MariagePage() {
  const ref = useScrollAnimation('.mariage-section', { stagger: 0.1 });

  return (
    <div ref={ref} className="min-h-screen bg-dark-900">
      {/* Hero */}
      <section className="py-32 px-4 bg-gradient-to-b from-dark-900 to-dark-800 border-b border-dark-700">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-widest">
            VOTRE MARIAGE<br />VOTRE AMBIANCE<br />VOTRE DJ
          </h1>
          <p className="text-xl text-grey-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            3H33 vous accompagne pour trouver le DJ et la configuration musicale qui correspondent parfaitement à votre mariage.
            Plusieurs DJs aux styles distincts pour tous les univers : élégant, festif, house, afro, électronique...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-red text-dark-900 font-bold text-lg hover:bg-red-dark transition">
              TROUVER MON DJ
            </button>
            <button className="px-8 py-4 border-2 border-grey-400 text-white font-bold text-lg hover:border-white transition">
              DÉCOUVRIR LES PRESTATIONS
            </button>
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="mariage-section py-20 px-4 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 tracking-widest">QUELLE CONFIGURATION POUR VOTRE MARIAGE ?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'DJ Seul', desc: 'Ambiance musicale', features: ['Animations', 'Ambiance garantie', 'Forfait accessible'] },
              { title: 'DJ + Sono', desc: 'Son professionnel', features: ['Son premium', 'Jusqu\'à 150 invités', 'Parole & musique'] },
              { title: 'DJ + Son + Lumières', desc: 'Expérience complète', features: ['Atmosphère premium', 'Jeux de lumière', 'Lieux spacieux'] },
              { title: 'Premium Custom', desc: 'Sur mesure', features: ['Configuration unique', 'Prestation d\'exception', 'Devis personnalisé'] },
            ].map((config) => (
              <div key={config.title} className="p-8 bg-dark-800 border-2 border-dark-700 hover:border-red transition group">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red transition">{config.title}</h3>
                <p className="text-grey-400 mb-6">{config.desc}</p>
                <ul className="space-y-2 mb-8">
                  {config.features.map((feature) => (
                    <li key={feature} className="text-sm text-grey-300">✓ {feature}</li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-red text-dark-900 font-bold hover:bg-red-dark transition text-sm">
                  Demander un devis
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DJs Mariage */}
      <section className="mariage-section py-20 px-4 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-widest">NOS DJS POUR VOTRE MARIAGE</h2>
          <p className="text-grey-400 mb-16 text-lg">6 DJs aux styles variés, adaptés à tous les types de mariages</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'ADR', style: 'Afro · Généraliste', desc: 'Ambiance solaire et festive' },
              { name: 'KAZE', style: 'Uptempo', desc: 'Dancefloor énergique' },
              { name: 'NØXIA', style: 'Dark Techno', desc: 'Élégance moderne' },
              { name: 'CARNAGE', style: 'Hard Techno', desc: 'Énergie décalée' },
              { name: 'SKRIOUT', style: 'Généraliste', desc: 'Tous les styles' },
              { name: 'TEK\'S', style: 'Techno', desc: 'Groove maîtrisé' },
            ].map((dj) => (
              <div key={dj.name} className="dj-card group">
                <div className="aspect-square bg-dark-700 rounded border-2 border-dark-600 hover:border-red transition mb-4 overflow-hidden flex items-center justify-center">
                  <span className="text-grey-400 text-2xl font-bold">{dj.name}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{dj.name}</h3>
                <p className="text-red text-sm mb-2">{dj.style}</p>
                <p className="text-grey-400 text-sm mb-4">{dj.desc}</p>
                <button className="w-full px-4 py-2 border-2 border-red text-red hover:bg-red hover:text-dark-900 transition font-bold">
                  VOIR PROFIL
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="mariage-section py-20 px-4 bg-dark-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-widest">VOTRE MARIAGE EN 4 ÉTAPES</h2>

          <div className="space-y-8">
            {[
              { num: '01', title: 'Vous nous parlez', desc: 'Date, lieu, nombre d\'invités, ambiance souhaitée' },
              { num: '02', title: 'Nous comprenons', desc: 'Analyse de vos besoins et recommandations d\'experts' },
              { num: '03', title: 'Nous sélectionnons', desc: 'Présentation des DJs et configurations adaptés' },
              { num: '04', title: 'Vous choisissez', desc: 'Devis personnalisé et réservation de votre prestation' },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-red flex items-center justify-center rounded-full">
                  <span className="text-dark-900 font-black text-2xl">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-grey-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mariage-section py-20 px-4 bg-dark-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-widest">QUESTIONS FRÉQUENTES</h2>

          <div className="space-y-6">
            {[
              { q: 'Combien coûte un DJ de mariage ?', a: 'Le prix dépend de votre configuration, de la durée et de la complexité. Comptez généralement entre 800€ et 3000€. Nous vous proposons un devis sur mesure après discussion de vos besoins.' },
              { q: 'Dois-je louer la sonorisation séparément ?', a: 'Non, nous proposons des forfaits tout inclus DJ + son + lumières. Vous pouvez aussi choisir juste le DJ si vous avez déjà votre équipement.' },
              { q: 'Quel DJ pour quel type de mariage ?', a: 'Chaque DJ a son univers. ADR pour l\'ambiance festive, NØXIA pour l\'élégance, KAZE pour le dancefloor énergique... Nous vous aidons à matcher.' },
              { q: 'Combien de temps faut-il à l\'avance pour réserver ?', a: 'Nous recommandons de nous contacter 2-3 mois avant votre mariage, mais les délais peuvent varier selon la saison.' },
            ].map((item) => (
              <div key={item.q} className="border-l-4 border-red pl-6 py-4">
                <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                <p className="text-grey-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark-800 to-dark-900 border-t border-dark-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">PRÊT À TROUVER VOTRE DJ ?</h2>
          <p className="text-grey-400 mb-12 text-lg">Partagez-nous vos envies et laissez-nous vous proposer la meilleure prestation.</p>
          <button className="px-12 py-4 bg-red text-dark-900 font-bold text-xl hover:bg-red-dark transition">
            DEMANDER UN DEVIS
          </button>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'DJ Mariage | 3H33 Agency - Trouvez votre DJ parfait',
  description: 'Découvrez nos DJs spécialisés dans les mariages. 6 DJs aux styles variés pour votre ambiance musicale parfaite. Devis personnalisé gratuit.',
  keywords: 'DJ mariage, DJ mariage Angers, DJ mariage Nantes, DJ mariage France, precio DJ mariage, sono mariage',
  openGraph: {
    title: 'DJ Mariage | 3H33 Agency',
    description: 'Trouvez le DJ et la configuration musicale adaptés à votre mariage.',
    url: 'https://3h33agency.fr/mariage',
  },
};
