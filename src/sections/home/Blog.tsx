import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlogPostCard, { BlogPost } from "@/components/BlogPostCard";

const Blog = () => {
  // Sample data for blog posts
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the key architectural patterns and best practices for building React applications that scale.",
      date: "April 12, 2023",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "building-scalable-react-applications",
    },
    {
      id: "2",
      title: "Optimizing MongoDB for Performance",
      excerpt:
        "Discover techniques to enhance MongoDB performance through indexing, sharding, and query optimization.",
      date: "March 5, 2023",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "optimizing-mongodb-for-performance",
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Articles
            </h2>
            <p className="text-muted-foreground">
              Technical insights and tutorials from my blog.
            </p>
          </div>
          <Link
            to="/blog"
            className="mt-4 md:mt-0 text-primary font-medium group flex items-center hover:underline"
          >
            View All Articles
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
