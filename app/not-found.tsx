import { Link } from 'next-view-transitions';

export default function NotFound() {
  return (
    <div className="min-h-screen p-16 pt-24">
      <div className="max-w-2xl">
        <p className="text-lg mb-6 text-gray-600">Page not found</p>
        <Link
          href="/"
          className="inline-block text-base text-gray-500 hover:text-black transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
