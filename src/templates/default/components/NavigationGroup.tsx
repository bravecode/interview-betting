import React from 'react';

export interface INavigationGroupProps {
    title: string;
}

const NavigationGroup: React.FC<INavigationGroupProps> = ({
    title,
    children
}) => {
    return (
        <div>
            <h4 className="h-10 w-full flex items-center px-5 text-sm font-semibold">
                { title }
            </h4>
            <div>
                { children }
            </div>
        </div>
    );
}

export { NavigationGroup }
