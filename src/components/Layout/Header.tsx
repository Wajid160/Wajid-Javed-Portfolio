import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'About', href: '#about' },
        { label: 'FAQ', href: '#faq' },
    ];

    const scrollToCalendly = () => {
        setMobileMenuOpen(false);
        document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-b border-light-border dark:border-dark-border">
            <div className="section-container h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3">
                    <img
                        src="/images/logo.png"
                        alt="The Time Reclamation Specialists"
                        className="h-10 w-10 rounded-full object-cover border-2 border-brand-primary dark:border-brand-accent"
                    />
                    <span className="hidden sm:block font-heading font-bold text-light-heading dark:text-dark-heading">
                        Time Reclamation
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-light-body dark:text-dark-body hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium text-sm"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-bg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? (
                            <Moon className="w-5 h-5 text-light-body" />
                        ) : (
                            <Sun className="w-5 h-5 text-dark-body" />
                        )}
                    </button>

                    {/* CTA Button - Desktop - Scrolls to embedded Calendly */}
                    <button
                        onClick={scrollToCalendly}
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand-accent text-white font-semibold text-sm rounded-lg hover:bg-brand-accent-dark transition-all duration-200"
                    >
                        Book Free Audit
                        <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-light-bg dark:hover:bg-dark-bg transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-light-heading dark:text-dark-heading" />
                        ) : (
                            <Menu className="w-6 h-6 text-light-heading dark:text-dark-heading" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-dark-surface border-t border-light-border dark:border-dark-border">
                    <nav className="section-container py-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 text-light-body dark:text-dark-body hover:text-brand-primary dark:hover:text-brand-accent transition-colors font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        {/* Mobile CTA - Scrolls to embedded Calendly */}
                        <button
                            onClick={scrollToCalendly}
                            className="block w-full text-center py-3 mt-4 bg-brand-accent text-white font-semibold rounded-lg"
                        >
                            Book Free Audit
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};
