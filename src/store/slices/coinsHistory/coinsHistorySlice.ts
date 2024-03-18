import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ChartApi } from 'api/ChartApi';
import { getErrorMessage } from 'utils/getErrorMessage';

import { ICoinObjHistory, IFetchCoinsHistoryParams, TCoinsHistoryState  } from './type';

export const fetchCoinHistory = createAsyncThunk<ICoinObjHistory, IFetchCoinsHistoryParams, {rejectValue: string}>(
    'coinsHistory/fetchCoinHistory',
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await ChartApi.getPrices(params); 
            return data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error))
        }
    }   
);

const initialState: TCoinsHistoryState = {
    coinsHistory: {},
    loading: false,
    error: null
};

const coinHistorySlice = createSlice({
    name: 'coinsHistory',
    initialState,
    reducers: {
        removeCoin(state, action) {
            for (const coinId in state.coinsHistory) {
                if (coinId === action.payload.id && Object.values(state.coinsHistory).length > 1) {
                    delete state.coinsHistory[action.payload.id]
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoinHistory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoinHistory.fulfilled, (state, action) => {
                const { payload: { id } } = action.meta.arg;
                state.coinsHistory[id] = action.payload;
                state.loading = false;
   
            })
            .addCase(fetchCoinHistory.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
    }

})

export const { removeCoin } = coinHistorySlice.actions;

export default coinHistorySlice.reducer;