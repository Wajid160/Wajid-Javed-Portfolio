import React, { useState } from 'react';
import { content } from '../../config/content';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export const FAQ: React.FC = () => {
    const { headline, items } = content.faq;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const scrollToCalendly = () => {
        document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="faq" className="py-20 bg-light-bg dark:bg-dark-bg">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="section-title">{headline}</h2>
                    <p className="section-subtitle">
                        Everything you need to know about working with us
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden transition-all duration-300"
                        >
                            {/* Question */}
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-light-heading dark:text-dark-heading pr-4">
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-light-muted dark:text-dark-muted flex-shrink-0" />
                                )}
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="px-6 pb-6 text-light-body dark:text-dark-body">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-light-body dark:text-dark-body mb-4">
                        Still have questions? Let's talk.
                    </p>
                    <button
                        onClick={scrollToCalendly}
                        className="btn-primary group"
                    >
                        Book a Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};
