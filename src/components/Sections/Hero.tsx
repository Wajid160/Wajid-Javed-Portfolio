import React from 'react';
import { content } from '../../config/content';
import { Check, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
    const { badge, headline, subheadline, statsBar, ctaPrimary, ctaSecondary, image } = content.hero;

    const scrollToCalendly = () => {
        document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToCaseStudies = () => {
        document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden hero-gradient">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-6 animate-fade-in">
                            <Sparkles className="w-4 h-4 text-brand-accent" />
                            <span className="text-sm font-medium text-brand-accent">
                                {badge}
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-light-heading dark:text-dark-heading mb-6 animate-fade-in-up">
                            {headline}
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-light-body dark:text-dark-body mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            {subheadline}
                        </p>

                        {/* Stats Bar */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 text-sm sm:text-base">
                            {statsBar.map((stat, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="font-medium text-light-heading dark:text-dark-heading">
                                            {stat.text}
                                        </span>
                                    </div>
                                    {index < statsBar.length - 1 && (
                                        <span className="hidden sm:inline text-light-border dark:text-dark-border">|</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            {/* Primary CTA - BIG and prominent */}
                            <button
                                onClick={scrollToCalendly}
                                className="btn-primary group text-base sm:text-lg"
                            >
                                {ctaPrimary}
                            </button>

                            {/* Secondary CTA */}
                            <button
                                onClick={scrollToCaseStudies}
                                className="btn-secondary inline-flex items-center justify-center"
                            >
                                {ctaSecondary}
                            </button>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative lg:h-full flex justify-center items-center">
                        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                            {/* Decorative glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>

                            <img
                                src={image}
                                alt="AI Automation Specialist"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-surface shadow-2xl ring-4 ring-brand-primary/20 dark:ring-brand-accent/20"
                            />

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-surface px-4 py-2 rounded-xl shadow-lg border border-light-border dark:border-dark-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-light-heading dark:text-dark-heading">
                                        Available for projects
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
