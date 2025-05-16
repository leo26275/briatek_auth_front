import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// components
import { Form } from '@/components/ui/form';
import BRTKButton from '@/components/common/BRTKButton';
import BRTKInput from '@/components/common/BRTKInput';
// data
import { authFormSchema } from '@/data/schemas';
import type { AuthFormProps } from '@/data/types';
// utils
import { cn } from '@/lib/utils';

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, className, isLoading }) => {
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                autoComplete="off"
                className={cn(`${className ?? ''}`, 'w-full space-y-8')}
            >
                <BRTKInput
                    name="email"
                    label="Correo Electrónico"
                    placeholder="example@example.com"
                    control={form.control}
                    isLoading={false}
                />

                <BRTKInput
                    name="password"
                    label="Contraseña"
                    control={form.control}
                    isLoading={false}
                    type="password"
                />

                <BRTKButton
                    type="submit"
                    label="Iniciar Sesión"
                    className="w-full"
                    loading={isLoading}
                />
            </form>
        </Form>
    );
};

export default AuthForm;
