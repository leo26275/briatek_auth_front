// hooks
import useUser from '@/hooks/useUser';
// components
import BRTKLogo from '../common/BRTKLogo';
import BRTKTheme from '../common/BRTKTheme';

const AuthLayout = () => {
    const {
        userData: { data },
    } = useUser();

    return (
        <>
            {/* header */}
            <header className="bg-white border-b border-primary dark:border-border dark:bg-primary fixed top-0 left-0 w-full flex items-center justify-between h-12 px-4 sm:px-6 z-50 transition-colors duration-300">
                <BRTKLogo />

                <nav>modules</nav>

                <BRTKTheme />
            </header>
            {/* aside */}
            {/* container */}
            <main className="flex flex-col justify-start items-center w-full min-h-screen pt-12 bg-white dark:bg-primary transition-all duration-500 px-4 sm:px-6 md:px-8">
                content
            </main>
        </>
    );
};

export default AuthLayout;
