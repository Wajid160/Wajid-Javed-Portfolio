import React from 'react';
import { content } from '../../config/content';
import { Card } from '../UI/Card';

export const Skills: React.FC = () => {
    const { ai, automation, backend, tools } = content.skills;

    const skillCategories = [
        { title: ai.title, items: ai.items, color: 'blue' },
        { title: automation.title, items: automation.items, color: 'cyan' },
        { title: backend.title, items: backend.items, color: 'purple' },
        { title: tools.title, items: tools.items, color: 'green' },
    ];

    const colorMap: Record<string, string> = {
        blue: 'border-l-[#1E40AF] dark:border-l-[#06B6D4]',
        cyan: 'border-l-[#06B6D4] dark:border-l-[#06B6D4]',
        purple: 'border-l-[#8B5CF6] dark:border-l-[#8B5CF6]',
        green: 'border-l-[#06B6D4] dark:border-l-[#8B5CF6]',
    };

    return (
        <section id="skills" className="py-20 bg-[#F7F7FA] dark:bg-[#0B1220]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white mb-4">Technical Skills</h2>
                    <p className="text-lg text-[#374151] dark:text-[#D1D5DB] max-w-2xl mx-auto">
                        Core competencies in AI automation, workflow orchestration, and modern development tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillCategories.map((category) => (
                        <Card
                            key={category.title}
                            hoverEffect={false}
                            className={`border-l-4 ${colorMap[category.color]}`}
                        >
                            <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-4">
                                {category.title}
                            </h3>
                            <ul className="space-y-2">
                                {category.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center text-[#374151] dark:text-[#D1D5DB]"
                                    >
                                        <span className="w-2 h-2 bg-current rounded-full mr-3 flex-shrink-0"></span>
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
