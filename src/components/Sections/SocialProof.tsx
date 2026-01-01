import React from 'react';
import { content } from '../../config/content';
import { Shield, Code, Eye, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Shield,
    Code,
    Eye,
};

export const SocialProof: React.FC = () => {
    const { headline, stats, trustIndicators } = content.socialProof;

    return (
        <section className="py-16 bg-white dark:bg-dark-surface">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="section-title">{headline}</h2>
                    <p className="section-subtitle">
                        Built production-ready automation systems for workflows handling 100+ hours/week of manual work
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-lg font-semibold text-light-heading dark:text-dark-heading mb-2">
                                {stat.label}
                            </div>
                            <p className="text-sm text-light-muted dark:text-dark-muted">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-6">
                    {trustIndicators.map((indicator, index) => {
                        const IconComponent = iconMap[indicator.icon] || CheckCircle;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 bg-light-bg dark:bg-dark-bg rounded-full"
                            >
                                <IconComponent className="w-5 h-5 text-brand-accent" />
                                <span className="text-sm font-medium text-light-heading dark:text-dark-heading">
                                    {indicator.text}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
