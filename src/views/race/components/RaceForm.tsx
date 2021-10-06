import { InputNumeric, Button, useForm, Table, TableHeader, TableRow } from '@components';
import { IPlayer } from '@store/ducks/races/reducer';
import React, { useState } from 'react';
import { RaceFormRadio } from './RaceFormRadio';

export interface IRaceFormProps {
    participants: IPlayer[];
}

export interface IRaceFormValues {
    betValue: number;
    first?: string;
    second?: string;
    third?: string;
}

const RaceForm: React.FC<IRaceFormProps> = ({
    participants
}) => {
    const [showSpinner, setShowSpinner] = useState(false);

    // Form State
    const { data, onInputChange } = useForm<IRaceFormValues>({
        initialData: {
            betValue: 0,
            first: undefined,
            second: undefined,
            third: undefined
        }
    });

    // Handlers
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Verify Data
        if (!data.betValue || !data.first || !data.second || !data.first) {
            return;
        }

        setShowSpinner(true);   
    }

    return (
        <form onSubmit={handleSubmit} style={{ width: '800px '}}>
            <InputNumeric
                label="Bet Value"
                name="betValue"
                value={data.betValue}
                onChange={onInputChange}
            />

            <Table className="my-5">
                <TableHeader style={{ gridTemplateColumns: '1fr repeat(3, 120px)' }}>
                    <div>
                        Name
                    </div>
                    <div>
                        First Place
                    </div>
                    <div>
                        Second Place
                    </div>
                    <div>
                        Third Place
                    </div>
                </TableHeader>
                {
                    participants.map((participant) =>
                        <TableRow key={participant.ID} style={{ gridTemplateColumns: '1fr repeat(3, 120px)' }}>
                            <div>
                                { participant.name }
                            </div>
                            <div>
                                <RaceFormRadio
                                    name="first"
                                    value={participant.ID.toString()}
                                    selectedValue={data.first}
                                    onValueChange={onInputChange}
                                    firstPlace={data.first}
                                    secondPlace={data.second}
                                    thirdPlace={data.third}
                                />
                            </div>
                            <div>
                                <RaceFormRadio
                                    name="second"
                                    value={participant.ID.toString()}
                                    selectedValue={data.second}
                                    onValueChange={onInputChange}
                                    firstPlace={data.first}
                                    secondPlace={data.second}
                                    thirdPlace={data.third}
                                />
                            </div>
                            <div>
                                <RaceFormRadio
                                    name="third"
                                    value={participant.ID.toString()}
                                    selectedValue={data.third}
                                    onValueChange={onInputChange}
                                    firstPlace={data.first}
                                    secondPlace={data.second}
                                    thirdPlace={data.third}
                                />
                            </div>
                        </TableRow>
                    )
                }
            </Table>

            <Button primary className="h-10 px-5" type="submit" showSpinner={showSpinner}>
                Submit
            </Button>
        </form>
    );
}

export { RaceForm }
