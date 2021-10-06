import { Radio, IRadioProps } from '@components';
import React from 'react';

export interface IRaceFormRadio extends IRadioProps {
    firstPlace?: string;
    secondPlace?: string;
    thirdPlace?: string;
}

const RaceFormRadio: React.FC<IRaceFormRadio> = ({
    firstPlace,
    secondPlace,
    thirdPlace,
    onValueChange,
    ...props
}) => {
    const handleValueChange = (name: string, value: string) => {
        if (name === 'first' && (secondPlace === value || thirdPlace === value)) {
            return;
        }

        if (name === 'second' && (firstPlace === value || thirdPlace === value)) {
            return;
        }

        if (name === 'third' && (secondPlace === value || firstPlace === value)) {
            return;
        }

        onValueChange(name, value);
    }

    return (
        <Radio {...props} onValueChange={handleValueChange} />
    );
}

export { RaceFormRadio }
