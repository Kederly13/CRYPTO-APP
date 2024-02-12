import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ChartApi } from 'api/ChartApi';

import { getErrorMessage } from 'utils/getErrorMessage';
import { getConvertedDates } from 'utils/getConvertedDates';

export type TCoinData = Array<Array<number>>

interface ICoinObjHistory {
    prices: TCoinData,
    market_caps: TCoinData,
    total_volumes: TCoinData,
};

type TCoinHistory = Record<string, ICoinObjHistory>;

type TCoinsHistoryState = {
    coinsHistory: TCoinHistory | null,
    loading: boolean,
    error: null | string,
};

export const fetchCoinData = createAsyncThunk<ICoinObjHistory, string, {rejectValue: string}>(
    'coinData/fetchCoinData',
    async (id: string, { rejectWithValue }) => {
        try {
            const { data } = await ChartApi.getPrices(id);
            return data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error))
        }
    }  
);

const initialState: TCoinsHistoryState = {
    coinsHistory: null,
    loading: false,
    error: null
};

const coinHistorySlice = createSlice({
    name: 'coinHistorySlice',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoinData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoinData.fulfilled, (state, action) => {
                const coinId = action.meta.arg;

                if (!state.coinsHistory) {
                    state.coinsHistory = {};
                };

                state.coinsHistory[coinId] = {
                    prices: action.payload.prices,
                    market_caps: action.payload.market_caps,
                    total_volumes: action.payload.total_volumes,
                };
                console.log('Coins History after fulfillment:', state.coinsHistory);
                state.loading = false;
            })
            .addCase(fetchCoinData.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
    }

})

export default coinHistorySlice.reducer;