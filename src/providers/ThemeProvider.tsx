import { useEffect, useState, type ReactNode } from 'react';
// context
import { getPreferredTheme, ThemeContext, type Theme } from '@/context/ThemeContext';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
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
