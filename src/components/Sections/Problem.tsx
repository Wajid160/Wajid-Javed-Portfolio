import React from 'react';
import { content } from '../../config/content';
import { AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
    const { headline, intro, tasks, conclusion, cta } = content.problem;

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-surface">
            <div className="section-container">
                {/* Headline */}
                <h2 className="section-title text-center mb-6">{headline}</h2>

                {/* Intro */}
                <p className="text-xl text-center text-light-body dark:text-dark-body mb-12 max-w-3xl mx-auto">
                    {intro}
                </p>

                {/* Task List */}
                <div className="max-w-4xl mx-auto mb-12">
                    <ul className="space-y-4">
                        {tasks.map((item, index) => (
                            <li
                                key={index}
                                className="glass-card p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                                        <span className="text-lg font-medium text-light-heading dark:text-dark-heading">
                                            {item.task}
                                        </span>
                                        <span className="text-brand-accent font-bold text-lg whitespace-nowrap">
                                            {item.hours}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Conclusion */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xl text-light-body dark:text-dark-body mb-6 font-medium">
                        {conclusion}
                    </p>

                    {/* CTA Question */}
                    <p className="text-2xl font-bold gradient-text-green">
                        {cta}
                    </p>
                </div>
            </div>
        </section>
    );
};
