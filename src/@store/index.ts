import { configureStore } from '@reduxjs/toolkit';

// Reducers
import races from './ducks/races/reducer';

// Redux Saga
import saga from './ducks/saga';
import sagaMiddleware from './middlewares/saga';

const store = configureStore({
    reducer: {
        races,
    },
    middleware: [
        sagaMiddleware,
    ],
});

sagaMiddleware.run(saga)

export type IStore = ReturnType<typeof store.getState>

export default store;
