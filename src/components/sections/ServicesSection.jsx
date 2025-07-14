import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Users, TrendingUp, PiggyBank, AlertTriangle } from 'lucide-react';

const services = [
    { icon: Shield, title: "Planejamento de Proteção Familiar", description: "Estratégias personalizadas para proteger sua família contra imprevistos financeiros e garantir segurança no futuro." },
    { icon: Heart, title: "Consultoria em Seguro de Vida", description: "Análise completa das suas necessidades e orientação especializada para escolher o melhor seguro de vida." },
    { icon: Users, title: "Consultoria em Proteção Familiar", description: "Soluções integradas para proteger todos os membros da família com produtos adequados a cada perfil." },
    { icon: TrendingUp, title: "Gestão de Planejamento Financeiro", description: "Planejamento estratégico para organizar as finanças familiares e alcançar objetivos de longo prazo." },
    { icon: PiggyBank, title: "Seguro de Vida Resgatável", description: "Produtos que combinam proteção e investimento, permitindo resgates programados para seus projetos." },
    { icon: AlertTriangle, title: "Gestão de Risco Familiar", description: "Identificação e mitigação de riscos financeiros que podem impactar o patrimônio e bem-estar da família." }
];

const ServicesSection = () => {
    return (
        <section id="blog" className="py-16 sm:py-20 relative">
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
                        <span className="gradient-text">Nossos Serviços</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Soluções completas para proteger e fazer crescer o patrimônio da sua família.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col items-start"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="p-3 rounded-full bg-cyan-400/10 mb-6">
                                <service.icon className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;