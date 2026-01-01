import React, { useEffect } from 'react';
import { content } from '../../config/content';
import { ArrowRight, Calendar } from 'lucide-react';

interface FreeAuditCTAProps {
    variant?: 'primary' | 'secondary';
}

export const FreeAuditCTA: React.FC<FreeAuditCTAProps> = ({ variant = 'primary' }) => {
    const { headline, subheadline, description, cta, trustLine } = content.freeAuditCTA;
    const { calendlyUrl, calendlyColor } = content.brand;

    const isPrimary = variant === 'primary';

    // Load Calendly script
    useEffect(() => {
        if (isPrimary) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                // Cleanup script on unmount
                const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
                if (existingScript) {
                    existingScript.remove();
                }
            };
        }
    }, [isPrimary]);

    // Primary variant with embedded Calendly
    if (isPrimary) {
        return (
            <section
                id="free-audit"
                className="py-20 bg-light-bg dark:bg-dark-bg"
            >
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left side - Text content */}
                        <div className="text-center lg:text-left">
                            {/* Headline */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-heading dark:text-dark-heading mb-4">
                                {headline}
                            </h2>

                            {/* Subheadline */}
                            <p className="text-xl text-brand-accent font-medium mb-6">
                                {subheadline}
                            </p>

                            {/* Description */}
                            <p className="text-lg text-light-body dark:text-dark-body mb-8 max-w-lg">
                                {description}
                            </p>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-light-muted dark:text-dark-muted">
                                <span className="flex items-center gap-2">
                                    <span className="text-brand-accent">📅</span> Pick a time that works
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-brand-accent">💬</span> No commitment required
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-brand-accent">⚡</span> Get insights in 30 min
                                </span>
                            </div>
                        </div>

                        {/* Right side - Calendly Embed */}
                        <div className="glass-card p-4 lg:p-0 lg:bg-transparent lg:border-0 overflow-hidden rounded-2xl">
                            <div
                                className="calendly-inline-widget"
                                data-url={`${calendlyUrl}?primary_color=${calendlyColor}&hide_gdpr_banner=1&hide_landing_page_details=1`}
                                style={{ minWidth: '320px', height: '580px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Secondary variant - CTA button that scrolls to embedded Calendly (before footer)
    const scrollToCalendly = () => {
        document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="free-audit-bottom"
            className="py-20 cta-gradient"
        >
            <div className="section-container">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {headline}
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl text-white/90 mb-6">
                        {subheadline}
                    </p>

                    {/* Description */}
                    <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                        {description}
                    </p>

                    {/* CTA Button - Scrolls to embedded Calendly */}
                    <button
                        onClick={scrollToCalendly}
                        className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-brand-primary bg-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                        style={{
                            boxShadow: '0 8px 40px rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        <Calendar className="mr-3 h-6 w-6" />
                        {cta}
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Trust Line */}
                    <p className="mt-8 text-white/70 text-sm">
                        {trustLine}
                    </p>
                </div>
            </div>
        </section>
    );
};
