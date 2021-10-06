import { Button } from '@components';
import React from 'react';
import { IoStatsChart } from 'react-icons/io5';

export interface IRacesTableRowProps {
    ID: number;
    active: boolean;
    title: string;
    participantsCount: number;
}

const RacesTableRow: React.FC<IRacesTableRowProps> = ({
    ID,
    active,
    title,
    participantsCount
}) => {
    // Helpers
    const renderCategory = () => {
        if (active) {
            return (
                <div className="flex gap-2.5 items-center text-indigo-500 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    Active
                </div>
            );
        }

        return (
            <div className="flex gap-2.5 items-center text-gray-400 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                Inactive
            </div>
        );
    }

    return (
        <div className="h-12 grid items-center px-5 border-b text-sm border-gray-200 last:border-0" style={{ gridTemplateColumns: '120px 1fr 120px 40px' }}>
            { renderCategory() }
            <div>
                { title }
            </div>
            <div>
                { participantsCount }
            </div>
            <div>
                <Button>
                    <IoStatsChart />
                </Button>
            </div>
        </div>
    );
}

export { RacesTableRow }
