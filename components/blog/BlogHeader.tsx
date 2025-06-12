import { Pen } from 'lucide-react';

interface BlogHeaderProps {
  title?: string;
  description?: string;
}

export default function BlogHeader({ 
  title = "我的博客", 
  description = "分享技术见解与生活感悟" 
}: BlogHeaderProps) {
  return (
    <div className="text-center py-12 bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl border border-pink-200/50 mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500 rounded-full mb-4">
        <Pen className="h-8 w-8 text-white" />
      </div>
      <h1 className="text-4xl font-bold text-foreground mb-2 bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
} 