import React from 'react';
import { RacesTable } from './RacesTable';

const Races: React.FC = () => {
    return (
        <section className="w-full">
            
            <header className="my-5">
                <h2 className="text-lg font-semibold">
                    Races
                </h2>
            </header>

            <RacesTable />
            
        </section>
    );
}

export { Races }
