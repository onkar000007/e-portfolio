import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Gamepad, Layers, Cpu, Users, Navigation } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "3D Adventure Game",
      engine: "Unity",
      description: "A third-person adventure game featuring exploration, enemy AI, quests, and collectibles. Includes player movement system, camera mechanics, and interactive environments.",
      icon: <Gamepad className="w-6 h-6" />,
      image: "https://picsum.photos/seed/adventure/800/600",
      tags: ["C#", "Unity", "3D", "AI"],
      color: "cyber-purple"
    },
    {
      title: "2D Platformer Game",
      engine: "Unity",
      description: "A fast-paced platformer game with physics-based jumping, enemies, power-ups, and multiple levels.",
      icon: <Layers className="w-6 h-6" />,
      image: "https://picsum.photos/seed/platformer/800/600",
      tags: ["C#", "Unity", "2D", "Physics"],
      color: "cyber-cyan"
    },
    {
      title: "Endless Runner Game",
      engine: "Unity",
      description: "A mobile endless runner with procedural obstacle generation, increasing speed difficulty, and score tracking.",
      icon: <Cpu className="w-6 h-6" />,
      image: "https://picsum.photos/seed/runner/800/600",
      tags: ["C#", "Unity", "Mobile", "Procedural"],
      color: "cyber-blue"
    },
    {
      title: "Multiplayer Tic Tac Toe",
      engine: "JavaScript + WebSockets",
      description: "A real-time multiplayer browser game allowing two players to compete online.",
      icon: <Users className="w-6 h-6" />,
      image: "https://picsum.photos/seed/multiplayer/800/600",
      tags: ["JS", "WebSockets", "Real-time"],
      color: "cyber-purple"
    },
    {
      title: "Game AI Pathfinding Demo",
      engine: "Unity + C#",
      description: "Demonstrates enemy navigation using the A* pathfinding algorithm.",
      icon: <Navigation className="w-6 h-6" />,
      image: "https://picsum.photos/seed/pathfinding/800/600",
      tags: ["C#", "Algorithms", "AI", "A*"],
      color: "cyber-cyan"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-cyber-cyan text-sm font-mono mb-4"
            >
              <span className="w-8 h-[1px] bg-cyber-cyan" />
              PORTFOLIO SHOWCASE
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-black">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">PROJECTS</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md text-lg">
            A selection of games and interactive experiments built to push the boundaries of gameplay and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-cyber-cyan/30 transition-all group flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 glass p-2 rounded-lg border border-white/10 text-white/80">
                  {project.icon}
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 glass text-[10px] font-mono text-cyber-cyan uppercase tracking-widest border border-cyber-cyan/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-mono text-cyber-purple mb-2 uppercase tracking-widest">{project.engine}</div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-cyber-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a href="#" className="flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> REPOSITORY
                  </a>
                  <a href="#" className="flex items-center gap-2 text-xs font-bold text-cyber-cyan hover:text-cyber-cyan/80 transition-colors">
                    <ExternalLink className="w-4 h-4" /> LIVE DEMO
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
