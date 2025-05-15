import type { FieldValues } from 'react-hook-form';
// components
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
// data
import type { BRTKInputProps } from '@/data/types';

const BRTKInput = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    isLoading,
}: BRTKInputProps<T>) => {
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
                        <Input
                            className="bg-white text-primary border rounded-lg h-[40px] focus:border-custom-green dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-900"
                            disabled={isLoading}
                            placeholder={placeholder}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default BRTKInput;
