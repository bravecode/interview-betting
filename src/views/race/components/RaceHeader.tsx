import { RaceCategory } from '@components';
import React from 'react';

export interface IRaceHeaderProps {
    active: boolean;
    title: string;
}

const RaceHeader: React.FC<IRaceHeaderProps> = ({
    active,
    title
}) => {
    return (
        <header className="mb-5">
            <h1 className="text-lg font-semibold mt-2.5">
                { title }
            </h1>
            <RaceCategory active={active} />
        </header>
    );
}

export { RaceHeader }
