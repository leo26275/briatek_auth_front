import { SendHorizontal } from 'lucide-react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// components
import { Input } from '../ui/input';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
// schemas
import { promptFormSchema } from '@/data/schemas';
// types
import type { PromptFormProps } from '@/data/types';
// utils
import { cn } from '@/lib/utils';

const BRTKPromptInput = ({ onSubmit, isLoading }: PromptFormProps) => {
    const form = useForm<z.infer<typeof promptFormSchema>>({
        resolver: zodResolver(promptFormSchema),
        defaultValues: {
            prompt: '',
        },
    });

    const onSubmitForm = (values: z.infer<typeof promptFormSchema>) => {
        const prompt: string = values.prompt;

        if (values.prompt.trim() === '') return;

        form.setValue('prompt', '');
        onSubmit(prompt);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)} autoComplete="off">
                <div className="relative flex items-center">
                    <FormField
                        control={form.control}
                        name="prompt"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        placeholder="Escriba su solicitud..."
                                        className="w-full !h-auto !pl-6 !pr-14 !py-4 !shadow-none rounded-xl transition-colors duration-300 bg-white text-primary dark:bg-secondary dark:text-white placeholder-gray-500 border border-primary focus:border-custom-green dark:border-border focus-visible:ring-blue-800/75 dark:focus-visible:ring-blue-900 focus-visible:ring-2 selection:bg-blue-700 selection:text-white"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <SendHorizontal
                        className={cn(
                            `${isLoading ? 'pointer-events-none' : ''}`,
                            'w-8 h-8 absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-custom-green dark:hover:text-custom-green-300 transition cursor-pointer',
                        )}
                        onClick={form.handleSubmit(onSubmitForm)}
                    />
                </div>
            </form>
        </Form>
    );
};

export default BRTKPromptInput;
