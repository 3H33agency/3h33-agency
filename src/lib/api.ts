export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function fetchArtists() {
  const res = await fetch(`${API_BASE_URL}/api/artists`);
  if (!res.ok) throw new Error('Failed to fetch artists');
  return res.json();
}

export async function submitContact(data: {
  name: string;
  email: string;
  venue?: string;
  message: string;
}) {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to submit contact form');
  return res.json();
}
