export const theme = {
    colors: {
        dark: {
            background: '#0B1220',
            surface: '#111827',
            primary: '#06B6D4',
            accent: '#8B5CF6',
            text: {
                heading: '#FFFFFF',
                body: '#D1D5DB',
            },
        },
        light: {
            background: '#F7F7FA',
            surface: '#FFFFFF',
            primary: '#1E40AF',
            accent: '#06B6D4',
            text: {
                heading: '#0F172A',
                body: '#374151',
            },
        },
    },
    typography: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['monospace'],
        },
    },
    animation: {
        modalEntry: {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 12 },
            transition: { duration: 0.22, ease: 'easeOut' },
        },
    },
};

export const STORAGE_KEYS = {
    THEME_PREFERENCE: 'wj_theme_preference',
};
