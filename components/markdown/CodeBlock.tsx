interface CodeBlockProps {
  children: ReactNode;
  language?: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <div className="relative">
      {language && (
        <div className="absolute top-0 right-0 px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-bl-md">
          {language}
        </div>
      )}
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code className={language ? `language-${language}` : ''}>
          {children}
        </code>
      </pre>
    </div>
  );
} 