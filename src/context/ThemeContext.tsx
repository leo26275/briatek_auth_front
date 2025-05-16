import { createContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => {},
});

const getPreferredTheme = (): Theme => {
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

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'dark') root.classList.add('dark');
        else root.classList.remove('dark');

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
