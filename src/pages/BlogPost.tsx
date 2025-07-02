
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Extended blog post data with full content
const blogPostsData = {
  'building-scalable-react-applications': {
    id: '1',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the key architectural patterns and best practices for building React applications that scale.',
    date: 'April 12, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    slug: 'building-scalable-react-applications',
    tags: ['React', 'Architecture', 'JavaScript'],
    content: `
# Building Scalable React Applications

When building React applications that need to grow and scale, proper architecture becomes crucial. In this comprehensive guide, we'll explore the key patterns and practices that will help you build maintainable and scalable React applications.

## Component Architecture

### 1. Component Composition Over Inheritance

React favors composition over inheritance. This means building complex UIs by combining smaller, focused components rather than creating large, monolithic ones.

\`\`\`jsx
// Good: Composition
const UserCard = ({ user }) => (
  <Card>
    <Avatar src={user.avatar} />
    <UserInfo name={user.name} email={user.email} />
    <UserActions onEdit={handleEdit} onDelete={handleDelete} />
  </Card>
);

// Avoid: Large monolithic components
const UserCard = ({ user }) => (
  <div className="card">
    {/* 200+ lines of JSX */}
  </div>
);
\`\`\`

### 2. Container and Presentational Components

Separate your components into two categories:
- **Container Components**: Handle data fetching and state management
- **Presentational Components**: Focus purely on rendering UI

## State Management Strategies

### Local State vs Global State

Not everything needs to be in global state. Use local state for:
- Form inputs
- UI toggles
- Component-specific data

Use global state for:
- User authentication
- Theme preferences
- Data shared across multiple components

### Context API Best Practices

\`\`\`jsx
// Create focused contexts
const AuthContext = createContext();
const ThemeContext = createContext();

// Avoid god contexts
const AppContext = createContext(); // Contains everything
\`\`\`

## Performance Optimization

### 1. React.memo and useMemo

Use React.memo for expensive components that receive the same props:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <ComplexVisualization data={data} />;
});
\`\`\`

### 2. Code Splitting

Implement route-based code splitting:

\`\`\`jsx
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
\`\`\`

## Testing Strategy

A scalable application needs a comprehensive testing strategy:

1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test complete user workflows

## File Structure

Organize your files in a way that scales:

\`\`\`
src/
  components/
    common/
    forms/
    layout/
  pages/
  hooks/
  utils/
  services/
  types/
\`\`\`

## Conclusion

Building scalable React applications requires thoughtful planning and adherence to best practices. Focus on component composition, proper state management, performance optimization, and maintainable code structure.

The key is to start simple and refactor as your application grows, always keeping scalability and maintainability in mind.
    `
  },
  'optimizing-mongodb-for-performance': {
    id: '2',
    title: 'Optimizing MongoDB for Performance',
    excerpt: 'Discover techniques to enhance MongoDB performance through indexing, sharding, and query optimization.',
    date: 'March 5, 2023',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    slug: 'optimizing-mongodb-for-performance',
    tags: ['MongoDB', 'Database', 'Performance'],
    content: `
# Optimizing MongoDB for Performance

MongoDB is a powerful NoSQL database, but like any database system, it requires proper optimization to perform at its best. This guide covers essential techniques to boost your MongoDB performance.

## Understanding MongoDB Performance

### Key Performance Metrics

Monitor these crucial metrics:
- **Query Response Time**: How long queries take to execute
- **Throughput**: Number of operations per second
- **Resource Utilization**: CPU, memory, and disk usage
- **Index Hit Ratio**: Percentage of queries using indexes

## Indexing Strategies

### 1. Single Field Indexes

Create indexes on frequently queried fields:

\`\`\`javascript
// Create index on email field
db.users.createIndex({ email: 1 })

// Query that benefits from the index
db.users.find({ email: "user@example.com" })
\`\`\`

### 2. Compound Indexes

For queries with multiple conditions:

\`\`\`javascript
// Create compound index
db.orders.createIndex({ customerId: 1, orderDate: -1 })

// Efficient query
db.orders.find({ customerId: 123, orderDate: { $gte: new Date('2023-01-01') } })
\`\`\`

### 3. Text Indexes

For full-text search capabilities:

\`\`\`javascript
// Create text index
db.articles.createIndex({ title: "text", content: "text" })

// Text search query
db.articles.find({ $text: { $search: "mongodb performance" } })
\`\`\`

## Query Optimization

### Use Explain Plans

Always analyze your queries:

\`\`\`javascript
// Analyze query performance
db.users.find({ age: { $gte: 25 } }).explain("executionStats")
\`\`\`

### Projection

Only fetch required fields:

\`\`\`javascript
// Good: Only fetch needed fields
db.users.find({ status: "active" }, { name: 1, email: 1 })

// Avoid: Fetching entire document
db.users.find({ status: "active" })
\`\`\`

### Limit Results

Use limit() to reduce result set size:

\`\`\`javascript
// Limit results for pagination
db.products.find().sort({ createdAt: -1 }).limit(20)
\`\`\`

## Schema Design Principles

### 1. Embed vs Reference

**Embed when:**
- Data is accessed together
- Relationship is one-to-few
- Data doesn't change frequently

**Reference when:**
- Data is large
- Relationship is one-to-many or many-to-many
- Data is accessed independently

### 2. Avoid Deep Nesting

\`\`\`javascript
// Good: Flatten structure
{
  userId: ObjectId("..."),
  userEmail: "user@example.com",
  orderItems: [...]
}

// Avoid: Deep nesting
{
  user: {
    profile: {
      personal: {
        email: "user@example.com"
      }
    }
  }
}
\`\`\`

## Connection Optimization

### Connection Pooling

Configure appropriate pool sizes:

\`\`\`javascript
const client = new MongoClient(uri, {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close socket after 45 seconds of inactivity
});
\`\`\`

## Monitoring and Maintenance

### 1. Regular Index Maintenance

- Remove unused indexes
- Monitor index usage
- Rebuild fragmented indexes

### 2. Profiling

Enable profiling for slow operations:

\`\`\`javascript
// Profile operations slower than 100ms
db.setProfilingLevel(1, { slowms: 100 })

// View profile data
db.system.profile.find().sort({ ts: -1 }).limit(5)
\`\`\`

## Sharding for Scale

When your dataset grows beyond a single server:

### 1. Choose the Right Shard Key

\`\`\`javascript
// Good shard key: High cardinality, even distribution
sh.shardCollection("myapp.users", { "userId": 1 })

// Avoid: Low cardinality shard keys
sh.shardCollection("myapp.users", { "status": 1 }) // Only few status values
\`\`\`

## Conclusion

MongoDB performance optimization is an ongoing process. Start with proper indexing, optimize your queries, design efficient schemas, and monitor your database continuously.

Remember: measure first, optimize second. Use MongoDB's built-in tools to identify bottlenecks before implementing optimizations.
    `
  },
  // Add more blog posts as needed
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/20 to-background overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="relative container h-full flex items-center">
          <div className="max-w-4xl">
            <Link to="/blog" className="inline-flex items-center text-primary mb-4 hover:underline">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleShare}
                className="text-muted-foreground hover:text-foreground"
              >
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-card prose-pre:border"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    // Handle headers
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-2xl font-bold mt-8 mb-4">${line.slice(4)}</h3>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-3xl font-bold mt-12 mb-6">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-4xl font-bold mt-16 mb-8">${line.slice(2)}</h1>`;
                    }
                    
                    // Handle code blocks
                    if (line.startsWith('```')) {
                      if (line.includes('javascript') || line.includes('jsx')) {
                        return '<pre class="bg-card border rounded-lg p-4 overflow-x-auto my-6"><code class="text-sm">';
                      } else if (line === '```') {
                        return '</code></pre>';
                      }
                    }
                    
                    // Handle inline code
                    line = line.replace(/`([^`]+)`/g, '<code class="bg-card px-2 py-1 rounded text-primary">$1</code>');
                    
                    // Handle bold text
                    line = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
                    
                    // Handle bullet points
                    if (line.startsWith('- ')) {
                      return `<li class="mb-2">${line.slice(2)}</li>`;
                    }
                    
                    // Regular paragraphs
                    if (line.trim() && !line.startsWith('<')) {
                      return `<p class="mb-4 leading-relaxed">${line}</p>`;
                    }
                    
                    return line;
                  })
                  .join('\n')
              }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.values(blogPostsData)
                .filter(relatedPost => relatedPost.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="block group"
                  >
                    <div className="bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-muted-foreground mb-2">{relatedPost.date}</div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Enjoyed this article?</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to get notified when I publish new technical articles and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
              <Button className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogPost;
