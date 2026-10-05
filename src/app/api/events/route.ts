import { NextRequest, NextResponse } from 'next/server';

const MOCK_EVENTS = [
  {
    id: '1',
    title: 'Techno Nights Vol. 4',
    slug: 'techno-nights-vol-4',
    date: '2026-11-14T23:00:00Z',
    location: 'The Sous-Sol, Angers',
    venue: 'The Sous-Sol',
    artists: ['ADR', 'KAZE'],
    n8lifeUrl: 'https://n8life.fr/evenement/techno-nights-vol-4',
  },
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const upcoming = searchParams.get('upcoming') === 'true';

    let events = MOCK_EVENTS;
    if (upcoming) {
      events = events.filter((e) => new Date(e.date) > new Date());
    }

    return NextResponse.json({ events });
  } catch (error) {
    console.error('Events API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
