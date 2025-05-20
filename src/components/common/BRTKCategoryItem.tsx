import { DynamicIcon } from 'lucide-react/dynamic';
// types
import type { BRTKCategoryItemProps } from '@/data/types';
// components
import BRTKButtonIcon from './BRTKButtonIcon';

const BRTKCategoryItem = ({ icon, title, description }: BRTKCategoryItemProps) => {
    return (
        <div className="relative flex flex-col justify-between shadow-md rounded-2xl p-5 h-[260px] w-full sm:w-[260px] md:w-[240px] bg-white dark:bg-secondary">
            {/* card header */}
            <div className="flex flex-col gap-4">
                <DynamicIcon
                    name={icon}
                    className="text-2xl text-primary dark:text-gray-400"
                />

                {/* card header content */}
                <div className="flex flex-col">
                    {/* title */}
                    <h3 className="text-lg font-semibold">{title}</h3>

                    {/* description */}
                    <p className="text-primary dark:text-gray-400 text-sm">
                        {description}
                    </p>
                </div>
            </div>

            {/* footer */}
            <BRTKButtonIcon icon="plus" />
        </div>
    );
};

export default BRTKCategoryItem;
