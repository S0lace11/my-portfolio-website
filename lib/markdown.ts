import { remark } from 'remark';
import remarkHtml from 'remark-html';
import matter from 'gray-matter';
import { BlogMetadata } from '@/types/blog';

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

export function parseFrontMatter(fileContent: string): {
  data: BlogMetadata;
  content: string;
} {
  const { data, content } = matter(fileContent);
  
  return {
    data: data as BlogMetadata,
    content,
  };
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);
  return readTime;
}

export function extractExcerpt(content: string, maxLength: number = 150): string {
  const plainText = content.replace(/[#*`\[\]]/g, '').trim();
  if (plainText.length <= maxLength) {
    return plainText;
  }
  return plainText.substring(0, maxLength).trim() + '...';
} 