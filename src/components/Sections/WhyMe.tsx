import React from 'react';
import { content } from '../../config/content';
import { Rocket, BarChart, Handshake, Zap } from 'lucide-react';

const iconMap = {
    Rocket,
    BarChart,
    Handshake,
    Zap,
};

export const WhyMe: React.FC = () => {
    const { headline, features } = content.whyMe;

    return (
        <section id="why-me" className="py-20 bg-white dark:bg-dark-surface">
            <div className="section-container">
                {/* Section Header */}
                <h2 className="section-title text-center mb-16">{headline}</h2>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

                        return (
                            <div
                                key={index}
                                className="text-center group"
                            >
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-accent/10 mb-6 group-hover:bg-brand-accent/20 transition-colors duration-300">
                                    <IconComponent className="w-8 h-8 text-brand-accent" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-light-heading dark:text-dark-heading mb-2">
                                    {feature.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-sm font-semibold text-brand-primary dark:text-brand-primary-light mb-3">
                                    {feature.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-light-body dark:text-dark-body text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
