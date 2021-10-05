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
        <NavLink exact to={path} className="h-10 w-full flex items-center px-5 text-xs font-semibold gap-2.5 opacity-70 hover:opacity-100" activeClassName="bg-blue-600 rounded-sm opacity-100">
            { icon }
            <span>
                { label }
            </span>
        </NavLink>
    );
}

export { NavigationItem }
