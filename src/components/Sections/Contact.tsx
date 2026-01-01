import React, { useState } from 'react';
import { content } from '../../config/content';
import { Mail, Linkedin, Github, MessageCircle, Check } from 'lucide-react';

export const Contact: React.FC = () => {
    const { email, linkedin, github, whatsappLink } = content.contact;
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    const socialLinks = [
        { icon: Linkedin, href: linkedin, label: 'LinkedIn' },
        { icon: Github, href: github, label: 'GitHub' },
        { icon: MessageCircle, href: whatsappLink, label: 'WhatsApp' },
    ];

    return (
        <section id="contact" className="py-16 bg-light-bg dark:bg-dark-bg">
            <div className="section-container">
                <div className="text-center">
                    {/* Social Links */}
                    <p className="text-light-body dark:text-dark-body mb-6">
                        Connect with us
                    </p>
                    <div className="flex justify-center gap-4">
                        {/* Email Button - Copy to clipboard */}
                        <button
                            onClick={copyEmail}
                            className="relative p-4 rounded-xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-body dark:text-dark-body hover:text-brand-accent hover:border-brand-accent transition-all duration-200 hover:-translate-y-1"
                            aria-label="Copy email"
                        >
                            {copied ? (
                                <Check className="w-6 h-6 text-brand-accent" />
                            ) : (
                                <Mail className="w-6 h-6" />
                            )}

                            {/* Toast Notification */}
                            {copied && (
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-brand-accent text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-lg animate-fade-in-up">
                                    Email copied!
                                </div>
                            )}
                        </button>

                        {/* Other Social Links */}
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-body dark:text-dark-body hover:text-brand-accent hover:border-brand-accent transition-all duration-200 hover:-translate-y-1"
                                aria-label={label}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
