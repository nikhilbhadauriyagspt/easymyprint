import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Settings
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Authorized Warranty",
    desc: "Comprehensive partner coverage",
    label: "PREMIUM PROTECTION"
  },
  {
    icon: <Truck size={24} />,
    title: "Priority Shipping",
    desc: "Next-day dispatch protocol",
    label: "GLOBAL LOGISTICS"
  },
  {
    icon: <RotateCcw size={24} />,
    title: "Secure Returns",
    desc: "Hassle-free 7-day policy",
    label: "CLIENT ASSURANCE"
  }
];

export default function Features() {
  return (
    <section className="bg-white font-urbanist py-12 border-b border-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Ultra Clean Icon */}
              <div className="mb-6 text-slate-900 group-hover:text-blue-600 transition-all duration-500 transform group-hover:scale-110">
                {item.icon}
              </div>

              {/* Minimal Text Stack */}
              <div className="space-y-1">
                <h3 className="text-[13px] font-black uppercase tracking-[0.25em] text-slate-900">
                  {item.title}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-[1px] w-8 bg-slate-100 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
