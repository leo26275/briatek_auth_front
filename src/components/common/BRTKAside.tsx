import { useNavigate } from 'react-router';
// components
import BRTKItemAside from './BRTKItemAside';
// interfaces
import type { IModule } from '@/features/auth/interfaces/IModule.interface';
// types
import type { BRTKAsideProps } from '@/data/types';
// utils
import { SecureStorage } from '@/utils/SecureStorage';

const BRTKAside = ({ modules }: BRTKAsideProps) => {
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
        <aside className="bg-white dark:bg-secondary border-r border-primary text-white w-64 flex-grow flex flex-col justify-between mt-12">
            <div className="flex flex-col">
                {modules.length > 0 &&
                    modules.map((item, i) => (
                        <BRTKItemAside
                            item={item}
                            key={i}
                            onClick={() => onRedirect(item.url)}
                        />
                    ))}
            </div>

            <BRTKItemAside item={logout} onClick={onLogOut} />
        </aside>
    );
};

export default BRTKAside;
