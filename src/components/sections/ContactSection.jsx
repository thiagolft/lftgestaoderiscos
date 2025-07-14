import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactItems = [
    { icon: Phone, label: "Telefone", value: "+55 32 9821-1234", color: "text-green-400", actionType: "whatsapp" },
    { icon: Mail, label: "Email", value: "grupolft@hotmail.com", color: "text-sky-400", actionType: "email" },
    { icon: Instagram, label: "Instagram", value: "@lftgestaoderisco", color: "text-cyan-400", actionType: "instagram" },
    { icon: MapPin, label: "Localização", value: "Visc. do Rio Branco, MG", color: "text-red-400", actionType: "map" },
];

const ContactSection = ({ handleWhatsAppClick, handleInstagramClick, handleScheduleClick }) => {
    const handleMapClick = () => {
        window.open('https://maps.app.goo.gl/K54VkASPBeR7djCv5', '_blank');
    };

    const handleAction = (type) => {
        switch (type) {
            case 'whatsapp': handleWhatsAppClick(); break;
            case 'email': window.open('mailto:grupolft@hotmail.com'); break;
            case 'instagram': handleInstagramClick(); break;
            case 'map': handleMapClick(); break;
            default: break;
        }
    };

    return (
        <section id="contato" className="py-16 sm:py-20 relative">
            <div className="section-divider mb-16 sm:mb-20" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Entre em Contato</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Estamos prontos para ajudar você a proteger e planejar o futuro da sua família.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8 flex flex-col"
                    >
                        <div className="glass-card rounded-2xl p-8 flex-grow flex flex-col">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Informações de Contato</h3>
                            <div className="space-y-6 flex-grow flex flex-col justify-center">
                                {contactItems.map(item => (
                                    <motion.div
                                        key={item.label}
                                        className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                                        whileHover={{ x: 10 }}
                                        onClick={() => handleAction(item.actionType)}
                                    >
                                        <item.icon className={`w-6 h-6 ${item.color}`} />
                                        <div>
                                            <p className="font-medium text-white">{item.label}</p>
                                            <p className="text-gray-300">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 glass-card rounded-2xl p-6 flex flex-col"
                    >
                        <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Nossa Localização</h3>
                        <div className="aspect-video rounded-xl overflow-hidden flex-grow">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.915059635907!2d-42.8465536855998!3d-21.0064509860098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9f3a9712a8a51d%3A0x6a05e263cbf9032!2sVisconde%20do%20Rio%20Branco%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1672852233857!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl"
                            />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="glass-card rounded-3xl p-8 sm:p-12">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">
                            Pronto para proteger seu futuro?
                        </h3>
                        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Agende uma consulta e descubra como podemos ajudar você a alcançar seus objetivos financeiros.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                                onClick={handleScheduleClick}
                                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 pulse-glow"
                            >
                                Agendar Consulta
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;