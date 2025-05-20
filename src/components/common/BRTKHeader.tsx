// components
import BRTKLogo from './BRTKLogo';
import BRTKTheme from './BRTKTheme';

const BRTKHeader = () => {
    return (
        <header className="bg-white border-b border-primary dark:border-border dark:bg-primary fixed top-0 left-0 w-full flex items-center justify-between h-12 px-4 sm:px-6 z-50 transition-colors duration-300">
            {/* logo */}
            <BRTKLogo />

            {/* change theme */}
            <BRTKTheme />
        </header>
    );
};

export default BRTKHeader;
