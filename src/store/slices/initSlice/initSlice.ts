import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { toast } from 'react-toastify';

import { getErrorMessage } from 'utils/getErrorMessage';
import { fetchCoinHistory, fetchCoins, fetchMarketData } from '../coinsSlice/coinsSlice';
import { IInitializationSliceState } from './types';

export const fetchInit = createAsyncThunk<undefined, AbortController, {rejectValue: string}>(
    'init/fetchInit',
    async(controller, { rejectWithValue, getState, dispatch }) => {
        const state = getState() as RootState;

        const coinsList = state.coins.coinList.data;
        const coinsHistory = state.coins.coinsHistory.data;
        const marketData = state.coins.marketData.data;

        try {
            const data = [];

            if(!marketData) {
                const marketData = await dispatch(fetchMarketData(controller));

                data.push(marketData);
            }

            if(!coinsList.length) {
                const dataCoinsList = await dispatch(fetchCoins(controller));

                data.push(dataCoinsList);
            }

            if(!Object.values(coinsHistory).length) {
                const dataCoinsHistory = await dispatch(fetchCoinHistory(controller))

                data.push(dataCoinsHistory)
            }

            await Promise.all(data);
            toast.success('Page data loaded successfully');
        } catch(error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

const initialState: IInitializationSliceState = {
    init: false,
    loading: false,
    error: null
};

const initSlice = createSlice({
    name: 'init',
    initialState,
    selectors: {
        selectInitLoading: state => state.loading,
        selectInit: state => state.init,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInit.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchInit.fulfilled, (state) => {
                state.loading = false;
                state.init = true
            })
            .addCase(fetchInit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
        }
    });

export default initSlice.reducer;
export const { selectInitLoading, selectInit } = initSlice.selectors;