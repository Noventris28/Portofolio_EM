import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import projectImg1Top from "@assets/image_1775540503057.png";
import projectImg1Bottom from "@assets/image_1775540517365.png";
import projectImg2a from "@assets/image_1775541587989.png";
import projectImg2b from "@assets/image_1775541598022.png";
import projectImg2c from "@assets/image_1775541615890.png";
import projectImg2d from "@assets/image_1775541627716.png";
import projectImg2e from "@assets/image_1775541643773.png";
import projectImg2f from "@assets/image_1775541655917.png";
import projectImg2g from "@assets/image_1775541665515.png";
import projectImg3a from "@assets/image_1775541899429.png";
import projectImg3b from "@assets/image_1775541910144.png";
import projectImg3c from "@assets/image_1775541927724.png";
import projectImg3d from "@assets/image_1775541942178.png";
import projectImg3e from "@assets/image_1775541960153.png";

const projects = [
  {
    title: "Welcome Email",
    category: "",
    description: "Building brand awareness and credibility through a warm welcome sequence that introduces the brand, delivers immediate value, and drives meaningful engagement.",
    image: projectImg1Top,
    imageBottom: projectImg1Bottom,
    cropMainBottom: undefined as string | undefined,
    extraImages: [] as string[],
  },
  {
    title: "Value-Driven Campaign",
    category: "",
    description: "I designed this email with three main pillars to answer potential buyers' biggest concerns (Location, Legality, and Finance):",
    image: projectImg2a,
    imageBottom: undefined,
    cropMainBottom: "9%",
    extraImages: [projectImg2b, projectImg2c, projectImg2d, projectImg2e, projectImg2f, projectImg2g],
  },
  {
    title: "Promotion Email",
    category: "",
    description: "Dalam desain ini, saya menerapkan beberapa prinsip copywriting dan desain strategis: The \"Hook\" (Banner), Problem-Solution Approach, High-Value Incentives, Direct CTA (Call to Action).",
    image: projectImg3a,
    imageBottom: undefined,
    cropMainBottom: undefined as string | undefined,
    extraImages: [projectImg3b, projectImg3c, projectImg3d, projectImg3e],
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6">
            EMAIL CAMPAIGN CREATION & SETUP
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Creating and managing email campaigns using tools like Mailchimp, including welcome email, value-driven email, and promotional email sequences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 shadow-md border border-border/50 bg-secondary/30">
                {/* Mockup email client bar */}
                <div className="sticky top-0 left-0 right-0 h-10 bg-white/90 backdrop-blur-sm border-b border-border/50 flex items-center px-4 gap-2 z-20">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-chart-4/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-chart-2/80"></div>
                  </div>
                  <div className="ml-4 text-[10px] font-medium text-muted-foreground px-2 py-1 bg-secondary rounded-md w-full max-w-[150px] truncate">
                    {project.title}
                  </div>
                </div>
                <div className="relative group-hover:scale-[1.02] transition-transform duration-700 origin-top">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay pointer-events-none"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover object-top"
                    style={project.cropMainBottom ? { clipPath: `inset(0 0 ${project.cropMainBottom} 0)`, marginBottom: `-${project.cropMainBottom}` } : undefined}
                  />
                  {project.imageBottom && (
                    <img
                      src={project.imageBottom}
                      alt={`${project.title} continued`}
                      className="w-full object-cover object-top border-t border-border/30"
                    />
                  )}
                  {project.extraImages && project.extraImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} part ${i + 2}`}
                      className="w-full object-cover object-top border-t border-border/30"
                    />
                  ))}
                </div>
              </div>
              
              <div>
                {project.category && (
                  <Badge variant="outline" className="mb-3 text-primary border-primary/30">
                    {project.category}
                  </Badge>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
