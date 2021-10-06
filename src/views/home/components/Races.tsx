import React from 'react';
import { RacesTable } from './RacesTable';

const Races: React.FC = () => {
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
