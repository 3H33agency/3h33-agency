export const SITE_NAME = '3h33';
export const SITE_DESCRIPTION = 'Management & Booking / The Night Social Network';
export const SITE_URL = 'https://3h33agency.fr';

export interface RosterArtist {
  name: string;
  slug: string;
  tagline?: string;
  bio?: string;
  image?: string;
  location?: string;
  styles?: string[];
  instagram?: string;
  soundcloud?: string;
}

/**
 * Source unique du roster.
 * Utilisée par ArtistsSection et toute autre page qui affiche les artistes.
 */
export const ARTISTS: RosterArtist[] = [
  { name: 'ADR', slug: 'adr' },
  { name: 'KAZE', slug: 'kaze' },
  { name: 'NOXIA', slug: 'noxia' },
  { name: 'SKRIOUT', slug: 'skriout' },
  { name: 'RAIJIN', slug: 'raijin' },
  {
    name: 'DJ MANO',
    slug: 'mano',
    tagline: 'DJ Caribéen',
    bio: "Originaire de Guyane et basé à Angers, DJ Mano fait vibrer le public au rythme des Caraïbes. Depuis 3 ans, il partage sa passion à travers un univers musical solaire, explosif et fédérateur, où chaque mix est une invitation au voyage. Des sonorités caribéennes aux rythmes urbains, il mélange les influences, fait monter l'énergie et transforme chaque soirée en une expérience unique.",
    image: '/artists/mano.jpg',
    location: 'Angers',
    styles: ['Konpa', 'Zouk', 'Dancehall', 'Shatta', 'Bouyon'],
  },
];

export const SERVICES = [
  { title: 'MANAGEMENT', description: 'Artist management & career development' },
  { title: 'BOOKING', description: 'Event booking & scheduling' },
  { title: 'EVENTS', description: 'Event production & organization' },
  { title: 'MARKETING', description: 'Digital marketing & promotion' },
  { title: 'STRATEGY', description: 'Business strategy & planning' },
  { title: 'PARTNERSHIPS', description: 'Strategic partnerships & collaborations' },
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/3h33agency',
  n8life: 'https://n8life.fr',
};
