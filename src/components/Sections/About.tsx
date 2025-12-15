import React from 'react';
import { content } from '../../config/content';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '../UI/Card';

export const About: React.FC = () => {
    const { profileImage, bio, highlights } = content.about;

    return (
        <section id="about" className="py-20 bg-white dark:bg-[#111827]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Image */}
                    <div className="mb-12 lg:mb-0 flex justify-center items-center">
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] dark:from-[#06B6D4] dark:to-[#8B5CF6] rounded-full blur-2xl opacity-20"></div>
                            <img
                                src={profileImage}
                                alt="Wajid Javed"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-[#111827] shadow-2xl ring-4 ring-[#1E40AF]/20 dark:ring-[#06B6D4]/20"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white mb-6">About Me</h2>
                        <Card className="prose dark:prose-invert max-w-none text-lg text-[#374151] dark:text-[#D1D5DB] mb-8 border-l-4 border-[#1E40AF] dark:border-[#06B6D4]">
                            <p>{bio}</p>
                        </Card>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#0F172A] dark:text-white">Highlights</h3>
                            <ul className="space-y-3">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-[#06B6D4] flex-shrink-0 mr-3" />
                                        <span className="text-base text-[#374151] dark:text-[#D1D5DB]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
