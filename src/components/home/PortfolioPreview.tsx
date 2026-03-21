import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Nexus Fintech',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', // Data/Dashboard
  },
  {
    title: 'Lumina Tech Summit 26',
    category: 'Event Website',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop', // Event/Stage
  },
  {
    title: 'Aura Lifestyle',
    category: 'Digital Catalogue',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop', // Fashion/Apparel
  }
];

export function PortfolioPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-black/20 relative overflow-hidden">
      {/* Decor ring */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] border-[1px] border-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
              Selected <span className="text-gradient">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A glimpse into the digital experiences we've brought to life.
            </p>
          </div>
          <Button variant="outline" className="rounded-full w-full md:w-auto px-8 border-border/50 hover:bg-white/5">
            View All Projects
          </Button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.a 
              key={index}
              variants={itemVariants}
              href="#"
              className="group block relative overflow-hidden rounded-3xl aspect-[4/5] bg-muted/20 border border-white/5"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex justify-between items-end translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <p className="text-primary font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-heading font-bold text-white">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
