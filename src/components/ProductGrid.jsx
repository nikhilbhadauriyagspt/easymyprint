import { motion } from "framer-motion";
import { ShoppingBag, Heart, ArrowRight, Check, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function ProductGrid({ products = [] }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const getImagePath = (images) => {
    try {
      const imgs = typeof images === 'string' ? JSON.parse(images) : images;
      if (Array.isArray(imgs) && imgs.length > 0) return `/${imgs[0]}`;
    } catch (e) { }
    return "https://via.placeholder.com/400x400?text=No+Image";
  };

  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 lg:py-32 bg-white font-urbanist relative overflow-hidden">
      
      <div className="max-w-[1920px] mx-auto relative z-10">
        {/* --- HERO MATCHED SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-4 bg-blue-600 animate-pulse" />
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.4em]">Latest Inventory</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              <span className="block mb-2">NEW</span>
              <span className="text-transparent stroke-text-light">ARRIVALS.</span>
            </h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-4 text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] hover:text-blue-600 transition-colors mb-2">
              Browse Complete Gallery
              <div className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
                <ArrowRight size={16} />
              </div>
           </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
          {products.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.05 }}
                className="group relative bg-slate-50/50 rounded-[2.5rem] border border-slate-100 p-6 flex flex-col transition-all duration-700 hover:bg-white hover:border-blue-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] h-full overflow-hidden"
              >
                {/* Wishlist Icon */}
                <button 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(p); }}
                  className={cn(
                    "absolute top-5 right-5 z-20 h-9 w-9 rounded-full bg-white border border-slate-100 flex items-center justify-center transition-all duration-500 shadow-sm",
                    isInWishlist(p.id) ? "text-red-500 shadow-md" : "text-slate-200 hover:text-red-500 hover:scale-110"
                  )}
                >
                  <Heart size={15} fill={isInWishlist(p.id) ? "currentColor" : "none"} />
                </button>

                {/* Product Visual Area */}
                <Link to={`/product/${p.slug}`} className="flex-1 flex flex-col pt-4">
                  <div className="relative aspect-square mb-8 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-90 transition-transform duration-700 opacity-50 shadow-inner" />
                    <motion.img 
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      src={getImagePath(p.images)} 
                      alt={p.name}
                      className="max-w-full max-h-full object-contain mix-blend-multiply relative z-10 transition-transform duration-700"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=Not+Found"; }}
                    />
                  </div>

                  <div className="space-y-3 px-2">
                    <span className="text-[8px] font-black text-blue-600 uppercase tracking-[0.3em] bg-blue-50/50 px-2 py-1 rounded-md">{p.brand_name || 'AUTHENTIC'}</span>
                    <h3 className="text-[14px] font-black text-slate-900 uppercase tracking-tighter line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-500">
                      {p.name}
                    </h3>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xl font-black text-slate-950 tracking-tighter">${p.price}</span>
                    </div>
                  </div>
                </Link>

                {/* Action Hub - Dynamic Pill */}
                <div className="mt-8 pt-6 border-t border-slate-100/50">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAddToCart(p); }}
                    disabled={addedItems[p.id]}
                    className={cn(
                      "w-full h-12 rounded-xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest transition-all duration-500 shadow-md",
                      addedItems[p.id] 
                        ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                        : "bg-slate-950 text-white hover:bg-blue-600 shadow-black/10 hover:shadow-blue-600/20"
                    )}
                  >
                    {addedItems[p.id] ? <Check size={14} /> : <Plus size={14} />}
                    {addedItems[p.id] ? "SUCCESS" : "ADD TO CART"}
                  </motion.button>
                </div>
              </motion.div>
            ))}
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
