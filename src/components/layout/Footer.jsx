import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = ({ handleWhatsAppClick, handleInstagramClick }) => {
  return (
    <footer className="py-12 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="https://i.imgur.com/8L91v1L.png" 
              alt="LFT Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-xl font-semibold gradient-text mb-4">
            LFT Gestão de Risco e Planejamento Financeiro
          </p>
          <p className="text-gray-400">
            © {new Date().getFullYear()} LFT Gestão de Risco e Planejamento Financeiro. Todos os direitos reservados.
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <button 
              onClick={handleWhatsAppClick}
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone size={24} />
            </button>
            <button 
              onClick={handleInstagramClick}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </button>
            <a 
              href="mailto:grupolft@hotmail.com"
              className="text-gray-400 hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;