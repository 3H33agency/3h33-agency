export interface Artist {
  id: string;
  name: string;
  slug: string;
  bio: string;
  image?: string;
  location: string;
  styles: string[];
  instagram?: string;
  soundcloud?: string;
  spotifyUrl?: string;
  n8lifeUrl?: string;
  n8lifeId?: string;
  createdAt?: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description?: string;
  date: string;
  location: string;
  venue: string;
  image?: string;
  artists?: string[];
  n8lifeUrl?: string;
  buyUrl?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  venue?: string;
  message: string;
}

export interface Client {
  id: string;
  name: string;
  type: 'club' | 'bar' | 'venue' | 'promoter';
  quote: string;
  location: string;
  image?: string;
}
