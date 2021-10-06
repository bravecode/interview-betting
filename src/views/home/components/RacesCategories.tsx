import React from 'react';
import { TRacesView } from './Races';
import { RacesCategoriesItem } from './RacesCategoriesItem';

export interface IRacesCategoriesProps {
    view: TRacesView;
    onCategorySelect: (value: TRacesView) => void;
}

const RacesCategories: React.FC<IRacesCategoriesProps> = ({
    view,
    onCategorySelect
}) => {
    return (
        <nav className="h-16 w-full flex">
            <RacesCategoriesItem
                label="All Races"
                value="all"
                active={view === 'all'}
                onCategorySelect={onCategorySelect}
            />
            
            <RacesCategoriesItem
                label="Active"
                value="active"
                active={view === 'active'}
                onCategorySelect={onCategorySelect}
            />

            <RacesCategoriesItem
                label="Inactive"
                value="inactive"
                active={view === 'inactive'}
                onCategorySelect={onCategorySelect}
            />
        </nav>
    );
}

export { RacesCategories }
