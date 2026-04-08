import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
import contactImg from "@assets/Foto_Aldo_1_nobg.png";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-primary text-primary-foreground rounded-[40px] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                  LET'S CONNECT
                </h2>
                
                <p className="text-primary-foreground/80 text-lg mb-12 max-w-md">
                  Ready to elevate your email marketing strategy? Let's discuss how we can work together to achieve your business goals.
                </p>

                <div className="space-y-6">
                  <a href="https://wa.me/628884621950" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium">+628884621950</span>
                  </a>
                  
                  <a href="mailto:noventrisaldonio201@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium">noventrisaldonio201@gmail.com</span>
                  </a>
                  
                  <a href="https://instagram.com/noventris_aldonio_va" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium">@noventris_aldonio_va</span>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/noventrisaldonio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium">Noventris Aldonio</span>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="relative h-64 lg:h-auto overflow-hidden bg-white/5">
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                <img 
                  src={contactImg} 
                  alt="Noventris Aldonio" 
                  className="w-full h-full object-contain object-bottom"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
