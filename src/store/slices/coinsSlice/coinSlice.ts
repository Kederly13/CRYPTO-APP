import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CoinsApi } from 'api/CoinsApi';
import { ICoin } from 'types/coinType';
import { getErrorMessage } from 'utils/getErrorMessage';
import { CoinsState } from './type';
import { getLocationSearchParams } from 'utils/getLocationSearchParams';
import { RootState } from 'store';

export const fetchCoins = createAsyncThunk<ICoin[], AbortController, {rejectValue: string}>(
    'coins/fetchCoins',
    async (controller, { rejectWithValue, getState }) => {
        const state = getState() as RootState;
        const { currency } = getLocationSearchParams();

        try {
            const param = {
                payload: { 
                    currency: currency || 'usd',
                    page: state.coins.page                
                },
                controller
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
    page: 1,
    loading: false,
    error: null
};

const coinSlice = createSlice({
    name: 'coins',
    initialState,
    selectors: {
        selectLastCoinList: state => state.lastCoins,
        selectCoinList: state => state.coinList,
        selectLoading: state => state.loading,
        selectPage: state => state.page
    },
    reducers: {
        onSetPage(state, { payload }) {
            state.page = payload;
        },
        setNulifyCoins(state) {
            state.coinList = [];
            state.lastCoins = [];
            state.page = 1;
        }
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
export const { onSetPage, setNulifyCoins } = coinSlice.actions;
export const { selectCoinList, selectLastCoinList, selectLoading, selectPage } = coinSlice.selectors;