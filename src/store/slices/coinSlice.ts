import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CoinsApi } from 'api/CoinsApi';
import { ICoin } from 'types/coinType';

type CoinsState = {
    coinList: ICoin[];
    loading: boolean,
    error: null
};

export const fetchCoins = createAsyncThunk<ICoin[], undefined, {rejectValue: string}>(
    'coins/fetchCoins',
    async function (_, { rejectWithValue }) {
        const response = await CoinsApi.getCoins();

        if (!response.data) {
            return rejectWithValue('server error')
        }

        return response.data.map((coinData: any) => ({
            ...coinData,
        }))
    }
);

const initialState: CoinsState = {
    coinList: [],
    loading: false,
    error: null
};

const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoins.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoins.fulfilled, (state, action) => {
                state.coinList = action.payload;
                state.loading = false;
            })
    }
});

export default coinSlice.reducer;