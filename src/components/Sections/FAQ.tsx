import React, { useState } from 'react';
import { content } from '../../config/content';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
    const { headline, items } = content.faq;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white dark:bg-dark-bg">
            <div className="section-container">
                {/* Section Header */}
                <h2 className="section-title text-center mb-12">{headline}</h2>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-light-bg/50 dark:hover:bg-dark-surface/50 transition-colors"
                            >
                                <span className="font-semibold text-light-heading dark:text-dark-heading text-lg">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-brand-accent flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`transition-all duration-200 ease-in-out ${openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-light-body dark:text-dark-body leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
