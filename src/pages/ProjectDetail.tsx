import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Users } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API or database
  const project = {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built for a leading retail brand.",
    longDescription: `This project involved creating a complete e-commerce platform from the ground up, 
    including product catalog, shopping cart, checkout process, payment integration, and order management. 
    We focused on creating a seamless user experience while ensuring robust security and scalability.`,
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
    client: "Retail Corp",
    duration: "6 months",
    team: "8 members",
    year: "2024",
    challenges: [
      "Handling high traffic during sales events",
      "Integrating multiple payment gateways",
      "Implementing real-time inventory management",
      "Ensuring PCI DSS compliance",
    ],
    results: [
      "40% increase in conversion rate",
      "99.9% uptime during peak seasons",
      "50% reduction in cart abandonment",
      "Processed over $5M in transactions",
    ],
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/projects">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
            </Button>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Client</div>
                <div className="font-semibold">{project.client}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Duration</div>
                <div className="font-semibold">{project.duration}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Team</div>
                <div className="font-semibold">{project.team}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Year</div>
                <div className="font-semibold">{project.year}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground mb-8">{project.longDescription}</p>

              <h3 className="text-2xl font-bold mb-4">Key Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Results & Impact</h3>
              <div className="space-y-6">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-muted/30 border-l-4 border-primary"
                  >
                    <p className="font-semibold">{result}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <Button variant="hero" size="lg" className="w-full">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  View Live Project
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectDetail;
