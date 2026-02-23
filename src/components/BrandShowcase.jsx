import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Globe, ShieldCheck, Zap } from "lucide-react";
import { cn } from "../lib/utils";

export default function BrandShowcase({ brands = [] }) {
  const getBrandLogo = (brand) => {
    if (brand.logo) return brand.logo;
    return `https://ui-avatars.com/api/?name=${brand.name}&background=f8fafc&color=0f172a&bold=true`;
  };

  if (brands.length === 0) return null;

  // Use a slower, smoother scroll for a premium feel
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-24 lg:py-32 bg-slate-50/50 font-urbanist relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white,transparent)] opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* --- HERO MATCHED SECTION HEADER --- */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Trusted Network
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
            <span className="block mb-2">Strategic</span>
            <span className="text-transparent stroke-text-light">PARTNERSHIPS.</span>
          </h2>
        </div>

        {/* --- PREMIUM FLOATING SCROLL --- */}
        <div className="relative w-full overflow-hidden py-10 -my-10">
          {/* Soft Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-50/50 via-slate-50/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-50/50 via-slate-50/50 to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-slow flex items-center gap-8 whitespace-nowrap py-10">
            {marqueeBrands.map((brand, i) => (
              <Link 
                key={`${brand.id}-${i}`}
                to={`/shop?brand=${encodeURIComponent(brand.name)}`}
                className="group relative"
              >
                <div className="h-40 w-72 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center gap-4 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(37,99,235,0.08)] hover:-translate-y-2 hover:border-blue-100 group-hover:bg-white/80 backdrop-blur-xl">
                  
                  {/* Floating Pedestal Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]" />

                  {/* Logo Container */}
                  <div className="h-16 w-16 relative z-10 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                    <img 
                      src={getBrandLogo(brand)} 
                      alt={brand.name} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-1">
                    <span className="text-[12px] font-black text-slate-900 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                      {brand.name}
                    </span>
                    <div className="h-0.5 w-0 bg-blue-600 mt-2 transition-all duration-500 group-hover:w-8" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Global Styles for Stroke Text */}
      <style>{`
        .stroke-text-light {
          -webkit-text-stroke: 2px #0f172a;
          color: transparent;
        }
        .animate-marquee-slow {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
