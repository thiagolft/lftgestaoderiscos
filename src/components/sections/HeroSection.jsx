import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ scrollToSection, handleWhatsAppClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="gradient-text">Conheça nossas soluções</span>
            <br />
            <span className="text-white">para o seu futuro</span>
          </h1>
          
          <motion.p 
            className="hero-subtitle text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Junte-se aos mais de 1200 clientes que protegem o presente e planejam o futuro com a gente.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Phone size={20} />
              Entre em contato
            </Button>
            <Button 
              onClick={() => scrollToSection('sobre')}
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-navy px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Ver serviços
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <ChevronDown size={32} className="text-cyan-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;