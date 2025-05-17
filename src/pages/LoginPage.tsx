import { z } from 'zod';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
// components
import AuthForm from '@/features/auth/components/AuthForm';
import BRTKLogo from '@/components/common/BRTKLogo';
import BRTKTheme from '@/components/common/BRTKTheme';
// schemas
import type { authFormSchema } from '@/data/schemas';
// hook
import useAxios from '@/hooks/useAxios.hook';
import useUser from '@/hooks/useUser';
// models
import type { AuthResponseModel } from '@/features/auth/model/AuthResponse.model';
// utils
import { SecureStorage } from '@/utils/SecureStorage';
import { decodeToken } from '@/utils/jwt.utils';

const LoginPage = () => {
    const navigate = useNavigate();
    const [state, fetchLogin] = useAxios<object>();
    const {
        userMethods: { onLogin },
    } = useUser();

    const onSubmit = async (values: z.infer<typeof authFormSchema>) => {
        const response = await fetchLogin({
            method: 'POST',
            path: '/auth/login',
            data: {
                email: values.email,
                password: values.password,
            },
        });

        if (response.statusCode == 500) {
            toast.error('Ocurrió un error, por favor vuelve a intentarlo.');
            return;
        }

        if (response.statusCode == 401) {
            toast.error('Usuario o contraseña incorrectos.');
            return;
        }

        if (!response.isSuccess) {
            toast.error('Credenciales incorrectas.');
            return;
        }

        if (!response.data) {
            toast.error('Ocurrió un error, por favor vuelve a intentarlo.');
            return;
        }

        const responseData = response.data as AuthResponseModel;
        SecureStorage.setItem({ key: 'token', value: responseData.token });
        const authData = decodeToken(responseData.token);
        if (authData) onLogin(authData);

        navigate('/');
    };

    return (
        <section className="bg-white dark:bg-primary min-h-screen flex flex-col items-center justify-center">
            <BRTKTheme className="absolute top-5" />

            <div className="w-full flex max-w-7xl p-5 md:p-0">
                <div className="w-full flex items-center justify-center">
                    <div className="relative w-full sm:max-w-lg">
                        {/* form container */}
                        <div className="relative bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-secondary dark:border-gray-700 z-10">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <BRTKLogo />

                                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Inicia sesión en tu cuenta
                                </h1>

                                {/* form */}
                                <AuthForm
                                    onSubmit={onSubmit}
                                    isLoading={state.isLoading}
                                />
                            </div>
                        </div>

                        {/* image */}
                        <div className="hidden lg:flex lg:absolute lg:-top-1 lg:-right-35 h-full">
                            <img
                                src="./src/assets/svg/IA.svg"
                                className="text-transparent max-h-full"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
