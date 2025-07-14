import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, CheckCircle } from 'lucide-react';

const stats = [
  { number: "1200+", label: "Clientes Satisfeitos", icon: Users },
  { number: "10+", label: "Anos de Experiência", icon: Star },
  { number: "100%", label: "Comprometimento", icon: CheckCircle }
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 relative">
      <div className="section-divider mb-16 sm:mb-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Conheça a LFT</span>
          </h2>
          
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-4 sm:p-6 mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/VWBvwdy5NUw" 
                title="Conheça LFT Gestão de Risco e Planejamento Financeiro | Corretora Prudential do Brasil 🔒📈" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="glass-card rounded-2xl p-8 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;