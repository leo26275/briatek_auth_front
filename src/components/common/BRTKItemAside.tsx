import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
// components
import { Button } from '../ui/button';
// types
import type { BRTKItemAsideProps } from '@/data/types';
import { cn } from '@/lib/utils';

const BRTKItemAside = ({ item, onClick, className }: BRTKItemAsideProps) => {
    return (
        <Button
            className={cn(
                `${className ?? ''}`,
                'flex items-center justify-start gap-3 text-sm text-primary hover:text-custom-green focus:text-custom-green dark:text-white dark:focus:text-custom-green bg-transparent hover:bg-transparent rounded-none !px-8 !py-6 font-bold shadow-none',
            )}
            onClick={() => onClick && onClick(item.url)}
        >
            <DynamicIcon name={item.icon as IconName} />
            <span className="capitalize">{item.description}</span>
        </Button>
    );
};

export default BRTKItemAside;
