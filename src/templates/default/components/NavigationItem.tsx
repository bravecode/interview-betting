import React from 'react';
import { NavLink } from 'react-router-dom';

export interface INavigationItemProps {
    label: string;
    path: string;
    icon: React.ReactNode;
}

const NavigationItem: React.FC<INavigationItemProps> = ({
    label,
    path,
    icon
}) => {
    return (
        <NavLink exact to={path} className="h-10 w-full flex items-center px-5 text-xs font-semibold gap-2.5 hover:bg-gray-200 border-l-4 border-white" activeClassName="border-indigo-500 bg-gray-200 rounded-sm opacity-100">
            { icon }
            <span>
                { label }
            </span>
        </NavLink>
    );
}

export { NavigationItem }
