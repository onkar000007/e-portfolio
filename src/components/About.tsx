import React from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Code2, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/30 to-cyber-cyan/30 blur-[80px] rounded-full" />
            <div className="relative glass p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://picsum.photos/seed/gaming/800/800" 
                alt="Onkar Shelke" 
                className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-xl border border-white/5">
                  <div className="text-cyber-purple font-display font-bold text-2xl">2nd Year</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">Computer Engineering</div>
                </div>
                <div className="glass p-4 rounded-xl border border-white/5">
                  <div className="text-cyber-cyan font-display font-bold text-2xl">5+</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-cyber-cyan text-sm font-mono mb-4">
              <span className="w-8 h-[1px] bg-cyber-cyan" />
              ABOUT THE DEVELOPER
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
              PASSIONATE ABOUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">INTERACTIVE WORLDS</span>
            </h2>

            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                I am a second-year Computer Engineering student at <span className="text-white font-medium">Vidyalankar Institute of Technology (Mumbai)</span> with a passion for game development and interactive technologies. I enjoy building games that combine creative design with strong programming principles.
              </p>
              <p>
                My primary focus is gameplay mechanics, AI systems in games, and interactive environments. I mainly develop using <span className="text-cyber-purple font-medium">Unity and C#</span> while continuously learning advanced game development concepts.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyber-purple/10 rounded-lg text-cyber-purple">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white">Education</h4>
                  <p className="text-sm text-white/50">VIT, Mumbai - Computer Engineering</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyber-cyan/10 rounded-lg text-cyber-cyan">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white">Location</h4>
                  <p className="text-sm text-white/50">Mumbai, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyber-blue/10 rounded-lg text-cyber-blue">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white">Core Tech</h4>
                  <p className="text-sm text-white/50">Unity, C#, C++, Python</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyber-purple/10 rounded-lg text-cyber-purple">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white">Interests</h4>
                  <p className="text-sm text-white/50">Game AI, Mechanics, VR/AR</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
