import React, { useState } from 'react';
import { content } from '../../config/content';
import { Mail, Linkedin, Github, MessageCircle, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
    const { tagline, links } = content.footer;
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
        <footer className="bg-brand-primary-dark dark:bg-dark-bg border-t border-dark-border py-12">
            <div className="section-container">
                {/* Main CTA - Scrolls to embedded Calendly */}
                <div className="text-center mb-10">
                    <p className="text-white/80 mb-4">
                        Ready to reclaim your time?
                    </p>
                    <button
                        onClick={() => document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent text-white font-semibold rounded-xl hover:bg-brand-accent-light transition-all duration-200 group"
                    >
                        Book Free Audit
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-white/70 hover:text-white transition-colors text-sm"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-8">
                    {/* Email Button - Copy to clipboard */}
                    <button
                        onClick={copyEmail}
                        className="relative p-2 text-white/60 hover:text-brand-accent transition-colors"
                        aria-label="Copy email"
                    >
                        {copied ? (
                            <Check className="w-5 h-5 text-brand-accent" />
                        ) : (
                            <Mail className="w-5 h-5" />
                        )}

                        {/* Toast Notification */}
                        {copied && (
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-brand-accent text-white text-xs font-medium rounded-md whitespace-nowrap shadow-lg animate-fade-in-up">
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
                            className="p-2 text-white/60 hover:text-brand-accent transition-colors"
                            aria-label={label}
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Tagline & Copyright */}
                <div className="text-center space-y-2">
                    <p className="text-white/70 text-sm">
                        {tagline}
                    </p>
                    <p className="text-white/50 text-xs">
                        © {new Date().getFullYear()} Wajid Javed. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
