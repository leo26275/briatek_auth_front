import type { Control, FieldValues, Path } from 'react-hook-form';
import type { z } from 'zod';

import { authFormSchema } from '@/data/schemas';

export type BRTKInputBaseProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    extra?: string;
};

export type BRTKInputProps<T extends FieldValues> = BRTKInputBaseProps<T> & {
    placeholder?: string;
    isLoading: boolean;
};

export type BRTKButtonProps = {
    size?: 'lg';
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    label?: string;
    className?: string;
    onClick?: () => void;
};

export type AuthFormProps = {
    onSubmit: (values: z.infer<typeof authFormSchema>) => void;
    className?: string;
};
