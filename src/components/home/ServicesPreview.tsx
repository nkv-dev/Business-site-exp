import { motion } from 'framer-motion';
import { LayoutTemplate, CalendarPlus, BookOpen } from 'lucide-react';

const services = [
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description: 'High-converting, performance-optimized landing pages that turn your visitors into customers.'
  },
  {
    icon: CalendarPlus,
    title: 'Event Websites',
    description: 'Dynamic and engaging event portals with seamless registration and beautiful imagery.'
  },
  {
    icon: BookOpen,
    title: 'Digital Catalogues',
    description: 'Stunning product showcases with intuitive navigation and immersive brand experiences.'
  }
];

export function ServicesPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We specialize in creating purposeful digital experiences that drive growth.
            </p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group p-8 rounded-3xl glass-card hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-primary/30"
              >
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary mb-8 group-hover:-translate-y-2 transition-transform duration-500 shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
