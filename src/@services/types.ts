// This file is hardcoded although in the real world application it would be probably created by Swagger
// or something smilliar.

export interface TRace {
    id: number;
    name: string;
    active: boolean;
    participants: number[];
}

export type TRaces = TRace[];