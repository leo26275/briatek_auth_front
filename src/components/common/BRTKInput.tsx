import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import type { FieldValues } from 'react-hook-form';
// components
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
// data
import type { BRTKInputProps } from '@/data/types';
// utils
import { cn } from '@/lib/utils';

const BRTKInput = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    isLoading,
    type = 'text',
    extra,
}: BRTKInputProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-primary dark:text-white">
                        {label}
                    </FormLabel>
                    <FormControl>
                        <div className="relative">
                            <Input
                                className={cn(
                                    `${type == 'password' ? 'pr-10' : ''}`,
                                    'bg-white text-primary border rounded-lg h-[40px] focus:border-custom-green dark:bg-secondary dark:text-white dark:placeholder-gray-400 focus-visible:ring-blue-900',
                                )}
                                disabled={isLoading}
                                placeholder={placeholder}
                                type={
                                    type == 'password'
                                        ? showPassword
                                            ? 'text'
                                            : 'password'
                                        : type
                                }
                                {...field}
                            />

                            {type == 'password' &&
                                (showPassword ? (
                                    <EyeIcon
                                        className="cursor-pointer absolute right-3 top-1/2 h-5 w-5 text-gray-500 -translate-y-1/2"
                                        aria-hidden="true"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    />
                                ) : (
                                    <EyeOffIcon
                                        className="cursor-pointer absolute right-3 top-1/2 h-5 w-5 text-gray-500 -translate-y-1/2"
                                        aria-hidden="true"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    />
                                ))}
                        </div>
                    </FormControl>
                    <FormMessage />

                    {extra && <FormDescription>{extra}</FormDescription>}
                </FormItem>
            )}
        />
    );
};

export default BRTKInput;
