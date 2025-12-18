import React, { useState } from 'react';
import { content } from '../../config/content';
import { ProjectCard } from './ProjectCard';
import { Modal } from '../UI/Modal';
import { ImageGallery } from '../UI/ImageGallery';
import { ExternalLink, Github, Linkedin, Copy, Check } from 'lucide-react';

export const Projects: React.FC = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [emailCopied, setEmailCopied] = useState(false);

    const selectedProject = content.projects.find(p => p.id === selectedProjectId);

    const handleClose = () => {
        setSelectedProjectId(null);
        setEmailCopied(false);
    };

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(content.contact.email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <section id="projects" className="py-20 bg-white dark:bg-[#111827]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white mb-4">Featured Automation Projects</h2>
                    <p className="text-lg text-[#374151] dark:text-[#D1D5DB] max-w-2xl mx-auto">
                        A selection of agentic workflows and automation systems built to solve real-world problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            problem={project.problem}
                            solution={project.solution}
                            techStack={project.techStack}
                            status={project.status}
                            thumbnail={project.thumbnail}
                            onClick={() => setSelectedProjectId(project.id)}
                        />
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={handleClose}
                title={selectedProject?.title}
            >
                {selectedProject && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm font-medium rounded-full">
                                {selectedProject.status}
                            </span>
                            {selectedProject.githubUrl && (
                                <a
                                    href={selectedProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-blue-600 dark:text-cyan-400 hover:underline"
                                >
                                    <Github className="w-4 h-4" />
                                    View on GitHub
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            )}
                        </div>

                        {/* Results Gallery */}
                        {selectedProject.resultImages && selectedProject.resultImages.length > 0 && (
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white">Live Results</h3>
                                <ImageGallery images={selectedProject.resultImages} alt={selectedProject.title} />
                            </div>
                        )}

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white mb-2">The Problem</h3>
                                    <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                                        {selectedProject.problem}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white mb-2">The Solution</h3>
                                    <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                                        {selectedProject.solution}
                                    </p>
                                </div>
                                {selectedProject.impact && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white mb-2">Impact & Results</h3>
                                        <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                                            {selectedProject.impact}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-md text-sm font-mono text-blue-600 dark:text-cyan-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {!selectedProject.title.includes('DUMMY') && (
                                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
                                        <button
                                            onClick={handleCopyEmail}
                                            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors text-sm"
                                        >
                                            {emailCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                            {emailCopied ? 'Email Copied!' : 'Copy Email Address'}
                                        </button>

                                        <a
                                            href={content.contact.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-700 text-slate-700 dark:text-white font-medium py-2.5 px-6 rounded-lg transition-colors text-sm"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Linkedin className="w-4 h-4" />
                                            Connect on LinkedIn
                                        </a>

                                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-3 text-center">
                                            Open for collaboration and new opportunities
                                        </p>
                                    </div>
                                )}

                                {selectedProject.title.includes('DUMMY') && (
                                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                        <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                                            Disclaimer: This is a {selectedProject.status.toLowerCase()} project designed to demonstrate capabilities.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                )}
            </Modal>


        </section>
    );
};

