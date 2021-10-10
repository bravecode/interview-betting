import React from 'react';
import { NavigationGroup } from './NavigationGroup';
import { NavigationItem } from './NavigationItem';
import { IoHome, IoNewspaper, IoFlag } from 'react-icons/io5';

const Navigation: React.FC = () => {
    return (
        <div className="h-screen w-56 flex-shrink-0 border-r border-gray-200">
            
            <NavigationGroup title="Navigation">
                <NavigationItem
                    label="Home"
                    path="/"
                    icon={<IoHome />}
                />

                <NavigationItem
                    label="News"
                    path="/news"
                    icon={<IoNewspaper />}
                />
            </NavigationGroup>

            <NavigationGroup title="Sports">
                <NavigationItem
                    label="Racing"
                    path="/racing"
                    icon={<IoFlag />}
                />
            </NavigationGroup>

        </div>
    );
}

export { Navigation }