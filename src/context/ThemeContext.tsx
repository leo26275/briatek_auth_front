import { createContext } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => {},
});

export const getPreferredTheme = (): Theme => {
    try {
        if (typeof localStorage !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') as Theme | null;

            if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
        }

        if (typeof window !== 'undefined' && window.matchMedia) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            return prefersDark ? 'dark' : 'light';
        }
    } catch (e) {
        console.warn('Error reading theme preference:', e);
    }

    return 'dark';
};
