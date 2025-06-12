import Link from 'next/link';
import Image from 'next/image';
import { BlogCardProps } from '@/types/blog';
import { formatDate } from '@/lib/blog';
import { Clock, Calendar, Tag } from 'lucide-react';

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-pink-200 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100/50">
      <Link href={`/blog/${post.slug}`} className="block">
        {post.coverImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} 分钟阅读</span>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-pink-600 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.description}
          </p>
          
          {post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="h-4 w-4 text-pink-500" />
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-700 border border-pink-200"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{post.tags.length - 3} 更多
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
} 