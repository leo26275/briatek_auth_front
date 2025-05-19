import { CreditCard } from 'lucide-react';
// components
import { Button } from '../ui/button';
// types
import type { BRTKItemHeaderProps } from '@/data/types';

const BRTKItemHeader = ({ item, onClick }: BRTKItemHeaderProps) => {
    return (
        <Button
            className="shadow-none flex items-center gap-2 text-primary hover:text-custom-green focus:text-primary dark:text-white dark:focus:text-white bg-transparent hover:bg-custom-green-100 focus:bg-custom-green-200 dark:bg-secondary dark:hover:bg-secondary dark:focus:bg-custom-green-200 rounded-full px-3 py-1.5"
            onClick={() => onClick && onClick(item.url)}
        >
            <CreditCard />
            <span className="capitalize">{item.description}</span>
        </Button>
    );
};

export default BRTKItemHeader;
