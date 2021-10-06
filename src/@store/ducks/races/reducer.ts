import { createReducer } from "@reduxjs/toolkit"
import { getRacesError, getRacesRequest, getRacesSuccess } from "./actions";

export interface IRacesState {
    races: IRace[];
    pending: boolean;
    error?: string;
}

export interface IRace {
    ID: number;
    title: string;
    active: boolean;
    participants: IPlayer[];
}

export interface IPlayer {
    ID: number;
    name: string;
}

const defaultState: IRacesState = {
    races: [],
    pending: false,
    error: undefined
}

export default createReducer(defaultState, (builder) => {
    builder
        .addCase(getRacesRequest, (state) => {
            state.pending = true;
        })
        .addCase(getRacesSuccess, (state, { payload }) => {
            state.races = payload;
            state.pending = false;
        })
        .addCase(getRacesError, (state, { payload }) => {
            state.error = payload;
            state.pending = false;
        })
        .addDefaultCase(() => {})
});