import { createAction } from "@reduxjs/toolkit";
import { IRace } from "./reducer";

// Action - Get Races
export const getRacesRequest = createAction('races:getRaces:request');
export const getRacesSuccess = createAction<IRace[]>('races:getRaces:success');
export const getRacesError = createAction<string>('races:getRaces:error');