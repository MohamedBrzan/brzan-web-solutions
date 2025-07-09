import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  BlogPost as BlogPostType,
} from "@/services/blogService";
import MarkdownRenderer from "@/components/MarkdownRenderer";

// Utility to strip the first h1 if it matches the post title
function stripFirstH1(content: string, title: string): string {
  const h1Regex = /^#\s+(.+)\n?/i;
  const match = content.match(h1Regex);
  if (match && match[1].trim() === title.trim()) {
    return content.replace(h1Regex, "");
  }
  return content;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      setLoading(true);
      const blogPost = await getBlogPostBySlug(slug);
      setPost(blogPost);
      setLoading(false);
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>

          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>

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

  const relatedPosts = getRelatedPosts(post.slug);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[28rem] sm:h-[32rem] bg-gradient-to-r from-primary/20 to-background overflow-hidden py-12">
        <div className="relative container h-full flex flex-col justify-between z-10 sm:flex-row sm:items-end sm:justify-start">
          <div className="max-w-full w-full flex flex-col items-start text-left gap-4 sm:max-w-4xl sm:gap-2 min-h-[18rem]">
            <Link
              to="/blog"
              className="inline-flex items-center text-primary mb-4 hover:underline"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
            {/* Category Badge */}
            {post.category && (
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold sm:text-sm sm:mb-2">
                {post.category}
              </span>
            )}
            <div className="flex flex-wrap gap-2 justify-start">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-xl font-bold break-words sm:text-2xl md:text-4xl lg:text-5xl sm:mb-2">
              {post.title}
            </h1>
            <p className="text-base text-muted-foreground max-w-xl mb-2 sm:text-lg md:text-xl sm:mb-4">
              {post.excerpt}
            </p>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6 text-muted-foreground text-xs sm:text-base mt-auto">
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
                className="text-muted-foreground hover:text-foreground min-w-[100px]"
              >
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
          style={{ backgroundImage: `url(${post.image})` }}
        />
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <MarkdownRenderer
              content={stripFirstH1(post.content, post.title)}
            />
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
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
                        <div className="text-sm text-muted-foreground mb-2">
                          {relatedPost.date}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Enjoyed this article?</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to get notified when I publish new technical articles
              and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />

              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogPost;
