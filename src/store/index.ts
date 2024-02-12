import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './slices/coinSlice';
import coinsHistoryReducer from './slices/coinsHistorySlice';

const store = configureStore({
    reducer: {
        coins: coinReducer,
        coinsHistory: coinsHistoryReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;