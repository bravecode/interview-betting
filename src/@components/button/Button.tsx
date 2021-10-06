import { SpinnerIcon } from '@assets/icons/spinner.icon';
import classNames from 'classnames';
import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    primary?: boolean;
    showSpinner?: boolean;
}

const Button: React.FC<IButtonProps> = ({
    primary,
    children,
    className,
    showSpinner,
    disabled,
    ...props
}) => {
    const _containerStyles = classNames({
        'h-8 flex items-center justify-center rounded-md text-sm font-semibold': true,
        'bg-gray-100 text-gray-500 hover:bg-indigo-500 hover:text-white': !primary,
        'bg-indigo-500 text-white hover:bg-indigo-600': primary,
        [className as string]: className
    });

    return (
        <button {...props} className={_containerStyles} disabled={showSpinner || disabled}>
            {
                showSpinner ? (
                    <div className="animate-spin h-5 w-5">
                        <SpinnerIcon />
                    </div>
                ) : children
            }
        </button>
    );
}

export { Button }
