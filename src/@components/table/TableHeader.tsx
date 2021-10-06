import classNames from 'classnames';
import React from 'react';

export interface ITableHeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const TableHeader: React.FC<ITableHeaderProps> = ({
    className,
    children,
    ...props
}) => {
    const _containerStyles = classNames({
        'h-10 px-5 grid items-center bg-gray-100 border-t border-b border-gray-200 text-gray-400 text-sm font-semibold': true,
        [className as string]: className,
    });

    return (
        <div {...props} className={_containerStyles}>
            { children }
        </div>
    );
}

export { TableHeader }
