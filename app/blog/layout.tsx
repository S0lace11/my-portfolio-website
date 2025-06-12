import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '博客 | 我的作品集',
  description: '分享技术见解与生活感悟',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
} 