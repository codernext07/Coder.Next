import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ServiceCard from "@/components/ServiceCard";
import { Palette, Code, Smartphone, Figma, Globe, Layers, Workflow, TestTube, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces with user-centered design principles. From wireframes to high-fidelity prototypes, we ensure every pixel serves a purpose.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, high-performance websites using modern frameworks like React, Vue, and Next.js. SEO-optimized and built for scale.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Developing native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter for maximum reach.",
    },
    {
      icon: Figma,
      title: "Design Systems",
      description: "Creating comprehensive design systems that ensure consistency across all your digital products and streamline development.",
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Building complex web applications with real-time features, database integration, and seamless user experiences.",
    },
    {
      icon: Layers,
      title: "Frontend Architecture",
      description: "Implementing scalable, maintainable frontend architectures with best practices for performance and code quality.",
    },
    {
      icon: Workflow,
      title: "API Integration",
      description: "Seamlessly connecting your applications with third-party services, payment gateways, and custom APIs.",
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Comprehensive testing strategies including unit tests, integration tests, and end-to-end testing for reliability.",
    },
    {
      icon: Rocket,
      title: "Deployment & DevOps",
      description: "Setting up CI/CD pipelines, cloud hosting, and monitoring systems to ensure smooth deployments and uptime.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
    },
    {
      step: "02",
      title: "Planning",
      description: "We create a comprehensive project roadmap, define milestones, and establish clear timelines for delivery.",
    },
    {
      step: "03",
      title: "Design",
      description: "Our designers craft beautiful, functional interfaces that align with your brand and delight your users.",
    },
    {
      step: "04",
      title: "Development",
      description: "Our developers bring designs to life with clean, efficient code following industry best practices.",
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing ensures your product works flawlessly across all devices and scenarios.",
    },
    {
      step: "06",
      title: "Launch",
      description: "We handle deployment and provide ongoing support to ensure a successful launch and beyond.",
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive digital solutions from concept to launch. We provide everything you need 
              to succeed in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
