import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Neon Horizon",
    category: "SaaS Platform",
    image: "https://picsum.photos/600/800?random=1",
    description: "Fintech dashboard with real-time WebGL data visualization."
  },
  {
    title: "Velvet Space",
    category: "Luxury E-Commerce",
    image: "https://picsum.photos/600/800?random=2",
    description: "Immersive shopping experience for high-end fashion."
  },
  {
    title: "Cyber Core",
    category: "AI Infrastructure",
    image: "https://picsum.photos/600/800?random=3",
    description: "Identity branding and 3D web experience."
  },
  {
    title: "Aura Health",
    category: "MedTech App",
    image: "https://picsum.photos/600/800?random=4",
    description: "Calm, breathing interface for mental wellness tracking."
  }
];

const Catalog: React.FC = () => {
  return (
    <section id="work" className="relative py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-indigo-900/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Works</span>
            </h2>
            <p className="text-slate-400">Where strategy meets artistic execution.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest text-indigo-300 hover:text-white transition-colors mt-6 md:mt-0">
            View All Projects <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Masonry-style overlapping grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`group relative ${idx % 2 === 1 ? 'md:translate-y-24' : ''}`}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
              >
                {/* Image */}
                <div className="absolute inset-0 bg-slate-900">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Border Glow */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-indigo-500/50 transition-colors duration-300" />

                {/* Content Reveal */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="overflow-hidden">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-indigo-300 mb-3 border border-white/5">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                     <p className="text-slate-300 text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                       {project.description}
                     </p>
                     <div className="mt-4 flex items-center gap-2 text-white text-sm font-medium">
                       <span>Case Study</span>
                       <ArrowUpRight size={14} />
                     </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-20 md:hidden">
          <button className="px-8 py-3 rounded-full border border-white/10 text-white text-sm uppercase tracking-wider hover:bg-white/5 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;