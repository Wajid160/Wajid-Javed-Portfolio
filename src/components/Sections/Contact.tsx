import React from 'react';
import { content } from '../../config/content';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Card } from '../UI/Card';

export const Contact: React.FC = () => {
    const { intro, responseExpectation, email, linkedin, github, whatsappList, whatsappLink } = content.contact;

    const contactLinks = [
        { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
        { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: linkedin },
        { icon: Github, label: 'GitHub', value: 'View GitHub Profile', href: github },
        { icon: MessageCircle, label: 'WhatsApp', value: whatsappList, href: whatsappLink },
    ];

    return (
        <section id="contact" className="py-20 bg-white dark:bg-[#111827]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white mb-4">Get in Touch</h2>
                    <p className="text-lg text-[#374151] dark:text-[#D1D5DB] max-w-2xl mx-auto">
                        {intro}
                    </p>
                    <p className="text-sm text-[#374151] dark:text-[#D1D5DB] mt-2 opacity-75">
                        {responseExpectation}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {contactLinks.map(({ icon: Icon, label, value, href }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group block"
                        >
                            <Card className="transition-all duration-200 hover:border-[#1E40AF] dark:hover:border-[#06B6D4]">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#1E40AF]/10 dark:bg-[#06B6D4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1E40AF]/20 dark:group-hover:bg-[#06B6D4]/20 transition-colors">
                                        <Icon className="w-6 h-6 text-[#1E40AF] dark:text-[#06B6D4]" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-[#374151] dark:text-[#D1D5DB] opacity-75">{label}</p>
                                        <p className="text-base font-semibold text-[#0F172A] dark:text-white truncate group-hover:text-[#1E40AF] dark:group-hover:text-[#06B6D4]">
                                            {value}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
