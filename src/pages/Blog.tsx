import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import BlogPostCard, { BlogPost } from "@/components/BlogPostCard";

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Implementing Authentication with JWT",
    excerpt:
      "A comprehensive guide to implementing authentication in web applications using JSON Web Tokens (JWT). Learn about secure token storage, refresh strategies, and best practices.",
    date: "February 18, 2023",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "implementing-authentication-with-jwt",
  },
  {
    id: "2",
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the key architectural patterns and best practices for building React applications that scale. This article covers component structure, state management, and performance optimization techniques.",
    date: "April 12, 2023",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "building-scalable-react-applications",
  },
  {
    id: "3",
    title: "Database Optimization Techniques",
    excerpt:
      "Discover techniques to enhance MongoDB performance through indexing, sharding, and query optimization. Implement these strategies to significantly improve your database response times.",
    date: "March 5, 2023",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "database-optimization-techniques",
  },

  {
    id: "4",
    title: "Real-Time Applications with Socket.io",
    excerpt:
      "Explore how to build real-time features such as chat, notifications, and collaborative editing using Socket.io and Node.js. This tutorial covers both server and client implementation.",
    date: "January 30, 2023",
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "real-time-applications-with-socketio",
  },
  {
    id: "5",
    title: "Microservices vs Monoliths: Choosing the Right Architecture",
    excerpt:
      "An analysis of different architectural approaches for web applications. Understand the trade-offs between microservices and monolithic architectures to make informed decisions for your projects.",
    date: "December 12, 2022",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "microservices-vs-monoliths",
  },
  {
    id: "6",
    title: "Advanced TypeScript Patterns for React Developers",
    excerpt:
      "Take your TypeScript skills to the next level with advanced patterns specifically useful for React development. Learn about generics, utility types, and type-safe component design.",
    date: "November 5, 2022",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "advanced-typescript-patterns-for-react",
  },
];

// Sample categories
const categories = [
  "All",
  "React",
  "Node.js",
  "Database",
  "Architecture",
  "TypeScript",
  "Performance",
  "Security",
];

const Blog = () => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterPosts = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredPosts(
        blogPosts.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(
        blogPosts.filter(
          (post) =>
            (post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
              post.title.includes(category)) ||
            post.excerpt.includes(category)
        )
      );
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (activeCategory === "All") {
      setFilteredPosts(
        blogPosts.filter((post) =>
          post.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(
        blogPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(term.toLowerCase()) &&
            (post.title.includes(activeCategory) ||
              post.excerpt.includes(activeCategory))
        )
      );
    }
  };

  // Add scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check

    return () => window.removeEventListener("scroll", reveal);
  }, [filteredPosts]);

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Blog & Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Insights, tutorials, and thoughts on web development and technology.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterPosts(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-card text-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                  setFilteredPosts(blogPosts);
                }}
                className="mt-4 btn btn-outline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <div className="bg-card rounded-xl p-8 md:p-12 max-w-4xl mx-auto reveal">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to My Newsletter
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Get notified when I publish new articles and tutorials. No spam,
                just valuable content.
              </p>
            </div>

            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                By subscribing, you agree to my Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto reveal">
            <h2 className="text-3xl font-bold mb-6">Have a Topic in Mind?</h2>
            <p className="text-muted-foreground mb-8">
              If you'd like me to write about a specific technical topic or have
              questions about any of my articles, feel free to reach out.
            </p>
            <a
              href="/contact"
              className="btn btn-outline inline-flex items-center"
            >
              Contact Me
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
