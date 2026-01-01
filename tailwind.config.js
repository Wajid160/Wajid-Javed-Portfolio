/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Brand Colors - The Time Reclamation Specialists
                brand: {
                    // Primary - Deep Blue (trust, professionalism)
                    primary: '#1e3a8a',
                    'primary-light': '#3b82f6',
                    'primary-dark': '#1e293b',
                    // Accent - Electric Green (energy, CTAs)
                    accent: '#10b981',
                    'accent-light': '#34d399',
                    'accent-dark': '#059669',
                },
                // Light mode colors
                light: {
                    bg: '#f9fafb',
                    surface: '#FFFFFF',
                    primary: '#1e3a8a',
                    accent: '#10b981',
                    heading: '#111827',
                    body: '#4b5563',
                    muted: '#6b7280',
                    border: '#e5e7eb',
                },
                // Dark mode colors
                dark: {
                    bg: '#0f172a',
                    surface: '#1e293b',
                    primary: '#3b82f6',
                    accent: '#10b981',
                    heading: '#f9fafb',
                    body: '#d1d5db',
                    muted: '#9ca3af',
                    border: '#334155',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'Inter', 'sans-serif'],
            },
            animation: {
                'blob': 'blob 7s infinite',
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'scale-in': 'scaleIn 0.3s ease-out forwards',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)' },
                },
            },
            boxShadow: {
                'glow-green': '0 0 20px rgba(16, 185, 129, 0.4)',
                'glow-blue': '0 0 20px rgba(30, 58, 138, 0.3)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
