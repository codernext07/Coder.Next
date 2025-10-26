import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  index: number;
}

const BlogCard = ({ id, title, excerpt, date, readTime, imageUrl, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/blog/${id}`}>
        <Card className="h-full overflow-hidden hover:border-primary transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] group">
          <div className="aspect-video overflow-hidden bg-muted">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardHeader>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
            <CardDescription className="line-clamp-2">{excerpt}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
