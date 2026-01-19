import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

function AboutLFT() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-metallic-shine pb-2">
            Conheça a LFT
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-200 dark:bg-gray-800"
          >
            {!isPlaying ? (
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src="https://img.youtube.com/vi/VWBvwdy5NUw/maxresdefault.jpg"
                  alt="Conheça a LFT - Vídeo de apresentação"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/VWBvwdy5NUw?si=inS6F4YySfLySWmq&autoplay=1"
                title="Conheça a LFT"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Proteção que vai além do papel. Uma escolha para a vida.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Na LFT, acreditamos que segurança financeira é construída com planejamento, dedicação e parceria de confiança. Nossa equipe está pronta para transformar suas preocupações em tranquilidade.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">1300+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clientes Ativos</p>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dedicação</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutLFT;