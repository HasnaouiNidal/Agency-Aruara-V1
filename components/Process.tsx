import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Discovery", desc: "We deep dive into your brand DNA, uncovering the core narrative that will drive the design." },
  { num: "02", title: "Direction", desc: "Establishing the visual language. Moodboards, motion prototypes, and architectural planning." },
  { num: "03", title: "Craft", desc: "The heavy lifting. Coding, animating, and refining every pixel until it breathes." },
  { num: "04", title: "Launch", desc: "Optimization, testing, and the global release of your new digital entity." },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Our Methodology</h2>
          <p className="text-slate-400 max-w-xl mx-auto">From abstract thought to concrete reality. A structured chaos.</p>
        </div>

        <div className="relative">
          {/* Connection Line Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group"
              >
                {/* Dot on line */}
                <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 z-10 group-hover:scale-150 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                <div className="pt-8 md:pt-24 text-center md:text-left px-4">
                   <div className="text-5xl font-display font-bold text-slate-800 mb-4 group-hover:text-indigo-900/50 transition-colors duration-500">{step.num}</div>
                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{step.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                     {step.desc}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;