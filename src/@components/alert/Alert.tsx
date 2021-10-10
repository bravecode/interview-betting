import classNames from 'classnames';
import React from 'react';
import { IoAlert } from 'react-icons/io5';

export interface IAlertProps {
    className?: string;
}

const Alert: React.FC<IAlertProps> = ({
    className,
    children
}) => {
    const _containerStyles = classNames({
        'mb-5 w-full border border-indigo-500 rounded-md flex': true,
        [className as string]: className
    });

    return (
        <div className={_containerStyles}>
            <div className="bg-indigo-500 w-10 flex items-center justify-center flex-shrink-0">
                <IoAlert className="text-white" />
            </div>
            <div className="py-2.5 px-5 text-sm">
                { children }
            </div>
        </div>
    );
}

export { Alert }
