import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-b border-[#E5E7EB] dark:border-[#1F2937]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src="/images/logo.png" alt="Wajid Javed" className="h-12 w-12 rounded-full object-cover border-2 border-blue-600 dark:border-cyan-500" />
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-[#374151] dark:text-[#D1D5DB] hover:text-[#1E40AF] dark:hover:text-[#06B6D4] transition-colors font-medium">
                        Home
                    </a>
                    <a href="#about" className="text-[#374151] dark:text-[#D1D5DB] hover:text-[#1E40AF] dark:hover:text-[#06B6D4] transition-colors font-medium">
                        About
                    </a>
                    <a href="#projects" className="text-[#374151] dark:text-[#D1D5DB] hover:text-[#1E40AF] dark:hover:text-[#06B6D4] transition-colors font-medium">
                        Projects
                    </a>
                    <a href="#skills" className="text-[#374151] dark:text-[#D1D5DB] hover:text-[#1E40AF] dark:hover:text-[#06B6D4] transition-colors font-medium">
                        Skills
                    </a>
                    <a href="#contact" className="text-[#374151] dark:text-[#D1D5DB] hover:text-[#1E40AF] dark:hover:text-[#06B6D4] transition-colors font-medium">
                        Contact
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? (
                            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        ) : (
                            <Sun className="w-5 h-5 text-gray-300" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};
