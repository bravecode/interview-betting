import React from 'react';

export interface IRacesItemProps {
    ID: number;
    title: string;
    active: boolean;
    participantsCount: number;
}

const RacesItem: React.FC<IRacesItemProps> = ({
    ID,
    title,
    active,
    participantsCount
}) => {
    return (
        <div className="h-16 w-full flex items-center gap-2.5">
            <div>
                { active ? 'Active' : 'Inactive' }
            </div>
            <div>
                { title }
            </div>
            <div>
                { participantsCount }
            </div>
        </div>
    );
}

export { RacesItem }
