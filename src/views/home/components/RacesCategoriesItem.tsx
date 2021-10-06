import classNames from 'classnames';
import React from 'react';
import { TRacesView } from './RacesTable';

export interface IRacesCategoriesItemProps {
    value: TRacesView;
    label: string;
    active: boolean;
    onCategorySelect: (value: TRacesView) => void;
}

const RacesCategoriesItem: React.FC<IRacesCategoriesItemProps> = ({
    value,
    label,
    active,
    onCategorySelect
}) => {
    const _containerStyles = classNames({
        'h-full text-regular font-semibold px-5 flex items-center': true,
        'text-gray-400 hover:text-black': !active,
        'text-indigo-500': active
    });

    // Handlers
    const handleClick = () => {
        onCategorySelect(value)
    }

    return (
        <button onClick={handleClick} className={_containerStyles}>
            <div className="text-indigo-500"></div>
            { label }
        </button>
    );
}

export { RacesCategoriesItem }
