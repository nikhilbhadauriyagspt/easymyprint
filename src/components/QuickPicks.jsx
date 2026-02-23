import { motion } from "framer-motion";
import { Plus, ArrowRight, Check, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import API_BASE_URL from "../config";
import { cn } from "../lib/utils";
import 'swiper/css';

export default function QuickPicks({ products = [] }) {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();
  
  const getImagePath = (images) => {
    try {
      const imgs = typeof images === 'string' ? JSON.parse(images) : images;
      if (Array.isArray(imgs) && imgs.length > 0) return `/${imgs[0]}`;
    } catch (e) { }
    return "https://via.placeholder.com/400x400?text=No+Image";
  };

  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 lg:py-32 bg-slate-50 font-urbanist relative overflow-hidden">
      
      <div className="max-w-[1920px] mx-auto relative z-10">
        {/* --- HERO MATCHED SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-4 bg-blue-600 animate-pulse" />
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.4em]">Essential Add-ons</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              <span className="block mb-2">QUICK</span>
              <span className="text-transparent stroke-text-light">PICKS.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
             <button className="qp-prev h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-sm cursor-pointer">
                <ChevronLeft size={20} />
             </button>
             <button className="qp-next h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-sm cursor-pointer">
                <ChevronRight size={20} />
             </button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{ prevEl: '.qp-prev', nextEl: '.qp-next' }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1440: { slidesPerView: 4.5 },
              1600: { slidesPerView: 5.5 },
            }}
            className="!overflow-visible"
          >
            {products.map((p, i) => (
              <SwiperSlide key={p.id} className="py-4">
                <motion.div 
                  onClick={() => navigate(`/product/${p.slug || p.id}`)}
                  whileHover={{ y: -8 }}
                  className="flex flex-col p-6 bg-white border border-slate-100 rounded-[2.5rem] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] hover:border-blue-100 group cursor-pointer h-[420px]"
                >
                  <div className="relative h-[200px] bg-slate-50 rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center p-6 group-hover:bg-blue-50/50 transition-colors duration-700">
                    <motion.img 
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      src={getImagePath(p.images)} 
                      alt={p.name} 
                      className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]" 
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                       <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{p.brand_name || 'Authorized'}</span>
                       <div className="flex items-center gap-1.5">
                          <div className="h-1 w-1 rounded-full bg-emerald-500" />
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">In Stock</span>
                       </div>
                    </div>
                    <h4 className="text-base font-black text-slate-900 uppercase tracking-tighter line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight mb-2">{p.name}</h4>
                    
                    <div className="mt-auto flex items-center justify-between">
                       <p className="text-xl font-black text-slate-900 tracking-tighter">${p.price}</p>
                       <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { 
                          e.preventDefault(); 
                          e.stopPropagation(); 
                          addToCart(p);
                        }}
                        className={cn(
                          "h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl",
                          cart.find(i => i.id === p.id) 
                            ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                            : "bg-slate-900 text-white group-hover:bg-blue-600 shadow-black/10 hover:shadow-blue-600/20"
                        )}
                      >
                        {cart.find(i => i.id === p.id) ? <Check size={18} strokeWidth={3} /> : <Plus size={22} />}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global Styles for Stroke Text */}
      <style>{`
        .stroke-text-light {
          -webkit-text-stroke: 2px #0f172a;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
