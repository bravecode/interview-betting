import React, { useState } from 'react';
import { RacesCategories } from './RacesCategories';
import { IRacesItemProps, RacesItem } from './RacesItem';
import { RacesTable } from './RacesTable';

export type TRacesView = 'all' | 'active' | 'inactive';

const data: IRacesItemProps[] = [
    {
        ID: 0,
        active: true,
        participantsCount: 10,
        title: 'Race #0',
    },
    {
        ID: 1,
        active: false,
        participantsCount: 10,
        title: 'Race #1',
    },
    {
        ID: 2,
        active: true,
        participantsCount: 10,
        title: 'Race #2',
    },
    {
        ID: 3,
        active: false,
        participantsCount: 10,
        title: 'Race #3',
    }
]

const Races: React.FC = () => {
    const [view, setView] = useState<TRacesView>('all');

    // Handlers
    const onViewChange = (value: TRacesView) => {
        setView(value);
    }

    // Helpers
    const renderRaces = () => {
        return data
            .filter((item) => {
                if (view === 'active') {
                    return item.active;
                }

                if (view === 'inactive') {
                    return !item.active;
                }

                return true;
            })
            .map((item) =>
                <RacesItem {...item} key={item.ID} />
            )
    }

    return (
        <section className="w-full py-10">
            
            <header className="mb-5">
                <h2 className="text-lg font-semibold">
                    Races
                </h2>
            </header>

            <RacesTable />
            
        </section>
    );
}

export { Races }
