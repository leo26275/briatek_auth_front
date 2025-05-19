// components
import BRTKItemHeader from './BRTKItemHeader';
import BRTKLogo from './BRTKLogo';
import BRTKTheme from './BRTKTheme';
// types
import type { BRTKHeaderProps } from '@/data/types';

const BRTKHeader = ({ modules }: BRTKHeaderProps) => {
    const onRedirect = (url: string) => {
        console.log('redirect', url);
    };

    return (
        <header className="bg-white border-b border-primary dark:border-border dark:bg-primary fixed top-0 left-0 w-full flex items-center justify-between h-12 px-4 sm:px-6 z-50 transition-colors duration-300">
            <BRTKLogo />

            {modules.length > 0 && (
                <nav className="flex flex-row justify-center items-center gap-4">
                    {modules.map((m, i) => (
                        <BRTKItemHeader item={m} onClick={onRedirect} key={i} />
                    ))}
                </nav>
            )}

            <BRTKTheme />
        </header>
    );
};

export default BRTKHeader;
