import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, handleScheduleClick }) => {
  const navItems = ['Home', 'Sobre', 'Blog', 'Contato'];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://i.imgur.com/8L91v1L.png" 
              alt="LFT Logo" 
              className="h-14 w-auto cursor-pointer"
              onClick={() => scrollToSection('home')}
            />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? 'text-cyan-400' 
                    : 'text-white hover:text-cyan-300'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                onClick={handleScheduleClick}
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 pulse-glow"
              >
                Agende uma consulta
              </Button>
            </motion.div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-300 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-lg text-white hover:text-cyan-300 transition-colors py-2"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={handleScheduleClick}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-full font-semibold mt-4"
            >
              Agende uma consulta
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;