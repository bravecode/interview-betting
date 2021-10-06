import React from 'react';
import { RacesCategories } from './RacesCategories';
import { RacesTableHeader } from './RacesTableHeader';
import { RacesTableRow } from './RacesTableRow';

const RacesTable: React.FC = () => {
    return (
        <div className="rounded-lg border border-gray-200" style={{ width: '800px' }}>

            <RacesCategories
                view="all"
                onCategorySelect={() => {}}
            />
               
            <RacesTableHeader />

            <RacesTableRow
                ID={0}
                active
                title="Maluch Racing #0"
                participantsCount={10}
            />

            <RacesTableRow
                ID={0}
                active={false}
                title="Maluch Racing #0"
                participantsCount={10}
            />

            <RacesTableRow
                ID={0}
                active
                title="Maluch Racing #0"
                participantsCount={10}
            />

        </div>
    );
}

export { RacesTable }
