import { getRacesRequest } from '@store/ducks/races/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RacesTable } from './RacesTable';

const Races: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRacesRequest());
    }, [dispatch]);

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
