// This file is hardcoded although in the real world application it would be probably created by Swagger
// or something smilliar.

export interface IRace {
    id: number;
    name: string;
    active: boolean;
    participants: number[];
}

export type TRaces = IRace[];

export interface IPlayer {
    id: number;
    body: string;
}

export type TPlayers = IPlayer[];