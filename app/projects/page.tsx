import Image from 'next/image';
import projectsData from '@/content/projects/projects.json';

interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  links: {
    live?: string;
    github?: string;
  };
}

export const metadata = {
  title: 'Projects - Guillermo Basterra',
  description: 'Portfolio of projects and experiences',
};

export default function Projects() {
  const projects: Project[] = projectsData;

  return (
    <div className="min-h-screen p-16 pt-24">
      <div className="max-w-4xl">
        <div className="space-y-12">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="border-t border-gray-200 pt-8 first:border-t-0 first:pt-0"
            >
              {/* Thumbnail - only render if image exists */}
              {project.thumbnail && (
                <div className="mb-4 relative w-full aspect-video bg-gray-100">
                  {/* Image will show when you add actual thumbnails */}
                  {/* <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [Project Thumbnail]
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-2xl md:text-3xl text-black">{project.title}</h2>
                  <time className="text-sm text-gray-500 whitespace-nowrap">{project.date}</time>
                </div>

                <p className="text-base leading-relaxed text-gray-600">{project.description}</p>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-black transition-colors"
                    >
                      Live Site →
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-black transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-gray-600 text-center py-12">
            No projects yet. Add projects to{' '}
            <code className="text-sm bg-gray-100 px-2 py-1 rounded">
              content/projects/projects.json
            </code>
          </p>
        )}
      </div>
    </div>
  );
}
