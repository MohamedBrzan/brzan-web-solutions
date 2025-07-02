
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import BlogPostCard from '@/components/BlogPostCard';
import { getAllBlogPosts, searchBlogPosts, filterBlogPostsByCategory, BlogPost } from '@/services/blogService';

const categories = [
  'All',
  'React',
  'Node.js',
  'Database',
  'Architecture',
  'TypeScript',
  'Performance',
  'Security',
];

const Blog = () => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setFilteredPosts(getAllBlogPosts());
  }, []);

  const filterPosts = (category: string) => {
    setActiveCategory(category);
    let posts = filterBlogPostsByCategory(category);
    
    if (searchTerm) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(posts);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term) {
      const searchResults = searchBlogPosts(term);
      const categoryFiltered = activeCategory === 'All' 
        ? searchResults 
        : searchResults.filter(post => 
            post.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()))
          );
      setFilteredPosts(categoryFiltered);
    } else {
      setFilteredPosts(filterBlogPostsByCategory(activeCategory));
    }
  };

  // Add scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, [filteredPosts]);

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">Blog & Articles</h1>
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
                    ? 'bg-primary text-white'
                    : 'bg-card text-foreground hover:bg-primary/20'
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
              <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                  setFilteredPosts(getAllBlogPosts());
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
              <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Get notified when I publish new articles and tutorials. No spam, just valuable content.
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
                <button type="submit" className="btn btn-primary whitespace-nowrap">
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
              If you'd like me to write about a specific technical topic or have questions about any of my articles,
              feel free to reach out.
            </p>
            <a href="/contact" className="btn btn-outline inline-flex items-center">
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
