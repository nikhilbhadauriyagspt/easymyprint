import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ShieldCheck, ArrowRight, Loader2, CheckCircle2, Terminal, Activity, Globe, Headphones, ChevronDown } from 'lucide-react';
import API_BASE_URL from '../config';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.status === 'success') {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 font-urbanist overflow-hidden">
      <SEO 
        title="Contact Us | EASYMYPRINT" 
        description="Get in touch with EASYMYPRINT for premium support, corporate inquiries, or product guidance. Our specialists are here to assist."
      />
      
      {/* --- HERO MATCHED PAGE HEADER --- */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 mb-24 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-[1px] w-6 bg-blue-600 animate-pulse" />
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.4em]">Client Assistance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85] mb-10">
            <span className="block mb-2">GET IN</span>
            <span className="text-transparent stroke-text-light">TOUCH.</span>
          </h1>
          
          <p className="text-slate-500 text-lg font-bold leading-relaxed max-w-2xl border-l-4 border-slate-100 pl-8">
            Connect with our dedicated specialists for refined guidance on premium hardware and professional workspace configurations.
          </p>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- CONTACT MODULES --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-10 bg-slate-50/50 border border-slate-100 hover:border-blue-100 transition-all duration-700 group relative overflow-hidden rounded-[2.5rem] hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)]">
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Email Inquiry</p>
              <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">info@easymyprint.shop</h4>
              <div className="mt-8 flex items-center gap-2 pt-6 border-t border-slate-100/50">
                 <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Global Support Active</span>
              </div>
            </div>

            <div className="p-10 bg-slate-50/50 border border-slate-100 hover:border-blue-100 transition-all duration-700 group relative overflow-hidden rounded-[2.5rem] hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)]">
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Office Location</p>
              <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-tight group-hover:text-blue-600 transition-colors">4904 Alpinis Dr <br/> Raleigh, NC 27616</h4>
            </div>

            <div className="p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Headphones size={100} strokeWidth={1} />
              </div>
              <div className="flex items-center gap-3 mb-8">
                 <img src="/brands/hp.png" alt="HP" className="h-6 w-auto object-contain brightness-200" />
                 <div className="h-4 w-px bg-white/20" />
                 <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em]">Official Status</span>
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight mb-4">AUTHORIZED <br/> PARTNER</h4>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Exclusive support & authentic hardware deployment center.</p>
            </div>
          </div>

          {/* --- CONTACT FORM MODULE --- */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-100 p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden rounded-[3.5rem] hover:border-blue-100 transition-colors duration-700">
              {status === 'success' ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-24">
                  <div className="h-20 w-20 rounded-3xl bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-10 shadow-sm border border-emerald-100">
                    <CheckCircle2 size={40} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Request Received.</h2>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-12">A specialist will reach out to you within the next 24 hours.</p>
                  <button onClick={() => setStatus(null)} className="h-14 px-12 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">RESET TERMINAL</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                      <input 
                        required type="text" placeholder="EX. ARTHUR DENT" value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full h-16 px-6 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none text-xs font-bold uppercase transition-all shadow-inner"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                      <input 
                        required type="email" placeholder="NAME@DOMAIN.COM" value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full h-16 px-6 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none text-xs font-bold uppercase transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Contact Number</label>
                      <input 
                        type="tel" placeholder="+1 (000) 000-0000" value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full h-16 px-6 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none text-xs font-bold uppercase transition-all shadow-inner"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Topic</label>
                      <div className="relative">
                        <select 
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full h-16 px-6 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none text-xs font-bold uppercase transition-all appearance-none cursor-pointer shadow-inner pr-12"
                        >
                          <option>General Inquiry</option>
                          <option>Product Support</option>
                          <option>Order Inquiries</option>
                          <option>Corporate Procurement</option>
                          <option>Warranty Claim</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Detailed Message</label>
                    <textarea 
                      required rows="5" placeholder="DESCRIBE YOUR INQUIRY IN DETAIL..." value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-8 bg-slate-50 border border-slate-100 rounded-[2rem] focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none text-xs font-bold uppercase transition-all resize-none shadow-inner"
                    ></textarea>
                  </div>

                  <div className="flex justify-center pt-6">
                    <motion.button 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      className="h-16 px-16 bg-slate-950 text-white rounded-full flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.15)] disabled:opacity-50 group"
                    >
                      {loading ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <>
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:bg-white animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                          SUBMIT INQUIRY
                        </>
                      )}
                    </motion.button>
                  </div>
                  {status === 'error' && <p className="text-center text-red-500 text-[10px] font-black uppercase tracking-widest mt-6">Transmission Failed: Please try again</p>}
                </form>
              )}
            </div>
          </div>

        </div>
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

