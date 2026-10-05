import { NextRequest, NextResponse } from 'next/server';

const MOCK_ARTISTS = [
  { id: '1', name: 'ADR', slug: 'adr', bio: 'Rising afro & urban talent from Angers', location: 'ANGERS / FRANCE', styles: ['AFRO', 'URBAN'], instagram: 'https://instagram.com/adr_dj' },
  { id: '2', name: 'KAZE', slug: 'kaze', bio: 'Techno specialist', location: 'PARIS / FRANCE', styles: ['TECHNO'], instagram: 'https://instagram.com/kaze_dj' },
  { id: '3', name: 'NOXIA', slug: 'noxia', bio: 'Deep house selector', location: 'LYON / FRANCE', styles: ['HOUSE', 'DEEP'], instagram: 'https://instagram.com/noxia_dj' },
  { id: '4', name: 'SKRIOUT', slug: 'skriout', bio: 'Versatile artist', location: 'RENNES / FRANCE', styles: ['TECH', 'HOUSE'], instagram: 'https://instagram.com/skriout_dj' },
  { id: '5', name: 'RAIJIN', slug: 'raijin', bio: 'Bass & electronic producer', location: 'NANTES / FRANCE', styles: ['BASS', 'ELECTRONIC'], instagram: 'https://instagram.com/raijin_dj' },
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    const artists = MOCK_ARTISTS.slice(offset, offset + limit);

    return NextResponse.json({
      artists,
      pagination: { limit, offset, total: MOCK_ARTISTS.length, hasMore: offset + limit < MOCK_ARTISTS.length },
    });
  } catch (error) {
    console.error('Artists API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
