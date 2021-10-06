import React from 'react';

const RacesTableHeader: React.FC = () => {
    return (
        <div className="h-10 px-5 grid items-center bg-gray-100 border-t border-b border-gray-200 text-gray-400 text-sm font-semibold" style={{ gridTemplateColumns: '120px 1fr 120px 40px' }}>
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
        </div>
    );
}

export { RacesTableHeader }