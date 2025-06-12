This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



my-portfolio-website/
├── app/
│   ├── blog/
│   │   ├── page.tsx                    # 博客列表页面
│   │   ├── [slug]/
│   │   │   └── page.tsx               # 单篇博客详情页面
│   │   ├── loading.tsx                # 加载状态
│   │   └── layout.tsx                 # 博客专用布局
│   ├── globals.css                    # 现有全局样式
│   ├── layout.tsx                     # 根布局
│   └── page.tsx                       # 首页
├── components/
│   ├── blog/
│   │   ├── BlogCard.tsx               # 博客卡片组件
│   │   ├── BlogList.tsx               # 博客列表组件
│   │   ├── BlogPost.tsx               # 博客文章内容组件
│   │   ├── BlogHeader.tsx             # 博客页面头部
│   │   ├── BlogNavigation.tsx         # 博客导航
│   │   ├── BlogTags.tsx               # 标签组件
│   │   └── BlogSearch.tsx             # 搜索组件
│   ├── markdown/
│   │   ├── MarkdownRenderer.tsx       # Markdown渲染器
│   │   └── CodeBlock.tsx              # 代码块组件
│   └── ui/                            # 现有UI组件
├── content/
│   └── blog/
│       ├── hello-world.md             # 示例博客文章
│       ├── my-journey.md              # 示例博客文章
│       └── ...                        # 更多Markdown文章
├── lib/
│   ├── blog.ts                        # 博客数据处理函数
│   ├── markdown.ts                    # Markdown处理函数
│   └── utils.ts                       # 现有工具函数
├── types/
│   └── blog.ts                        # 博客相关类型定义
└── public/
    └── blog/
        └── images/                    # 博客图片资源