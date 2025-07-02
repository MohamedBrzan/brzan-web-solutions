
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllBlogPosts } from "@/services/blogService";

const Blog = () => {
  const blogPosts = getAllBlogPosts().slice(0, 2); // Show only first 2 posts

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
