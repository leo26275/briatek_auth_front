// components
import { Button } from '../ui/button';
// types
import type { BRTKButtonIconProps } from '@/data/types';
// utils
import { cn } from '@/lib/utils';
import { DynamicIcon } from 'lucide-react/dynamic';

const BRTKButtonIcon = ({ className, onClick, icon }: BRTKButtonIconProps) => {
    return (
        <div className="flex justify-end items-center">
            <Button
                className={cn(
                    `${className ?? ''}`,
                    'bg-custom-green-100 text-custom-green hover:bg-custom-green-100 cursor-pointer h-9 w-9 rounded-full',
                )}
                onClick={() => onClick && onClick()}
            >
                <DynamicIcon className="text-custom-green" name={icon} />
            </Button>
        </div>
    );
};

export default BRTKButtonIcon;
