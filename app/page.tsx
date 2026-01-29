import { Link } from 'next-view-transitions';

export default function About() {
  return (
    <div className="p-16 pt-16">
      <div className="max-w-2xl space-y-6">
        <div className="text-lg leading-relaxed text-gray-600 space-y-4">
          <p>My name is Guillermo Basterra. Right now I'm a Computer Science student at USC. I am trying to figure out what I want to do with my life.</p>

          <p>Above all, I want to live courageously. And take risks. See and do great things. Do meaningful work. The first, at least, I can control.</p>

          <p>I built this website for anyone who has any interest in figuring out who I am. I'll give a quick fire:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>Born in Spain, to Spanish parents, moved around while growing up</li>
            <li>Favorite book: Zorba the Greek by Nikos Kazantzakis</li>
            <li>Hobbies: I play the guitar and sing, I like writing and want to be better at it, I read a lot, I play soccer (football, I should say), and I run (for fun, and the occasional marathon) and lift weights</li>
            <li>Interests: I have illusions of grandeur and wish to work on things that matter and will make the world a better place. I am dying to find this work and pour myself into it.</li>
          </ul>

          <p>Now you know more about me feel free to explore this website.</p>
        </div>

        <p className="text-base leading-relaxed text-gray-600">
          <Link href="/projects" className="text-black hover:opacity-60 transition-opacity">Projects</Link> showcases my portfolio of work and experiences.
          <Link href="/essays" className="text-black hover:opacity-60 transition-opacity ml-4">Essays</Link> contains my writing and thoughts on various topics.
          <Link href="/contact" className="text-black hover:opacity-60 transition-opacity ml-4">Contact</Link> is where you can reach out to me. Under <span className="text-black">Links</span>, you'll find my YouTube channel which consists mainly of covers and video essays, along with my Strava, Goodreads, and resume.
        </p>
      </div>
    </div>
  );
}
