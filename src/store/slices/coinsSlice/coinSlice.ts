import { createSlice, createAsyncThunk, buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { CoinsApi, ICoinsAPIGetCoinsParams } from 'api/CoinsApi';
import { ICoin } from 'types/coinType';
import { getErrorMessage } from 'utils/getErrorMessage';

type CoinsState = {
    coinList: ICoin[];
    lastCoins: ICoin[];
    loading: boolean,
    error: null
};

export const fetchCoins = createAsyncThunk<ICoin[], ICoinsAPIGetCoinsParams, {rejectValue: string}>(
    'coins/fetchCoins',
    async (params, { rejectWithValue }) => {
        try {
            const param = {
                payload: { 
                    currency: params.payload.currency,
                    page: params.payload.page                
                },
                controller: params.controller
            }

            const { data } = await CoinsApi.getCoins(param);
            
            return data;
        } catch(error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

const initialState: CoinsState = {
    coinList: [],
    lastCoins: [],
    loading: false,
    error: null
};

const coinSlice = createSlice({
    name: 'coins',
    initialState,
    selectors: {
        selectLastCoinList: state => state.lastCoins,
        selectCoinList: state => state.coinList,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoins.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoins.fulfilled, (state, action) => {
                if (!state.lastCoins.length) {
                    state.lastCoins = action.payload;
                }
                state.coinList = [...state.coinList, ...action.payload];
                state.loading = false;
            })
            
    }
});

export default coinSlice.reducer;
export const { selectCoinList, selectLastCoinList } = coinSlice.selectors;