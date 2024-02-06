import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CoinsApi } from 'api/CoinsApi';

export interface Coin {
    id: string;
    logo: string,
    name: string,
    symbol: string,
    current_price: number,
    market_cap_change_percentage_24h: number,
    condition?: boolean
};

type CoinsState = {
    coinList: Coin[];
    loading: boolean,
    error: null
};

export const fetchCoins = createAsyncThunk<Coin[], undefined, {rejectValue: string} >(
    'coins/fetchCoins',
    async function (_, { rejectWithValue }) {
        const response = await CoinsApi.getCoins();

        if (!response.data) {
            return rejectWithValue('server error')
        }

        const newCoins = response.data.map(({ id, logo, name, symbol, current_price, market_cap_change_percentage_24h }: any) => ({
            id,
            logo,
            name,
            symbol: symbol.toUpperCase(),
            current_price,
            market_cap_change_percentage_24h,
            }));
            return newCoins; 
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