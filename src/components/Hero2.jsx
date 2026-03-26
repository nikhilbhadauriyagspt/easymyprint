import React from 'react';

const Hero2 = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[85vh] overflow-hidden bg-slate-50">
      <div className="w-full h-full">
        <img 
          src="/bann1.png" 
          alt="Promotion Banner" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
          {/* Optional overlay text if needed later */}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
