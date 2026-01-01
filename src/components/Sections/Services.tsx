import React from 'react';
import { content } from '../../config/content';
import { Check, Star, Sparkles, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
    const { headline, subtitle, promoHeadline, promoSubtitle, spotsInfo, tiers, footnote, foundingClient } = content.services;

    const scrollToCalendly = () => {
        document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="services" className="py-20 bg-white dark:bg-dark-surface">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2 className="section-title">{headline}</h2>
                    <p className="section-subtitle">{subtitle}</p>
                </div>

                {/* Promo Banner */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 border border-brand-accent/30 rounded-2xl p-6 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Sparkles className="w-5 h-5 text-brand-accent" />
                            <span className="font-bold text-brand-accent text-lg">{promoHeadline}</span>
                            <Sparkles className="w-5 h-5 text-brand-accent" />
                        </div>
                        <p className="text-light-body dark:text-dark-body">
                            {promoSubtitle}
                        </p>
                        <p className="text-sm text-brand-primary dark:text-brand-primary-light font-medium mt-2">
                            Currently at {spotsInfo.filled}/{spotsInfo.total} spots filled
                        </p>
                    </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`relative glass-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${tier.popular ? 'ring-2 ring-brand-accent' : ''
                                }`}
                        >
                            {/* Popular Badge */}
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        <Star className="w-4 h-4 fill-current" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Tier Name */}
                            <h3 className="text-lg font-bold text-light-heading dark:text-dark-heading mb-2">
                                {tier.name}
                            </h3>
                            <p className="text-sm text-light-muted dark:text-dark-muted mb-4">
                                {tier.description}
                            </p>

                            {/* Price with strikethrough */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-lg text-light-muted dark:text-dark-muted line-through opacity-60">
                                        {tier.originalPrice}
                                    </span>
                                    <span className="text-3xl font-bold text-brand-accent">
                                        {tier.price}
                                    </span>
                                </div>
                                <span className="text-xs text-brand-accent font-medium">
                                    Save 20%
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-light-body dark:text-dark-body">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                onClick={scrollToCalendly}
                                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${tier.popular
                                        ? 'btn-primary'
                                        : 'bg-light-bg dark:bg-dark-bg text-light-heading dark:text-dark-heading hover:bg-brand-accent hover:text-white'
                                    }`}
                            >
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footnote */}
                <p className="text-center text-light-muted dark:text-dark-muted text-sm mb-8">
                    {footnote}
                </p>

                {/* Founding Client Teaser */}
                {foundingClient.enabled && (
                    <div className="max-w-lg mx-auto">
                        <div className="bg-brand-primary/5 dark:bg-brand-primary/10 border-2 border-dashed border-brand-primary/30 rounded-2xl p-6 text-center">
                            <h4 className="text-xl font-bold text-brand-primary dark:text-brand-primary-light mb-2">
                                {foundingClient.title}
                            </h4>
                            <p className="text-light-body dark:text-dark-body mb-4">
                                {foundingClient.description}
                            </p>
                            <button
                                onClick={scrollToCalendly}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-primary-dark transition-colors group"
                            >
                                {foundingClient.cta}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
