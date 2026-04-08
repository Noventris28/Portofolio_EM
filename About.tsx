import { motion } from "framer-motion";
import aboutImg1 from "@assets/about_working_computer.png";
import aboutImg2 from "@assets/about_analysis_chart.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Decorative circle 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 w-[65%] aspect-square rounded-[40px] rounded-br-[100px] rounded-tl-[100px] overflow-hidden border-4 border-white shadow-xl z-10 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img src={aboutImg1} alt="Working on laptop" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Decorative circle 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-0 right-0 w-[60%] aspect-square rounded-[40px] rounded-bl-[100px] rounded-tr-[100px] overflow-hidden border-4 border-white shadow-xl z-20 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img src={aboutImg2} alt="Data analysis" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-2xl z-0" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col items-start"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
              WHO I AM
            </h2>
            
            <p className="text-xl text-foreground font-medium mb-6 leading-relaxed">
              An Indonesian Virtual Assistant dedicated to helping entrepreneurs stay organized and productive.
            </p>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I specialize in creating engaging email content, managing complex email lists, and analyzing campaign performance to ensure optimal reach and conversion. My approach is rooted in data and refined through creative execution.
              </p>
              <p>
                Beyond email marketing, I offer comprehensive Virtual Assistant skills including inbox management, precise data entry, thorough data analysis, and targeted lead generation to streamline your business operations.
              </p>
              <p className="text-foreground font-medium italic border-l-4 border-primary pl-4 py-1">
                "Meticulous, organized, and committed to delivering high-quality work that supports continuous business growth."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              {['Email Management', 'Data Entry', 'Data Analysis', 'Lead Generation'].map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
