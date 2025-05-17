// hooks
import useTheme from '@/hooks/useTheme.hook';
// types
import type { BRTKThemeProps } from '@/data/types';
import { Moon, SunMedium } from 'lucide-react';
// utils
import { cn } from '@/lib/utils';

const BRTKTheme = ({ className }: BRTKThemeProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className={cn(className ?? '', 'right-5 text-custom-green cursor-pointer')}
            onClick={toggleTheme}
        >
            {theme == 'dark' ? <SunMedium /> : <Moon />}
        </div>
    );
};

export default BRTKTheme;
