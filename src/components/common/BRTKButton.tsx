import type React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
// components
import { Button } from '../ui/button';
// data
import type { BRTKButtonProps } from '@/data/types';
// utils
import { cn } from '@/lib/utils';

const BRTKButton: React.FC<BRTKButtonProps> = ({
    size = 'lg',
    type = 'submit',
    disabled = false,
    label,
    className,
    onClick,
    loading = false,
    iconPosition = 'left',
    icon,
}) => {
    return (
        <Button
            className={cn(
                `${className ?? ''}`,
                `${loading ? 'pointer-events-none' : ''}`,
                'text-white bg-primary hover:bg-primary/80 dark:text-custom-green dark:bg-custom-green-100 dark:hover:bg-custom-green-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center',
            )}
            disabled={disabled}
            type={type}
            size={size}
            onClick={() => onClick && onClick}
        >
            <div className="flex gap-2 items-center justify-center">
                {iconPosition && iconPosition == 'left' && !loading && icon && (
                    <DynamicIcon
                        name={icon}
                        className="size-4 text-white dark:text-custom-green"
                    />
                )}

                {label && <span>{label}</span>}

                {iconPosition && iconPosition == 'right' && !loading && icon && (
                    <DynamicIcon
                        name={icon}
                        className="size-4 text-white dark:text-custom-green"
                    />
                )}

                {loading && (
                    <DynamicIcon
                        name="loader-circle"
                        className="animate-spin size-4 text-white dark:text-custom-green"
                    />
                )}
            </div>
        </Button>
    );
};

export default BRTKButton;
