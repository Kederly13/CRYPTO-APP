import { RootState } from 'store';

import { createSlice, createAsyncThunk, PayloadAction, asyncThunkCreator } from '@reduxjs/toolkit';
import { ChartApi } from 'api/ChartApi';
import { CoinsApi } from 'api/CoinsApi';
import { MarketDataApi } from 'api/MarketDataApi';
import { ICoin } from 'types/coinType';
import { getErrorMessage } from 'utils/getErrorMessage';

import { ICoinObjHistory, TCoinsState, IMarketDataProps } from './types';
import { getLocationSearchParams } from 'utils/getLocationSearchParams';

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

const initialState: TCoinsState = {
    coinsHistory: {},
    coinList: [],
    lastCoins: [],
    marketData: null,
    page: 1,
    loading: false,
    error: null
};

const coins = createSlice({
    name: 'coins',
    initialState,

    selectors: {
        selectCoinsHistory: state => state.coinsHistory,
        selectLastCoinList: state => state.lastCoins,
        selectCoinList: state => state.coinList,
        selectLoading: state => state.loading,
        selectPage: state => state.page,
        selectMarketData: state => state.marketData,
    },

    reducers: (create) => ({
        onSetNulifyCoinsHistory: create.reducer((state) => {
            state.coinsHistory = {}
        }),

        removeCoin: create.reducer((state, action: PayloadAction<RemoveCoinPayload>) => {
            for (const coinId in state.coinsHistory) {
                if (coinId === action.payload.id && Object.values(state.coinsHistory).length > 1) {
                    delete state.coinsHistory[action.payload.id]
                }
            }
        }),

        onSetPage: create.reducer((state, action: PayloadAction<number>) => {
            state.page = action.payload;
        }),

        setNulifyCoins: create.reducer((state) => {
            state.coinList = [];
            state.lastCoins = [];
            state.page = 1;
        }),

        fetchCoins: create.asyncThunk(async (controller, { rejectWithValue, getState }) => {
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
        }, {
            pending: (state) => {
                state.loading = false;
                state.error = null
            },
            fulfilled: (state, action) => {
                if (!state.lastCoins.length) {
                    state.lastCoins = action.payload;
                }
                if (!state.coinList?.length) {
                    state.coinList = action.payload;
                } else {
                    state.coinList = [...state.coinList, ...action.payload];
                }
                state.loading = false;
            },
            rejected: (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            }
        })
    }),

    extraReducers: (builder) => {
        builder
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
            .addCase(fetchCoins.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoins.fulfilled, (state, action) => {
                if (!state.lastCoins.length) {
                    state.lastCoins = action.payload;
                }
                if (!state.coinList?.length) {
                    state.coinList = action.payload;
                } else {
                    state.coinList = [...state.coinList, ...action.payload];
                }
                state.loading = false;
            })
            .addCase(fetchMarketData.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMarketData.fulfilled, (state, action) => {
                state.marketData = action.payload;
                state.loading = false;
            })
    }
})

export const { removeCoin, onSetNulifyCoinsHistory, onSetPage, setNulifyCoins } = coins.actions;
export const { selectCoinsHistory, selectCoinList, selectLastCoinList, selectLoading, selectPage, selectMarketData } = coins.selectors;

export default coins.reducer; 