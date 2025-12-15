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
                // Light mode colors
                light: {
                    bg: '#F7F7FA',
                    surface: '#FFFFFF',
                    primary: '#1E40AF',
                    accent: '#06B6D4',
                    heading: '#0F172A',
                    body: '#374151',
                    border: '#E5E7EB',
                },
                // Dark mode colors
                dark: {
                    bg: '#0B1220',
                    surface: '#111827',
                    primary: '#06B6D4',
                    accent: '#8B5CF6',
                    heading: '#FFFFFF',
                    body: '#D1D5DB',
                    border: '#1F2937',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                },
            },
        },
    },
    plugins: [],
}
