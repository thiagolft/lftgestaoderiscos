import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';

function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Ocean Wave Background */}
      <div className="absolute inset-0 animate-ocean-wave" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-metallic-shine pb-2">
            Pronto para proteger seu futuro?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Agende uma consulta e descubra como podemos ajudar você a alcançar seus objetivos financeiros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">+1300 clientes</span>
            </div>
            <div className="hidden sm:block w-1 h-6 bg-white/30" />
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Franqueada Prudential</span>
            </div>
          </div>

          <a
            href="https://agenda-com-cliente.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold text-lg rounded-lg shadow-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <Calendar className="w-6 h-6" />
            Agendar Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;