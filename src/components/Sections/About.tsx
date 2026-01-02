import React from 'react';
import { content } from '../../config/content';
import { Code2, Target, Check } from 'lucide-react';

export const About: React.FC = () => {
    const { headline, profileImage, narrative, approach, techStack, differentiator, currently } = content.about;

    const scrollToCalendly = () => {
        document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-surface dark:to-dark-bg">
            <div className="section-container">
                {/* Section Header */}
                <h2 className="section-title text-center mb-16">{headline}</h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Column - Image & Currently */}
                    <div className="space-y-8">
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-dark-surface shadow-xl">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
                        </div>

                        {/* Currently Box */}
                        {currently && (
                            <div className="glass-card p-6 bg-brand-accent/5">
                                <h3 className="font-bold text-brand-accent mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    {currently.headline}
                                </h3>
                                <p className="text-light-body dark:text-dark-body leading-relaxed mb-4">
                                    {currently.text}
                                </p>
                                <button
                                    onClick={scrollToCalendly}
                                    className="btn-primary w-full"
                                >
                                    Book Your Free Audit →
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-8">
                        {/* Narrative */}
                        <div className="space-y-4">
                            {narrative.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-light-body dark:text-dark-body leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* My Approach */}
                        {approach && (
                            <div className="glass-card p-6">
                                <h3 className="font-bold text-light-heading dark:text-dark-heading mb-4">
                                    {approach.headline}
                                </h3>
                                <ul className="space-y-2">
                                    {approach.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-light-body dark:text-dark-body">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack */}
                        {techStack && (
                            <div className="glass-card p-6">
                                <h3 className="font-bold text-light-heading dark:text-dark-heading mb-4 flex items-center gap-2">
                                    <Code2 className="w-5 h-5 text-brand-primary" />
                                    {techStack.headline}
                                </h3>
                                <ul className="space-y-2">
                                    {techStack.items.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="text-brand-accent">•</span>
                                            <span className="text-sm text-light-body dark:text-dark-body">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Why I'm Different */}
                        {differentiator && (
                            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 border-2 border-brand-primary/20 rounded-2xl p-6">
                                <h3 className="font-bold text-brand-primary dark:text-brand-primary-light mb-3">
                                    {differentiator.headline}
                                </h3>
                                <p className="text-light-body dark:text-dark-body leading-relaxed">
                                    {differentiator.text}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
