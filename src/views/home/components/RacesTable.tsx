import { IStore } from '@store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RacesCategories } from './RacesCategories';
import { RacesTableHeader } from './RacesTableHeader';
import { RacesTableRow } from './RacesTableRow';

export type TRacesView = 'all' | 'active' | 'inactive';

const RacesTable: React.FC = () => {
    const [view, setView] = useState<TRacesView>('all');
    const { races, pending } = useSelector((store: IStore) => store.races);
    
    // Handlers
    const handleViewChange = (value: TRacesView) => {
        setView(value);
    }

    // Helpers
    const getRaces = () => {
        return races.filter((race) => {
            if (view === 'active') {
                return race.active;
            }

            if (view === 'inactive') {
                return !race.active;
            }

            return true;
        });
    }

    // TODO: Spinner Animation
    if (pending) {
        <div>Loading...</div>
    }

    return (
        <div className="rounded-lg border border-gray-200" style={{ width: '800px' }}>

            <RacesCategories
                view={view}
                onCategorySelect={handleViewChange}
            />
               
            <RacesTableHeader />

            {
                getRaces().map((race) =>
                    <RacesTableRow
                        ID={race.ID}
                        active={race.active}
                        title={race.title}
                        participantsCount={race.participants.length}
                    />
                )
            }

        </div>
    );
}

export { RacesTable }
