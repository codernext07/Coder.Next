import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const posts = [
    {
      id: "modern-web-design-trends",
      title: "Modern Web Design Trends for 2024",
      excerpt: "Explore the latest design trends shaping the future of web interfaces, from minimalism to bold typography.",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    },
    {
      id: "react-performance-optimization",
      title: "React Performance Optimization Tips",
      excerpt: "Learn essential techniques to make your React applications faster and more efficient.",
      date: "Mar 10, 2024",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    },
    {
      id: "mobile-first-approach",
      title: "Why Mobile-First Design Matters",
      excerpt: "Understanding the importance of mobile-first design in today's mobile-dominated world.",
      date: "Mar 5, 2024",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
    {
      id: "accessibility-best-practices",
      title: "Web Accessibility Best Practices",
      excerpt: "Making your website accessible to everyone: essential guidelines and implementation strategies.",
      date: "Feb 28, 2024",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
    },
    {
      id: "api-design-principles",
      title: "RESTful API Design Principles",
      excerpt: "Best practices for designing scalable and maintainable REST APIs that developers love.",
      date: "Feb 20, 2024",
      readTime: "10 min read",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    {
      id: "typescript-benefits",
      title: "The Benefits of TypeScript in 2024",
      excerpt: "Why TypeScript has become essential for modern web development and how it improves code quality.",
      date: "Feb 15, 2024",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Insights, tutorials, and thoughts on web development, design, and technology trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.id} {...post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
