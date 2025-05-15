import { z } from 'zod';

export const authFormSchema = z.object({
    email: z
        .string()
        .nonempty({
            message: 'El correo electrónico es requerido.',
        })
        .email({
            message: 'Correo electronico inválido.',
        }),
    password: z.string().nonempty({
        message: 'La contraseña es requerida.',
    }),
});
