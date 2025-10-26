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

  const teamMembers = [
    {
      name: "Ahmed Raza",
      role: "Full Stack Developer",
      description: "Turning ideas into high-performing digital solutions.",
      image: "/assets/Member/AR.jpg",
    },
    {
      name: "Juned Bhojani",
      role: "Full Stack Developer",
      description: "Designing intuitive and engaging user experiences.",
      image: "/assets/Member/Juned.jpg",
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
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-40 h-40 mx-auto rounded overflow-hidden shadow-lg mb-4 border-2 border-primary/40 group-hover:border-primary transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-muted-foreground mt-2 text-sm px-4">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
