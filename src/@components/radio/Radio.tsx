import React from 'react';

export interface IRadioProps {
    name: string;
    value: string;
    selectedValue?: string;
    onValueChange: (name: string, value: string) => void;
}

const Radio: React.FC<IRadioProps> = ({
    name,
    value,
    selectedValue,
    onValueChange
}) => {
    const checked = selectedValue === value;

    // Handlers
    const handleChange = () => {
        onValueChange(name, value);
    }

    return (
        <input type="radio" name={name} value={value} checked={checked} onChange={handleChange} /> 
    );
}

export { Radio }