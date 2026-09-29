import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Target, BookOpen, Star, Award, Zap } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Game Development Learning Journey",
      description: "Started with basic C++ and moved into Unity Engine, mastering gameplay mechanics and AI systems.",
      icon: <BookOpen className="w-6 h-6 text-cyber-purple" />,
      date: "2023 - Present"
    },
    {
      title: "Hackathon Participation",
      description: "Active participant in college-level hackathons, focusing on building interactive prototypes and game mechanics.",
      icon: <Trophy className="w-6 h-6 text-cyber-cyan" />,
      date: "2024"
    },
    {
      title: "Self-Learning Excellence",
      description: "Completed multiple online courses on Unity, C#, and Game Design principles.",
      icon: <Award className="w-6 h-6 text-cyber-blue" />,
      date: "Ongoing"
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Achievements List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-cyber-purple text-sm font-mono mb-4">
              <span className="w-8 h-[1px] bg-cyber-purple" />
              MILESTONES & GROWTH
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-12">
              LEARNING & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-blue">ACHIEVEMENTS</span>
            </h2>

            <div className="space-y-8">
              {achievements.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-12 group"
                >
                  {/* Timeline Line */}
                  {idx !== achievements.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-[-32px] w-[1px] bg-white/10 group-hover:bg-cyber-purple/30 transition-colors" />
                  )}
                  
                  {/* Icon Container */}
                  <div className="absolute left-0 top-0 p-3 glass border border-white/10 rounded-xl group-hover:border-cyber-purple/50 transition-all group-hover:scale-110">
                    {item.icon}
                  </div>
                  
                  <div className="text-xs font-mono text-white/30 mb-2 uppercase tracking-widest">{item.date}</div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyber-cyan/5 blur-[100px] rounded-full" />
            <div className="relative glass p-12 rounded-3xl border border-white/10 overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Target className="w-64 h-64 text-cyber-cyan" />
              </div>
              
              <div className="inline-flex items-center gap-2 text-cyber-cyan text-sm font-mono mb-6">
                <Zap className="w-4 h-4" />
                THE NEXT LEVEL
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black mb-8">
                FUTURE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">GOALS</span>
              </h2>
              
              <p className="text-xl text-white/70 leading-relaxed mb-10">
                My ambition is to become a professional game developer, pushing the boundaries of what's possible in interactive media. I am particularly focused on:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 glass border border-white/10 rounded-full flex items-center justify-center group-hover:border-cyber-cyan/50 transition-all">
                    <Star className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">Multiplayer Game Systems</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 glass border border-white/10 rounded-full flex items-center justify-center group-hover:border-cyber-cyan/50 transition-all">
                    <Star className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">Advanced Game AI & Pathfinding</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 glass border border-white/10 rounded-full flex items-center justify-center group-hover:border-cyber-cyan/50 transition-all">
                    <Star className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">Immersive Gameplay Experiences</span>
                </div>
              </div>

              <div className="mt-12 p-6 glass border border-cyber-cyan/20 rounded-2xl bg-cyber-cyan/5">
                <p className="text-sm italic text-white/60">
                  "I believe that games are the ultimate form of interactive storytelling, and I'm dedicated to mastering the craft of building them."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
