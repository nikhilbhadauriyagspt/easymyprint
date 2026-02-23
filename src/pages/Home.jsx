import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import Features from "@/components/Features";
import Collections from "@/components/Collections";
import ShopByCategory from "@/components/ShopByCategory";
import BrandShowcase from "@/components/BrandShowcase";
import ProductGrid from "@/components/ProductGrid";
import CategorySlider from "@/components/CategorySlider";
import BestSellers from "@/components/BestSellers";
import QuickPicks from "@/components/QuickPicks";
import TheVault from "@/components/TheVault";
import PromotionGrid from "@/components/PromotionGrid";
import { Shield, Wrench, ArrowUpRight, Headphones, RefreshCw, ArrowRight, Loader2, ChevronRight, Zap, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import API_BASE_URL from "../config";
import { cn } from "../lib/utils";

export default function Home() {
  const [data, setData] = useState({
    all: [],
    printers: [],
    accessories: [],
    mixedArrivals: [],
    categories: [],
    brands: [],
    loading: true
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes, brandRes] = await Promise.all([
          fetch(`${API_BASE_URL}/products?limit=1000`).then(r => r.json()),
          fetch(`${API_BASE_URL}/categories`).then(r => r.json()),
          fetch(`${API_BASE_URL}/brands`).then(r => r.json())
        ]);

        if (prodRes.status === 'success' && catRes.status === 'success' && brandRes.status === 'success') {
          const allowedBrands = ["brother", "canon", "epson", "hp", "lexmark", "xerox"];
          const filteredBrands = brandRes.data.filter(b => allowedBrands.includes(b.name.trim().toLowerCase()));
          
          const all = prodRes.data.filter(p => 
            !p.name.toLowerCase().includes('laptop') && 
            !p.name.toLowerCase().includes('macbook') && 
            !p.name.toLowerCase().includes('notebook') &&
            !p.name.toLowerCase().includes('chromebook')
          );
          
          const printers = all.filter(p => 
            p.name.toLowerCase().includes('printer') || 
            p.name.toLowerCase().includes('laserjet') || 
            p.name.toLowerCase().includes('pixma')
          );
          const accessories = all.filter(p => 
            p.name.toLowerCase().includes('ink') || 
            p.name.toLowerCase().includes('toner') ||
            p.name.toLowerCase().includes('cable') ||
            p.name.toLowerCase().includes('adapter')
          );

          const shuffled = [...all].sort(() => 0.5 - Math.random());

          setData({
            all,
            printers,
            accessories,
            mixedArrivals: shuffled,
            categories: catRes.data,
            brands: filteredBrands,
            loading: false
          });
        }
      } catch (err) {
        console.error(err);
        setData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white font-snpro overflow-x-hidden text-slate-900">
      <SEO 
        title="Authorized HP Partner | Premium Printers & Hardware" 
        description="Premium destination for authorized HP printers, precision tech, and essential accessories. Delivering excellence in tech solutions across the USA."
      />
      
      <Hero />
      <Features />
      <ShopByCategory categories={data.categories} />
      <Collections />
      <BestSellers products={data.all} />
      <BrandShowcase brands={data.brands} />
      <ProductGrid products={data.mixedArrivals.slice(0, 30)} />

      <CategorySlider 
        title="Office Printers" 
        subtitle="Laser & Inkjet" 
        products={data.printers} 
      />

      <QuickPicks products={data.all} />

      {/* 13. EXPERT CONSULTING - MODERN PREMIUM REDESIGN */}
      <section className="py-24 lg:py-32 bg-slate-50 font-urbanist relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-[1px] w-6 bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Elite Advisory</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85] mb-10">
                <span className="block mb-2">MASTERFUL STRATEGIC</span>
                <span className="text-transparent stroke-text-light">GUIDANCE.</span>
              </h2>
              
              <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed mb-12 max-w-md border-l-4 border-slate-200 pl-8">
                Enhance your professional environment with our bespoke guidance. Our dedicated specialists deliver refined excellence for superior workspace productivity.
              </p>
              
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-16 px-12 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-[1.5rem] shadow-2xl shadow-black/10 hover:bg-blue-600 transition-all duration-500 flex items-center gap-4 group"
                >
                  REQUEST ADVISORY
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
            </div>

            {/* Right Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Shield size={28} />, title: "Premium Warranty", desc: "Official protection protocols for your hardware." },
                { icon: <Wrench size={28} />, title: "Precision Setup", desc: "Optimized configuration for peak performance." },
                { icon: <Zap size={28} />, title: "Priority Response", desc: "Dedicated assistance for your critical needs." },
                { icon: <Layers size={28} />, title: "Seamless Scaling", desc: "Future-ready deployment for growing teams." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.08)] transition-all duration-700 group hover:border-blue-100"
                >
                   <div className="h-14 w-14 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      {item.icon}
                   </div>
                   <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-3">{item.title}</h4>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed group-hover:text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. SCALABLE INFRASTRUCTURE - MODERN PREMIUM REDESIGN */}
      <section className="py-24 lg:py-32 bg-white font-urbanist relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent" />
        
        <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
            
            {/* Left Column */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-[1px] w-6 bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Global Excellence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85] mb-10">
                <span className="block mb-2">SEAMLESS</span>
                <span className="text-transparent stroke-text-light">EXPERIENCES.</span>
              </h2>
              
              <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed mb-12 max-w-lg border-l-4 border-blue-50 pl-8">
                Offering refined acquisition channels and comprehensive stewardship for premier organizations across the globe.
              </p>
              
              <div className="flex gap-12 lg:gap-20">
                 <div className="flex flex-col group cursor-default">
                    <span className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors duration-500">500+</span>
                    <div className="flex items-center gap-2 mt-3">
                       <div className="h-1 w-1 rounded-full bg-blue-600" />
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Strategic Allies</span>
                    </div>
                 </div>
                 <div className="w-px h-16 bg-slate-100" />
                 <div className="flex flex-col group cursor-default">
                    <span className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors duration-500">24H</span>
                    <div className="flex items-center gap-2 mt-3">
                       <div className="h-1 w-1 rounded-full bg-blue-600" />
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Swift Support</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Column (Bento Cards) */}
            <div className="lg:w-1/2 flex flex-col gap-4">
              {[
                { id: "01", title: "Enterprise Pricing", desc: "Optimized procurement for high-volume units." },
                { id: "02", title: "Asset Management", desc: "Comprehensive device tracking & lifecycle support." },
                { id: "03", title: "Priority Logistics", desc: "Tracked international fulfillment networks." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 15 }}
                  className="bg-slate-50/50 hover:bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-100 transition-all duration-500 group flex items-center justify-between hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-center gap-10">
                     <span className="text-sm font-black text-blue-600/20 group-hover:text-blue-600 transition-colors duration-500 italic">[{item.id}]</span>
                     <div>
                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-1">{item.title}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-[280px] leading-relaxed group-hover:text-slate-500">{item.desc}</p>
                     </div>
                  </div>
                  <Link to="/contact" className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                     <ArrowUpRight size={20} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
