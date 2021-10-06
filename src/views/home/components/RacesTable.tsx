import { Table } from '@components';
import { IStore } from '@store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RacesCategories } from './RacesCategories';
import { RacesTableHeader } from './RacesTableHeader';
import { RacesTableRow } from './RacesTableRow';

export type TRacesView = 'all' | 'active' | 'inactive';

const RacesTable: React.FC = () => {
    const [view, setView] = useState<TRacesView>('all');
    const { races } = useSelector((store: IStore) => store.races);
    
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

    return (
        <Table style={{ width: '800px' }}>

            <RacesCategories
                view={view}
                onCategorySelect={handleViewChange}
            />
               
            <RacesTableHeader />

            {
                getRaces().map((race) =>
                    <RacesTableRow
                        key={race.ID}
                        ID={race.ID}
                        active={race.active}
                        title={race.title}
                        participantsCount={race.participants.length}
                    />
                )
            }

        </Table>
    );
}

export { RacesTable }
