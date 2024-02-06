import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './Coinslice'
;
const store = configureStore({
    reducer: {
        coins: coinReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;