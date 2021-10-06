import React from 'react';

export interface ILabelProps {
    label: string;
    htmlFor: string;
    required?: boolean;
}

const Label: React.FC<ILabelProps> = ({
    label,
    htmlFor,
    required
}) => {
    return (
        <div className="w-full mb-2.5 text-sm font-medium text-gray-700">
            <label htmlFor={htmlFor}>
                { label }
            </label>

            {
                required && (
                    <span className="text-red-400 pl-0.5">
                        *
                    </span>
                )
            }
        </div>
    );
}

export { Label }