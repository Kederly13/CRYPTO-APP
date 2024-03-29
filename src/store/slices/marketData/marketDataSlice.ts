import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { MarketDataApi } from 'api/MarketDataApi';
import { getErrorMessage } from 'utils/getErrorMessage';
import { IMarketDataProps } from './type';

type MarketDataState = {
    marketData: IMarketDataProps | null;
    loading: boolean,
    error: null
};

export const fetchMarketData = createAsyncThunk<IMarketDataProps, AbortController, {rejectValue: string}>(
   'marketData/fetchMarketData',
   async (controller, { rejectWithValue }) => {
        try {
            const { data } = await MarketDataApi.getMarketData(controller);
            const innerData = data.data;
            
            return innerData;

        } catch(error) {
            return rejectWithValue(getErrorMessage(error));
        }
   }
);

const initialState: MarketDataState = {
    marketData: null,
    loading: false,
    error: null
};

const marketDataSlice = createSlice({
    name: 'marketData',
    initialState,
    selectors: {
        selectMarketData: state => state.marketData,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMarketData.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMarketData.fulfilled, (state, action) => {
            state.marketData = action.payload;
            state.loading = false;
        })
    }
});

export default marketDataSlice.reducer;
export const { selectMarketData } = marketDataSlice.selectors;