import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Calendar, Clock, Tag, ThumbsUp, Share2, BookmarkPlus, Coffee, Eye } from 'lucide-react';
import { blogPosts } from './data';

const BlogDetailLayout = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const data = blogPosts.find(post => post.id === parseInt(id));
    if (data) {
      setPost(data);
      setLikes(data.likes || 0);
      setViews(Math.floor(Math.random() * 1000) + 500); // Simulated views
    }
  }, [id]);

  if (!post) {
    return <div className="text-center py-8">Post not found.</div>;
  }

  return (
    <article className="w-full max-w-7xl mx-auto bg-amber-50 p-4">
      {/* Hero Image */}
      <div className="relative h-96 mb-6">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-lg"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h1 className="text-3xl font-bold font-serif">{post.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Coffee className="h-5 w-5" />
            <span className="px-3 py-1 bg-amber-600 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Author Info */}
      <div className="flex items-center my-6 p-4 bg-white rounded-lg shadow-sm">
        <img
          src={post.authorAvatar}
          alt={post.author}
          className="w-12 h-12 rounded-full mr-4 border-2 border-amber-200"
        />
        <div>
          <div className="font-medium text-amber-900">{post.author}</div>
          <div className="text-sm text-amber-600">{post.authorRole}</div>
        </div>
        <div className="ml-auto flex items-center text-amber-600 text-sm space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} read</span>
          </div>
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            <span>{views} views</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose max-w-none mb-8">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-amber-900 leading-relaxed text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tags */}
      <div className="flex items-center flex-wrap gap-2 mb-8">
        <Tag className="h-4 w-4 text-amber-400" />
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full hover:bg-amber-200 cursor-pointer transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Engagement Buttons */}
      <div className="flex items-center justify-between p-4 border-t border-amber-100">
        <button
          onClick={() => setLikes(prev => prev + 1)}
          className="flex items-center gap-2 text-amber-600"
        >
          <ThumbsUp className={`h-5 w-5 ${likes ? 'text-amber-700' : ''}`} />
          <span>{likes}</span>
        </button>
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="flex items-center gap-2 text-amber-600"
        >
          <BookmarkPlus className={`h-5 w-5 ${isBookmarked ? 'text-amber-700' : ''}`} />
        </button>
        <button className="flex items-center gap-2 text-amber-600">
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </article>
  );
};

export default BlogDetailLayout;