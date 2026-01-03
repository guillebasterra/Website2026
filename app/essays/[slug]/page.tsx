'use client';

import { MDXRemote } from 'next-mdx-remote';
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Essay {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  description: string;
  readingTime: string;
  content: any;
}

export default function EssayPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [essay, setEssay] = useState<Essay | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEssay() {
      try {
        const response = await fetch(`/api/essays/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setEssay(data);
        }
      } catch (error) {
        console.error('Error loading essay:', error);
      } finally {
        setLoading(false);
      }
    }

    loadEssay();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen p-6 md:p-12 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!essay) {
    return (
      <div className="min-h-screen p-6 md:p-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Essay not found</p>
          <Link href="/essays" className="underline hover:text-gray-600">
            ← Back to Essays
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-16 pt-24">
      <article className="max-w-3xl">
        {/* Back Link */}
        <Link
          href="/essays"
          className="inline-block text-sm text-gray-500 mb-8 hover:text-black transition-colors"
        >
          ← Back to Essays
        </Link>

        {/* Essay Header */}
        <header className="mb-12">
          <div className="flex gap-4 text-sm text-gray-500 mb-8">
            <time>
              {new Date(essay.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {essay.updated && (
              <>
                <span>•</span>
                <span>
                  Updated {new Date(essay.updated).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </>
            )}
            <span>•</span>
            <span>{essay.readingTime}</span>
          </div>
        </header>

        {/* Essay Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-700">
          <MDXRemote {...essay.content} />
        </div>
      </article>
    </div>
  );
}
