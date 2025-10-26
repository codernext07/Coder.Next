// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry_for: "Service Inquiry",
    service_type: "Web Development Services",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const serviceOptions = [
    "Web Development Services",
    "App Development Services",
    "UI/UX Design",
    "Digital Marketing",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "inquiry_for") {
      setFormData({
        ...formData,
        inquiry_for: value,
        service_type: serviceOptions[0],
      });
      setResumeFile(null); // reset file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.name.trim() || !formData.phone.trim()) {
        toast({
          title: "Validation Error",
          description: "Please enter your name and phone number.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      if (formData.inquiry_for === "Interview Inquiry" && !resumeFile) {
        toast({
          title: "Validation Error",
          description: "Please upload your resume.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // ✅ Save to Supabase
      const { error } = await supabase.from("inquiries").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          inquiry_for: formData.inquiry_for,
          service_type:
            formData.inquiry_for === "Interview Inquiry"
              ? "Resume Submitted"
              : formData.service_type,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      // ✅ Send Email using EmailJS
      const emailParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        inquiry_for: formData.inquiry_for,
        service_type: formData.service_type,
        message: formData.message,
      };


      // await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   emailParams,
      // );

      toast({
        title: "Form Submitted ✅",
        description: "We will contact you through email shortly!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiry_for: "Service Inquiry",
        service_type: "Web Development Services",
        message: "",
      });
      setResumeFile(null);

    } catch (error) {
      console.error("Detailed error:", error);
      toast({
        title: "Error",
        description: "Something went wrong while sending inquiry.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "coder.next2@gmail.com", link: "mailto:coder.next2@gmail.com" },
    { icon: Phone, title: "Phone", value: "+91 9033786017", link: "tel:+919033786017" },
    { icon: MapPin, title: "Office", value: "INDIA", link: "https://maps.app.goo.gl/yqyZ4sZK1ZB5N6d66" },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In <span className="text-primary">Touch</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have a project in mind? Let’s discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                  <Card className="hover:border-primary transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{info.value}</a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
              <Card className="shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>Fill out the form below and we’ll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <Label htmlFor="inquiry_for">Type of Inquiry *</Label>
                      <select id="inquiry_for" name="inquiry_for" value={formData.inquiry_for} onChange={handleChange} className="w-full border rounded-md p-2 bg-background">
                        <option>Service Inquiry</option>
                        <option>Interview Inquiry</option>
                      </select>
                    </div>

                    {/* Conditional Service Type / Resume */}
                    {formData.inquiry_for === "Service Inquiry" ? (
                      <div className="space-y-2">
                        <Label htmlFor="service_type">Service Type *</Label>
                        <select id="service_type" name="service_type" value={formData.service_type} onChange={handleChange} className="w-full border rounded-md p-2 bg-background">
                          {serviceOptions.map((option) => (<option key={option}>{option}</option>))}
                        </select>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="resume">Upload Your Resume *</Label>
                        <Input type="file" id="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                      </div>
                    )}

                    {/* Phone & Message */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" name="phone" type="text" value={formData.phone} onChange={handleChange} required placeholder="+91 9876543210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={6} />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : (<><Send className="ml-2 w-5 h-5" /> Send Message</>)}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
