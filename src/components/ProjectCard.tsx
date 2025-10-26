import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  index: number;
}

const ProjectCard = ({ id, title, description, tags, imageUrl, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/projects/${id}`}>
        <Card className="h-full overflow-hidden hover:border-primary transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] group">
          <div className="aspect-video overflow-hidden bg-muted">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {title}
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
