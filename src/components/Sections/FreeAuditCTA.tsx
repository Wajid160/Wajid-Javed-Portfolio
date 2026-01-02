import React from 'react';
import { content } from '../../config/content';
import { Check } from 'lucide-react';

export const FreeAuditCTA: React.FC = () => {
    const { headline, subheadline, benefits, noObligationText, valueStatement, trustLine } = content.freeAuditCTA;
    const calendlyUrl = content.brand.calendlyUrl;
    const calendlyColor = content.brand.calendlyColor;

    return (
        <section id="free-audit" className="py-20 cta-gradient">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        {headline}
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl text-white/90 text-center mb-8">
                        {subheadline}
                    </p>

                    {/* Benefits */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                                <span className="text-white/90">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* No Obligation Text */}
                    <p className="text-center text-white/90 font-medium mb-2">
                        {noObligationText}
                    </p>

                    {/* Value Statement */}
                    <p className="text-center text-white/80 text-sm mb-8">
                        {valueStatement}
                    </p>

                    {/* Calendly Embed */}
                    <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-2xl overflow-hidden mb-6">
                        <div
                            className="calendly-inline-widget"
                            data-url={`${calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=${calendlyColor}`}
                            style={{ minWidth: '320px', height: '700px' }}
                        />
                    </div>

                    {/* Trust Line */}
                    <p className="text-center text-white/70 text-sm">
                        {trustLine}
                    </p>
                </div>
            </div>

            {/* Calendly Script */}
            <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
            />
        </section>
    );
};
