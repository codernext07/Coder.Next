import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const post = {
    title: "Modern Web Design Trends for 2024",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Sarah Johnson",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop",
    content: `
      <p>The web design landscape is constantly evolving, and 2024 brings exciting new trends that are reshaping how we create digital experiences.</p>
      
      <h2>1. Minimalist Design with Bold Typography</h2>
      <p>Clean, minimalist interfaces paired with bold, expressive typography are becoming the norm. This approach helps content stand out while maintaining visual clarity.</p>
      
      <h2>2. Dark Mode as Standard</h2>
      <p>Dark mode is no longer just a nice-to-have feature. Users expect it, and designers are creating cohesive experiences that work beautifully in both light and dark themes.</p>
      
      <h2>3. Micro-Interactions and Animations</h2>
      <p>Subtle animations and micro-interactions enhance user experience by providing feedback and making interfaces feel more alive and responsive.</p>
      
      <h2>4. 3D Elements and Immersive Experiences</h2>
      <p>With improved browser capabilities and WebGL, 3D elements are becoming more common, creating immersive experiences that engage users in new ways.</p>
      
      <h2>5. Accessibility-First Design</h2>
      <p>Designing with accessibility in mind from the start is no longer optional. WCAG compliance and inclusive design practices are fundamental to modern web development.</p>
      
      <h2>Conclusion</h2>
      <p>These trends represent a shift toward more thoughtful, user-centered design that prioritizes both aesthetics and functionality. As we move forward, the focus remains on creating experiences that are beautiful, accessible, and performant.</p>
    `,
  };

  return (
    <PageTransition>
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>
            </Button>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden mb-12 shadow-[var(--shadow-elegant)]"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-border"
            >
              <Button asChild variant="outline">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Read More Articles
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </article>
    </PageTransition>
  );
};

export default BlogPost;
