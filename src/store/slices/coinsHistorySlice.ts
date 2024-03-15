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

export const fetchCoinHistory = createAsyncThunk<ICoinObjHistory, { id: string, days: string, controller: AbortController }, {rejectValue: string}>(
    'coinsHistory/fetchCoinHistory',
    async ({id, days, controller}, { rejectWithValue }) => {
        try {
            const { data } = await ChartApi.getPrices(id, days, controller); 
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
            // console.log(state.coinsHistory)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoinHistory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoinHistory.fulfilled, (state, action) => {
                const { id } = action.meta.arg;
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