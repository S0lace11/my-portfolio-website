export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  readTime: number;
  content: string;
  published: boolean;
  coverImage?: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  published: boolean;
  coverImage?: string;
}

export interface BlogListProps {
  posts: BlogPost[];
  currentPage?: number;
  totalPages?: number;
}

export interface BlogCardProps {
  post: BlogPost;
}

export interface BlogSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export interface BlogTagsProps {
  tags: string[];
  selectedTags?: string[];
  onTagSelect?: (tag: string) => void;
} 