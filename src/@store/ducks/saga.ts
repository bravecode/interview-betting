import { all, fork } from "redux-saga/effects";

// Duck Sagas
import racesSaga from './races/saga';

export default function* rootSaga() {
    yield all([
        fork(racesSaga),
    ]);
}