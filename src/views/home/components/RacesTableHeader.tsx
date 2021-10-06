import { TableHeader } from '@components';
import React from 'react';

const RacesTableHeader: React.FC = () => {
    return (
        <TableHeader style={{ gridTemplateColumns: '120px 1fr 120px 40px' }}>
            <div>
                Category
            </div>
            <div>
                Title
            </div>
            <div>
                Participants
            </div>
            <div />
        </TableHeader>
    );
}

export { RacesTableHeader }