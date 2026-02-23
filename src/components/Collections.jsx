import { motion } from "framer-motion";
import { Printer, ChevronRight, ArrowRight, ArrowUpRight, Settings, Box, Activity, ShieldCheck, Zap, Layers } from "lucide-react";
import { Link } from "react-router-dom";

// Import local assets
import printerCat from "@/assets/category/printer_cat.jpg";
import { cn } from "../lib/utils";

export default function Collections() {
  return (
    <section className="bg-white font-urbanist relative overflow-hidden py-24 lg:py-40">
      
      {/* --- CREATIVE BACKGROUND ELEMENTS --- */}
      <div className="absolute top-1/4 -left-20 w-[40%] h-[40%] bg-blue-50/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-slate-100/50 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          {/* --- LEFT: DYNAMIC CONTENT NODE --- */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="h-px w-12 bg-blue-600" />
                   <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">Exclusive Selection</span>
                </div>

                <h3 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-[0.8]">
                  <span className="block mb-4">REFINED</span>
                  <span className="text-transparent stroke-text-dark italic relative inline-block">
                    INNOVATION
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      className="absolute -bottom-2 left-0 h-2 bg-blue-600/10 -z-10"
                    />
                  </span>
                </h3>

                <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed max-w-lg border-l-4 border-slate-100 pl-8">
                  Experience the pinnacle of printing technology with our elite selection of devices, meticulously chosen to empower your creative endeavors.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                <Link to="/shop?category=printers" className="w-full sm:w-auto relative group">
                  <div className="absolute -inset-4 bg-blue-600/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative h-20 px-14 bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.4em] rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] hover:bg-blue-600 transition-all duration-700 flex items-center justify-between gap-12"
                  >
                    EXPLORE SERIES
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: MULTI-LAYERED VISUAL CANVAS --- */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="relative p-4 md:p-10">
              
              {/* Decorative Frame */}
              <div className="absolute top-0 right-0 w-2/3 h-2/3 border-t-2 border-r-2 border-slate-100 rounded-tr-[5rem] -z-10" />
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 border-b-2 border-l-2 border-blue-50 rounded-bl-[5rem] -z-10" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-[4rem] border-8 border-white shadow-[0_50px_100px_rgba(0,0,0,0.12)] group"
              >
                <img 
                  src={printerCat} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                  alt="Printer Excellence" 
                />
                
                {/* Dynamic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700" />
                
                {/* Floating Interactive Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 right-12 p-8 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-2xl z-20 hidden md:block"
                >
                   <div className="flex flex-col items-center text-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
                         <Printer size={24} />
                      </div>
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Series X Pro</span>
                   </div>
                </motion.div>

                {/* Bottom Glass Hub */}
                <Link to="/shop?category=printers" className="absolute bottom-10 inset-x-10 p-1 bg-white/30 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-xl overflow-hidden group-hover:bg-white/50 transition-all duration-700 block z-30">
                   <div className="flex items-center justify-between px-8 py-6">
                      <div className="flex items-center gap-6">
                         <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                         <div>
                            <p className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em] mb-1">Authenticated</p>
                            <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Premium Print Architecture</h4>
                         </div>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-700">
                         <ArrowUpRight size={20} />
                      </div>
                   </div>
                </Link>
              </motion.div>

              {/* Spotlight Glow */}
              <div className="absolute -inset-20 bg-blue-400/5 blur-[100px] rounded-full -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .stroke-text-dark {
          -webkit-text-stroke: 2px #0f172a;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
