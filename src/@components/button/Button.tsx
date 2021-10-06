import classNames from 'classnames';
import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({
    children,
    className,
    ...props
}) => {
    const _containerStyles = classNames({
        'h-8 w-8 flex items-center justify-center bg-gray-100 text-gray-500 hover:bg-indigo-500 hover:text-white rounded-sm': true,
        [className as string]: className
    });

    return (
        <button {...props} className={_containerStyles}>
            { children }
        </button>
    );
}

export { Button }
