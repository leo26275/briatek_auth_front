import type React from 'react';
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
}) => {
    return (
        <Button
            className={cn(
                `${className ?? ''}`,
                'text-white bg-primary hover:bg-primary/80 dark:text-custom-green dark:bg-custom-green-100 dark:hover:bg-custom-green-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center',
            )}
            disabled={disabled}
            type={type}
            size={size}
            onClick={() => onClick && onClick}
        >
            {label && label}
        </Button>
    );
};

export default BRTKButton;
