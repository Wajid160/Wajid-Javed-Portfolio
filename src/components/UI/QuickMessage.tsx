import React from 'react';
import { Mail } from 'lucide-react';
import { content } from '../../config/content';

export const QuickMessage: React.FC = () => {
    const { email } = content.contact;

    // Create mailto link with proper encoding
    const subject = 'Quick Question - Portfolio Contact';
    const body = `Hi,

I have a question about your automation services.

`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <a
            href={mailtoLink}
            className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-accent/30 group no-underline"
            aria-label="Send quick message"
        >
            <Mail className="w-5 h-5" />
            <span className="font-semibold">Quick Message</span>
            {/* Subtle pulse animation */}
            <span className="absolute w-full h-full rounded-full bg-brand-accent animate-ping opacity-20"></span>
        </a>
    );
};
