import { z } from 'zod';

export const authFormSchema = z.object({
    email: z
        .string()
        .nonempty({
            message: 'El correo electrónico es requerido.',
        })
        .email({
            message: 'El correo electrónico inválido.',
        }),
    password: z.string().nonempty({
        message: 'La contraseña es requerida.',
    }),
});

export const promptFormSchema = z.object({
    prompt: z.string(),
});
