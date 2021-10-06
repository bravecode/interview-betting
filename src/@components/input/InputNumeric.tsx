import classNames from 'classnames';
import React from 'react';
import { InputBase, IInputBaseProps } from './InputBase';

export interface IInputNumericProps extends IInputBaseProps {
    placeholder?: string;
    value?: number;
    onChange?: (name: string, value: string) => void;
}

const InputNumeric: React.FC<IInputNumericProps> = ({
    label,
    name,
    required,
    placeholder,
    value,
    className,
    onChange
}) => {
    const inputStyles = classNames({
        'h-10 w-full rounded-md bg-white px-2.5 shadow-sm sm:text-sm border border-gray-300 rounded-md': true,
    });

    // Handlers
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        // Allow only numeric characters & "."
        const re = /^\d*[.]?\d*$/;

        if (!re.test(e.currentTarget.value)) {
            return;
        }

        onChange && onChange(name, e.currentTarget.value);
    }

    return (
       <InputBase label={label} name={name} className={className} required={required}>
           <input
                className={inputStyles}
                required={required}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
       </InputBase>
    );
}

export { InputNumeric }