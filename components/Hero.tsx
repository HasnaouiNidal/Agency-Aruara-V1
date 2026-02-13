import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="relative z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/30 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
              <Sparkles size={12} className="text-indigo-400" />
              <span>Redefining Digital Presence</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] text-white mb-6">
              We Craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-pulse-slow">
                Living Digital
              </span> <br />
              Experiences.
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10">
              Not just a website. A cinematic journey. We build immersive, high-performance platforms for ambitious brands that refuse to blend in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:border-white/40 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Play size={16} fill="currentColor" className="opacity-80" />
                <span>Showreel</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right: Floating Visual */}
        <div className="relative z-10 order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Glowing Orb Behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-cyan-500/30 rounded-full blur-[80px] animate-pulse-slow" />
            
            {/* Main Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full glass-card rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
               {/* Abstract UI Mockup */}
               <div className="flex justify-between items-center mb-8">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                 </div>
                 <div className="h-2 w-20 bg-white/10 rounded-full" />
               </div>

               <div className="space-y-4">
                 <div className="h-32 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5 p-4 relative group">
                    <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="h-2 w-1/3 bg-indigo-500/50 rounded mb-2" />
                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 rounded-xl bg-white/5 border border-white/5" />
                    <div className="h-24 rounded-xl bg-white/5 border border-white/5" />
                 </div>
               </div>

               {/* Floating elements attached */}
               <motion.div 
                 animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                 className="absolute top-10 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl blur-md opacity-40" 
               />
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                 className="absolute bottom-10 -left-6 px-4 py-2 rounded-lg glass-card border-l-4 border-l-cyan-400 text-xs text-white shadow-lg"
               >
                 <span className="block text-cyan-400 font-bold text-[10px] uppercase tracking-wider">Growth</span>
                 +145% Engagement
               </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;