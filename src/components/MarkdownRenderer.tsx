import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const markdownComponents = {
  code({
    node,
    inline,
    className,
    children,
  }: {
    node?: unknown;
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
  }) {
    const match = /language-(\w+)/.exec(className ?? "");
    const language = match ? match[1] : "";

    return !inline && language ? (
      <div className="relative my-6">
        <div className="flex items-center justify-between bg-gray-800 text-gray-200 px-4 py-2 text-sm rounded-t-lg">
          <span className="font-medium">{language}</span>
          <button
            onClick={() =>
              navigator.clipboard.writeText(String(children).replace(/\n$/, ""))
            }
            className="text-gray-400 hover:text-white transition-colors"
          >
            Copy
          </button>
        </div>
        <SyntaxHighlighter
          style={oneDark}
          language={language}
          PreTag="div"
          customStyle={{
            margin: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
          }}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code className="bg-card px-2 py-1 rounded text-primary text-sm">
        {children}
      </code>
    );
  },
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold mt-16 mb-8 text-foreground">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-muted-foreground">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
      {children}
    </blockquote>
  ),
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-transparent">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
