import React from 'react';
import { Label } from '../label/Label';

export interface IInputBaseProps {
    label: string;
    name: string;
    required?: boolean;
    className?: string;
}

const InputBase: React.FC<IInputBaseProps> = ({
    label,
    name,
    required,
    className,
    children
}) => {
    return (
        <div className={className}>
            <Label
                label={label}
                htmlFor={name}
                required={required}
            />

            <div className="relative">
                 { children }
            </div>
        </div>
    );
}

export { InputBase }
