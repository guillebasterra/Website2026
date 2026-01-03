import { Link } from 'next-view-transitions';
import { getAllEssays } from '@/lib/mdx';

export const metadata = {
  title: 'Essays - Guillermo Basterra',
  description: 'Writing and essays',
};

export default async function Essays() {
  const essays = await getAllEssays();

  return (
    <div className="min-h-screen p-16 pt-24">
      <div className="max-w-4xl">
        {essays.length > 0 ? (
          <div className="space-y-4">
            {essays.map((essay) => (
              <Link
                key={essay.slug}
                href={`/essays/${essay.slug}`}
                className="group flex gap-12 items-baseline hover:opacity-60 transition-opacity"
              >
                <time className="text-gray-500 text-base shrink-0">
                  {new Date(essay.date).getFullYear()}
                </time>
                <span className="text-black text-lg">
                  {essay.title}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No essays yet.</p>
            <p className="text-sm text-gray-400">
              Add essays to{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">content/essays/</code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
