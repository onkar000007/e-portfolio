import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare, Terminal } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-cyber-cyan text-sm font-mono mb-4">
              <span className="w-8 h-[1px] bg-cyber-cyan" />
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">SOMETHING EPIC</span>
            </h2>
            
            <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-lg">
              I'm always open to new opportunities, collaborations, and hackathons. 
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:onkarshelke07@gmail.com" 
                className="flex items-center gap-6 group p-4 glass border border-white/5 rounded-2xl hover:border-cyber-cyan/50 transition-all"
              >
                <div className="w-12 h-12 bg-cyber-cyan/10 rounded-xl flex items-center justify-center text-cyber-cyan group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/30 uppercase tracking-widest">Email</div>
                  <div className="text-lg font-medium text-white group-hover:text-cyber-cyan transition-colors">onkarshelke07@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://github.com/onkar000007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group p-4 glass border border-white/5 rounded-2xl hover:border-cyber-purple/50 transition-all"
              >
                <div className="w-12 h-12 bg-cyber-purple/10 rounded-xl flex items-center justify-center text-cyber-purple group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/30 uppercase tracking-widest">GitHub</div>
                  <div className="text-lg font-medium text-white group-hover:text-cyber-purple transition-colors">github.com/onkar000007</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/onkar-shelke-35955237b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group p-4 glass border border-white/5 rounded-2xl hover:border-cyber-blue/50 transition-all"
              >
                <div className="w-12 h-12 bg-cyber-blue/10 rounded-xl flex items-center justify-center text-cyber-blue group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/30 uppercase tracking-widest">LinkedIn</div>
                  <div className="text-lg font-medium text-white group-hover:text-cyber-blue transition-colors">onkar-shelke-35955237b</div>
                </div>
              </a>

              <div className="flex items-center gap-6 p-4 glass border border-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/50">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/30 uppercase tracking-widest">Location</div>
                  <div className="text-lg font-medium text-white">Mumbai, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyber-purple/10 blur-[100px] rounded-full" />
            <div className="relative glass p-10 rounded-3xl border border-white/10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-cyber-purple/20 rounded-xl flex items-center justify-center text-cyber-purple">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold">Quick Message</h3>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Your Name</label>
                  <input type="text" className="w-full glass border border-white/10 rounded-xl px-6 py-4 focus:border-cyber-purple/50 outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full glass border border-white/10 rounded-xl px-6 py-4 focus:border-cyber-purple/50 outline-none transition-all" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full glass border border-white/10 rounded-xl px-6 py-4 focus:border-cyber-purple/50 outline-none transition-all resize-none" placeholder="What's on your mind?"></textarea>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 w-full py-5 bg-cyber-purple text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all"
              >
                <Send className="w-5 h-5" /> SEND MESSAGE
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-cyber-purple/20 rounded-lg">
              <Terminal className="w-4 h-4 text-cyber-purple" />
            </div>
            <span className="font-display font-bold text-lg tracking-tighter">
              ONKAR<span className="text-cyber-purple">.</span>DEV
            </span>
          </div>
          
          <div className="text-white/30 text-sm font-mono">
            © {new Date().getFullYear()} — Designed & Built with Unity Spirit
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/onkar000007" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/onkar-shelke-35955237b" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
