
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/services/blogService';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.slug}`} 
          className="text-primary font-medium hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
