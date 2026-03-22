import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractiveWindow } from './InteractiveWindow';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-primary/30 rounded-full blur-[100px] pointer-events-none origin-bottom-right" 
      />
      
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] md:w-[35rem] md:h-[35rem] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none origin-top-left" 
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50rem] bg-[radial-gradient(ellipse_at_center,rgba(128,128,128,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid Pattern overlay for premium tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-8 text-sm font-medium relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
            <Sparkles size={16} />
            <span>Redefining Digital Experiences</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-heading font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            We Build <br className="hidden lg:block md:hidden block" />
            <span className="text-gradient">Premium Websites</span>
            <br /> That Convert.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-muted-foreground lg:max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
          >
            Elevate your brand with blazing-fast landing pages, event websites, and catalogues designed to leave a lasting impression.
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 h-14 px-8 text-lg font-medium group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-border/50 bg-background/50 hover:bg-white/10 backdrop-blur-md h-14 px-8 text-lg font-medium transition-colors">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
           className="relative hidden lg:block"
        >
           <InteractiveWindow />
        </motion.div>
        </div>
      </div>
    </section>
  );
}
