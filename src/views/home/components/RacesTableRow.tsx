import { Button, RaceCategory, TableRow } from '@components';
import React from 'react';
import { IoStatsChart } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();

    // Handlers
    const handleRedirect = () => {
        history.push(`/races/${ID}`);
    }

    return (
        <TableRow style={{ gridTemplateColumns: '120px 1fr 120px 40px' }}>
            <RaceCategory active={active} />
            <div>
                { title }
            </div>
            <div>
                { participantsCount }
            </div>
            <div>
                <Button onClick={handleRedirect} className="w-8 px-0">
                    <IoStatsChart />
                </Button>
            </div>
        </TableRow>
    );
}

export { RacesTableRow }
