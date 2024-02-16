import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CoinsApi } from 'api/CoinsApi';
import { ICoin } from 'types/coinType';
import { getErrorMessage } from 'utils/getErrorMessage';

type CoinsState = {
    coinList: ICoin[];
    loading: boolean,
    error: null
};

export const fetchCoins = createAsyncThunk<ICoin[], undefined, {rejectValue: string}>(
    'coins/fetchCoins',
    async function (_, { rejectWithValue }) {
        const response = await CoinsApi.getCoins();
        try {
            const { data } = await CoinsApi.getCoins();
            return data;
        } catch(error) {
            return rejectWithValue(getErrorMessage(error));
        }

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