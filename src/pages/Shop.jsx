import { useState, useEffect } from 'react';
import { useSearchParams, Link, useParams, useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import { useCart } from '../context/CartContext';
import { 
  Search, 
  ChevronDown, 
  Filter, 
  LayoutGrid, 
  List, 
  ShoppingBag, 
  Heart,
  X,
  Loader2,
  Check,
  ArrowUpDown,
  SlidersHorizontal,
  ArrowRight,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import API_BASE_URL from '../config';
import { cn } from '../lib/utils';

export default function Shop() {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [addedItems, setAddedItems] = useState({});
  const { category: pathCategory, brand: pathBrand } = useParams();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const category = searchParams.get('category') || pathCategory || '';
  const brand = searchParams.get('brand') || pathBrand || '';
  const sort = searchParams.get('sort') || 'newest';
  const search = searchParams.get('search') || '';

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  useEffect(() => {
    fetch(`${API_BASE_URL}/categories`)
      .then(res => res.json())
      .then(d => {
        if (d.status === 'success') {
          const filtered = d.data.filter(cat => 
            !cat.name.toLowerCase().includes('laptop') && 
            !cat.slug.toLowerCase().includes('laptop') &&
            !cat.name.toLowerCase().includes('chromebook')
          );
          setCategories(filtered);
        }
      });
    const allowedBrands = ["brother", "canon", "epson", "hp", "lexmark", "xerox"];
    fetch(`${API_BASE_URL}/brands`).then(res => res.json()).then(d => {
      if (d.status === 'success') {
        setBrands(d.data.filter(b => allowedBrands.includes(b.name.trim().toLowerCase())));
      }
    });
  }, []);

  useEffect(() => {
    if (pathCategory) {
      navigate(`/shop?category=${pathCategory}`, { replace: true });
      return;
    }
    if (pathBrand) {
      navigate(`/shop?brand=${encodeURIComponent(pathBrand)}`, { replace: true });
      return;
    }

    setLoading(true);
    const params = new URLSearchParams(searchParams);
    params.set('limit', '1000');
    
    fetch(`${API_BASE_URL}/products?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          const filteredProducts = data.data.filter(p => 
            !p.name.toLowerCase().includes('laptop') && 
            !p.name.toLowerCase().includes('macbook') && 
            !p.name.toLowerCase().includes('notebook') &&
            !p.name.toLowerCase().includes('chromebook')
          );
          setProducts(filteredProducts);
          setTotal(filteredProducts.length);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [searchParams, pathCategory, pathBrand, navigate]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(key, value);
    else newParams.delete(key);
    newParams.set('page', '1');
    navigate(`/shop?${newParams.toString()}`);
  };

  const getImagePath = (images) => {
    try {
      const imgs = typeof images === 'string' ? JSON.parse(images) : images;
      if (Array.isArray(imgs) && imgs.length > 0) return `/${imgs[0]}`;
    } catch (e) { }
    return "https://via.placeholder.com/400x400?text=No+Image";
  };

  return (
    <div className="bg-white min-h-screen font-urbanist">
      <SEO 
        title="Premium Catalog | EASYMYPRINT" 
        description="Browse our authorized catalog of high-performance tech solutions."
      />
      
      {/* --- HERO MATCHED PAGE HEADER --- */}
      <div className="pt-32 pb-16 px-6 md:px-10 lg:px-16 bg-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-[1px] w-6 bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Authorized Catalog</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85] mb-12">
              <span className="block mb-2">EXPLORE OUR</span>
              <span className="text-transparent stroke-text-light">INVENTORY.</span>
            </h1>
            
            {/* Search Bar Refinement */}
            <div className="w-full max-w-2xl relative group">
               <div className="absolute -inset-4 bg-blue-600/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <input 
                 type="text" 
                 placeholder="Search products, brands or collections..."
                 value={search}
                 onChange={(e) => updateFilter('search', e.target.value)}
                 className="w-full h-20 pl-14 pr-20 bg-slate-50 border border-slate-200 rounded-[2rem] text-xs font-black uppercase tracking-widest focus:outline-none focus:bg-white focus:border-blue-600 transition-all duration-500 shadow-inner relative z-10"
               />
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 z-20" size={20} />
               <div className="absolute right-3 top-3 bottom-3 px-8 bg-slate-900 text-white rounded-[1.5rem] flex items-center justify-center text-[10px] font-black uppercase tracking-widest shadow-lg z-20 hover:bg-blue-600 transition-colors cursor-pointer">
                  Search
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- STICKY FILTER CONTROL HUB --- */}
      <div className="sticky top-[80px] lg:top-[96px] z-[45] bg-white/80 backdrop-blur-3xl border-y border-slate-100 py-5 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "h-12 px-8 rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all shadow-sm",
                isFilterOpen ? "bg-slate-900 text-white shadow-xl" : "bg-white border border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600"
              )}
            >
              <SlidersHorizontal size={16} />
              {isFilterOpen ? "Hide Filters" : "Filter Gallery"}
            </button>

            {/* Quick Filter Chips */}
            <AnimatePresence>
              {(category || brand || search) && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="hidden sm:flex items-center gap-2 border-l border-slate-100 pl-4">
                  {category && (
                    <button onClick={() => updateFilter('category', '')} className="h-9 px-4 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl text-[9px] font-black uppercase flex items-center gap-2 hover:bg-blue-100 transition-colors">
                      {category} <X size={10} />
                    </button>
                  )}
                  {brand && (
                    <button onClick={() => updateFilter('brand', '')} className="h-9 px-4 bg-slate-100 border border-slate-200 text-slate-900 rounded-xl text-[9px] font-black uppercase flex items-center gap-2 hover:bg-slate-200 transition-colors">
                      {brand} <X size={10} />
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-8">
             <div className="hidden md:flex items-center gap-4 bg-slate-50 px-5 py-2.5 rounded-xl border border-slate-100">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sort By</span>
                <select 
                  value={sort} onChange={(e) => updateFilter('sort', e.target.value)}
                  className="bg-transparent text-[11px] font-black uppercase focus:outline-none cursor-pointer text-slate-900"
                >
                  <option value="newest">Recent Arrivals</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="name_asc">Alphabetical</option>
                </select>
             </div>
             <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest border-l border-slate-100 pl-8">{total} Units</p>
          </div>
        </div>

        {/* --- EXPANDABLE FILTER DRAWER --- */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="max-w-[1920px] mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                <div className="space-y-8">
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-3">
                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" /> Collections
                  </h4>
                  <div className="space-y-1.5 max-h-72 overflow-y-auto custom-scrollbar pr-4">
                    {categories.map(cat => (
                      <button 
                        key={cat.id} onClick={() => updateFilter('category', cat.slug)}
                        className={cn("w-full text-left px-5 py-3 text-[11px] font-black uppercase transition-all rounded-xl", category === cat.slug ? "bg-slate-900 text-white shadow-xl" : "text-slate-400 hover:text-blue-600 hover:bg-blue-50/50")}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-3">
                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" /> Partner Brands
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {brands.map(b => (
                      <button 
                        key={b.id} onClick={() => updateFilter('brand', brand === b.name ? '' : b.name)}
                        className={cn("px-4 py-3 text-[10px] font-black uppercase border transition-all rounded-xl", brand === b.name ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20" : "bg-white border-slate-100 text-slate-400 hover:border-slate-900 hover:text-slate-900")}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] flex flex-col justify-between shadow-2xl shadow-black/20 lg:col-span-2">
                   <div>
                      <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4">Filtering Logic</p>
                      <h5 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mb-6">Refine Your <br />Search.</h5>
                   </div>
                   <button 
                     onClick={() => navigate('/shop')}
                     className="w-full py-5 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-lg"
                   >
                     Reset All
                   </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- RESULTS GRID --- */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 py-16 lg:py-24">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-48">
            <Loader2 className="animate-spin h-12 w-12 text-blue-600 mb-6" />
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Accessing Database...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-48 text-center bg-slate-50 rounded-[4rem] border border-slate-100">
            <div className="h-24 w-24 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-8 shadow-sm">
               <X size={40} className="text-slate-200" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">No Units Found</h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-12">Try adjusting your search or filters</p>
            <button onClick={() => navigate('/shop')} className="px-12 py-5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:bg-blue-600 transition-all">Clear Refinement</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {products.map((p, i) => (
              <motion.div 
                key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 5) * 0.05 }}
                className="group relative bg-slate-50/50 rounded-[2.5rem] border border-slate-100 p-6 flex flex-col transition-all duration-700 hover:bg-white hover:border-blue-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] h-full overflow-hidden"
              >
                {/* Wishlist Button */}
                <button 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(p); }}
                  className={cn(
                    "absolute top-5 right-5 z-20 h-9 w-9 rounded-full bg-white border border-slate-100 flex items-center justify-center transition-all duration-500 shadow-sm",
                    isInWishlist(p.id) ? "text-red-500 shadow-md" : "text-slate-200 hover:text-red-500 hover:scale-110"
                  )}
                >
                  <Heart size={15} fill={isInWishlist(p.id) ? "currentColor" : "none"} />
                </button>

                <Link to={`/product/${p.slug}`} className="flex-1 flex flex-col pt-4">
                  <div className="relative aspect-square mb-8 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-90 transition-transform duration-700 opacity-50 shadow-inner" />
                    <motion.img 
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      src={getImagePath(p.images)} alt={p.name}
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
        )}
      </div>

      <style>{`
        .stroke-text-light {
          -webkit-text-stroke: 2px #0f172a;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
