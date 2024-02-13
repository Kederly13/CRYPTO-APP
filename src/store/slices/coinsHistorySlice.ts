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

export const fetchMultipleCoinData = createAsyncThunk<ICoinObjHistory[], string[], {rejectValue: string}>(
    'coinData/fetchCoinData',
    async (ids: string[], { rejectWithValue }) => {
        try {
            const promises = ids.map(async (id) => {
                const { data } = await ChartApi.getPrices(id);
                return data;
            });
            return await Promise.all(promises);
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
            .addCase(fetchMultipleCoinData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMultipleCoinData.fulfilled, (state, action) => {
                if (!state.coinsHistory) {
                    state.coinsHistory = {};
                };       

                action.payload.forEach((data, index) => {
                    const coinId = action.meta.arg[index];
                    state.coinsHistory![coinId] = { ...data };
                });

                console.log('Coins History after fulfillment:', state.coinsHistory);
                state.loading = false;
            })
            .addCase(fetchMultipleCoinData.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
    }

})

export default coinHistorySlice.reducer;