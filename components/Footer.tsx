import React from 'react';
import { ArrowRight, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-32 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">something real.</span>
            </h2>
            <button className="group flex items-center gap-4 text-xl text-white font-medium hover:text-indigo-300 transition-colors">
              <span className="border-b border-white/30 pb-1 group-hover:border-indigo-300 transition-colors">Start a project</span>
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-300">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-sm">
             <div>
               <h4 className="text-slate-500 uppercase tracking-widest mb-6 text-xs font-bold">Socials</h4>
               <ul className="space-y-4">
                 <li><a href="#" className="text-slate-300 hover:text-white flex items-center gap-2"><Twitter size={14} /> Twitter</a></li>
                 <li><a href="#" className="text-slate-300 hover:text-white flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a></li>
                 <li><a href="#" className="text-slate-300 hover:text-white flex items-center gap-2"><Instagram size={14} /> Instagram</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-slate-500 uppercase tracking-widest mb-6 text-xs font-bold">Contact</h4>
               <ul className="space-y-4">
                 <li><a href="mailto:hello@livingaura.com" className="text-slate-300 hover:text-white flex items-center gap-2"><Mail size={14} /> hello@livingaura.com</a></li>
                 <li className="text-slate-400">123 Innovation Dr.<br/>San Francisco, CA</li>
               </ul>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-500">
           <p>© 2024 Living Aura Agency. All Rights Reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-slate-300">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;