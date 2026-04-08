import { motion } from "framer-motion";
import { Mail, BarChart3, Settings, PenTool, Target } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: "Email Automation & Scheduling",
    description: "Managing automated email flows and scheduling campaigns to ensure consistency and efficiency.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Campaign Performance Analysis",
    description: "Analyzing campaign performance such as open rates, click-through rates (CTR), and conversions to optimize results.",
  },
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email Campaign Creation & Setup",
    description: "Creating and setting up email campaigns from planning to execution, aligned with business goals.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-primary" />,
    title: "Email Copywriting",
    description: "Writing engaging and persuasive email content focused on increasing engagement and conversions.",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Audience Segmentation & Targeting",
    description: "Segmenting audiences based on data to deliver more targeted and effective email campaigns.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


export function Services() {
  return (
    <section id="services" className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 rounded-l-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-right mb-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              SERVICE
            </h2>
            <h3 className="text-2xl font-serif text-foreground font-semibold mb-2">
              EMAIL MARKETING
            </h3>
            <p className="text-muted-foreground max-w-xl ml-auto">
              Comprehensive email marketing solutions designed to nurture leads, drive conversions, and build lasting customer relationships.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
