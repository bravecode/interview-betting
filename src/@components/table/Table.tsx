import classNames from 'classnames';
import React from 'react';

export interface ITableProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Table: React.FC<ITableProps> = ({
    className,
    children,
    ...props
}) => {
    const _containerStyles = classNames({
        'rounded-lg border border-gray-200': true,
        [className as string]: className,
    });

    return (
        <div {...props} className={_containerStyles}>
            { children }
        </div>
    );
}

export { Table }
