import React from 'react';
import { Card } from '../UI/Card';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    problem: string;
    solution: string;
    techStack: string[];
    status: string;
    thumbnail?: string;
    onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, problem, techStack, status, thumbnail, onClick }) => {
    return (
        <Card
            className="h-full flex flex-col hover:border-blue-500 dark:hover:border-cyan-500 group cursor-pointer p-0 overflow-hidden"
            onClick={onClick}
        >
            {/* Thumbnail Image */}
            {thumbnail && (
                <div className="w-full h-48 overflow-hidden">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-500 transition-colors z-10">
                    <ArrowUpRight className="w-5 h-5" />
                </div>

                <div className="mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {status}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow line-clamp-3">
                    <span className="font-semibold block mb-1">Problem:</span>
                    {problem}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
};
