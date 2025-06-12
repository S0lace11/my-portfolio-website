import { getAllPosts, getAllTags } from '@/lib/blog';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogList from '@/components/blog/BlogList';
import BlogSearch from '@/components/blog/BlogSearch';
import BlogTags from '@/components/blog/BlogTags';

export default async function BlogPage() {
  const posts = await getAllPosts();
  const tags = getAllTags(posts);

  return (
    <div className="space-y-8">
      <BlogHeader />
      
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex-1 max-w-md">
          <BlogSearch onSearch={() => {}} />
        </div>
        <div className="text-sm text-muted-foreground">
          共 {posts.length} 篇文章
        </div>
      </div>

      {tags.length > 0 && (
        <BlogTags tags={tags} />
      )}

      <BlogList posts={posts} />
    </div>
  );
}
