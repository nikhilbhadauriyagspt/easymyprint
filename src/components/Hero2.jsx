import React from 'react';
import { motion } from 'framer-motion';

const Hero2 = () => {
  return (
    <section className="relative w-full h-[30vh] xs:h-[35vh]  sm:h-[45vh] md:h-[65vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        <img 
          src="/bann1.png" 
          alt="Promotion Banner" 
          className="w-full object-cover object-[center_center] sm:object-center"
          loading="eager"
        />
        
        {/* Subtle Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Interactive Border/Glow for Premium feel */}
        <div className="absolute inset-x-0 bottom-0 h-24  pointer-events-none" />
      </motion.div>

      {/* Optional: Mobile indicator or subtle scroll hint could go here */}
    </section>
  );
};

export default Hero2;
