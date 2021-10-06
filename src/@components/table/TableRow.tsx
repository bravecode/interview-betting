import classNames from 'classnames';
import React from 'react';

export interface ITableRowProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const TableRow: React.FC<ITableRowProps> = ({
    className,
    children,
    ...props
}) => {
    const _containerStyles = classNames({
        'h-12 grid items-center px-5 border-b text-sm border-gray-200 last:border-0': true,
        [className as string]: className,
    });

    return (
        <div {...props} className={_containerStyles}>
            { children }
        </div>
    );
}

export { TableRow }
