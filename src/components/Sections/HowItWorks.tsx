import React from 'react';
import { content } from '../../config/content';
import { Search, Cog, Clock, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Search,
    Cog,
    Clock,
};

export const HowItWorks: React.FC = () => {
    const { headline, steps } = content.howItWorks;

    const scrollToCalendly = () => {
        document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="how-it-works" className="py-20 bg-light-bg dark:bg-dark-bg">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">{headline}</h2>
                    <p className="section-subtitle">
                        Three simple steps to automation that works
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line (desktop only) - positioned at icon level */}
                    <div className="hidden md:block absolute top-8 left-1/2 w-2/3 h-0.5 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary -translate-x-1/2 z-0"></div>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {steps.map((step, index) => {
                            const IconComponent = iconMap[step.icon] || Search;
                            return (
                                <div key={index} className="relative text-center">
                                    {/* Step Number */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary dark:bg-brand-primary-light rounded-2xl mb-6 shadow-lg relative z-10">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Step Badge */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Step {step.number}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-light-heading dark:text-dark-heading mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-light-body dark:text-dark-body">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <button
                        onClick={scrollToCalendly}
                        className="btn-primary group"
                    >
                        Start Your Free Audit
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
