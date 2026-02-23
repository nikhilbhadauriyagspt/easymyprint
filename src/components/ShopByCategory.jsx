import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Box } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ShopByCategory({ categories = [] }) {
  const subcategories = categories
    .filter(parent => 
      !parent.name.toLowerCase().includes('laptop') && 
      !parent.slug.toLowerCase().includes('laptop') &&
      !parent.name.toLowerCase().includes('chromebook')
    )
    .flatMap(parent => parent.children || [])
    .filter(sub => 
      !sub.name.toLowerCase().includes('laptop') && 
      !sub.slug.toLowerCase().includes('laptop') &&
      !sub.name.toLowerCase().includes('chromebook')
    );

  const getImagePath = (image) => {
    if (image) return `/${image}`;
    return "https://via.placeholder.com/400x400?text=Category";
  };

  return (
    <section className="px-6 md:px-10 lg:px-16 py-16 lg:py-24 bg-white font-urbanist relative overflow-hidden border-b border-slate-50">
      
      <div className="max-w-[1920px] mx-auto relative z-10">
        {/* --- HERO MATCHED SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-4 bg-blue-600 animate-pulse" />
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.4em]">Premium Selection</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              <span className="block mb-2">SHOP BY</span>
              <span className="text-transparent stroke-text-light">CATEGORY.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-sm mb-2">
             <button className="swiper-prev-btn h-12 w-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-500 group shadow-sm">
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
             </button>
             <button className="swiper-next-btn h-12 w-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-500 group shadow-sm">
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
             </button>
          </div>
        </div>

        {/* --- COMPACT PREMIUM CAROUSEL --- */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.4}
            navigation={{
              prevEl: '.swiper-prev-btn',
              nextEl: '.swiper-next-btn',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4 },
              1440: { slidesPerView: 5.2 },
            }}
            className="!overflow-visible"
          >
            {subcategories.map((item, i) => (
              <SwiperSlide key={item.id} className="h-full py-2">
                <Link to={`/shop?category=${item.slug}`} className="block h-full group">
                  <motion.div
                    className="relative flex flex-col bg-slate-50/50 rounded-[2rem] border border-slate-100 transition-all duration-500 h-[380px] overflow-hidden hover:bg-white hover:border-blue-200 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)]"
                  >
                    {/* Image Area */}
                    <div className="relative flex-1 flex items-center justify-center p-8">
                      <motion.div 
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative z-10 w-full h-full flex items-center justify-center"
                      >
                        <img 
                          src={getImagePath(item.image)} 
                          alt={item.name}
                          className="max-w-[80%] max-h-[80%] object-contain mix-blend-multiply transition-all duration-500 group-hover:drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=" + item.name; }}
                        />
                      </motion.div>
                    </div>

                    {/* Compact Info Footer */}
                    <div className="p-6 pt-0 text-center">
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight truncate mb-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                          Browse Series
                        </span>
                        <ArrowUpRight size={12} className="text-slate-300 group-hover:text-blue-600 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Global Styles for Stroke Text */}
        <style>{`
          .stroke-text-light {
            -webkit-text-stroke: 2px #0f172a;
            color: transparent;
          }
        `}</style>
      </div>
    </section>
  );
}
