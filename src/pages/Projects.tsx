import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "codernext-app",
      title: "CoderNext",
      description: "A cross-platform fitness application enabling users to manage workouts, nutrition plans, and track progress. Includes social engagement features and personalized insights.",
      tags: ["React.js", "Supabase", "Node.js", "Tailwind CSS"],
      imageUrl: "./assets/Project/Coder.Next.png",
    },
    {
      id: "wanderlust-travel",
      title: "WanderLust – Travel Booking Platform",
      description: "A modern travel discovery and booking website with real-time data, dynamic search filters, and interactive destination experiences, powered by a secure backend.",
      tags: ["React.js", "Node.js", "MongoDB", "HTML", "CSS"],
      imageUrl: "./assets/Project/AirBnB.png",
    },
    {
      id: "car-rental-system",
      title: "DriveNow – Car Rental System",
      description: "A complete online car rental solution featuring reservation scheduling, secure payments, automated notifications, and a seamless user experience.",
      tags: ["React.js", "Supabase", "Tailwind CSS"],
      imageUrl: "./assets/Project/Car-Rental.png",
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
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
