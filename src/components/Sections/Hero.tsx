import React from 'react';
import { content } from '../../config/content';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface HeroProps {
    onOpenProjects: () => void;
    onOpenChatbot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjects, onOpenChatbot }) => {
    const { headline, subheadline, ctaProjects, ctaChatbot, image } = content.hero;

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white mb-6">
                            {headline}
                        </h1>
                        <p className="text-lg sm:text-xl text-[#374151] dark:text-[#D1D5DB] mb-8 max-w-2xl mx-auto lg:mx-0">
                            {subheadline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={onOpenProjects}
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#1E40AF] hover:bg-[#1E40AF]/90 dark:bg-[#06B6D4] dark:hover:bg-[#06B6D4]/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                {ctaProjects}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <button
                                onClick={onOpenChatbot}
                                className="inline-flex items-center justify-center px-6 py-3 border border-[#E5E7EB] dark:border-[#1F2937] text-base font-medium rounded-lg text-[#0F172A] dark:text-white bg-white dark:bg-[#111827] hover:bg-[#F7F7FA] dark:hover:bg-[#1F2937] transition-all duration-200 shadow-sm"
                            >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                {ctaChatbot}
                            </button>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative lg:h-full flex justify-center items-center">
                        <div className="relative w-96 h-96">
                            {/* Decorative glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] dark:from-[#06B6D4] dark:to-[#8B5CF6] rounded-full blur-3xl opacity-20 animate-pulse"></div>

                            <img
                                src={image}
                                alt="Wajid Javed"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-[#111827] shadow-2xl ring-4 ring-[#1E40AF]/20 dark:ring-[#06B6D4]/20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
