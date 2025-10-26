import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional results that exceed expectations and drive business growth.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We prioritize understanding your needs and building lasting partnerships.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest standards in every project, ensuring top-tier quality in design and development.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that future-proof your business.",
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
              About <span className="text-primary">Coder.Next</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're a team of passionate designers, developers, and strategists dedicated to creating 
              digital experiences that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2019, Coder.Next started with a simple vision: to help businesses succeed 
                    in the digital age through exceptional design and development.
                  </p>
                  <p>
                    What began as a small team of three has grown into a diverse group of 15+ talented 
                    professionals, each bringing unique expertise and perspective to every project.
                  </p>
                  <p>
                    Today, we've completed over 100 projects for clients ranging from startups to 
                    Fortune 500 companies, always maintaining our commitment to quality, innovation, 
                    and client satisfaction.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <div className="text-6xl font-bold mb-4">5+</div>
                    <div className="text-2xl">Years of Excellence</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section> */}

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 shadow-[var(--shadow-card)]">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              A diverse group of talented individuals united by a passion for creating exceptional digital experiences
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
              <Users className="w-5 h-5" />
              15+ Creative Professionals
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
