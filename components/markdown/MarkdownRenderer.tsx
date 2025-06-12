import { ReactNode } from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ 
  content, 
  className = '' 
}: MarkdownRendererProps) {
  return (
    <div 
      className={`prose prose-pink max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
} 