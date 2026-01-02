import React from 'react';
import { content } from '../../config/content';
import { Search, Layout, Cog, Activity, Check, ArrowRight } from 'lucide-react';

const iconMap = {
    Search,
    Layout,
    Cog,
    Activity,
};

export const HowItWorks: React.FC = () => {
    const { headline, subtitle, steps, benefits } = content.howItWorks;

    const scrollToCalendly = () => {
        document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="how-it-works" className="py-20 bg-white dark:bg-dark-bg">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="section-title mb-6">{headline}</h2>
                    <p className="section-subtitle max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* 4-Step Process */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {steps.map((step, index) => {
                        const IconComponent = iconMap[step.icon as keyof typeof iconMap];

                        return (
                            <div
                                key={index}
                                className="relative"
                            >
                                {/* Connecting Line (desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brand-accent to-brand-primary opacity-20 -z-10" />
                                )}

                                {/* Step Card */}
                                <div className="glass-card p-6 h-full hover:shadow-lg transition-shadow duration-300">
                                    {/* Step Number */}
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/10 mb-4">
                                        <span className="text-2xl font-bold text-brand-accent">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-4">
                                        <IconComponent className="w-8 h-8 text-brand-primary dark:text-brand-primary-light" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-light-heading dark:text-dark-heading mb-3">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-light-body dark:text-dark-body leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* What You Get Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card p-8 bg-gradient-to-br from-brand-accent/5 to-brand-primary/5">
                        <h3 className="text-2xl font-bold text-light-heading dark:text-dark-heading mb-6 text-center">
                            {benefits.headline}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {benefits.items.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-light-body dark:text-dark-body">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <button
                                onClick={scrollToCalendly}
                                className="btn-primary group"
                            >
                                Book Your Free Workflow Audit
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
