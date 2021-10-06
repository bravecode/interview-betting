import { fetchPlayers } from "@services/races/player.service";
import { fetchRaces } from "@services/races/races.service";
import { TPlayers, TRaces } from "@services/types";
import { AxiosResponse } from "axios";
import { SagaIterator } from "redux-saga";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getRacesError, getRacesRequest, getRacesSuccess } from "./actions";
import { IPlayer, IRace } from "./reducer";

// Workers
function* handleGetRacesRequest(): SagaIterator {
    try {
        // Fetch Races
        const { data }: AxiosResponse<TRaces> = yield call(fetchRaces);

        // Fetch Participants
        const { data: players }: AxiosResponse<TPlayers> = yield call(fetchPlayers);

        // Format Data
        const races: IRace[] = data.map((race): IRace => {
            return {
                ID: race.id,
                active: race.active,
                title: race.name,
                participants: race.participants.map((participant): IPlayer => {
                    const result = players.find((player) => player.id === participant);

                    return {
                        ID: participant,
                        name: result?.body ?? 'N/A',
                    }
                }),
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
