import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const essaysDirectory = path.join(process.cwd(), 'content/essays');

export interface EssayMeta {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  description: string;
  readingTime: string;
}

export interface Essay extends EssayMeta {
  content: any; // MDXRemoteSerializeResult
}

export async function getAllEssays(): Promise<EssayMeta[]> {
  // Check if directory exists
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }

  const folders = fs.readdirSync(essaysDirectory);

  const essays = await Promise.all(
    folders
      .filter((folder) => {
        const folderPath = path.join(essaysDirectory, folder);
        return fs.statSync(folderPath).isDirectory();
      })
      .map(async (folder) => {
        const filePath = path.join(essaysDirectory, folder, 'index.mdx');

        // Check if index.mdx exists
        if (!fs.existsSync(filePath)) {
          return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        const stats = readingTime(content);

        return {
          slug: folder,
          title: data.title || folder,
          date: data.date || '',
          updated: data.updated,
          description: data.description || '',
          readingTime: stats.text,
        };
      })
  );

  // Filter out null values and sort by date (newest first)
  return essays
    .filter((essay): essay is EssayMeta => essay !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getEssayBySlug(slug: string): Promise<Essay | null> {
  const filePath = path.join(essaysDirectory, slug, 'index.mdx');

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypePrism as any],
    },
  });

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    updated: data.updated,
    description: data.description || '',
    readingTime: stats.text,
    content: mdxSource,
  };
}

export async function getAllEssaySlugs(): Promise<string[]> {
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }

  const folders = fs.readdirSync(essaysDirectory);
  return folders.filter((folder) => {
    const folderPath = path.join(essaysDirectory, folder);
    const indexPath = path.join(folderPath, 'index.mdx');
    return fs.statSync(folderPath).isDirectory() && fs.existsSync(indexPath);
  });
}
