import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Github, Send, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyber-purple/30 text-cyber-purple text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-purple"></span>
            </span>
            SYSTEM ONLINE: READY TO BUILD
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] mb-6 tracking-tighter">
            ONKAR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan glow-purple">
              SHELKE
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-display font-medium text-white/80 mb-4 flex items-center gap-3">
            <span className="w-12 h-[1px] bg-cyber-cyan" />
            Game Developer | Computer Engineering Student
          </h2>

          <p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed font-sans">
            "Building immersive interactive worlds through code and creativity." 
            Specializing in gameplay mechanics, AI systems, and interactive environments.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyber-purple text-white font-bold rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all"
            >
              View Projects <ChevronRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://github.com/onkar000007"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/5 transition-all"
            >
              <Github className="w-5 h-5" /> GitHub
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border border-cyber-cyan/30 text-cyber-cyan font-bold rounded-xl flex items-center gap-2 hover:bg-cyber-cyan/5 transition-all"
            >
              <Send className="w-5 h-5" /> Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Element / Game Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/20 to-cyber-cyan/20 blur-[100px] rounded-full animate-pulse" />
          
          <div className="relative glass border border-white/10 rounded-3xl p-8 shadow-2xl animate-float overflow-hidden">
            {/* HUD Header */}
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-cyber-cyan p-1">
                  <img 
                    src="https://picsum.photos/seed/onkar/100/100" 
                    alt="Player Avatar" 
                    className="w-full h-full rounded-full grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyber-cyan uppercase tracking-widest">Player Profile</div>
                  <div className="text-lg font-display font-bold">ONKAR_SHELKE</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Level</div>
                <div className="text-2xl font-display font-black text-cyber-purple">LVL 20</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/60">
                    <span>Logic</span>
                    <span className="text-cyber-cyan">92%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-cyber-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/60">
                    <span>Creativity</span>
                    <span className="text-cyber-purple">88%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                      className="h-full bg-cyber-purple shadow-[0_0_10px_rgba(147,51,234,0.5)]" 
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/60">
                    <span>Optimization</span>
                    <span className="text-cyber-blue">85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                      className="h-full bg-cyber-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/60">
                    <span>UI/UX</span>
                    <span className="text-cyber-cyan">90%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1.5, delay: 1.6 }}
                      className="h-full bg-cyber-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory / Tech Stack Icons */}
            <div className="border-t border-white/10 pt-6">
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4">Equipped Tools</div>
              <div className="flex gap-4">
                <div className="w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center group hover:border-cyber-purple/50 transition-all cursor-help" title="Unity Engine">
                  <div className="w-6 h-6 bg-white/10 rounded-sm group-hover:bg-cyber-purple/20 transition-all" />
                </div>
                <div className="w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center group hover:border-cyber-cyan/50 transition-all cursor-help" title="C# Programming">
                  <div className="w-6 h-6 bg-white/10 rounded-sm group-hover:bg-cyber-cyan/20 transition-all" />
                </div>
                <div className="w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center group hover:border-cyber-blue/50 transition-all cursor-help" title="Blender 3D">
                  <div className="w-6 h-6 bg-white/10 rounded-sm group-hover:bg-cyber-blue/20 transition-all" />
                </div>
                <div className="w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center group hover:border-cyber-purple/50 transition-all cursor-help" title="Git/GitHub">
                  <div className="w-6 h-6 bg-white/10 rounded-sm group-hover:bg-cyber-purple/20 transition-all" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyber-purple/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 p-4">
              <div className="text-[8px] font-mono text-white/20 uppercase vertical-rl tracking-[0.5em]">PROTOCOL_V2.0</div>
            </div>
          </div>

          {/* Floating Achievement Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border border-cyber-cyan/30 shadow-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyber-cyan/20 rounded-full flex items-center justify-center">
                <span className="text-cyber-cyan text-xl font-bold">★</span>
              </div>
              <div>
                <div className="text-[10px] text-cyber-cyan font-bold uppercase tracking-widest">Achievement</div>
                <div className="text-xs font-medium">World Builder</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">Scroll to Explore</div>
        <div className="w-5 h-9 border-2 border-white/10 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-cyber-purple rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
