import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Building2, ShoppingBag, GraduationCap, Heart, TrendingUp, Plane } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      icon: ShoppingBag,
      title: "E-Commerce & Retail",
      description: "Building powerful online stores and retail solutions that drive sales and enhance customer experience with seamless checkout and inventory management.",
      projects: "25+ projects",
    },
    {
      icon: TrendingUp,
      title: "Finance & FinTech",
      description: "Creating secure, compliant financial applications including payment gateways, banking solutions, and investment platforms with enterprise-grade security.",
      projects: "15+ projects",
    },
    {
      icon: Heart,
      title: "Healthcare & MedTech",
      description: "Developing HIPAA-compliant healthcare solutions including telemedicine platforms, patient portals, and medical record management systems.",
      projects: "12+ projects",
    },
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      description: "Building interactive learning platforms with video streaming, progress tracking, quizzes, and certification systems for modern education.",
      projects: "20+ projects",
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Creating booking systems, travel planning tools, and hospitality management platforms with seamless user experiences and real-time updates.",
      projects: "10+ projects",
    },
    {
      icon: Building2,
      title: "Real Estate & PropTech",
      description: "Developing property listing platforms, virtual tour solutions, and property management systems with advanced search and filtering.",
      projects: "8+ projects",
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
              Industries We <span className="text-primary">Serve</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We bring deep industry expertise across multiple sectors, delivering tailored solutions 
              that address unique challenges and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)]">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{industry.title}</CardTitle>
                    <div className="text-sm text-primary font-medium">{industry.projects}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{industry.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Industry Impact
            </h2>
            <p className="text-secondary-foreground/80 text-lg">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-secondary-foreground/80">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6</div>
              <div className="text-secondary-foreground/80">Industries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-secondary-foreground/80">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-secondary-foreground/80">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Industries;
