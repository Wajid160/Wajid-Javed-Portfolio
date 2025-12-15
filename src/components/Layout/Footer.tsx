import React from 'react';
import { content } from '../../config/content';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
    const { text } = content.footer;
    const { email, linkedin, github, whatsappLink } = content.contact;

    const socialLinks = [
        { icon: Mail, href: `mailto:${email}`, label: 'Email' },
        { icon: Linkedin, href: linkedin, label: 'LinkedIn' },
        { icon: Github, href: github, label: 'GitHub' },
        { icon: MessageCircle, href: whatsappLink, label: 'WhatsApp' },
    ];

    return (
        <footer className="bg-white dark:bg-[#111827] border-t border-[#E5E7EB] dark:border-[#1F2937] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-6">

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="p-2 text-[#374151] dark:text-[#D1D5DB] hover:text-[#1E40AF] dark:hover:text-[#06B6D4] transition-colors"
                                aria-label={label}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>

                    {/* Footer Text */}
                    <p className="text-center text-[#374151] dark:text-[#D1D5DB] text-sm">
                        {text}
                    </p>

                    <p className="text-center text-[#374151] dark:text-[#D1D5DB] text-xs opacity-60">
                        © {new Date().getFullYear()} Wajid Javed. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
