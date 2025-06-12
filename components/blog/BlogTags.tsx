'use client';

import { BlogTagsProps } from '@/types/blog';
import { Tag } from 'lucide-react';

export default function BlogTags({ 
  tags, 
  selectedTags = [], 
  onTagSelect 
}: BlogTagsProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tag className="h-4 w-4 text-pink-500" />
      <span className="text-sm font-medium text-foreground">标签:</span>
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onTagSelect?.(tag)}
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              isSelected
                ? 'bg-pink-500 text-white'
                : 'bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-100'
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
} 