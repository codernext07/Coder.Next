import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Palette, Code, Smartphone } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ServiceCard from "@/components/ServiceCard";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSupabase,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiLeetcode,
} from "react-icons/si";

const Home = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love with modern design principles.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, high-performance websites with cutting-edge technologies.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Developing native and cross-platform mobile applications for iOS and Android.",
    },
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "15+", label: "Team Members" },
  ];

  const techIcons = [
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiSupabase,
    SiFirebase,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiDocker,
    SiKubernetes,
    SiMysql,
    SiLeetcode,
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                Welcome to Coder.Next
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Building Digital{" "}
              <span className="text-blue-500">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              We craft exceptional digital experiences through innovative design, cutting-edge development,
              and strategic thinking. Let's transform your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View Our Work</Link>
              </Button>
            </motion.div>
          </div>

          {/* Animated Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section using react-icons */}
      {/* Technologies Section using react-icons with brand colors and 10px gap */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, fast & scalable technologies we work with
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-[100px] items-center text-10xl" // 10px gap
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* Original Row */}
              {[
                { Icon: SiReact, color: "#61DAFB" },
                { Icon: SiNextdotjs, color: "#000000" },
                { Icon: SiNodedotjs, color: "#339933" },
                { Icon: SiSupabase, color: "#3ECF8E" },
                { Icon: SiFirebase, color: "#FFCA28" },
                { Icon: SiHtml5, color: "#E34F26" },
                { Icon: SiCss3, color: "#1572B6" },
                { Icon: SiTailwindcss, color: "#38B2AC" },
                { Icon: SiDocker, color: "#2496ED" },
                { Icon: SiKubernetes, color: "#326CE5" },
                { Icon: SiMysql, color: "#4479A1" },
                { Icon: SiLeetcode, color: "#FFA116" },
              ].map(({ Icon, color }, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-20 h-20 flex items-center justify-center"
                >
                  <Icon className="w-full h-full" style={{ color }} />
                </div>
              ))}

              {/* Duplicate Row for seamless scroll */}
              {[
                { Icon: SiReact, color: "#61DAFB" },
                { Icon: SiNextdotjs, color: "#000000" },
                { Icon: SiNodedotjs, color: "#339933" },
                { Icon: SiSupabase, color: "#3ECF8E" },
                { Icon: SiFirebase, color: "#FFCA28" },
                { Icon: SiHtml5, color: "#E34F26" },
                { Icon: SiCss3, color: "#1572B6" },
                { Icon: SiTailwindcss, color: "#38B2AC" },
                { Icon: SiDocker, color: "#2496ED" },
                { Icon: SiKubernetes, color: "#326CE5" },
                { Icon: SiMysql, color: "#4479A1" },
                { Icon: SiLeetcode, color: "#FFA116" },
              ].map(({ Icon, color }, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 w-20 h-20 flex items-center justify-center"
                >
                  <Icon className="w-full h-full" style={{ color }} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-primary-foreground max-w-3xl mx-auto"
          >
            <Zap className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's collaborate to bring your ideas to life. Get in touch with our team today.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;