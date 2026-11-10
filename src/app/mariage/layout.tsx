import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DJ Mariage | 3H33 Agency - Trouvez votre DJ parfait',
  description: 'Découvrez nos DJs spécialisés dans les mariages. 6 DJs aux styles variés pour votre ambiance musicale parfaite. Devis personnalisé gratuit.',
  keywords: 'DJ mariage, DJ mariage Angers, DJ mariage Nantes, DJ mariage France, precio DJ mariage, sono mariage',
  openGraph: {
    title: 'DJ Mariage | 3H33 Agency',
    description: 'Trouvez le DJ et la configuration musicale adaptés à votre mariage.',
    url: 'https://3h33agency.fr/mariage',
  },
};

export default function MariageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
