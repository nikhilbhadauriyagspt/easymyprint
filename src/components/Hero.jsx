import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Search, ShieldCheck, Zap, Monitor, Cpu, Activity, Layout, Terminal, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

// Import local assets
import banner1 from "@/assets/bannerr/banner1.jpg";
import banner2 from "@/assets/bannerr/banner2.jpg";
import banner3 from "@/assets/bannerr/banner3.jpg";
import banner4 from "@/assets/bannerr/banner4.jpg";

const slides = [
  {
    id: "NXT-01",
    tag: "PREMIUM QUALITY",
    title: "Next-Gen",
    highlight: "Precision.",
    desc: "Elevate your professional output with high-performance laser technology engineered for ultimate clarity and enterprise-level reliability.",
    image: banner1,
    link: "/category/printers",
    specs: ["ULTRA-FAST OUTPUT", "HD CLARITY HUB", "SECURE PROTOCOLS"]
  },
  {
    id: "VIS-02",
    tag: "CREATIVE HUB",
    title: "Creative",
    highlight: "Brilliance.",
    desc: "Discover museum-grade color fidelity and wide-format versatility, tailored for architects, photographers, and visionary designers.",
    image: banner2,
    link: "/category/printers",
    specs: ["COLOR MASTERY", "ARTISTIC RANGE", "DESIGNER SERIES"]
  },
  {
    id: "SMR-03",
    tag: "SMART CONNECT",
    title: "Seamless",
    highlight: "Ecosystem.",
    desc: "Seamlessly bridge the gap between digital and physical workflows with advanced cloud integration and intelligent wireless connectivity.",
    image: banner3,
    link: "/category/printers",
    specs: ["REMOTE ACCESS", "SMART CONNECT", "INTUITIVE HUB"]
  },
  {
    id: "ULT-04",
    tag: "MAX RELIABILITY",
    title: "Ultimate",
    highlight: "Performance.",
    desc: "High-volume printing infrastructure that combines rapid-fire speed with robust security protocols to keep your business moving forward.",
    image: banner4,
    link: "/category/printers",
    specs: ["ELITE SECURITY", "MAX ENDURANCE", "SMART HANDLING"]
  }
];

export default function Hero() {
  const { openSearch } = useCart();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 9000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="bg-white px-0 font-urbanist relative">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] bg-blue-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-slate-100/50 blur-[100px] rounded-full" />
      </div>

      <section className="relative h-[85vh] w-full overflow-hidden bg-slate-50">
        
        {/* --- DYNAMIC SLIDE CONTENT --- */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent z-10" />
            <img 
              src={slides[current].image} 
              alt="" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-30 h-full w-full flex flex-col lg:flex-row items-stretch">
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 xl:translate-x-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10 uppercase">
                  <span className="block mb-2">{slides[current].title}</span>
                  <span className="text-transparent stroke-text-light">{slides[current].highlight}</span>
                </h1>

                <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed max-w-xl mb-12">
                  {slides[current].desc}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <Link to={slides[current].link}>
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-16 px-12 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl shadow-2xl shadow-black/10 hover:bg-blue-600 transition-all duration-500 flex items-center gap-4 group"
                    >
                      EXPLORE SERIES
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </Link>
                  
                  <div className="flex items-center gap-6 py-2 px-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                     <div className="h-10 w-10 flex items-center justify-center">
                        <img src="/brands/hp.png" alt="HP" className="w-full h-full object-contain" />
                     </div>
                     <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="h-[1px] w-3 bg-blue-600" />
                          <span className="text-[8px] font-black text-blue-600 uppercase tracking-[0.3em]">Official</span>
                        </div>
                        <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">Authorized HP Partner</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Spec Hub (Bento Style) */}
          <div className="lg:w-[500px] flex flex-col justify-center p-8 lg:p-16 relative overflow-hidden xl:-translate-x-20">
             
             {/* Glass Container */}
             <div className="relative z-10 bg-white/40 backdrop-blur-3xl border border-white/60 p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em]">Core Features</p>
                  </div>
                  <Cpu size={18} className="text-slate-300" />
                </div>

                <AnimatePresence mode="wait">
                  <div className="space-y-4">
                    {slides[current].specs.map((spec, i) => (
                      <motion.div 
                        key={spec + current}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="group bg-white/60 hover:bg-white border border-transparent hover:border-blue-100 p-6 rounded-2xl transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-black text-slate-900 uppercase tracking-widest">{spec}</span>
                          <Activity size={14} className="text-blue-500 opacity-30 group-hover:opacity-100 transition-all" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatePresence>

                <div className="mt-12 pt-10 border-t border-slate-200/50">
                   <button 
                     onClick={openSearch}
                     className="w-full h-20 bg-slate-900 text-white hover:bg-blue-600 transition-all duration-500 rounded-3xl flex items-center justify-between px-8 group shadow-xl shadow-black/10"
                   >
                      <div className="flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                            <Search size={20} />
                         </div>
                         <span className="text-[11px] font-black uppercase tracking-[0.3em]">Search Archive</span>
                      </div>
                      <div className="h-8 w-8 rounded-lg border border-white/20 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all">
                         <ArrowRight size={16} />
                      </div>
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* --- NAVIGATION OVERLAYS --- */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 z-40 hidden xl:block">
           <button onClick={prevSlide} className="h-16 w-16 bg-white/80 backdrop-blur-md text-slate-900 rounded-2xl border border-white/50 shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-500 group">
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
           </button>
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2 z-40 hidden xl:block">
           <button onClick={nextSlide} className="h-16 w-16 bg-white/80 backdrop-blur-md text-slate-900 rounded-2xl border border-white/50 shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-500 group">
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

        {/* --- PROGRESS DOTS --- */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 bg-white/40 backdrop-blur-md p-3 rounded-full border border-white/40 shadow-lg">
           {slides.map((_, i) => (
             <button 
               key={i} 
               onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
               className={cn(
                 "h-1.5 rounded-full transition-all duration-500",
                 current === i ? "w-8 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]" : "w-2 bg-slate-300 hover:bg-slate-400"
               )} 
             />
           ))}
        </div>

        <style>{`
          .stroke-text-light {
            -webkit-text-stroke: 2px #0f172a;
            color: transparent;
          }
        `}</style>

      </section>
    </div>
  );
}
