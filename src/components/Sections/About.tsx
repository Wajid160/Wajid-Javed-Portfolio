import React from 'react';
import { content } from '../../config/content';
import { Rocket, Eye, Target, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Rocket,
    Eye,
    Target,
};

export const About: React.FC = () => {
    const { headline, profileImage, narrative, differentiators } = content.about;

    const scrollToCalendly = () => {
        document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="about" className="py-20 bg-light-bg dark:bg-dark-bg">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="section-title">{headline}</h2>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
                    {/* Image */}
                    <div className="mb-12 lg:mb-0 flex justify-center items-start">
                        <div className="relative w-72 h-72 lg:w-80 lg:h-80 sticky top-32">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full blur-2xl opacity-20"></div>
                            <img
                                src={profileImage}
                                alt="AI Automation Specialist"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-surface shadow-2xl ring-4 ring-brand-primary/20 dark:ring-brand-accent/20"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        {/* Narrative */}
                        <div className="space-y-4 mb-10">
                            {narrative.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-lg text-light-body dark:text-dark-body leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Differentiators */}
                        <div className="grid gap-6">
                            {differentiators.map((item, index) => {
                                const IconComponent = iconMap[item.icon] || Rocket;
                                return (
                                    <div
                                        key={index}
                                        className="glass-card p-6 flex items-start gap-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                                            <IconComponent className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-light-heading dark:text-dark-heading mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-light-body dark:text-dark-body">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="mt-10">
                            <p className="text-light-body dark:text-dark-body mb-4">
                                Ready to get started?
                            </p>
                            <button
                                onClick={scrollToCalendly}
                                className="btn-primary group"
                            >
                                Book Your Free Audit
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
