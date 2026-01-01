import React, { useState } from 'react';
import { content } from '../../config/content';
import { Modal } from '../UI/Modal';
import { ImageGallery } from '../UI/ImageGallery';
import { ExternalLink, Github, TrendingUp, Clock, Zap, DollarSign } from 'lucide-react';

export const CaseStudies: React.FC = () => {
    const { headline, subtitle, projects } = content.caseStudies;
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

    const selectedProject = projects.find(p => p.id === selectedProjectId);

    return (
        <>
            <section id="case-studies" className="py-20 bg-white dark:bg-dark-surface">
                <div className="section-container">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="section-title">{headline}</h2>
                        <p className="section-subtitle">{subtitle}</p>
                    </div>

                    {/* Case Study Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProjectId(project.id)}
                                className="glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                            >
                                {/* Thumbnail */}
                                <div className="relative h-48 bg-light-bg dark:bg-dark-bg overflow-hidden">
                                    {project.thumbnail ? (
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-4xl">🤖</span>
                                        </div>
                                    )}

                                    {/* Industry Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-brand-primary/90 text-white text-xs font-semibold rounded-full">
                                            {project.industry}
                                        </span>
                                    </div>

                                    {/* Internal Project Badge */}
                                    {project.isInternal && (
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-brand-accent/90 text-white text-xs font-semibold rounded-full">
                                                Internal Project
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-light-heading dark:text-dark-heading mb-3">
                                        {project.title}
                                    </h3>

                                    {/* Result Highlight */}
                                    <div className="flex items-center gap-4 mb-4 p-3 bg-brand-accent/10 rounded-lg border border-brand-accent/20">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-brand-accent" />
                                            <span className="text-sm font-semibold text-brand-accent">
                                                {project.results.hoursSaved}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="w-4 h-4 text-brand-accent" />
                                            <span className="text-sm font-semibold text-brand-accent">
                                                {project.results.annualValue}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Problem Preview */}
                                    <p className="text-sm text-light-body dark:text-dark-body line-clamp-2">
                                        {project.problem}
                                    </p>

                                    <div className="mt-4 flex items-center text-brand-primary dark:text-brand-accent font-medium text-sm group-hover:gap-2 transition-all">
                                        View Details
                                        <ExternalLink className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Details Modal */}
                <Modal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProjectId(null)}
                    title={selectedProject?.title}
                >
                    {selectedProject && (
                        <div className="space-y-6">
                            {/* Status & GitHub */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm font-medium rounded-full">
                                        Production
                                    </span>
                                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-full">
                                        {selectedProject.industry}
                                    </span>
                                </div>
                                {selectedProject.githubUrl && (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-brand-primary dark:text-brand-accent hover:underline"
                                    >
                                        <Github className="w-4 h-4" />
                                        View on GitHub
                                    </a>
                                )}
                            </div>

                            {/* Results Gallery */}
                            {selectedProject.resultImages && selectedProject.resultImages.length > 0 && (
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-light-heading dark:text-dark-heading">
                                        Live Results
                                    </h3>
                                    <ImageGallery images={selectedProject.resultImages} alt={selectedProject.title} />
                                </div>
                            )}

                            {/* Results Highlight */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-brand-accent/10 rounded-xl border border-brand-accent/20">
                                <div className="text-center">
                                    <Clock className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                                    <div className="text-lg font-bold text-brand-accent">
                                        {selectedProject.results.hoursSaved}
                                    </div>
                                    <div className="text-xs text-light-muted dark:text-dark-muted">Saved</div>
                                </div>
                                <div className="text-center">
                                    <Zap className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                                    <div className="text-lg font-bold text-brand-accent">
                                        {selectedProject.results.automationRate}
                                    </div>
                                    <div className="text-xs text-light-muted dark:text-dark-muted">Automated</div>
                                </div>
                                <div className="text-center">
                                    <TrendingUp className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                                    <div className="text-lg font-bold text-brand-accent">
                                        {selectedProject.results.availability}
                                    </div>
                                    <div className="text-xs text-light-muted dark:text-dark-muted">Availability</div>
                                </div>
                                <div className="text-center">
                                    <DollarSign className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                                    <div className="text-lg font-bold text-brand-accent">
                                        {selectedProject.results.annualValue}
                                    </div>
                                    <div className="text-xs text-light-muted dark:text-dark-muted">Annual Value</div>
                                </div>
                            </div>

                            {/* Problem & Solution */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-light-heading dark:text-dark-heading mb-3">
                                        The Problem
                                    </h3>
                                    <p className="text-light-body dark:text-dark-body">
                                        {selectedProject.problem}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-light-heading dark:text-dark-heading mb-3">
                                        The Solution
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedProject.solution.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-light-body dark:text-dark-body">
                                                <span className="text-brand-accent mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-light-bg dark:bg-dark-bg p-6 rounded-lg">
                                <h3 className="text-sm font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wider mb-4">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-md text-sm font-mono text-brand-primary dark:text-brand-accent"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </section>
        </>
    );
};
