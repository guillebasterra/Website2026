export const metadata = {
  title: 'Contact - Guillermo Basterra',
  description: 'Get in touch with Guillermo Basterra',
};

export default function Contact() {
  return (
    <div className="min-h-screen p-16 pt-16">
      <div className="max-w-2xl">
        <p className="text-base leading-relaxed text-gray-600">
          Shoot me an email:{' '}
          <a
            href="mailto:guillebasterra@gmail.com"
            className="text-black hover:opacity-60 transition-opacity"
          >
            guillebasterra@gmail.com
          </a>
          {' '}or DM me on X:{' '}
          <a
            href="https://twitter.com/willybasterra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-60 transition-opacity"
          >
            willybasterra
          </a>
          . Reach out, I'd love to talk.
        </p>
      </div>
    </div>
  );
}
