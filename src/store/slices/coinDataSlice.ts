import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ChartApi } from 'api/ChartApi';

type TCoinData = Array<Array<number>>

type TCoinDataState = {
    coinPrices: TCoinData,
    coinVolume: TCoinData,
    loading: boolean,
    error: null,
};

const convertDates: (data: TCoinData) => TCoinData = (data) => {
    return data.map((item) => {
        return [new Date(item[0]).getDate(), item[1]]
    })
};

const fetchCoinData = createAsyncThunk<TCoinData, string, {rejectValue: string}>(
    'coinData/fetchCoinData',
    async function(id, { rejectWithValue, dispatch }) {
        const response = await ChartApi.getPrices(id)

        if (!response.data) {
            return rejectWithValue('server error')
        }

        const coinPrices = convertDates(response.data.prices);
        const coinVolume = convertDates(response.data.total_volumes);

        dispatch(coinPrices(coinPrices))
        return { coinPrices, coinVolume }
    }


)

const initialState: TCoinDataState = {
    coinPrices: [],
    coinVolume: [],
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