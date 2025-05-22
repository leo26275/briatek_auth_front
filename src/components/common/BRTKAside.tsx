import { useState } from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { useNavigate } from 'react-router';
// components
import BRTKItemAside from './BRTKItemAside';
// interfaces
import type { IModule } from '@/features/auth/interfaces/IModule.interface';
// types
import type { BRTKAsideProps } from '@/data/types';
// utils
import { SecureStorage } from '@/utils/SecureStorage';
import { cn } from '@/lib/utils';

const BRTKAside = ({ modules }: BRTKAsideProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const navigate = useNavigate();
    const logout: IModule = {
        icon: 'log-out',
        description: 'Cerrar sesión',
        position: 0,
        url: '',
    };
    const onRedirect = (url: string) => {
        console.log('redirect', url);
    };

    const onLogOut = () => {
        SecureStorage.deleteAll();
        navigate('/login', { replace: true });
    };

    return (
        <>
            <aside
                className={cn(
                    `${isOpen ? 'translate-x-0' : '-translate-x-full'}`,
                    'bg-white dark:bg-secondary border-r border-primary text-white w-64 flex-grow flex flex-col justify-between mt-12 z-20 fixed lg:static h-[calc(100vh-3rem)] lg:translate-x-0 transition-all ease-in-out duration-300 transform',
                )}
            >
                <div className="flex flex-col pt-3 overflow-y-auto">
                    {modules.length > 0 &&
                        modules.map((item, i) => (
                            <BRTKItemAside
                                item={item}
                                key={i}
                                onClick={() => onRedirect(item.url)}
                            />
                        ))}
                </div>

                <div className="flex flex-col pb-3">
                    <BRTKItemAside item={logout} onClick={onLogOut} />
                </div>

                {/* Toggle Button - visible solo en móvil */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        `${isOpen ? '-right-5' : '-right-10 animate-bounce'}`,
                        'fixed top-1/2 z-50 transform -translate-y-1/2 bg-primary text-white dark:bg-custom-green-200 p-2 rounded-full shadow-md focus:outline-none lg:hidden cursor-pointer transition-all ease-in-out duration-300',
                    )}
                >
                    <DynamicIcon
                        name={isOpen ? 'chevron-left' : 'chevron-right'}
                        className="w-6 h-6"
                    />
                </button>
            </aside>
        </>
    );
};

export default BRTKAside;
