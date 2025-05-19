// hooks
import useUser from '@/hooks/useUser';
// components
import BRTKHeader from '../common/BRTKHeader';

const AuthLayout = () => {
    const {
        userData: { data },
    } = useUser();

    return (
        <>
            {/* header */}
            <BRTKHeader modules={data?.modules ?? []} />
            {/* aside */}
            {/* container */}
            <main className="flex flex-col justify-start items-center w-full min-h-screen pt-12 bg-white dark:bg-primary transition-all duration-500 px-4 sm:px-6 md:px-8">
                content
            </main>
        </>
    );
};

export default AuthLayout;
