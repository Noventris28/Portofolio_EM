import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/foto_aldo_1_1775531950019.jpeg";

export function Hero() {
  const openWhatsApp = () => {
    window.open("https://wa.me/628884621950", "_blank");
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-background">
      {/* Decorative Blob */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="inline-block border border-dashed border-primary/50 text-primary font-semibold px-4 py-1.5 rounded-full mb-6 text-sm tracking-widest bg-primary/5">
              HI THERE
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              I'M <span className="text-primary block mt-2">NOVENTRIS ALDONIO</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[540px] leading-relaxed">
              An <span className="text-foreground font-medium">Email Marketing Specialist</span> helping businesses grow through engaging campaigns, smart targeting, and data-driven strategies.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <span className="bg-secondary px-4 py-2 rounded-md text-sm font-medium text-secondary-foreground shadow-sm">Mailchimp</span>
              <span className="bg-secondary px-4 py-2 rounded-md text-sm font-medium text-secondary-foreground shadow-sm">Excel</span>
              <span className="bg-secondary px-4 py-2 rounded-md text-sm font-medium text-secondary-foreground shadow-sm">Campaign Analytics</span>
              <span className="bg-secondary px-4 py-2 rounded-md text-sm font-medium text-secondary-foreground shadow-sm">Google Workspace</span>
            </div>

            <Button size="lg" onClick={openWhatsApp} className="text-base h-14 px-8 rounded-full shadow-lg shadow-primary/20">
              LET'S CONNECT
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto flex justify-center items-center"
          >
            {/* Deep Teal organic blob background */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-primary scale-105 -z-10">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,96.5,-2.9C96.2,12.3,89.5,27.3,79.5,39.6C69.5,51.9,56.2,61.6,42.1,70.5C28,79.4,14,87.5,0.2,87.2C-13.6,86.9,-27.2,78.5,-39.8,69.1C-52.4,59.7,-64.1,49.3,-72.7,36.5C-81.3,23.7,-86.8,8.5,-84.9,-5.8C-83,-20.1,-73.7,-33.5,-63.3,-44.6C-52.9,-55.7,-41.4,-64.5,-28.6,-72.3C-15.8,-80.1,-1.5,-86.9,12.5,-84.6C26.5,-82.3,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
            
            <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img 
                src={heroImg} 
                alt="Noventris Aldonio - Email Marketing Specialist" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
