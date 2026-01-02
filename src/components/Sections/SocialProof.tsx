import React from 'react';
import { content } from '../../config/content';
import { DollarSign, Clock, BarChart, Zap, TrendingUp } from 'lucide-react';

const iconMap = {
    DollarSign,
    Clock,
    BarChart,
    Zap,
    TrendingUp,
};

export const SocialProof: React.FC = () => {
    const { headline, testimonials } = content.socialProof;

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-surface dark:to-dark-bg">
            <div className="section-container">
                {/* Section Header */}
                <h2 className="section-title text-center mb-16">{headline}</h2>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Quote */}
                            <div className="mb-6">
                                <div className="text-4xl text-brand-accent mb-4 leading-none">"</div>
                                <p className="text-light-body dark:text-dark-body italic leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="mb-6 pb-6 border-b border-light-border dark:border-dark-border">
                                <p className="font-bold text-light-heading dark:text-dark-heading">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm text-light-muted dark:text-dark-muted">
                                    {testimonial.role}
                                </p>
                            </div>

                            {/* Metrics */}
                            <div className="space-y-3">
                                {testimonial.metrics.map((metric, metricIndex) => {
                                    const IconComponent = iconMap[metric.icon as keyof typeof iconMap];

                                    return (
                                        <div key={metricIndex} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                                                <IconComponent className="w-4 h-4 text-brand-accent" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-baseline gap-2">
                                                    <span className="font-bold text-brand-accent text-lg">
                                                        {metric.value}
                                                    </span>
                                                    <span className="text-sm text-light-muted dark:text-dark-muted truncate">
                                                        {metric.label}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
