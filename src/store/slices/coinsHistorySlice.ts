import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ChartApi } from 'api/ChartApi';
import { RootState } from 'store';
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
    coinsHistory: TCoinHistory,
    loading: boolean,
    error: null | string,
};

export const fetchCoinHistory = createAsyncThunk<ICoinObjHistory, string, {rejectValue: string}>(
    'coinData/fetchCoinHistory',
    async (id: string, { rejectWithValue }) => {
        try {
            const { data } = await ChartApi.getPrices(id);
            return data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }     
);

const initialState: TCoinsHistoryState = {
    coinsHistory: {},
    loading: false,
    error: null
};

const coinHistorySlice = createSlice({
    name: 'coinHistorySlice',
    initialState,
    reducers: {
        removeCoin (state, action) {
            for (const coin in state.coinsHistory) {
                if (coin === action.payload.id && Object.values(state.coinsHistory).length > 1) {
                    delete state.coinsHistory[action.payload.id];
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
                const coinId = action.meta.arg;
                state.coinsHistory[coinId] = action.payload;
                state.loading = false;
            })
            .addCase(fetchCoinHistory.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
    }

})

export default coinHistorySlice.reducer;