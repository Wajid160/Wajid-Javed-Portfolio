import React from 'react';
import { content } from '../../config/content';
import { Card } from '../UI/Card';

export const Skills: React.FC = () => {
    const { headline, subtitle, categories } = content.skills;

    const colorMap: Record<string, string> = {
        blue: 'border-l-brand-primary dark:border-l-brand-primary-light',
        green: 'border-l-brand-accent dark:border-l-brand-accent',
        purple: 'border-l-purple-500 dark:border-l-purple-400',
        cyan: 'border-l-cyan-500 dark:border-l-cyan-400',
    };

    return (
        <section id="skills" className="py-20 bg-white dark:bg-dark-surface">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="section-title">{headline}</h2>
                    <p className="section-subtitle">{subtitle}</p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category) => (
                        <Card
                            key={category.title}
                            hoverEffect={false}
                            className={`border-l-4 ${colorMap[category.color] || colorMap.blue}`}
                        >
                            <h3 className="text-xl font-bold text-light-heading dark:text-dark-heading mb-4">
                                {category.title}
                            </h3>
                            <ul className="space-y-2">
                                {category.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center text-light-body dark:text-dark-body"
                                    >
                                        <span className="w-2 h-2 bg-brand-accent rounded-full mr-3 flex-shrink-0"></span>
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
