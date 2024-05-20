import { RootState } from 'store';

import { createAsyncThunk, PayloadAction, asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';
import { ChartApi } from 'api/ChartApi';
import { CoinsApi } from 'api/CoinsApi';
import { CoinSummaryApi } from 'api/CoinSummaryApi';
import { MarketDataApi } from 'api/MarketDataApi';
import { ICoin } from 'types/coinType';
import { getErrorMessage } from 'utils/getErrorMessage';

import { ICoinObjHistory, TCoinsState, IMarketDataProps, ICoinSummaryProps} from './types';
import { getLocationSearchParams } from 'utils/getLocationSearchParams';
import { useLocation } from 'react-router-dom';
import { Root } from 'react-dom/client';

export const fetchCoinHistory = createAsyncThunk<Record<string, ICoinObjHistory>, AbortController, {rejectValue: string}>(
    'coinsHistory/fetchCoinHistory',
    async (controller, { rejectWithValue }) => {
        try {
            const { currency, days, coin } = getLocationSearchParams();
            const ids = coin ? coin.split(',') : [];
            let data;

            if (ids?.length) {
                data = await Promise.all(

                    ids.map(async (id) => {
                        const paramsSingle = {
                            payload: { id, days, currency },
                            controller
                        }

                        const { data } = await ChartApi.getPrices(paramsSingle);

                        return {
                            [id]: data
                        } 
                    })
                )
            } else {
                const paramsSingle = {
                    payload: { id: 'bitcoin', days: '7', currency: 'usd' },
                    controller
                }

                const response = await ChartApi.getPrices(paramsSingle);

                data = [{
                    bitcoin: response.data
                }]
            }

            const dataObj = data.reduce((items, item) => {
                return {
                    ...items,
                    ...item
                }
            }, {})

            return dataObj;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error))

        }
    }   
);

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

export const fetchCoinSummary = createAsyncThunk<ICoinSummaryProps, { coin: string, controller: AbortController }, {rejectValue: string}>(
    'coins/fetchCoinSummary',
    async ({ coin, controller }, { rejectWithValue }) => {

        try {
            const { data } = await CoinSummaryApi.getCoinSummary(coin, controller);
            return data; 
        } catch(error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
)

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

 interface RemoveCoinPayload {
    id: string;
};

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator}
});

const initialState: TCoinsState = {
    coinsHistory: {},
    coinList: [],
    lastCoins: [],
    coinSummary: null,
    marketData: null,
    page: 1,
    loading: false,
    error: null
};

const coins = createSliceWithThunks({
    name: 'coins',
    initialState,
    selectors: {
        selectCoinsHistory: (state: TCoinsState) => state.coinsHistory,
        selectLastCoinList: (state: TCoinsState) => state.lastCoins,
        selectCoinList: (state: TCoinsState) => state.coinList,
        selectLoading: (state: TCoinsState) => state.loading,
        selectPage: (state: TCoinsState) => state.page,
        selectMarketData: (state: TCoinsState) => state.marketData,
        selectCoinSummary: (state: TCoinsState) => state.coinSummary
    },

    reducers: {
        onSetNulifyCoinsHistory: (state) => {
            state.coinsHistory = {};
        },
        removeCoin: (state, action: PayloadAction<RemoveCoinPayload>) => {
            for (const coinId in state.coinsHistory) {
                if (coinId === action.payload.id && Object.keys(state.coinsHistory).length > 1) {
                    delete state.coinsHistory[action.payload.id];
                }
            }
        },
        onSetPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setNulifyCoins: (state) => {
            state.coinList = [];
            state.lastCoins = [];
            state.page = 1;
        }
    },

    extraReducers: (builder) => {
        builder
            // fetchCoins
            .addCase(fetchCoins.pending, (state) => {
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

            // fetchCoinHistory
            .addCase(fetchCoinHistory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoinHistory.fulfilled, (state, action) => {
                state.loading = false;
                state.coinsHistory = action.payload;
            })
            .addCase(fetchCoinHistory.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })

            // fetchMarketData
            .addCase(fetchMarketData.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMarketData.fulfilled, (state, action) => {
                state.marketData = action.payload;
                state.loading = false;
            })

            // fetchCoinSummary
            .addCase(fetchCoinSummary.fulfilled, (state, action) => {
                state.coinSummary = action.payload;
                state.loading = false;
            })
            .addCase(fetchCoinSummary.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoinSummary.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
    }
})

export const { removeCoin, onSetNulifyCoinsHistory, onSetPage, setNulifyCoins } = coins.actions;
export const { selectCoinsHistory, selectCoinList, selectLastCoinList, selectLoading, selectPage, selectMarketData, selectCoinSummary } = coins.selectors;

export default coins.reducer; 