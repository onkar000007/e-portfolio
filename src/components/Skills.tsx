import React from 'react';
import { motion } from 'motion/react';
import { Code2, Gamepad, Wrench, Cpu, Layers, Box } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["C++", "C#", "Python", "JavaScript"],
      color: "cyber-purple"
    },
    {
      title: "Game Development",
      icon: <Gamepad className="w-6 h-6" />,
      skills: ["Unity Engine", "Unreal Engine Basics", "Gameplay Mechanics", "Game Physics", "AI Systems in Games", "2D and 3D Game Development"],
      color: "cyber-cyan"
    },
    {
      title: "Tools & Software",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git & GitHub", "Blender", "Visual Studio", "Figma", "Photoshop"],
      color: "cyber-blue"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-cyber-purple text-sm font-mono mb-4"
          >
            <span className="w-8 h-[1px] bg-cyber-purple" />
            TECH STACK & CAPABILITIES
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-cyan">SKILLSET</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building next-generation interactive experiences, 
            from low-level systems to high-level gameplay mechanics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-cyber-purple/30 transition-all group relative overflow-hidden"
            >
              {/* Decorative Background Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${category.color}/10 rounded-full blur-[60px] group-hover:bg-${category.color}/20 transition-all`} />
              
              <div className={`p-4 bg-${category.color}/10 rounded-2xl text-${category.color} w-fit mb-8 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-6 text-white group-hover:text-cyber-cyan transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 glass border border-white/5 rounded-lg text-sm text-white/70 hover:text-white hover:border-cyber-cyan/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Stats / Tech Icons */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col items-center gap-2">
            <Cpu className="w-10 h-10" />
            <span className="text-[10px] font-mono">SYSTEMS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Layers className="w-10 h-10" />
            <span className="text-[10px] font-mono">LAYERS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Box className="w-10 h-10" />
            <span className="text-[10px] font-mono">3D SPACE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
