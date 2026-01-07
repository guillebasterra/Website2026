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
      <div className="p-6 md:p-12 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!essay) {
    return (
      <div className="p-6 md:p-12 flex items-center justify-center">
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
    <div className="p-16 pt-16">
      <article className="max-w-2xl">
        {/* Back Link */}
        <Link
          href="/essays"
          className="inline-block text-sm text-gray-500 mb-12 hover:text-black transition-colors"
        >
          ← Back to Essays
        </Link>

        {/* Substack-style Header */}
        <header className="mb-12 pb-8 border-b border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
            {essay.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6 font-normal">
            {essay.description}
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <time>
              {new Date(essay.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{essay.readingTime}</span>
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
          </div>
        </header>

        {/* Essay Content with Substack-style Typography */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-black prose-a:underline hover:prose-a:text-gray-600 prose-strong:text-black prose-blockquote:border-l-black prose-blockquote:text-gray-700 prose-blockquote:font-normal">
          <MDXRemote {...essay.content} />
        </div>
      </article>
    </div>
  );
}
