import { NextResponse } from 'next/server';
import { getEssayBySlug } from '@/lib/mdx';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const essay = await getEssayBySlug(params.slug);

    if (!essay) {
      return NextResponse.json({ error: 'Essay not found' }, { status: 404 });
    }

    return NextResponse.json(essay);
  } catch (error) {
    console.error('Error fetching essay:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
