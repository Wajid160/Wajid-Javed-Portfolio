import { useEffect, useState } from 'react';
import { STORAGE_KEYS, theme } from '../config/theme';

type Theme = 'light' | 'dark';

export function useTheme() {
    const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem(STORAGE_KEYS.THEME_PREFERENCE);
        console.log('🎨 Initial theme check - stored value:', stored);
        if (stored === 'light' || stored === 'dark') return stored;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log('🎨 No stored theme, using system preference. Prefers dark?', prefersDark);
        return prefersDark ? 'dark' : 'light';
    });

    useEffect(() => {
        console.log('🎨 Theme changed to:', currentTheme);
        const root = window.document.documentElement;
        console.log('🎨 HTML element classes before:', root.classList.toString());
        root.classList.remove('light', 'dark');
        root.classList.add(currentTheme);
        console.log('🎨 HTML element classes after:', root.classList.toString());
        localStorage.setItem(STORAGE_KEYS.THEME_PREFERENCE, currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        console.log('🎨 Toggle clicked! Current theme:', currentTheme);
        setCurrentTheme((prev) => {
            const next = prev === 'light' ? 'dark' : 'light';
            console.log('🎨 Switching from', prev, 'to', next);
            return next;
        });
    };

    return { theme: currentTheme, toggleTheme, colors: theme.colors[currentTheme] };
}
