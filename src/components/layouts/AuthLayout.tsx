import { useMemo } from 'react';
// components
import BRTKHeader from '../common/BRTKHeader';
import BRTKAside from '../common/BRTKAside';
import BRTKCategoryItem from '../common/BRTKCategoryItem';
import BRTKPromptInput from '../common/BRTKPromptInput';
// hooks
import useUser from '@/hooks/useUser';
// utils
import { getGreeting } from '@/lib/utils';

const AuthLayout = () => {
    const {
        userData: { data },
    } = useUser();

    const orderedModules = useMemo(() => {
        return [...(data?.modules ?? [])].sort((a, b) => a.position - b.position);
    }, [data?.modules]);

    const userName = data?.user?.name ?? '';

    const onSubmit = async (prompt: string) => {
        console.log('prompt', prompt);
    };

    return (
        <>
            {/* header */}
            <BRTKHeader />

            <div className="flex flex-1">
                {/* aside */}
                <BRTKAside modules={orderedModules} />

                {/* container */}
                <main className="flex flex-col justify-center items-center w-full min-h-screen pt-12 bg-white dark:bg-primary transition-all duration-500">
                    <div className="w-full max-w-6xl mx-auto flex flex-col items-center p-4 sm:p-6 md:p-8">
                        {/* titles */}
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-semibold text-primary dark:text-white">
                                {getGreeting()}, {userName}
                            </h1>
                            <h1 className="text-xl font-medium text-custom-green">
                                ¿En qué puedo ayudarte hoy?
                            </h1>
                        </div>

                        {/* look for */}
                        <div className="relative w-full max-w-2xl mt-6">
                            <BRTKPromptInput onSubmit={onSubmit} />
                        </div>

                        {/* categories */}
                        <div className="mt-10 w-full px-4 flex flex-wrap justify-center gap-6">
                            <BRTKCategoryItem
                                icon="credit-card"
                                title="Auxiliar de limpieza"
                                description="Solicita perfiles con experiencia reciente en limpieza institucional y disponibilidad inmediata."
                            />

                            <BRTKCategoryItem
                                icon="refresh-ccw"
                                title="Asistente administrativo"
                                description="Busca candidatos con experiencia en recepción, agenda ejecutiva y trato al cliente en entornos corporativos."
                            />

                            <BRTKCategoryItem
                                icon="graduation-cap"
                                title="Docente de primaria"
                                description="Encuentra docentes con experiencia comprobada en grados iniciales y alta vocación educativa."
                            />

                            <BRTKCategoryItem
                                icon="monitor"
                                title="Diseñador gráfico"
                                description="Explora perfiles creativos con dominio de Adobe y experiencia en diseño para marcas reconocidas."
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default AuthLayout;
