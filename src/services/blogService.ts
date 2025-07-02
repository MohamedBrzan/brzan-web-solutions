
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Implementing Authentication with JWT in Node.js",
    slug: "implementing-authentication-with-jwt",
    excerpt: "Learn how to implement secure JWT-based authentication in Node.js applications with best practices and real-world examples.",
    content: "", // Will be loaded dynamically
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
    tags: ["Node.js", "JWT", "Authentication", "Security"],
    category: "Node.js"
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    slug: "building-scalable-react-applications",
    excerpt: "Best practices and patterns for building React applications that scale with your team and user base.",
    content: "", // Will be loaded dynamically
    date: "March 10, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg",
    tags: ["React", "Architecture", "Scalability", "Best Practices"],
    category: "React"
  },
  {
    id: 3,
    title: "Database Optimization Techniques",
    slug: "database-optimization-techniques",
    excerpt: "Advanced techniques for optimizing database performance in production applications.",
    content: `# Database Optimization Techniques

Database performance is crucial for application scalability. Here are key optimization strategies:

## Indexing Strategies

Proper indexing can dramatically improve query performance:

\`\`\`sql
-- Create composite index for common query patterns
CREATE INDEX idx_user_status_created 
ON users (status, created_at);

-- Partial index for specific conditions
CREATE INDEX idx_active_users 
ON users (email) 
WHERE status = 'active';
\`\`\`

## Query Optimization

Always analyze your queries:

\`\`\`sql
-- Use EXPLAIN to understand query execution
EXPLAIN ANALYZE 
SELECT u.name, p.title 
FROM users u 
JOIN posts p ON u.id = p.user_id 
WHERE u.status = 'active';
\`\`\`

## Connection Pooling

Implement proper connection pooling:

\`\`\`javascript
const pool = new Pool({
  host: 'localhost',
  user: 'database-user',
  password: 'database-password',
  database: 'database-name',
  max: 20, // Maximum connections in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
\`\`\`

These techniques can significantly improve your database performance.`,
    date: "March 5, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg",
    tags: ["Database", "SQL", "Performance", "Optimization"],
    category: "Database"
  }
];

// Function to load markdown content dynamically
const loadMarkdownContent = async (slug: string): Promise<string> => {
  try {
    const response = await fetch(`/src/content/${slug}.md`);
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.error(`Failed to load content for ${slug}:`, error);
  }
  
  // Fallback to inline content
  const post = blogPosts.find(p => p.slug === slug);
  return post?.content || '';
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return null;
  
  // Load markdown content if not already loaded
  if (!post.content) {
    post.content = await loadMarkdownContent(slug);
  }
  
  return post;
};

export const getRelatedPosts = (currentSlug: string): BlogPost[] => {
  const currentPost = blogPosts.find(p => p.slug === currentSlug);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => 
      post.slug !== currentSlug && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 2);
};

export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(post => 
    post.category === category || 
    post.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
  );
};
