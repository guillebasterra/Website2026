export default function About() {
  return (
    <div className="min-h-screen p-16 pt-24">
      <div className="max-w-2xl space-y-6">
        <p className="text-lg leading-relaxed text-black">
          This is a placeholder for your bio. Write a few paragraphs about yourself, your background, interests, and what you do.
        </p>

        <p className="text-base leading-relaxed text-gray-600">
          <span className="text-black">Projects</span> showcases my portfolio of work and experiences.
          <span className="text-black ml-4">Essays</span> contains my writing and thoughts on various topics.
          <span className="text-black ml-4">Contact</span> is where you can reach out to me. Under <span className="text-black">Links</span>, you'll find my YouTube channel which consists mainly of covers and video essays, along with my Strava, Goodreads, and resume.
        </p>
      </div>
    </div>
  );
}
