import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ChartApi } from 'api/ChartApi';

import { getConvertedDates } from 'utils/getConvertedDates';

export type TCoinData = Array<Array<number>>

interface ICoinObjHistory {
    prices: TCoinData,
    market_caps: TCoinData,
    total_volumes: TCoinData
};

type TCoinHistory = Record<string, ICoinObjHistory>;

type TCoinsHistoryState = {
    coinsHistory: Array<TCoinHistory>
    loading: boolean,
    error: null,
};

const fetchCoinData = createAsyncThunk<TCoinData, string, {rejectValue: string}>(
    'coinData/fetchCoinData',
    async function(id, { rejectWithValue, dispatch }) {
        const response = await ChartApi.getPrices(id)

        if (!response.data) {
            return rejectWithValue('server error')
        }

        const coinPrices = getConvertedDates(response.data.prices);
        const coinVolume = getConvertedDates(response.data.total_volumes);

        dispatch(coinPrices(coinPrices))
        return { coinPrices, coinVolume }
    }

)

const initialState: TCoinsHistoryState = {
    coinsHistory: [],
    loading: false,
    error: null
};

const coinDataSlice = createSlice({
    name: 'coinData',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoinData.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoinData.fulfilled, (state, action) => {
                state.coinPrices = action.payload;
                state.loading = false;
            })
            .addCase(fetchCoinData.fulfilled, (state, action) => {
                state.coinVolume = action.payload;
                state.loading = false;
            })
    }

})