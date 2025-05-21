import type { Control, FieldValues, Path } from 'react-hook-form';
import type { z } from 'zod';
import type { IconName } from 'lucide-react/dynamic';
// interfaces
import type { IModule } from '@/features/auth/interfaces/IModule.interface';
// schemas
import { authFormSchema } from '@/data/schemas';

type HTMLInputTypeAttribute =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | (string & {});

export type BRTKInputBaseProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    extra?: string;
    type?: HTMLInputTypeAttribute;
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
    loading?: boolean;
    iconPosition?: 'left' | 'right';
    icon?: IconName;
};

export type AuthFormProps = {
    onSubmit: (values: z.infer<typeof authFormSchema>) => void;
    className?: string;
    isLoading: boolean;
};

export type BRTKThemeProps = {
    className?: string;
};

export type BRTKAsideProps = {
    modules: IModule[];
};

export type BRTKItemAsideProps = {
    className?: string;
    item: IModule;
    onClick?: (url: string) => void;
};

export type BRTKCategoryItemProps = {
    className?: string;
    icon: IconName;
    title: string;
    description: string;
    onClick?: () => void;
};

export type BRTKButtonIconProps = {
    className?: string;
    onClick?: () => void;
    icon: IconName;
};

export type PromptFormProps = {
    onSubmit: (prompt: string) => void;
    isLoading?: boolean;
};
