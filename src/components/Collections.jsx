import { motion } from "framer-motion";
import { Printer, ChevronRight, ArrowRight, Settings, Box, Activity, ShieldCheck, Zap, Layers } from "lucide-react";
import { Link } from "react-router-dom";

// Import local assets
import printerCat from "@/assets/category/printer_cat.jpg";
import { cn } from "../lib/utils";

export default function Collections() {
  return (
    <section className="bg-white font-urbanist relative overflow-hidden py-24 lg:py-40">
      
      {/* Background Industrial Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
         <h2 className="text-[15vw] lg:text-[25vw] font-black text-slate-50 uppercase leading-none tracking-tighter opacity-60">
           PRINTER
         </h2>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* --- LEFT: TECHNICAL CONTENT NODE --- */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                 <div className="h-14 w-1 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-1">Primary Division</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Enterprise Infrastructure Hub</span>
                 </div>
              </div>

              <h3 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter uppercase leading-[0.85]">
                SYSTEM <br /> <span className="text-transparent stroke-text-dark italic">SOLUTIONS.</span>
              </h3>

              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md uppercase tracking-tight">
                Engineering high-velocity secure printing nodes and precision scanning modules for global professional environments.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link to="/shop?category=printers" className="w-full sm:w-auto">
                  <button className="h-18 px-12 bg-slate-950 text-white hover:bg-blue-600 transition-all duration-500 rounded-none font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl flex items-center justify-between gap-10 group active:scale-95">
                    INITIALIZE CATALOG
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
                <div className="flex items-center gap-3">
                   <Activity size={16} className="text-blue-600 animate-pulse" />
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Active</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: KINETIC VISUAL CANVAS --- */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-none border border-slate-100 shadow-2xl group"
            >
              <img 
                src={printerCat} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt="Printer Excellence" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent" />
            </motion.div>

            {/* Background Geometric Detail */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-slate-100 -z-10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border-2 border-blue-50 -z-10 rounded-none" />
          </div>

        </div>
      </div>

      <style>{`
        .stroke-text-dark {
          -webkit-text-stroke: 1.5px #0f172a;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
