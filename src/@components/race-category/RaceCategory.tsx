import React from 'react';

export interface IRaceCategoryProps {
    active: boolean;
    className?: string;
}

const RaceCategory: React.FC<IRaceCategoryProps> = ({
    active
}) => {
    if (active) {
        return (
            <div className="flex gap-2.5 items-center text-indigo-500 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                <span>Active</span>
            </div>
        );
    }

    return (
        <div className="flex gap-2.5 items-center text-gray-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
            <span>Inactive</span>
        </div>
    );
}

export { RaceCategory }