import React from 'react';
import { content } from '../../config/content';
import { ArrowRight, Code2 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
    const { headline, previewCards } = content.caseStudies;

    const handleCardClick = () => {
        // Scroll to contact section to inquire about the case study
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="case-studies" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-surface">
            <div className="section-container">
                {/* Section Header */}
                <h2 className="section-title text-center mb-16">{headline}</h2>

                {/* Preview Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {previewCards.map((card) => (
                        <div
                            key={card.id}
                            onClick={handleCardClick}
                            className="glass-card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                        >
                            {/* Title */}
                            <h3 className="text-xl font-bold text-light-heading dark:text-dark-heading mb-6 group-hover:text-brand-accent transition-colors">
                                {card.title}
                            </h3>

                            {/* Before/After */}
                            <div className="space-y-4 mb-6">
                                <div>
                                    <div className="text-xs uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2 font-semibold">
                                        Before
                                    </div>
                                    <p className="text-sm text-light-body dark:text-dark-body">
                                        {card.before}
                                    </p>
                                </div>

                                <div>
                                    <div className="text-xs uppercase tracking-wider text-brand-accent mb-2 font-semibold">
                                        After
                                    </div>
                                    <p className="text-sm font-medium text-light-heading dark:text-dark-heading">
                                        {card.after}
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-6 pb-6 border-t border-light-border dark:border-dark-border pt-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Code2 className="w-4 h-4 text-brand-primary dark:text-brand-primary-light" />
                                    <span className="text-xs uppercase tracking-wider text-light-muted dark:text-dark-muted font-semibold">
                                        Tech
                                    </span>
                                </div>
                                <p className="text-sm text-light-body dark:text-dark-body">
                                    {card.tech}
                                </p>
                            </div>

                            {/* Link */}
                            <div className="flex items-center gap-2 text-brand-accent font-medium text-sm group-hover:gap-3 transition-all">
                                <span>Contact for Details</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note about full case studies */}
                <p className="text-center text-light-muted dark:text-dark-muted text-sm mt-8">
                    Want to see the full details? Scroll down to contact me for complete case study breakdowns.
                </p>
            </div>
        </section>
    );
};
