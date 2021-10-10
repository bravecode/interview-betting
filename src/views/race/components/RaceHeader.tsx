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
        <header className="mt-5 mb-5">
            <RaceCategory active={active} />
            <h1 className="text-lg font-semibold">
                { title }
            </h1>
        </header>
    );
}

export { RaceHeader }
