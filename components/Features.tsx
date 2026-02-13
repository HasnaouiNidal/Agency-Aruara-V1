import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Globe, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Globe className="text-cyan-400" />,
    title: "Global Reach",
    desc: "Optimized for speed worldwide with edge computing delivery."
  },
  {
    icon: <Zap className="text-purple-400" />,
    title: "Lightning Fast",
    desc: "Sub-100ms load times ensuring instant user engagement."
  },
  {
    icon: <Layers className="text-indigo-400" />,
    title: "Deep Immersion",
    desc: "Layered animations and depth maps for a premium feel."
  },
  {
    icon: <Cpu className="text-emerald-400" />,
    title: "Smart Systems",
    desc: "AI-driven interactions that adapt to user behavior."
  }
];

const Features: React.FC = () => {
  return (
    <section id="manifesto" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 md:flex justify-between items-end">
          <div className="max-w-2xl">
             <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
               The Science of <br/>
               <span className="text-indigo-400">Digital Attraction</span>
             </h2>
             <p className="text-slate-400 text-lg">
               We don't believe in templates. We engineer digital environments that captivate, convert, and leave a lasting emotional imprint.
             </p>
          </div>
          <div className="hidden md:block pb-2">
            <div className="h-[1px] w-32 bg-slate-700" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl glass-card overflow-hidden hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/10">
                {feature.icon}
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="relative z-10 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.desc}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;