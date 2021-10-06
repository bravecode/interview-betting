import { fetchRaces } from "@services/races/races.service";
import { TRaces } from "@services/types";
import { AxiosResponse } from "axios";
import { SagaIterator } from "redux-saga";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getRacesError, getRacesRequest, getRacesSuccess } from "./actions";
import { IRace } from "./reducer";

// Workers
function* handleGetRacesRequest(): SagaIterator {
    try {
        const { data }: AxiosResponse<TRaces> = yield call(fetchRaces);

        // Format Data
        const races: IRace[] = data.map((race): IRace => {
            return {
                ID: race.id,
                active: race.active,
                title: race.name,
                participants: race.participants
            }
        });
        
        yield put(getRacesSuccess(races));
    } catch (err) {
        yield put(getRacesError('Something went wrong.'))   ; 
    }
}

// Watchers
function* watchGetRacesRequest() {
    yield takeLatest(getRacesRequest, handleGetRacesRequest);
}

export default function* racesSaga() {
    yield all([
        fork(watchGetRacesRequest),
    ]);
}
